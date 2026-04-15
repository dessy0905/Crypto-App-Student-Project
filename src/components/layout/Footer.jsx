import React from "react";
import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { FaXTwitter, FaLinkedin, FaInstagram, FaTiktok } from "react-icons/fa6";
import coinbaseLogo from "../../assets/coinbase-logo.png"

const Footer=() => {
  return (
    <footer className="px-10 py-8 bg-gray-100 ">
      <div>
        <div>
          <h2 className="text-lg font-semibold text-center pb-4 mt-1 text-red-500">Disclaimer:  It is a demo project and users should not enter real personal information.</h2>
        </div>
        <div className="md:grid grid-cols-[200px_repeat(auto-fit,minmax(220px,1fr))] gap-2 text-[17px]  mb-10">
          <div>
            <img
              src={coinbaseLogo}
              alt="logo"
              className="w-16 h-16"
            />
          </div>

          <div className="">
            <h3 className="font-semibold mb-1">Company</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Careers</a>
              </li>
              <li>
                <a href="#">Affiliates</a>
              </li>
              <li>
                <a href="#">Blog</a>
              </li>
              <li>
                <a href="#">Press</a>
              </li>
              <li>
                <a href="#">Security</a>
              </li>
              <li>
                <a href="#">Investors</a>
              </li>
              <li>
                <a href="#">Vendors</a>
              </li>
              <li>
                <a href="#">Legal & privacy</a>
              </li>
              <li>
                <a href="#">Cookie policy</a>
              </li>
              <li>
                <a href="#">Cookie preferences</a>
              </li>
              <li>
                <a href="#">Digital Asset Disclosures</a>
              </li>
            </ul>

            <h3 className="font-semibold mt-8 mb-1">Learn</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <Link to="/learn">Explore</Link>
              </li>
              <li>
                <Link to="/learn">Market statistics</Link>
              </li>
              <li>
                <Link to="/learn">Coinbase Bytes newsletter</Link>
              </li>
              <li>
                <Link to="/learn">Crypto basics</Link>
              </li>
              <li>
                <Link to="/learn">Tips & tutorials</Link>
              </li>
              <li>
                <Link to="/learn">Crypto glossary</Link>
              </li>
              <li>
                <Link to="/learn">Market updates</Link>
              </li>
              <li>
                <Link to="/learn">What is Bitcoin?</Link>
              </li>
              <li>
                <Link to="/learn">What is crypto?</Link>
              </li>
              <li>
                <Link to="/learn">What is a blockchain?</Link>
              </li>
              <li>
                <Link to="/learn">How to set up a crypto wallet?</Link>
              </li>
              <li>
                <Link to="/learn">How to send crypto?</Link>
              </li>
              <li>
                <Link to="/learn">Taxes</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Individuals</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="#">Buy & sell</a>
              </li>
              <li>
                <a href="#">Earn free crypto</a>
              </li>
              <li>
                <a href="#">Base App</a>
              </li>
              <li>
                <a href="#">Coinbase One</a>
              </li>
              <li>
                <a href="#">Debit Card</a>
              </li>
            </ul>
            <h3 className="font-semibold mt-8 mb-1">Businesses</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="#">Asset Listings</a>
              </li>
              <li>
                <a href="#">Coinbase Business</a>
              </li>
              <li>
                <a href="#">Payments</a>
              </li>
              <li>
                <a href="#">Commerce</a>
              </li>
              <li>
                <a href="#">Token Manager</a>
              </li>
            </ul>
            <h3 className="font-semibold mt-8 mb-1">Institutions</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="#">Prime</a>
              </li>
              <li>
                <a href="#">Staking</a>
              </li>
              <li>
                <a href="#">Exchange</a>
              </li>
              <li>
                <a href="#">International Exchange</a>
              </li>
              <li>
                <a href="#">Derivatives Exchange</a>
              </li>
              <li>
                <a href="#">Verified Pools</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Developers</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="#">Developer Platform</a>
              </li>
              <li>
                <a href="#">Base</a>
              </li>
              <li>
                <a href="#">Server Wallets</a>
              </li>
              <li>
                <a href="#">Embedded Wallets</a>
              </li>
              <li>
                <a href="#">Base Accounts (Smart Wallets)</a>
              </li>
              <li>
                <a href="#">Onramp & Offramp</a>
              </li>
              <li>
                <a href="#">x402</a>
              </li>
              <li>
                <a href="#">Trade API</a>
              </li>
              <li>
                <a href="#">Paymaster</a>
              </li>
              <li>
                <a href="#">OnchainKit</a>
              </li>
              <li>
                <a href="#">Data API</a>
              </li>
              <li>
                <a href="#">Verifications</a>
              </li>
              <li>
                <a href="#">Node</a>
              </li>
              <li>
                <a href="#">AgentKit</a>
              </li>
              <li>
                <a href="#">Staking</a>
              </li>
              <li>
                <a href="#">Faucet</a>
              </li>
              <li>
                <a href="#">Exchange API</a>
              </li>
              <li>
                <a href="#">International Exchange API</a>
              </li>
              <li>
                <a href="#">Prime API</a>
              </li>
              <li>
                <a href="#">Derivatives API</a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-1">Support</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="#">Help center</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
              <li>
                <a href="#">Create account</a>
              </li>
              <li>
                <a href="#">ID verification</a>
              </li>
              <li>
                <a href="#">Account information</a>
              </li>
              <li>
                <a href="#">Payment methods</a>
              </li>
              <li>
                <a href="#">Account access</a>
              </li>
              <li>
                <a href="#">Supported crypto</a>
              </li>
              <li>
                <a href="#">Status</a>
              </li>
            </ul>

            <h3 className="font-semibold mt-8 mb-1">Asset prices</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="#">Bitcoin price</a>
              </li>
              <li>
                <a href="#">Ethereum price</a>
              </li>
              <li>
                <a href="#">Solana price</a>
              </li>
              <li>
                <a href="#">XRP price</a>
              </li>
            </ul>

            <h3 className="font-semibold mt-8 mb-1">Stock prices</h3>
            <ul className="text-gray-600 space-y-1">
              <li>
                <a href="#">NVIDIA price</a>
              </li>
              <li>
                <a href="#">Apple price</a>
              </li>
              <li>
                <a href="#">Microsoft price</a>
              </li>
              <li>
                <a href="#">Amazon price</a>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex gap-10">
          <FaXTwitter className=" w-5 h-5" />
          <FaLinkedin className=" w-5 h-5" />
          <FaInstagram className=" w-5 h-5" />
          <FaTiktok className=" w-5 h-5" />
        </div>
      </div>
      <hr className="my-5 border-gray-400" />
      <div className="hidden md:flex justify-between text-sm">
        <div>
          <p>
            &copy; 2026 Coinbase{" "}
            <span className="text-gray-600">
              &bull; Privacy &bull; Terms & Conditions
            </span>
          </p>
        </div>
        <div className="flex items-center text-gray-600 space-x-2">
          <CiGlobe className="w-5 h-5 stroke-1" />
          <span>Global &bull; English</span>
        </div>
      </div>
      <div className="md:hidden justify-between text-gray-500 ">
        <div className="space-y-1">
          <p className="text-black">&copy; 2026 Coinbase</p>
          <p>Privacy</p>
          <p>Terms & Conditions</p>
        </div>
        <div className="flex items-center space-x-2">
          <CiGlobe className="w-5 h-5 stroke-1" />
          <span>Global &bull; English</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
