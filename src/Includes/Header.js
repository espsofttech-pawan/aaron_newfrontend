import React, { Component } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom'
import config from '../config/config';
const headers = {
    'Content-Type': 'application/json'
};

export default class Header extends Component {
  
    constructor(props) {
        super(props)
         this.state = ({
            getNftDataList : [],
        })
    }

    componentDidMount() {
        console.log(this.props)
    }

    searchNft(evt) {
        axios.post(`${config.apiUrl}/searchNFTValue`, {'searchValue' : evt.target.value } , { headers })
           .then(response => {
                if (response.data.success === true) {
                    this.setState({
                        getNftDataList: response.data.response
                    })
                    this.props.checkFunFornewdata(response.data.response)
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

    render() {

        return (
            <>
                <header class="main_menu single_page_menu">
                    <div class="container-fluid">
                    <div class="row align-items-center">
                        <div class="col-lg-12">
                            <nav class="navbar navbar-expand-lg navbar-light">
                            <Link to={`${config.baseUrl}`} class="navbar-brand">
                                <img src="img/banner/Lock.svg" alt="logo" class="Main_logo" /> 
                                <span class="main_logo_text"></span>
                                </Link>
                                <div class="another-logo">
                                <img src="img/banner/Words.svg" class="mobile-view-logos" />
                                </div>
                                <button class="navbar-toggler" type="button" id="Mobile_view_btn"  data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span class="menu_icon"><i class="fas fa-bars"></i></span>
                                </button>
                                <div class="collapse navbar-collapse main-menu-item" onmouseleave="normalImg(this)" id="navbarSupportedContent">
                                <ul class="navbar-nav">
                                    <div class="form-group has-search" id="desktop-view">
                                        <span class="fa fa-search form-control-feedback"></span>
                                        <input type="text" class="form-control" placeholder="Search by creator, collectible or discription" onChange={evt => this.searchNft(evt)} />
                                    </div>
                                </ul>
                                <ul class="navbar-nav" id="Mobile_view">
                                    <li class="nav-item">
                                        <div class="form-group has-search" >
                                        <span class="fa fa-search form-control-feedback"></span>
                                        <input type="text" class="form-control" placeholder="Search by creator, collectible or discription" />
                                    </div>
                                    </li>
                                    <li class="nav-item">
                                    <Link to={`${config.baseUrl}how_it_works`}>Learn More</Link>
                                    </li>
                                    <li class="nav-item">
                                    </li>
                                    <li class="nav-item">
                                        <Link to={`${config.baseUrl}upload`} class="nav-link btn btn-primary btn-mint">Create</Link>
                                    </li>
                                        <div class="another-logo">
                                    <a href="#" target="_blank">
                                    <img src="img/banner/block.png" class="block-logos" />
                                    </a>
                                </div>
                                </ul>
                                <div class="another-logo">
                                    <img src="img/banner/Words.svg" class="another-logos" />
                                </div>
                                </div>
                                <ul class="navbar-nav" id="side_nav">
                                <li class="nav-item">
                                    <a href={`${config.baseUrl}how_it_works`} class="nav-link">Learn More</a>
                                </li>
                                <li class="nav-item">
                                </li>
                                <li class="nav-item">
                                    <Link to={`${config.baseUrl}upload`} class="nav-link btn btn-primary btn-mint">Create</Link>
                                </li>
                                    <div class="another-logo">
                                    <a href="#" target="_blank">
                                    <img src="img/banner/block.png" class="block-logos" />
                                    </a>
                                </div>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    </div>
                </header>
            </>
            )
        }
    }