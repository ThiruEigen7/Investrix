import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/navbar.jsx';
import Home from './components/home.jsx';
import AIPage from './components/AIpage.jsx';
import VirtualTrading from './components/virtualtrading.jsx';
import Login from './components/login.jsx';
import SignUp from './components/signup.jsx';
import Dashboard from './components/dashboard.jsx';
import Stocks from './components/stockpage.jsx';
import MutualFunds from './components/mutualfundspage.jsx'; // Import Mutual Funds component
import Crypto from './components/cryptocurrencypage.jsx'; // Import Crypto component
import Dropshipping from './components/dropshippingpage.jsx'; // Import Dropshipping component

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ai" element={<AIPage />} />
        <Route path="/virtual-trading" element={<VirtualTrading />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/stocks" element={<Stocks />} /> {/* Add Stocks route */}
        <Route path="/mutual-funds" element={<MutualFunds />} /> {/* Add Mutual Funds route */}
        <Route path="/crypto" element={<Crypto />} /> {/* Add Crypto route */}
        <Route path="/dropshipping" element={<Dropshipping />} /> {/* Add Dropshipping route */}
      </Routes>
    </Router>
  );
}

export default App;
