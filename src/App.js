import logo from './logo.svg';
import './App.css';
import {ConnectButton} from '@suiet/wallet-kit';
import { useWallet } from '@suiet/wallet-kit';
import { useEffect } from 'react';
import { TransactionBlock} from "@mysten/sui.js";



function App() {
  const wallet = useWallet()
  useEffect(() => {
    if (!wallet.connected) return;
    console.log('connected wallet name: ', wallet.name)
    console.log('account address: ', wallet.account?.address)
    console.log('account publicKey: ', wallet.account?.publicKey)
  }, [wallet.connected])

  async function handleMoveCall() {
    const tx = new TransactionBlock();
    const packageObjectId = "0x1";
    tx.moveCall({
      target: `0x41d154bdf99fa90ce79b963561c83c206f8c9dc0b868ea3d7ab5b28d33a47bb4::devnet_nft::mint_to_sender`,
      arguments: [
        tx.pure("Sample NFT"), 
        tx.pure("sample minted NFT"),
        tx.pure("https://github.com/AndrewGalak6578/tree-web-three/blob/main/logo.png?raw=true")], 
    });
    await wallet.signAndExecuteTransactionBlock({
      transactionBlock: tx,
    });
  }

  async function handleSignMessage() {
    await wallet.signMessage({
      message: new TextEncoder().encode("Hello World"),
    });
  }

  return (
    <div className="App">
      
      <>
  {/*  This site was created in Webflow. https://www.webflow.com  */}{" "}
  {/*  Last Published: Sun Jul 02 2023 08:07:11 GMT+0000 (Coordinated Universal Time)  */}{" "}
  <meta charSet="utf-8" /> <title>Tree Web Three</title>{" "}
  <meta content="width=device-width, initial-scale=1" name="viewport" />{" "}
  <meta content="Webflow" name="generator" />{" "}
  <link href="css/normalize.css" rel="stylesheet" type="text/css" />{" "}
  <link href="css/webflow.css" rel="stylesheet" type="text/css" />{" "}
  <link
    href="css/tree-web-three.webflow.css"
    rel="stylesheet"
    type="text/css"
  />{" "}
  <link href="https://fonts.googleapis.com" rel="preconnect" />{" "}
  <link
    href="https://fonts.gstatic.com"
    rel="preconnect"
    crossOrigin="anonymous"
  />{" "}
  <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />{" "}
  <link href="images/webclip.png" rel="apple-touch-icon" />{" "}
  <div
    data-collapse="medium"
    data-animation="default"
    data-duration={400}
    data-easing="ease"
    data-easing2="ease"
    role="banner"
    className="navigation w-nav"
  >
    {" "}
    <div className="container w-container">
      {" "}
      <a href="#" className="brand-link w-nav-brand">
        {" "}
        <div className="logo-text">TW3</div>{" "}
      </a>{" "}
      <nav role="navigation" className="nav-menu w-nav-menu">
        {" "}
        <a href="#features" className="nav-link w-nav-link">
          Home
        </a>{" "}
        <a href="./404.html" className="nav-link w-nav-link">
          My garden
        </a>{" "}
        <a href="./404.html" className="nav-link w-nav-link">
          Info Page
        </a>{" "}
        <div className=" _1 w-nav-link" id="root" ><ConnectButton /></div>{" "}
      </nav>{" "}
      <div className="nav-link menu w-nav-button">
        {" "}
        <div className="w-icon-nav-menu" />{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
  <div
    data-delay={4000}
    data-animation="slide"
    className="slider w-slider"
    data-autoplay="false"
    data-easing="ease"
    data-hide-arrows="false"
    data-disable-swipe="false"
    data-autoplay-limit={0}
    data-nav-spacing={3}
    data-duration={500}
    data-infinite="true"
  >
    {" "}
    <div className="w-slider-mask">
      {" "}
      <div className="slide _1 w-slide">
        {" "}
        <div className="w-container" />{" "}
      </div>{" "}
      <div className="slide _2 w-slide">
        {" "}
        <div className="w-container" />{" "}
      </div>{" "}
      <div className="slide _3 w-slide">
        {" "}
        <div className="w-container" />{" "}
      </div>{" "}
    </div>{" "}
    <div className="w-slider-arrow-left">
      {" "}
      <div className="w-icon-slider-left" />{" "}
    </div>{" "}
    <div className="w-slider-arrow-right">
      {" "}
      <div className="w-icon-slider-right" />{" "}
    </div>{" "}
    <div className="w-slider-nav w-round" />{" "}
  </div>{" "}
  <div id="top" className="section main wf-section">
    {" "}
    <div className="container-3 w-container">
      {" "}
      <div className="columns w-row">
        {" "}
        <div className="column w-col w-col-6">
          {" "}
          <h1 className="main-heading">
            <span className="text-span-2">Tree Web Three</span>
          </h1>{" "}
          <p className="main-subtitle">
            Mint NFT's! Plant real trees! Save the world!
          </p>{" "}
          <a href="#" className="button hollow _2">
            LEARN&nbsp;MORE(Soon)
          </a>{" "}
          <a href="#" className="button _1">
            CONNECT&nbsp;WALLET(Soon)
          </a>{" "}
        </div>{" "}
        <div className="w-col w-col-6">
          <img
            src="images/Tree-Web-Three-2.png"
            width={407}
            style={{
              WebkitTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            data-w-id="0add69ab-1acc-a56b-ab72-d9b1cd6d3054"
            alt=""
            className="main-image"
          />
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
  <div className="section press wf-section" />{" "}
  <div id="features" className="section _11 wf-section">
    {" "}
    <div className="container-2 w-container">
      {" "}
      <h2 className="heading">Creating and growth of a NFT seed.</h2>{" "}
      <div className="section-subtitle">Everything you need to know.</div>{" "}
      <div className="feature-row _1 w-row">
        {" "}
        <div className="column-5 _1 w-col w-col-6">
          <img
            className="image"
            src="images/shutterstock_1117449206-1.png"
            width={267}
            alt=""
            style={{
              WebkitTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            sizes="(max-width: 479px) 92vw, 267px"
            data-ix="fade-in-on-scroll"
            data-w-id="ae6d3e74-cad2-e25b-7307-64469019de8a"
            srcSet="images/shutterstock_1117449206-1-p-500.png 500w, images/shutterstock_1117449206-1-p-800.png 800w, images/shutterstock_1117449206-1-p-1080.png 1080w, images/shutterstock_1117449206-1-p-1600.png 1600w, images/shutterstock_1117449206-1-p-2000.png 2000w, images/shutterstock_1117449206-1-p-2600.png 2600w, images/shutterstock_1117449206-1-p-3200.png 3200w, images/shutterstock_1117449206-1.png 4000w"
          />{" "}
        </div>{" "}
        <div className="column-11 w-col w-col-6">
          {" "}
          <div className="main-feature-group _1">
            <img
              src="images/seed_icon_136244.png"
              height={30}
              alt=""
              className="feature-icon"
            />{" "}
            <h3 className="heading-2">First step</h3>{" "}
            <p className="paragraph">
              Start your journey from the moment you plant it: mint an NFT tree
              seed and plant it in the virtual earth. At the same time, we will
              plant a real tree in our world.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="feature-row _2 w-row">
        {" "}
        <div className="w-col w-col-6">
          {" "}
          <div className="main-feature-group _2">
            <img
              src="images/91-911824_100-worth-of-garden-outdoor-consultation-services.png"
              height={30}
              sizes="28.625px"
              srcSet="images/91-911824_100-worth-of-garden-outdoor-consultation-services.png 500w, images/91-911824_100-worth-of-garden-outdoor-consultation-services.png 800w, images/91-911824_100-worth-of-garden-outdoor-consultation-services.png 900w"
              alt=""
              className="feature-icon"
            />{" "}
            <h3 className="heading-3">Step №2</h3>{" "}
            <p className="paragraph-2">
              Your tree needs care: mint NFT water and use it to water the tree.
              When you use NFT water, it "burns up" and your tree starts to
              grow.
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="column-2 w-col w-col-6">
          <img
            className="image-2"
            src="images/Shutterstock_1066254305-1.png"
            width={191}
            alt=""
            style={{
              WebkitTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            sizes="191px"
            data-ix="fade-in-on-scroll"
            data-w-id="29859a3f-acf5-87fb-9a1d-59628b5d3fbf"
            srcSet="images/Shutterstock_1066254305-1.png 500w, images/Shutterstock_1066254305-1.png 800w, images/Shutterstock_1066254305-1.png 1080w, images/Shutterstock_1066254305-1.png 1600w, images/Shutterstock_1066254305-1.png 2000w, images/Shutterstock_1066254305-1.png 2600w, images/Shutterstock_1066254305-1.png 3200w, images/Shutterstock_1066254305-1.png 4000w"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
  <div id="features" className="section _12 wf-section">
    {" "}
    <div className="container-2 w-container">
      {" "}
      <div className="feature-row _1-1 w-row">
        {" "}
        <div className="column-10 w-col w-col-6">
          <img
            className="image"
            src="images/Shutterstock_1511837024-1.png"
            width={304}
            alt=""
            style={{
              WebkitTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            sizes="(max-width: 479px) 92vw, 304px"
            data-ix="fade-in-on-scroll"
            data-w-id="61356220-b6d8-baba-3c64-48b4ad4cb219"
            srcSet="images/Shutterstock_1511837024-1-p-500.png 500w, images/Shutterstock_1511837024-1-p-800.png 800w, images/Shutterstock_1511837024-1-p-1080.png 1080w, images/Shutterstock_1511837024-1-p-1600.png 1600w, images/Shutterstock_1511837024-1.png 2000w"
          />{" "}
        </div>{" "}
        <div className="column-9 w-col w-col-6">
          {" "}
          <div className="main-feature-group _3">
            <img
              src="images/205_2056176_black_and_white_medical_clip_art_download_drug_icon.png"
              height={30}
              sizes="29.390625px"
              srcSet="images/205_2056176_black_and_white_medical_clip_art_download_drug_icon.png 500w, images/205_2056176_black_and_white_medical_clip_art_download_drug_icon.png 800w, images/205_2056176_black_and_white_medical_clip_art_download_drug_icon.png 840w"
              alt=""
              className="feature-icon"
            />{" "}
            <h3 className="heading-2">Step Three</h3>{" "}
            <p className="paragraph">
              Your tree may get sick, but we have a solution: mint the NFT drug
              and use it to treat the tree. As with water, NFT medication "burns
              out" when used.
            </p>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
      <div className="feature-row w-row">
        {" "}
        <div className="column-8 w-col w-col-6">
          {" "}
          <div className="main-feature-group">
            <img
              src="images/36470.png"
              height={30}
              alt=""
              className="feature-icon"
            />{" "}
            <h3 className="heading-3">Step №4</h3>{" "}
            <p className="paragraph-2">
              After planting, your role will be to take care of the tree: water
              it regularly and treat it if necessary. Remember that a healthy
              tree is a happy tree!
            </p>{" "}
          </div>{" "}
        </div>{" "}
        <div className="column-2 w-col w-col-6">
          <img
            className="image-2"
            src="images/Shutterstock_2255025705.png"
            width={276}
            alt=""
            style={{
              WebkitTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            sizes="(max-width: 479px) 92vw, 276px"
            data-ix="fade-in-on-scroll"
            data-w-id="61356220-b6d8-baba-3c64-48b4ad4cb22a"
            srcSet="images/Shutterstock_2255025705-p-500.png 500w, images/Shutterstock_2255025705-p-800.png 800w, images/Shutterstock_2255025705-p-1080.png 1080w, images/Shutterstock_2255025705-p-1600.png 1600w, images/Shutterstock_2255025705-p-2000.png 2000w, images/Shutterstock_2255025705-p-2600.png 2600w, images/Shutterstock_2255025705-p-3200.png 3200w, images/Shutterstock_2255025705.png 4000w"
          />{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
  <div id="features" className="section wf-section">
    {" "}
    <div className="container-2 w-container">
      {" "}
      <div className="feature-row _4 w-row">
        {" "}
        <div className="column-7 _7 w-col w-col-6">
          <img
            className="image"
            src="images/Shutterstock_241503013.png"
            width={265}
            alt=""
            style={{
              WebkitTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              MozTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              msTransform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              transform:
                "translate3d(0, 25PX, 0) scale3d(1, 1, 1) rotateX(0) rotateY(0) rotateZ(0) skew(0, 0)",
              opacity: 0
            }}
            sizes="(max-width: 479px) 92vw, 265px"
            data-ix="fade-in-on-scroll"
            data-w-id="e8d4e7ba-6155-26bc-33a8-cb57aa2f7f25"
            srcSet="images/Shutterstock_241503013-p-500.png 500w, images/Shutterstock_241503013-p-800.png 800w, images/Shutterstock_241503013-p-1080.png 1080w, images/Shutterstock_241503013-p-1600.png 1600w, images/Shutterstock_241503013-p-2000.png 2000w, images/Shutterstock_241503013-p-2600.png 2600w, images/Shutterstock_241503013-p-3200.png 3200w, images/Shutterstock_241503013.png 4500w"
          />{" "}
        </div>{" "}
        <div className="column-6 w-col w-col-6">
          {" "}
          <div className="main-feature-group">
            <img
              src="images/img_24830.png"
              height={30}
              sizes="39.09375px"
              srcSet="images/img_24830.png 500w, images/img_24830.png 800w, images/img_24830.png 980w"
              alt=""
              className="feature-icon"
            />{" "}
            <h3 className="heading-2">Final Step</h3>{" "}
          </div>{" "}
          <p className="paragraph">
            Once your tree has grown, you will have the opportunity to connect
            with other tree owners and even exchange care tips. You can also
            donate your tree (at any stage of growth), water and medicine to
            other wallets, or sell them. Good luck on your green journey!
          </p>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
  <div className="section clients wf-section" />{" "}
  <div className="section footer wf-section">
    {" "}
    <div className="w-layout-grid waves-grid-faq-1">
      {" "}
      <div
        id="w-node-fe54fee0-b556-447b-a90a-1daadbc3fcf8-2401d1d5"
        data-w-id="fe54fee0-b556-447b-a90a-1daadbc3fcf8"
        style={{ opacity: 0 }}
        className="waves-left-faq-1"
      >
        {" "}
        <h2
          data-w-id="fe54fee0-b556-447b-a90a-1daadbc3fcf9"
          style={{ opacity: 0 }}
          className="waves---heading-2-no-margins"
        >
          How do we work?
        </h2>{" "}
        <div className="waves---limit-480" />{" "}
      </div>{" "}
      <div
        id="w-node-fe54fee0-b556-447b-a90a-1daadbc3fd01-2401d1d5"
        className="waves-expandable-master-faq-1"
      >
        {" "}
        <div className="waves---expandable-wrap">
          {" "}
          <div
            data-w-id="fe54fee0-b556-447b-a90a-1daadbc3fd03"
            style={{ opacity: 0 }}
            className="waves---expandable-item"
          >
            {" "}
            <div className="waves---expandable-content">
              {" "}
              <div className="waves---paragraph-regular">
                How do we keep the value of the NFT?
              </div>{" "}
              <div className="waves---expandable-open">
                {" "}
                <div className="waves---expand-space" />{" "}
                <p className="waves-expanded-text">
                  "We're going to acheive this goal by releasing our NFT
                  seasonally, by the beginning of every season (ex. July 2023)"
                </p>{" "}
              </div>{" "}
            </div>{" "}
            <div className="waves---expand-icon-wrap">
              {" "}
              <div className="waves---expand-line vertical" />{" "}
              <div className="waves---expand-line" />{" "}
            </div>{" "}
          </div>{" "}
        </div>{" "}
      </div>{" "}
    </div>{" "}
    <div id="root1_NFT" />{" "}
    <div className="w-container">
      {" "}
      <div className="columns-2 w-row">
        {" "}
        <div className="column-13 w-col w-col-6">
          {" "}
          {/* <div class="logo-text footer">Three Web Three</div> <div class="footer-slogan">Sign up for our newsletter</div> <div class="newsletter-form w-form"> <form id="wf-form-newsletter" name="wf-form-newsletter" data-name="Newsletter" method="get" class="w-clearfix" data-wf-page-id="649981253149776f2401d1d5" data-wf-element-id="6d9e4fef-4597-289d-f0e1-52e00c18a857"><input type="email" class="newsletter-field w-input" maxlength="256" name="email" data-name="Email" placeholder="Email Address" id="email" required=""><input type="submit" value="Subscribe" data-wait="Wait..." wait="Wait..." class="newsletter-button w-button"></form> <div class="success-message w-form-done"> <p>Thank you! You’ll receive an email shortly.</p> </div> <div class="w-form-fail"> <p>Oops! Something went wrong while submitting the form :(</p> </div> </div> */}{" "}
          <div className="social-icon-group">
            {" "}
            <a href="#" className="social-icon w-inline-block">
              <img src="images/facebook-icon.svg" alt="" />
            </a>{" "}
            <a href="#" className="social-icon w-inline-block">
              <img src="images/twitter-icon.svg" alt="" />
            </a>{" "}
            <a href="#" className="social-icon w-inline-block">
              <img src="images/linkdin-icon-white.svg" alt="" />
            </a>{" "}
            <a href="#" className="social-icon w-inline-block">
              <img src="images/email-icon-white.svg" alt="" />
            </a>{" "}
          </div>{" "}
        </div>{" "}
        {/* <div class="column-12 w-col w-col-2"> <h4 class="footer-title">Company</h4> <a href="#" class="page-link in-footer">Home</a> <a href="#" class="page-link in-footer">Online</a> <a href="#" class="page-link in-footer">My garden</a> <a href="#" class="page-link in-footer">Sign Up</a> </div> */}{" "}
        {/* <div class="w-col w-col-2"> <h4 class="footer-title">Product</h4> <a href="#" class="page-link in-footer">Trees</a> <a href="#" class="page-link in-footer">Seeds</a> <a href="#" class="page-link in-footer">Water</a> <a href="#" class="page-link in-footer">Sunlight</a> </div> */}{" "}
        {/* <div class="w-col w-col-2"> <h4 class="footer-title">Legal</h4> <a href="#" class="page-link in-footer">Privacy Policy</a> <a href="#" class="page-link in-footer">Terms of Use</a> </div> */}{" "}
      </div>{" "}
    </div>{" "}
  </div>{" "}
  <div className="section footer copyright wf-section">
    {" "}
    <div className="w-container">
      {" "}
      <div className="text-block-2">
        Copyright 2023 TWT. All rights reserved
      </div>{" "}
    </div>{" "}
  </div>{" "}
  {/* Load our React component. */}
</>

    </div>
    
  );
}

export default App;
