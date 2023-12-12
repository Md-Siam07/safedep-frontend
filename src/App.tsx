import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PackageInfo from './pages/PackageInfo';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <PackageInfo />
      <Footer />
    </div>
  );
};

export default App;
