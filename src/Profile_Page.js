import React from "react";
import logo from './logo.svg';
import './css-for-profile/normalize_profile.css';
import './css-for-profile/profile-page-189207.webflow.css';
import './css-for-profile/webflow_profile.css';
import './css-for-profile/normalize_profile.css';
import { ConnectButton } from '@suiet/wallet-kit';
import { useWallet } from '@suiet/wallet-kit';
import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { TransactionBlock } from "@mysten/sui.js";

function ProfilePage() {
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
		<div className="profile_page">
			<>
				{/*  This site was created in Webflow. https://www.webflow.com  */}
				{/*  Last Published: Sat Jul 15 2023 13:58:07 GMT+0000 (Coordinated Universal Time)  */}
				<meta charSet="utf-8" />
				<title>Profile Page</title>
				<meta content="width=device-width, initial-scale=1" name="viewport" />
				<meta content="Webflow" name="generator" />
				<link href="css/normalize_profile.css" rel="stylesheet" type="text/css" />
				<link href="css/webflow_profile.css" rel="stylesheet" type="text/css" />
				<link
					href="css/profile-page-189207.webflow.css"
					rel="stylesheet"
					type="text/css"
				/>
				<link href="https://fonts.googleapis.com" rel="preconnect" />
				<link
					href="https://fonts.gstatic.com"
					rel="preconnect"
					crossOrigin="anonymous"
				/>
				<link href="images/favicon.ico" rel="shortcut icon" type="image/x-icon" />
				<link href="images/webclip.png" rel="apple-touch-icon" />
				<div
					data-collapse="medium"
					data-animation="default"
					data-duration={400}
					data-easing="ease"
					data-easing2="ease"
					role="banner"
					className="navigation w-nav"
				>
					<div className="container w-container">
						<a href="#" className="brand-link w-nav-brand">
							<div className="logo-text">TW3</div>
						</a>
						<nav role="navigation" className="nav-menu w-nav-menu">
							<a href="#" className="nav-link w-nav-link">
								Home
							</a>
							<a href="#" className="nav-link w-nav-link">
								My garden
							</a>
							<a href="#" className="nav-link w-nav-link">
								Info Page
							</a>
							<a href="#" className="nav-link _1 w-nav-link">
								Connect Wallet
							</a>
						</nav>
						<div className="nav-link menu w-nav-button">
							<div className="w-icon-nav-menu" />
						</div>
					</div>
				</div>
				<section className="section-2 wf-section">
					<div />
				</section>
				<section className="wf-section">
					<div className="w-row">
						<div className="column-15 w-col w-col-6">
							<img
								src="images/BgfzCZ.png"
								loading="lazy"
								width={295}
								alt=""
								className="image-3"
							/>
							<a href="#" className="button _1">
								CONNECT&nbsp;WALLET
							</a>
							<a href="#" className="button _1 _1-22">
								WATER YOUR TREE
							</a>
							<a href="#" className="button _1 _1-33">
								TREAT YOUR TREE
							</a>
						</div>
						<div className="w-col w-col-6">
							<div className="w-row">
								<div className="column-16 w-col w-col-4">
									<h3 className="heading">Your Trees</h3>
									<div className="div-block-5 _1-3">
										<img
											src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
											loading="lazy"
											width={140}
											alt=""
											className="image-14 _1"
										/>
										<img
											src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
											loading="lazy"
											width={140}
											alt=""
											className="image-7"
										/>
										<img
											src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
											loading="lazy"
											width={140}
											alt=""
											className="image-10"
										/>
										<a href="#" className="button _1 _1-2 _1-3">
											MINT&nbsp;NEW&nbsp;SEED
										</a>
									</div>
								</div>
								<div className="column-17 w-col w-col-4">
									<h3 className="heading-2 _2">Your Water</h3>
									<div className="div-block-4">
										<img
											src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
											loading="lazy"
											width={140}
											alt=""
											className="image-15"
										/>
										<img
											src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
											loading="lazy"
											width={140}
											alt=""
											className="image-8"
										/>
									</div>
									<img
										src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
										loading="lazy"
										width={140}
										alt=""
										className="image-11"
									/>
									<a href="#" className="button _1 _1-2 _1-3 _1-4">
										MINT&nbsp;NEW WATER
									</a>
								</div>
								<div className="column-18 w-col w-col-4">
									<h3 className="heading-3 _1">Your Drugs</h3>
									<div className="div-block-3">
										<img
											src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
											loading="lazy"
											width={140}
											alt=""
											className="image-13"
										/>
										<img
											src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
											loading="lazy"
											width={140}
											alt=""
											className="image-9"
										/>
									</div>
									<img
										src="https://d3e54v103j8qbb.cloudfront.net/plugins/Basic/assets/placeholder.60f9b1840c.svg"
										loading="lazy"
										width={140}
										alt=""
										className="image-12"
									/>
									<a href="#" className="button _1 _1-2 _1-3 _1-5">
										MINT&nbsp;NEW DRUG
									</a>
								</div>
							</div>
						</div>
					</div>
				</section>
				<div className="div-block-6" />
				<div
					data-delay={4000}
					data-animation="slide"
					className="w-slider"
					data-autoplay="true"
					data-easing="ease"
					data-hide-arrows="false"
					data-disable-swipe="false"
					data-autoplay-limit={0}
					data-nav-spacing={3}
					data-duration={500}
					data-infinite="true"
				>
					<div className="w-slider-mask">
						<div className="slide w-slide">
							<h2 className="heading-5 heading-17 heading-18 heading-19 _123">
								<strong>
									Uniqueness and individuality of NFT trees:
									<br />‍
									<em>
										<br />
									</em>
								</strong>
								<em>
									Each NFT tree created in "Tree-Web-Three" is unique and has its own
									characteristics that reflect your creative vision. You can customize
									its appearance, including the shape of the leaves, colors and
									texture of the trunk, making each tree a truly unique work of art.
								</em>
							</h2>
						</div>
						<div className="slide-2 w-slide">
							<h2 className="heading-6">
								<strong className="bold-text">
									Environmental partnership and transparency:
								</strong>
								<br />
								<em className="italic-text-2">
									‍<br />
									We are partners with environmental organizations and are committed
									to ensuring full transparency in the use of funds received from our
									project. We regularly provide reports on the planting of real trees
									and the impact of our activities on the environment.
								</em>
							</h2>
						</div>
						<div className="slide-3 w-slide">
							<h2 className="heading-7">
								<strong>Social responsibility and public influence:</strong>
								<br />
								<em>
									‍<br />
									"Tree-Web-Three" aims to be not only a technological project, but
									also a driving force for positive change. We support social programs
									and encourage our members to be actively involved in charitable and
									environmental initiatives.
								</em>
							</h2>
						</div>
						<div className="slide-4 slide-5 slide-6 slide-7 w-slide">
							<h2 className="heading-8">
								<strong>Interactivity and learning:</strong>
								<br />
								<em>
									‍<br />
									Our project stimulates education and awareness in the field of
									ecology and sustainable development. We provide learning resources
									and materials so that each participant can better understand the
									importance of nature conservation and actively participate in
									solving environmental problems
								</em>
								.
							</h2>
						</div>
						<div className="slide-8 w-slide">
							<h2 className="heading-9">
								<strong>Community and Collaboration:</strong>
								<br />
								<em>
									‍<br />
									We create a community of people who share a common goal - saving the
									planet and creating a sustainable future. At Tree-Web-Three, you'll
									find support, inspiration, and the opportunity to collaborate with
									like-minded people to expand your reach and influence.
								</em>
							</h2>
						</div>
						<div className="slide-9 w-slide">
							<h2 className="heading-10">
								<strong>Mint NFT seed:</strong>
								<br />‍<br />
								<em>
									You can mint an NFT seed once a week to support sustainable seeding
									and reduce the burden on our eco-activists. <br />
									(Note: There are no restrictions on the current testnet)
								</em>
							</h2>
						</div>
						<div className="slide-10 w-slide">
							<h2 className="heading-11">
								<strong>Watering and Healing Your Tree: </strong>
								<br />‍<br />
								You can water and heal your tree once every 24 hours, giving it the
								care and support it needs. Please note that for watering and healing
								you will need the appropriate NFTs, which must be in your wallet. If
								you do not have them, you can instantly mount them in any quantity
								without time limits.
							</h2>
						</div>
						<div className="slide-11 w-slide">
							<h2 className="heading-12">
								<strong>Fixed prices:</strong>
								<em>
									<br />
									Prices for NFTs and other elements of the project are fixed and
									cannot be changed. This ensures transparency and fairness for all
									participants.
								</em>
							</h2>
						</div>
						<div className="slide-12 w-slide">
							<h2 className="heading-13">
								<strong>Tree growth stages:</strong>
								<br />
								<em>
									Your tree will go through 5 to 8 growth stages, depending on its
									species. With each stage it will develop and become more beautiful
									and stronger.
								</em>
							</h2>
						</div>
						<div className="slide-1 slide-1-2 slide-1-3 slide-1-4 w-slide">
							<h2 className="heading-14">
								<strong>
									Mint via contract:
									<br />
								</strong>
								<em>
									If you minted an NFT seed directly through a contract, remember that
									we reserve the right not to include it in the database and not to
									perform an actual seeding action.
								</em>
							</h2>
						</div>
						<div className="slide-1-5 w-slide">
							<h2 className="heading-15">
								<strong>Snapshots and accounting in tokenomics:</strong>
								<br />
								On the testnet, we will regularly take Snapshots of holders and users
								of our NFTs once a week. In the future, this data will be taken into
								account in the tokenomics of the project, reflecting your contribution
								and activity.
							</h2>
						</div>
						<div className="slide-1-6 w-slide">
							<h2 className="heading-16">
								<strong>Save the planet:</strong>
								<br />
								Let's save our planet together! "Tree-Web-Three" is an opportunity to
								take an active part in environmental efforts, ensuring not only
								virtual but also real well-being of our planet.
							</h2>
						</div>
					</div>
					<div className="w-slider-arrow-left">
						<div className="w-icon-slider-left" />
					</div>
					<div className="w-slider-arrow-right">
						<div className="w-icon-slider-right" />
					</div>
					<div className="slide-nav w-slider-nav w-shadow w-round w-num" />
					<div className="section footer copyright wf-section">
						<div className="w-container">
							<div className="text-block-2">
								Copyright 2023 TWT. All rights reserved
							</div>
						</div>
					</div>
				</div>
			</>

		</div>
	)
};
export default ProfilePage;