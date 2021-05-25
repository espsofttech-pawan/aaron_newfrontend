import React, { Component } from 'react';
import HeaderPage from '../Includes/Header'
import axios from 'axios';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import config from '../config/config';
const headers = {
    'Content-Type': 'application/json'
};

export default class Index extends Component {
  
    constructor(props) {
        super(props)
         this.state = ({
            getNftDataList : [],
            getCategoryList : [],
            getHomePageImages : [],
            searchValue : '',
            category : ''
        })
        this.checkFun = this.checkFun.bind(this);
    }

    componentDidMount() {
        this.getNftListAPI()
        this.getCategoryAPI()
        this.getHomePageImagesAPI()
    }

    checkFun(data){
        this.setState({
            getNftDataList: data
        })
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>  NFT List API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

    async getNftListAPI(category_id) {
        axios.post(`${config.apiUrl}/getNftList`, {'category_id' : category_id}, { headers }).then(response => {
            if (response.data.success === true) {
                this.setState({
                    getNftDataList: response.data.response
                })

                if(category_id){
                    this.setState({
                        category_id: category_id
                    })                    
                }else{
                    this.setState({
                        category_id: ''
                    })                      
                }

            }
            else if (response.data.success === false) {
                this.setState({
                    getNftDataList: []
                })
            }            
        })
        .catch(err => {
            this.setState({
                getNftDataList: []
            })
        })
    }  

    //>>>>>>>>>>>>>>>>>>>>>>>>  NFT List API End  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    //>>>>>>>>>>>>>>>>>>>>>>>>  Get Category List API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

    async getCategoryAPI() {
        axios.get(`${config.apiUrl}/getCategory`, { headers }).then(response => {
            if (response.data.success === true) {
                this.setState({
                    getCategoryList: response.data.response
                })
            }
            else if (response.data.success === false) {
                this.setState({
                    getCategoryList: []
                })
            }            
        })
        .catch(err => {
            this.setState({
                getCategoryList: []
            })
        })
    }  

    //>>>>>>>>>>>>>>>>>>>>>>>>  Get Category List API End  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    

    //>>>>>>>>>>>>>>>>>>>>>>>>  Get Home page images API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

    async getHomePageImagesAPI() {
        axios.get(`${config.apiUrl}/getHomePageImages`, { headers }).then(response => {
            if (response.data.success === true) {
                this.setState({
                    getHomePageImages: response.data.response
                })
            }
            else if (response.data.success === false) {
                this.setState({
                    getHomePageImages: []
                })
            }            
        })
        .catch(err => {
            this.setState({
                getHomePageImages: []
            })
        })
    }  

    //>>>>>>>>>>>>>>>>>>>>>>>>  Get Home page images API End  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>        

    render() {
        
        return (
            <>
            <HeaderPage  checkFunFornewdata={this.checkFun}/>
                <section className="banner_button"></section>
                <section className="product_section">
                    <div className="container">
                        <div className="cards mb-5">
                            <div className="row w-100">
                            {/* <div className="col-12 col-md-3">
                            </div> */}

                            {this.state.getHomePageImages.map(item =>(
                                <div className="col-12 col-md-3">
                                    <div className="card" style={{ backgroundImage:`url(${`${config.imageUrl}`+item.image})` }} >
                                        <div className="colour"></div>
                                        <div className="card-text">
                                            <h3>{item.title}</h3>
                                            <p className="homePageDesc">{item.description}</p>
                                        </div>
                                        <div className="colour-bottom"></div>
                                    </div>
                                </div>
                            )) }

                            {/* <div className="col-12 col-md-3">
                            </div> */}
                
                            </div>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                        <div className="col-12 col-md-2"></div>
                        {this.state.getCategoryList.length > 0?
                            this.state.getCategoryList.map(item => (
                                <div className="col-12 col-md-2 m-0" style={{boxShadow: "none!important"}}>
                                    <div className="sort-btn">
                                    <button onClick={evt => this.getNftListAPI(item.id)} className={this.state.category_id == item.id ? 'btn btn-primary btn-sort active' : 'btn btn-primary btn-sort'} >{item.name}</button>
                                    </div>
                                </div>
                            ))
                        : '' }
                    <div className="col-12 col-md-2"></div>
                    </div>
                    </div>
                    <div className="small-container">
                        <div className="row">

                            {this.state.getNftDataList.length > 0?
                                this.state.getNftDataList.map(item => (
                                    <div className="col-4">
                                        <div className="product_boxs">
                                        <Link to={`${config.baseUrl}details/`+item.id}>
                                            <img src={`${config.ipfsUrl}`+item.ipfsImage} alt="" className="product_img" />
                                            </Link>
                                            <h4>{item.immutable_artwork}</h4>
                                            <div className="row">
                                                <div className="col-12 col-md-6">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                                : 
                                    <div className="col-12">
                                        <div className="product_boxs">
                                            <h4>No NFT Found!!</h4>
                                            <div className="row">
                                                <div className="col-12 col-md-6">

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                }
                        </div>
                    </div>
                </section>      

            </>
            )
        }
    }