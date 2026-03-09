// src/pages/home.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import futureFinance from '../assets/future-finance.png'
import bitcoin from '../assets/bitcoin.png'
import bnb from '../assets/bnb.png'
import ethereum from '../assets/ethereum.png'
import tether from '../assets/tether.png'
import usdc from '../assets/usdc.png'
import xrp from '../assets/xrp.png'
import parcl from '../assets/parcl.png'
import lighter from '../assets/lighter.png'
import kite from '../assets/kite.png'
import jupiter from '../assets/jupiter.png'
import perpetual from '../assets/perpetual.png'
import plume from '../assets/plume.png'
import polkastarter from '../assets/polkastarter.png'
import raydium from '../assets/raydium.png'
import walrus from '../assets/walrus.png'
import sentient from '../assets/sentient.png'
import hyperliquid from '../assets/hyperliquid.png'
import aventus from '../assets/aventus.png'
import startTrade from '../assets/start-trade.webp'
import coinbaseLogo from '../assets/coinbase-logo.png'
import tradeSuccess from '../assets/trade-success.png'
import baseApp from '../assets/base-app.avif'
import investCrypto from '../assets/invest-crypto.png'
import usdcDigital from '../assets/usdc-digital.avif'
import cryptoReplace from '../assets/crypto-replace.avif'
import takeControl from '../assets/take-control.webp'

