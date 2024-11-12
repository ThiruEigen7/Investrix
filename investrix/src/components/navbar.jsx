import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import financialImage from '../assets/images/—Pngtree—financial material_4391789.png';
import stockImage from '../assets/images/stock-image.png';
import mutualFundImage from '../assets/images/mutual-fund-image.png';
import cryptoImage from '../assets/images/crypto-image.png';
import dropshippingImage from '../assets/images/dropshipping-image.png';
import chatbotIcon from '../assets/images/chatbot-icon.png'; // Import chatbot icon
import '../styles/navbar.css';
import Chatbot from './Chatbot'; // Import the Chatbot component

function Navbar() {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(prevShowChatbot => !prevShowChatbot);
  };

  return (
    <>
      <nav className="navbar">
        <div className="nav-left">
          <h1 className="logo">Investrix</h1>
        </div>

        <div className="nav-middle">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/ai" className="nav-link">AI</Link>
          <Link to="/virtual-trading" className="nav-link">Virtual Trading</Link>
        </div>

        <div className="nav-right">
          <Link to="/login" className="btn">Login</Link>
          <Link to="/signup" className="btn">Sign Up</Link>
        </div>
      </nav>

      <div className="content">
        <div className="content-image">
          <img src={financialImage} alt="Investrix Financial" />
        </div>

        <div className="content-text">
          <h2 className="content-heading">Investrix</h2>
          <p className="content-description">
            Welcome to Investrix, a cutting-edge platform that brings the power of AI-driven insights and advanced virtual trading to your fingertips. Our tools are designed to help traders optimize their financial strategies, leveraging powerful analytics and predictive algorithms to guide decision-making in the dynamic world of financial markets.
          </p>
        </div>
      </div>

      <div className="investment-options">
        <h2 className="section-heading">Investment Options</h2>

        <div className="investment-section">
          <h3 className="investment-title">Stocks</h3>
          <p className="investment-description">
            Stocks represent ownership in a company and entitle the holder to a part of the company's profits.
          </p>
          <img src={stockImage} alt="Stocks" className="investment-image" />
          <Link to="/stocks" className="learn-more">Learn More</Link>
        </div>

        <div className="investment-section">
          <h3 className="investment-title">Mutual Funds</h3>
          <p className="investment-description">
            Mutual Funds pool money from multiple investors to invest in stocks, bonds, or other assets.
          </p>
          <img src={mutualFundImage} alt="Mutual Funds" className="investment-image" />
          <Link to="/mutual-funds" className="learn-more">Learn More</Link>
        </div>

        <div className="investment-section">
          <h3 className="investment-title">Cryptocurrency</h3>
          <p className="investment-description">
            Cryptocurrencies like Bitcoin, Ethereum, and others offer decentralized, digital alternatives to traditional currencies.
          </p>
          <img src={cryptoImage} alt="Cryptocurrency" className="investment-image" />
          <Link to="/crypto" className="learn-more">Learn More</Link>
        </div>

        <div className="investment-section">
          <h3 className="investment-title">Dropshipping</h3>
          <p className="investment-description">
            Dropshipping is a retail fulfillment method where a store doesn’t keep the products it sells in stock.
          </p>
          <img src={dropshippingImage} alt="Dropshipping" className="investment-image" />
          <Link to="/dropshipping" className="learn-more">Learn More</Link>
        </div>
      </div>

      <div className="chatbot-button" onClick={toggleChatbot}>
        <img src={chatbotIcon} alt="Chatbot" className="chatbot-icon" />
      </div>

      {showChatbot && <Chatbot />}
    </>
  );
}

export default Navbar;
