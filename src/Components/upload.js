import React, { Component } from 'react';
import HeaderPage from '../Includes/Header'
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import config from '../config/config';
import { Link } from 'react-router-dom';
const headers = {
    'Content-Type': 'application/json'
};

export default class Upload extends Component {
  
    constructor(props) {
        super(props)

        this.state = ({
            getCategoryList : [],
            getPaymentDetails : [],
            ipfsHash : '',
            ipfsImage : '',
            randomAmount : '',
            paymentConfirm : 0,
            mintConfirm : 0,
            nftid : 0
        })

        this.onChange = this.onChange.bind(this);
        this.imageChangeFunction = this.imageChangeFunction.bind(this)
        // this.nftFormSubmit = this.nftFormSubmit.bind(this);    
      }
  
      onChange(e) {
         this.setState({
             [e.target.name]: e.target.value
         })
     }

     handleOnChange = (e) => {
        var artname = e.target.value.replace(/[^\w\s]/gi, "")
        var immutable_artwork = artname.replace(/ /g, '')
        this.setState({
          [e.target.name]: immutable_artwork
        });
      };     
  
    componentDidMount() {

        var random = '6.'+Math.floor(100000 + Math.random() * 900000)
        this.setState({
            steps:1,
            imgSrc : 'img/banner/Lock.svg',
            randomAmount : random
        })  
        this.getCategoryAPI()
        this.getPaymentDetailsAPI()
        // this.checktransactions(6)
    }

    stepFrom(stepCount)
    {
        this.setState({
            steps:stepCount
        })

        if(stepCount == 3){
            this.confirmTransctionAPI()
        }
    }      

    // >>>>>>>>>>>>>>>   Image preview start >>>>>>>>>>>
    imageChangeFunction(event) {
        console.log(event.target.files[0]);
        this.setState({
            imgSrc: URL.createObjectURL(event.target.files[0]),
            [event.target.name] : event.target.files[0]
        })
    }
    // >>>>>>>>>>>>>>>   Image preview end >>>>>>>>>>>  