export default function Home() {
  const [activeTab, setActiveTab] = useState("tradable");

  const cryptoData = {
    tradable: [
      { name: "Bitcoin", price: "GHS 723,126.82", change: "↘ 1.32%", color: "text-red-500", image: bitcoin },
      { name: "Ethereum", price: "GHS 20,905.45", change: "↘ 2.25%", color: "text-red-500", image: ethereum },
      { name: "Tether", price: "GHS 10.77", change: "↗ 0.01%", color: "text-green-500", image: tether },
      { name: "BNB", price: "GHS 6,637.38", change: "↘ 1.81%", color: "text-red-500", image: bnb },
      { name: "XRP", price: "GHS 14.48", change: "↘ 1.30%", color: "text-red-500", image: xrp },
      { name: "USDC", price: "GHS 10.77", change: "--", color: "text-gray-500", image: usdc }
    ],
  
    gainers: [
      { name: "Parcl", price: "GHS 0.18", change: "↗ 16.25%", color: "text-green-500", image: parcl },
      { name: "Aventus", price: "GHS 6.84", change: "↗ 4.96%", color: "text-green-500", image: aventus },
      { name: "Plume", price: "GHS 0.15", change: "↗ 21.11%", color: "text-green-500", image: plume },
      { name: "Kite", price: "GHS 3.33", change: "↗ 11.35%", color: "text-green-500", image: kite },
      { name: "Polkastarter", price: "GHS 0.68", change: "↗ 8.64%", color: "text-green-500", image: polkastarter },
      { name: "Perpetual Prot...", price: "GHS 0.46", change: "↘ 4.69%", color: "text-red-500", image: perpetual }
    ],
  
    new: [
      { name: "Hyperliquid", price: "GHS 326.08", change: "↘ 1.94%", color: "text-red-500", image: hyperliquid },
      { name: "Jupiter", price: "GHS 1.75", change: "↘ 7.91%", color: "text-red-500", image: jupiter },
      { name: "Lighter", price: "GHS 11.53", change: "↘ 5.23%", color: "text-red-500", image: lighter },
      { name: "Sentient", price: "GHS 0.25", change: "↘ 4.19%", color: "text-red-500", image: sentient},
      { name: "Walrus", price: "GHS 0.79", change: "↘ 2.07%", color: "text-red-500", image: walrus },
      { name: "Raydium", price: "GHS 6.07", change: "2.63%", color: "text-red-500", image: raydium }
    ]
  };
  return (
    <main className="bg-white">
             {/**FUTURE OF FINANCE SECTION */}
      <section className="max-w-9xl -ml-28 mr-auto mt-10 px-3 py-10 lg:py-24 grid lg:grid-cols-2  ">
  
        {/* Left: phone image */}
        <div className="relative flex justify-center">
          <div className="rounded-[32px] px-6 lg:px-6  ml-25">
            <img
              src={futureFinance}
              alt="Crypto portfolio on mobile"
              className="w-600 h-120 rounded-[50px] "
            />
            <p className="text-sm text-gray-500">
            Stocks and prediction markets not available in your jurisdiction.          </p>
          </div>

          
        </div>

        {/* Right: text + form */}
        <div className="space-y-2 mt-20 pl-4 pr-3" >
          <h1 className=" xl:text-7xl font-semibold leading-tight text-black">
            The future of finance is here.
          </h1>

          <p className="text-xl text-gray-600 ">
            Trade crypto and more on a platform you can trust.
          </p>

          <div className="flex flex-col sm:flex-row gap-5 pt-3">
            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="w-95 px-3 py-4 rounded-2xl border border-gray-500 placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-600"
            />
            <Link
              to="/signup"
              className="px-6 py-3 rounded-full bg-blue-600 text-white text-center font-semibold text-base hover:bg-blue-700 transition-colors"
            >
              Sign up
            </Link>
          </div>

        </div>
      </section>

       
       {/**EXPLORE CRYPTO SECTION */}
      <section className="bg-gray-100 max-w-9xl px-3 pt-10 pb-15 lg:pt-24 lg:pb-19 grid lg:grid-cols-2 items-center ">

         {/* left: text + button */}
        <div className="space-y-2 mt-20 pl-4 pr-3  ">
          <h1 className=" xl:text-4xl font-semibold leading-tight text-black">
            Explore crypto like Bitcoin, Ethereum, and Dogecoin.
          </h1>

          <p className="text-xl text-gray-600 ">
            Simply and securely buy, sell, and manage hundreds of cryptocurrencies.
          </p>

          <Link 
            to="/explore"
            className="inline-block px-10 py-4 mt-1 rounded-full bg-black text-white font-bold text-xl text-center hover:bg-gray-900 transition-colors cursor-pointer">
              See more assets
          </Link>
        </div>


    
          {/* right: mobile screen */}
          <div className="bg-black text-white rounded-[50px] p-15 pr-10 pl-10 mr-5 ">
            {/* Tabs */}
            <div className="flex gap-6 -mt-3 mb-4 justify-center">
              <button
                onClick={() => setActiveTab("tradable")}
                className={`px-4 py-2 rounded-full text-lg font-medium cursor-pointer
                ${activeTab === "tradable"
                ? "bg-gray-800 text-white"
                : "text-white hover:text-white"}`}
              >
                Tradable
              </button>

              <button
                onClick={() => setActiveTab("gainers")}
                className={`px-4 py-2 rounded-full text-lg font-medium cursor-pointer
                ${activeTab === "gainers"
                  ? "bg-gray-800 text-white"
                  : "text-white hover:text-white"}`}
              >
                Top gainers
              </button>

              <button
                onClick={() => setActiveTab("new")}
                className={`px-4 py-2 rounded-full text-lg font-medium cursor-pointer
                ${activeTab === "new"
                  ? "bg-gray-800 text-white"
                  : "text-white hover:text-white"}`}
              >
                New on Coinbase
              </button>
            </div>

            {cryptoData[activeTab].map((coin, index) => (
            <div
              key={index}
              className="flex items-center justify-between hover:bg-gray-900 px-3 rounded-3xl cursor-pointer mb-1"
            >
              <div className="flex items-center gap-4">
                <img src={coin.image} alt={coin.name} className="w-8 h-8" />
                <span className="text-4xl text-gray-200">{coin.name}</span>
              </div>

              <div className="text-right px-1 py-2">
                <p className="xl:text-3xl">{coin.price}</p>
                <p className={`${coin.color} text-xl`}>{coin.change}</p>
              </div>
            </div>
          ))}
          </div>
      </section>

      {/* POWERFUL TOOLS SECTION */}
      <section className="justify-center -ml-10 mr-auto mt-1 px-3 py-10 pt-15 lg:py-24 lg:pt-20 grid lg:grid-cols-2  ">
        {/*left section */}
        <div className="relative flex justify-start ml-20">
          <div className="rounded-[50px] px-6 lg:px-6">
            <img 
            src={startTrade}
            alt="trade image"
            className="w-[800px] h-[450px] rounded-[50px] "
            />
          </div>
        </div>

        {/*right section */}
        <div className="relative space-y-6 mt-10 pl-4 pr-3 mr-auto ">
          <h1 className=" xl:text-5xl font-semibold leading-tight text-black mr-10">
            Powerful tools, designed for the advanced trader.         
          </h1>

          <p className="text-lg text-gray-600 mr-20">
            Powerful analytical tools with the safety and security of Coinbase deliver the ultimate trading experience. Tap into sophisticated charting capabilities, real-time order books, and deep liquidity across hundreds of markets.
          </p>

          <Link 
            to="https://www.coinbase.com/advanced-trade"
            className="px-10 py-4 mt-1 rounded-full bg-black text-white font-bold text-xl text-center hover:bg-gray-900 transition-colors cursor-pointer">
            Start trading

          </Link>
        </div>
      </section>

      {/* COINBASE ONE SECTION */}
      <section className="bg-white justify-center ml-15 mr-auto mt-1 px-3 py-10 pt-15 lg:py-24 lg:pt-20 grid lg:grid-cols-2">
        <div className="max-w-xl mx-auto text-left space-y-6">
          {/* Pill badge */}
          <div className="inline-flex  gap-2 px-4 py-2 rounded-[15px] bg-white border border-gray-200">
            <img src={coinbaseLogo} alt="" className="w-5 h-5 " aria-hidden  />
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Coinbase One</span>
          </div>

          {/* Heading */}
          <h4 className="text-4xl lg:text-5xl font-semibold text-black leading-tight">
            Zero trading fees,<br />
            more rewards.
          </h4>

          {/* Description */}
          <p className="text-lg text-gray-600">
            Get more out of crypto with one membership: zero trading fees, boosted rewards, priority support, and more.
          </p>

          {/* CTA */}
          <Link
            to="https://coinbase.com/one?referrer=logged_out"
            className="px-8 py-4 mt-2 rounded-full bg-black text-white font-bold text-base pt-4 hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Claim free trial
          </Link>
        </div>

        <div className='-mt-5 space-y-6'>
          <img src={tradeSuccess} alt="trade" className="rounded-[60px] h-[450px] w-[550px] bg-gray-200"/>
        </div>
      </section>

      <section className="bg-white justify-center ml-15 mr-auto mt-1 px-3 py-10 pt-15 lg:py-24 lg:pt-20 grid lg:grid-cols-2">
        <div className='-mt-5'>
            <img src={baseApp} alt="trade" className="rounded-[60px] h-[450px] w-[550px] bg-gray-200"/>
        </div>

        <div className="max-w-xl mx-auto text-left space-y-5">
          {/* Pill badge */}
          <div className="inline-flex  mt-10 gap-2 px-4 py-2 rounded-[15px] bg-white border border-gray-200">
            <img src={coinbaseLogo} alt="" className="w-5 h-5 " aria-hidden  />
            <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">Base App</span>
          </div>

          {/* Heading */}
          <h4 className="text-4xl xl:text-5xl font-semibold mr-10 text-black leading-tight">
            Countless ways to earn<br />
            crypto with the Base App.
          </h4>

          {/* Description */}
          <p className="text-lg text-gray-600 mr-7">
            An everything app to trade, create, discover, and chat, all in one place.
          </p>

          {/* CTA */}
          <Link
            to="/learn"
            className="px-8 py-4  rounded-full bg-black text-white font-bold text-base hover:bg-gray-800 transition-colors cursor-pointer"
          >
            Learn more
          </Link>
        </div>
      </section>

      {/* New to crypto? Learn some crypto basics */}
      <section className="bg-gray-100 px-6 py-16 lg:py-24">
        <div className="max-w-6xl mx-auto">
          {/* Top: heading left, description + button right */}
          <div className="grid lg:grid-cols-2 gap-5 lg:gap-16 items-start mb-12 lg:mb-16">
            <h2 className="text-4xl lg:text-5xl xl:text-6xl font-medium text-black leading-tight">
              New to crypto?<br />
              Learn some<br />
              crypto basics
            </h2>
            <div className="space-y-6">
              <p className="text-lg text-gray-600 max-w-md">
                Beginner guides, practical tips, and market updates for first-timers, experienced investors, and everyone in between.
              </p>
              <Link
                to="/learn"
                className="px-7 py-3 rounded-full bg-black text-white font-bold text-base hover:bg-gray-800 transition-colors cursor-pointer"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Three cards */}
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {/* Card 1: Crypto Ecosystem */}
            <div className="rounded-2xl space-y-5">
              <img src={usdcDigital} alt='digital' className=' rounded-[40px] w-[400px] h-[200px]' />
              
              <a href="https://www.coinbase.com/usdc" className="text-black xl:text-4xl hover:underline">
                USDC: The digital <br/>
                dollar for the global <br/>
                crypto economy
              </a>

              <p className='mt-5 text-gray-500 text-lg'>
                Coinbase believes crypto will be part of the 
                solution for creating an open financial system<br/> 
                that is both more efficient and more...
              </p>
            </div>
     

            {/* Card 2: Crypto & Traditional Finance / Mobile */}
            <div className="rounded-2xl space-y-5">
              <img src={cryptoReplace} alt='replace' className=' rounded-[40px] w-[400px] h-[200px]' />
              
              <a href="https://www.coinbase.com/usdc" className="text-black xl:text-4xl hover:underline">
                Can crypto really <br/>
                replace your <br/>
                bank account?
              </a>

              <p className='mt-5 text-gray-500 text-lg'>
                If you're a big enough fan of crypto, you've
                probably heard the phrase "be your own bank"
                or the term bankless -- the idea been that...
              </p>
            </div>

            {/* Card 3: Bitcoin Network / Features */}
            <div className="rounded-2xl space-y-5">
              <img src={investCrypto} alt='digital' className=' rounded-[40px] w-[400px] h-[200px]' />
              
              <a href="https://www.coinbase.com/usdc" className="text-black xl:text-4xl hover:underline">
                When is the best time<br/>
                to invest your crypto 
           
              </a>

              <p className='mt-5 text-gray-500 text-lg'>
                Cryptocurrencies like bitcoin can experience
                daily (or even hourly) price votatility. As with<br/> 
                any kind of investment, votatility may cause... 
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className=" mr-2 mt-10 px-3 py-10 lg:py-24 grid lg:grid-cols-2 ">
         {/* Right: text + form */}
         <div className="space-y-2 ml-5 mt-20 pl-4 pr-3" >
          <h1 className=" xl:text-7xl font-semibold leading-tight text-black">
            Take control <br/> of your money
          </h1>

          <p className="text-xl text-gray-600 ">
             Start your portfolio today and discover crypto
          </p>

          <div className="flex flex-col sm:flex-row gap-5  pt-3">
            <input
              type="email"
              placeholder="satoshi@nakamoto.com"
              className="w-95 px-3 py-4 rounded-2xl border border-gray-500 placeholder-gray-700 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-600"
            />
            <Link
              to="/signup"
              className="px-6 py-3 rounded-full bg-blue-600 text-white text-center font-semibold text-base hover:bg-blue-700 transition-colors"
            >
              Sign up
            </Link>
          </div>

        </div>

        <div>
          <img src={takeControl} className='w-[600px] mr-5'/>
        </div>
      </section>

      <section className='mr-20 ml-20 mb-20 mt-10 flex justify-center '>
        <div className='text-gray-500 text-sm text-center'>
        <p>
          DEX trading is offered by Coinbase Bermuda Technologies Ltd.<br/><br/>
          Products and features may not be available in all regions. Information is for or informational purposes only, and is not (i) an offer, or<br/>
          solicitation of an offer, to invest in, or to buy or sell, any interests or shares, or to participate in any investment or trading strategy or (ii)<br/>
          intended to provide accounting, legal, or tax advice, or investment recommendations. Trading cryptocurrency comes with risk.
          </p>

        </div>
      </section>

    </main>
  )
}