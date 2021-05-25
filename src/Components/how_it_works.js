import React, { Component } from 'react';
import config from '../config/config';
import HeaderPage from '../Includes/Header'
export default class HowItWorks extends Component {
  
    //  constructor(props) {
   //      super(props)
   //  }

    componentDidMount() {

    }

    render() {

        return (
            <>
            <HeaderPage />
            <section class="signup-step-container">
                <div class="container">
                <div class="faqs-container" itemscope itemtype="https://schema.org/FAQPage">
                        <center><h1>Learn More </h1></center>
                        <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <h2 class="faq-question" itemprop="name">What is an NFT??</h2>
                    <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    An NFT is a Non Fungible Token, which is a collectible item. Originally developed on Ethereum as an erc721 token. NFTs are unique digital items such as collectibles or artworks or game items. As an artist, by tokenizing your work you both ensure that it is unique and brand it as your work. The actual ownership is blockchain-managed.
                    <p>If you want to go in-depth into NFTs, I suggest this read: <a href=" https://opensea.io/blog/guides/non-fungible-tokens/" target="_blank"> https://opensea.io/blog/guides/non-fungible-tokens/</a></p>
                    </div>
                    </div>
                </div>
                
                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                    <h2 class="faq-question" itemprop="name">How do I create my own NFT?</h2>
                    <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                        <ol>
                        <li>Simply click on the create button</li>
                        <li>Choose your ImmutableArt to upload</li>
                        <li>Create detailed searchable metadata </li>
                        <li>Send us the correct amount of ADA to the address shown (Never from an Exchange)</li>
                        <li>BE CAREFUL TO SEND ADA TO THE CORRECT ADDRESS </li>
                        <li>Once the transaction is completed, we will mint the NFT tokens and send them back to your wallet.</li>
                        </ol>
                        <h3>PLEASE DO NOT SEND ADA FROM AN EXCHANGE ADDRESS YOU WILL NOT GET YOUR NFT.</h3>
                        <p>We cannot assist with any users issues related to wallet recovery, access or other technical matters. Both your sending or the payment and our sending of the NFT's will be visible on the Cardano Blockchain Explorer.</p>
                        <a href="https://explorer.cardano.org/" target="_blank">https://explorer.cardano.org/</a>
                        <p>You can create as many NFTs as you wish but please make a separate payment for each to the correct wallet address. </p>
                        
                    </div>
                </div>
                </div>



                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">What is your fee structure?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    We want everyone to mint! We try to keep the cost as low as possible. Here is the break down.
                    <ul>
                        <li>~2 Ada transaction minting operation to chain</li>
                        <li>~2 Ada to send token back to your wallet.</li>
                        <li>3 Ada profit to pay for Enterprise Class Infrastructure and IPFS services with Piñata  </li>
                    </ul>
                    </div>
                </div>
                </div>
                
                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">Do you offer refunds?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    Sadly we cannot offer refunds for the following reasons:
                    <ol>
                        <li>These are low value items</li>
                        <li>The sale process is decentralized - we are not asking for customers details</li>
                        <li>. To avoid fraud we cannot return funds or send NFT's to alternate addresses </li>
                        <li>Once a payment is made it goes into the NFT queue and cannot be reversed</li>
                        <li>We will only mint these once so are unable to re-issue any tokens or refunds</li>
                        <li>We have had significant set up, design and tech costs to recoup</li>
                        </ol>
                        <p>We welcome general enquiries but to remain decentralized we do not wish to know who owns each customer wallet. That is how crypto should be!</p>
                        <p>By sending us ADA you are agreeing to the above terms.</p>
                    </div>
                </div>
                </div>
                
                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">Which blockchain do you use?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    Cardano.
                    </div>
                </div>
                </div>

                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">How are your NFTs stored on the blockchain?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    We store the metadata of each NFT directly in the first (minting) transaction. The metadata is formatted using this NFT schema.
                    </div>
                </div>
                </div>

                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">How do you ensure that there's only one unique Token minted?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    To ensure that there's only ever one NFT, we use a special Token policy which prevents us (& everyone else) from minting a new Token after a certain time, right after the minting transaction. We also regenerate this policy for each new Token and delete it right afterwards.
                    </div>
                </div>
                </div>


                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">How do I know I really own my NFT?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    An NFT, is a real blockchain token, with real value. 
                    Your token will be locked in your Daedalus wallet within minutes of your confirmed payment. 

                    <img src="img/banner/1image.png" class="dox-img" />
                    <img src="img/banner/2image.png" class="dox-img" />
                    <p>You will be able to see the incoming transaction. Notice the token value. </p>
                    <img src="img/banner/3image.png" class="dox-img" />
                    </div>
                </div>
                </div>

                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">Where can I find my NFT in my Wallet?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    To ensure that there's only ever one NFT, we use a special Token policy which prevents us (& everyone else) from minting a new Token after a certain time, right after the minting transaction. We also regenerate this policy for each new Token and delete it right afterwards.
                    </div>
                </div>
                </div>


                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">Can I buy an NFT?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    We are only selling 1 NFT. The first and only NFT that ImmutableART will ever sell itself. 
                Once true Smart Contracts come with the Alonzo Hard Fork, this year, you’ll be able to buy, and sell, others NFTs you’ve minted here

                    </div>
                </div>
                </div>

                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">Can I Sell an NFT??</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    Not yet. Once true Smart Contracts come with the Alonzo Hard Fork, this year, you’ll be able to buy, and sell, others NFTs you’ve minted here. 
                    </div>
                </div>
                </div>

                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">Can I send my NFTs to my friends and family? </h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    Yes! 
                    Just like regular Ada, you can send these tokens to your friends and family that have Daedalus or Yori Cardano wallets. 
                    You will have to add the 1 ADA minimum to do so. 
                    Never send to an exchange. Never. 
                    <img src="img/banner/4image.png" class="dox-img" />
                    <img src="img/banner/5image.png" class="dox-img" />

                    </div>
                </div>
                </div>




                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">What is IPFS?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    InterPlanetary File System is a peer-to-peer hypermedia protocol designed to make the web faster, safer, and more open. 
                    <p>It is a distributed system for storing and accessing files, websites, applications, and data.</p>
                    <a href="https://docs.ipfs.io/concepts/what-is-ipfs/#decentralization">https://docs.ipfs.io/concepts/what-is-ipfs/#decentralization</a>
                    </div>
                </div>
                </div>




                <div class="faq-singular" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
                <h2 class="faq-question" itemprop="name">How can I view my NFT on the web, without going to your site?</h2>
                <div class="faq-answer" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
                    <div itemprop="text">
                    Every transaction that ever takes place on blockchain is recorded. Forever. And you are able to see them. Here is how to find the transaction, locate the Hash, and create a link that will bring you straight to your ImmutableArt. 
                    <p>Its important to remember that your image is not stored in the blockchain. Its stored in IPFS, the InterPlanetary File System is a peer-to-peer hypermedia protocol designed to make the web faster, safer, and more open.</p>
                    <p>Head over to: <a href="#">https://cardanoscan.io/</a></p>
                    <p>Take your Transaction ID you got when we sent you the NFT from your Daedalus wallet. </p>
                    <img src="img/banner/6image.png" class="dox-img" />
                    <img src="img/banner/7image.png" class="dox-img" />
                    <p>Click on the address of your wallet bellow, starting with addr1</p>
                    <img src="img/banner/8image.png" class="dox-img" />
                    <p>Scroll down to Transactions. You can now see your token by name. Click on it. </p>
                    <img src="img/banner/9image.png" class="dox-img" />
                    <p>Next, click on the Mint Transaction tab, and click on the transaction.  </p>
                    <img src="img/banner/10image.png" class="dox-img" />
                    <p>Click on the metadata tab. You will now be able to see the IPFS path. Click on it. </p>
                    <img src="img/banner/11image.png" class="dox-img" />
                    <img src="img/banner/12image.png" class="dox-img" />
                    <p>Grab the string after ipfs/  It always starts with Q</p>
                    <p>Now drop that HERE: <a href="https://gateway.pinata.cloud/ipfs/Qmci7huJPwhKyPidpT7HbYbgCZoLc2zYgmV5wuULwrX5x9">https://gateway.pinata.cloud/ipfs/</a> HERE</p>
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