    async confirmTransctionAPI(){
        let formData = new FormData();
        let formData1 = new FormData();

            formData1.append('file', this.state.image);
                const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;
                var resIPF =  await axios.post(url,
                formData1,
                {
                    headers: {
                        'Content-Type': `multipart/form-data; boundary= ${formData1._boundary}`,
                        'pinata_api_key': 'e10dd09a651a1450d32e',
                        'pinata_secret_api_key': '292a2ff0c5e3ddeea1f3d80444624b9302137401debc9aabdc630d7d990438fc'
                    }
                }
            );        

            if(resIPF.data.IpfsHash){
            formData.append('ipfsImage', resIPF.data.IpfsHash);
            formData.append('image', this.state.image);
            formData.append('immutable_artwork', this.state.immutable_artwork);
            formData.append('creator', this.state.creator);
            formData.append('description', this.state.description);
            formData.append('amount', this.state.randomAmount);
            // formData.append('amount', this.state.getPaymentDetails?.amount);
            formData.append('address', this.state.getPaymentDetails?.address);
            formData.append('category', this.state.category);
    
            axios.post(`${config.apiUrl}/nftCreate`, formData, { headers })
                .then(response => {
                    if (response.data.success === true) {
                        // toast.success(response.data.msg, {
                        //     position: toast.POSITION.TOP_CENTER
                        // });

                        this.setState({
                            'nftid' : response.data.nftid
                        })

                        this.checktransactions(response.data.nftid)
                    }
    
                    else if (response.data.success === false) {
                        toast.error(response.data.msg, {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }
                })
                    .catch(err => {
                    toast.error(err?.response?.data?.msg, {
                        position: toast.POSITION.TOP_CENTER
                    });
    
                })
            }else{
                toast.error('Somthing went wrong please try again' , {
                    position: toast.POSITION.TOP_CENTER
                });                
            }
    }

	async checktransactions(nftid) {
        axios.post(`${config.apiUrl}/nftgetTransactions`, {'id' : nftid} , { headers })
			.then(response => {
				if (response.data.success === true) {

                    setTimeout(() => {
                        toast.success(response.data.msg, {
                            position: toast.POSITION.TOP_CENTER
                        });
                    }, 3000);

                    this.setState({
                        'paymentConfirm' : 1
                    })

                    setTimeout(() => {
                        this.setState({
                            'mintConfirm' : 1
                        })
                    }, 2000)                    

				}else{
					// toast.error(response.data.msg, {
					// 	position: toast.POSITION.TOP_CENTER
					// });
					setTimeout(() => {
						this.checktransactions(response.data.nftid)
                    }, 30000);

				}
			})
	}      

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

    //>>>>>>>>>>>>>>>>>>>>>>>>  Get Payment details API Start  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 

    async getPaymentDetailsAPI() {
        axios.get(`${config.apiUrl}/getPaymentDetails`, { headers }).then(response => {
            if (response.data.success === true) {
                this.setState({
                    getPaymentDetails: response.data.response
                })
            }
            else if (response.data.success === false) {
                this.setState({
                    getPaymentDetails: []
                })
            }            
        })
        .catch(err => {
            this.setState({
                getPaymentDetails: []
            })
        })
    }  

    //>>>>>>>>>>>>>>>>>>>>>>>>  Get Payment details API End  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>    


    //>>>>>>>>>>>>>>>>>>>>>>>>  Validation for NFT form  >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>> 
    handleSubmit = async (event) =>{
        event.preventDefault();
        if(!this.state.image){
            toast.error('Image Required', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if(!this.state.immutable_artwork){
            toast.error('Immutable artwork field Required', {
                position: toast.POSITION.TOP_CENTER
            });
        } 
        else if(!this.state.creator){
            toast.error('Creator name field Required', {
                position: toast.POSITION.TOP_CENTER
            });
        } 
        else if(!this.state.description){
            toast.error('Description field Required', {
                position: toast.POSITION.TOP_CENTER
            });
        }
        else if(!this.state.category){
            toast.error('Category field Required', {
                position: toast.POSITION.TOP_CENTER
            });
        } 

    }

    render() {

        return (
            <>
            <ToastContainer />
            <HeaderPage />
                <section className="signup-step-container uploadContainer">
                    <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="col-md-8">
                            <div className="wizard">
                                <div className="wizard-inner">
                                <div className="connecting-line"></div>
                                <ul className="nav nav-tabs" role="tablist">
                                    <li role="presentation" className={this.state?.steps == 1? 'active' : '' }>
                                        <a href="#step1" data-toggle="tab" aria-controls="step1" role="tab" aria-expanded="true"><span className= {this.state?.steps == 1? 'active round-tab' : '' }>1 </span> <i>Upload</i></a>
                                    </li>
                                    <li role="presentation" className={this.state?.steps == 2? 'active' : 'disabled' }>
                                        <a href="#step2" data-toggle="tab" aria-controls="step2" role="tab" aria-expanded="false"><span className="round-tab">2</span> <i>Metadata</i></a>
                                    </li>
                                    <li role="presentation" className={this.state?.steps == 3? 'active' : 'disabled' }>
                                        <a href="#step3" data-toggle="tab" aria-controls="step3" role="tab"><span className="round-tab">3</span> <i>Payment</i></a>
                                    </li>
                                </ul>
                                </div>

                                <form>
                                    <div className="tab-content" id="main_form">
                                        {this.state?.steps == 1?
                                            <div className="tab-pane active" role="tabpanel" id="step1">
                                                <h4 className="text-center">Upload Image</h4>
                                                <p>Create your own NFT by uploading your image. Supported file formats are .jpg, .jpeg, .gif & .png.</p>
                                                <div className="row">
                                                    <div className="logoContainer">
                                                    <img src={this.state.imgSrc} className="lock_svg_img"/>
                                                    </div>
                                                    <div className="fileContainer sprite">
                                                    <span>Choose file</span>
                                                    <input  onChange={this.imageChangeFunction} name="image" type="file" accept="image/*" />
                                                    </div>
                                                    <ul className="list-inline pull-right">
                                                    <li>
                                                        {!this.state.image?
                                                            <button style={{marginLeft:'25px'}} type="button" id="continue-btn" className="default-btn next-step" onClick={this.handleSubmit}>Continue to next step</button>
                                                            : 
                                                            <button style={{marginLeft:'25px'}} type="button" id="continue-btn" className="default-btn next-step" onClick={this.stepFrom.bind(this,2)}>Continue to next step</button>
                                                        }
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                            : '' }

                                        {this.state?.steps == 2?
                                            <div className="tab-pane" role="tabpanel" id="step2">
                                                <h4 className="text-center">Add Metadata</h4>
                                                <p>This metadata will be stored on the blockchain. The actual image will automatically be uploaded to IPFS.</p>
                                                <div className="row">
                                                    <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Title of your Immutable Artwork (Limit to 30 characters)</label> 
                                                        <input onChange={this.handleOnChange} className="form-control" type="text" name="immutable_artwork" maxlength="30" placeholder="Title of your Immutable Artwork (Limit to 30 characters)" /> 
                                                    </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Creator (Limit to 30 characters)</label> 
                                                        <input onChange={this.onChange} className="form-control" maxlength="30" type="text" name="creator" placeholder="Creator (Limit to 30 characters)" /> 
                                                    </div>
                                                    </div>
                                                    <div className="col-md-12">
                                                    <div className="form-group">
                                                        <label>Description (Limit to 50 characters)</label> 
                                                        <input onChange={this.onChange}  className="form-control" type="text" name="description" maxlength="50" placeholder="Description (Limit to 50 characters)" /> 
                                                    </div>
                                                    </div>

                                                    <div className="col-md-12">
                                                        <div className="form-group">
                                                            <label>Category</label> 
                                                            <select className="form-control" name="category" onChange={this.onChange} required>
                                                            <option value="">Select Category</option>
                                                            {this.state.getCategoryList.map(item => (
                                                                <option value={item.id}>{item.name}</option>
                                                            ))}               
                                                            </select> 
                                                        </div>
                                                    </div>

                                                    <ul className="list-inline pull-right">
                                                    <li><button type="button" className="default-btn prev-step popup-button" onClick={this.stepFrom.bind(this,1)}>Back</button></li>
                                                    <li>
                                                    {!this.state.immutable_artwork || !this.state.creator || !this.state.description || !this.state.category ?
                                                        <button type="button" className="default-btn next-step" id="myBtn" onClick={this.handleSubmit}>Continue</button>
                                                    :
                                                        <button type="button" className="default-btn next-step" id="myBtn" onClick={this.stepFrom.bind(this,3)}>Continue</button>
                                                    }
                                                    </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        : ''}

                                        {this.state?.steps == 3?
                                            <div className="tab-pane" role="tabpanel" id="step3">
                                                <h4 className="text-center">Payment</h4>
                                                <p>After the payment we will mint the NFT and send it back to your wallet. This process can take several minutes.</p>
                                                <div className="row">
                                                    <div className="col-12 col-md-4">
                                                    <div className="Qr-code">
                                                        <img src={"https://chart.googleapis.com/chart?chs=350x350&cht=qr&chl=" + this.state.getPaymentDetails.address} className="qr-code-img"></img>
                                                    </div>
                                                    </div>
                                                    <div className="col-12 col-md-8">
                                                    <div className="wallet-conten">
                                                        <h2>Send {this.state.randomAmount} ADA to the following address</h2>
                                                        <p>IMPORTANT: Do not use an exchange for payment. Use a Cardano wallet, e.g. Daedalus or Yoroi.</p>
                                                        <p>Send the exact amount of ADA specified Below. </p>
                                                        <a style={{wordBreak: "break-all"}} className="wallet-id">{this.state.getPaymentDetails.address}</a>
                                                        <span className="copy-icon">
                                                            <i onClick={() => {navigator.clipboard.writeText(this.state.getPaymentDetails.address)}} className="far fa-copy"></i>
                                                        </span>
                                                    </div>
                                                    <div class="qr-para mt-2">

                                                    {this.state.paymentConfirm == 1?
                                                        <i class="fa fa-check" style={{position:'absolute', marginLeft:'-29px',marginTop:'5px' ,fontSize:"19px", color:"green"}}></i>
                                                    :
                                                        <div class="loader"></div>
                                                    }   

                                                    <p class="m-0">Payment confirmed</p>


                                                    {this.state.mintConfirm == 1?
                                                        <i class="fa fa-check" style={{position:'absolute', marginLeft:'-29px',marginTop:'5px' ,fontSize:"19px", color:"green"}}></i>
                                                    :
                                                        <div class="loader"></div>
                                                    }

                                                    <p>NFT minted & transaction submitted to the blockchain</p>
                                                    </div>

                                                    </div>
                                                    <ul className="list-inline pull-right">
                                                    <li><button type="button" className="default-btn prev-step popup-button" onClick={this.stepFrom.bind(this,2)}>Back</button></li>

                                                    {this.state.mintConfirm == 1?
                                                        <li>
                                                            <Link to={`${config.baseUrl}details/`+this.state.nftid} >
                                                                <button type="submit" className="default-btn next-step">View NFT Details</button>
                                                            </Link>
                                                        </li>
                                                    : 
                                                        ''
                                                    }
                                                    </ul>
                                                </div>
                                            </div>
                                        : '' }
                                        <div className="clearfix"></div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                    </div>
                </section>               
            </>
            )
        }
    }