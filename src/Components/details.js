import React, { Component } from 'react';
import HeaderPage from '../Includes/Header'
import axios from 'axios';
import { Link } from 'react-router-dom'
import 'react-toastify/dist/ReactToastify.css';
import config from '../config/config';
const headers = {
    'Content-Type': 'application/json'
};
export default class Details extends Component {
  
    constructor(props) {
        super(props)
         this.state = ({
            getNftDetails : []
        })           

        const { match: { params } } = this.props;
        this.id = params.id
    }

    componentDidMount() {
        this.getNftDetailsAPI()
    }

    //>>>>>>>>>>>>>>>>>>>>>>>>  Get NFT Details API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
    async getNftDetailsAPI() {

        axios.post(`${config.apiUrl}/getNftDetails`, { 'id': this.id }, { headers }).then(response => {
            if (response.data.success === true) {
                this.setState({
                    getNftDetails: response.data.response
                })
            }
            else if (response.data.success === false) {
                this.setState({
                    getNftDetails: []
                })
            }            
        })
        .catch(err => {
            this.setState({
                getNftDetails: []
            })
        })
    }  
    
    //>>>>>>>>>>>>>>>>>>>>>>>>  Get NFT Details API End  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>

    render() {

        return (
            <>
            <HeaderPage />
                <section class="product_section">
                    <br />
                    <div class="item-details-container">
                    <div class="container">
                        <div class="item-details-content">
                            <div class="row">
                                <div class="col-12 col-md-6">
                                <div class="item-dp">
                                    <a class="img-holder" title="View">
                                        <img src={`${config.ipfsUrl}`+this.state.getNftDetails?.ipfsImage} alt="View" /></a>
                                </div>
                                
                                </div>
                                <div class=" col-12 col-md-6  item-info">
                                <div class="top" style={{display:'none'}}>
                                    <div class="itemMintedInfo float-right num">#<span>3</span> of <span>100</span> Minted Items</div>
                                    <h1 class=" name"></h1>
                                    <div class="txt">
                                        <p></p>
                                    </div>
                                </div>
                                <div class="bottom nftDetails">
                                    <ul>
                                        <li class="owner"><label>Title :</label>
                                            <span> {this.state.getNftDetails?.immutable_artwork}</span>
                                        </li>

                                        <li class="owner"><label>Category  :</label>
                                            <span> {this.state.getNftDetails?.categoryName}</span>
                                        </li>

                                        <li class="owner"><label>Creator :</label>
                                            <span> {this.state.getNftDetails?.creator}</span>
                                        </li>

                                        <li class="serial"><label>Discription : </label>
                                            <span> {this.state.getNftDetails?.description}</span>
                                        </li>

                                        <li><label>Created Date : </label>
                                            <span> {this.state.getNftDetails?.createdDate}</span>
                                        </li>

                                        <li><label><a className="blockchainView" target="_blank" href={`${config.txUrl+this.state.getNftDetails?.txHash}`}> Blockchain view </a> </label>
                                            {/* <span>  </span> */}
                                        </li>
                                        
                                    </ul>
                                    <div class="clr"></div>
                                </div>
            
                                </div>
                                <div class="col-md-8 col-xl-9 col-lg-7"></div>
                                <div class=" col-md-4 col-xl-3 col-lg-5 item-callToActions">
                                
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>
            </>
            )
        }
    }