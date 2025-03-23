"use client";

import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-white to-gray-50 dark:from-gray-900 dark:to-black">
      {/* Header */}
      <header className="container mx-auto py-6 px-4 flex justify-between items-center relative z-10">
        <div className="flex items-center">
          <Image 
            src="/teeapi-logo.svg" 
            alt="TeeAPI - Secure Blockchain API Bridge" 
            width={120} 
            height={30} 
            priority
          />
        </div>
        <nav className="hidden md:flex space-x-6 items-center">
          <a href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">Why TEE</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#main-features" className="text-sm font-medium hover:text-blue-600 transition-colors">Features</a>
          <a href="#use-cases" className="text-sm font-medium hover:text-blue-600 transition-colors">Use Cases</a>
          <a href="#documentation" className="text-sm font-bold bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors">Try It Now</a>
        </nav>
        
        {/* Mobile menu button */}
        <button 
          className="md:hidden flex items-center"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={mobileMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>
      </header>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white dark:bg-gray-800 shadow-lg z-20 py-4 px-4">
          <nav className="flex flex-col space-y-4">
            <a 
              href="#features" 
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Why TEE
            </a>
            <a 
              href="#how-it-works" 
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              How It Works
            </a>
            <a 
              href="#main-features" 
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Features
            </a>
            <a 
              href="#use-cases" 
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Use Cases
            </a>
            <a 
              href="#documentation" 
              className="text-sm font-bold bg-blue-600 text-white px-3 py-1.5 rounded-md hover:bg-blue-700 transition-colors inline-block w-fit"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try It Now
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-12 flex flex-col items-center text-center relative">
        {/* Background Elements */}
        <div className="absolute -z-10 top-0 left-1/2 transform -translate-x-1/2 w-full h-full overflow-hidden">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
          <div className="absolute top-1/3 right-1/4 w-80 h-80 rounded-full bg-cyan-500/10 blur-3xl"></div>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
          The Secure Bridge Between <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">Blockchain</span> and <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">APIs</span>
        </h1>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mb-10">
          TeeAPI enables smart contracts to securely consume data from external APIs while maintaining decentralization and security principles.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="#contact" className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors">
            Get Started
          </a>
          <a href="#use-cases" className="px-8 py-3 rounded-full border border-gray-300 dark:border-gray-700 font-medium hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
            Explore Use Cases
          </a>
        </div>
      </section>

      {/* Visual Connection */}
      <div className="flex justify-center py-6">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
      </div>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Key Benefits</h2>
        <div className="grid md:grid-cols-3 gap-10">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Tamper-Proof</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Execution environment that cannot be modified, ensuring data integrity and security.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Trustless</h3>
            <p className="text-gray-600 dark:text-gray-300">
              No need to trust intermediaries or centralized services for API calls or data processing.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Data Privacy</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Sensitive API keys and private data remain protected while enabling smart contract functionality.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Connection */}
      <div className="flex justify-center py-6">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">How TeeAPI Works</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative py-6">
            {/* Workflow diagram */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 transform -translate-x-1/2"></div>
            
            {/* Step 1 */}
            <div className="relative flex items-center mb-10">
              <div className="flex-1 pr-8 md:pr-16 text-right">
                <h3 className="text-xl font-semibold mb-2">1. Request</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  A smart contract calls the Oracle contract to request external API data
                </p>
              </div>
              <div className="absolute left-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transform -translate-x-1/2 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M9 19l3 3m0 0l3-3m-3 3V10" />
                </svg>
              </div>
              <div className="flex-1 pl-8 md:pl-16">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <code className="text-sm text-blue-600 dark:text-blue-400 font-mono">Smart Contract --&gt; Oracle Contract</code>
                </div>
              </div>
            </div>
            
            {/* Step 2 */}
            <div className="relative flex items-center mb-10">
              <div className="flex-1 pr-8 md:pr-16 text-right">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <code className="text-sm text-blue-600 dark:text-blue-400 font-mono">TEE Service</code>
                </div>
              </div>
              <div className="absolute left-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transform -translate-x-1/2 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div className="flex-1 pl-8 md:pl-16">
                <h3 className="text-xl font-semibold mb-2">2. Execution</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The TEE service monitors for request events, makes the API call, and processes the response
                </p>
              </div>
            </div>
            
            {/* Step 3 */}
            <div className="relative flex items-center">
              <div className="flex-1 pr-8 md:pr-16 text-right">
                <h3 className="text-xl font-semibold mb-2">3. Fulfillment</h3>
                <p className="text-gray-600 dark:text-gray-300">
                  The TEE service submits the API response back to the Oracle contract, which forwards it to the requesting contract
                </p>
              </div>
              <div className="absolute left-1/2 w-12 h-12 rounded-full bg-blue-600 flex items-center justify-center transform -translate-x-1/2 z-10">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div className="flex-1 pl-8 md:pl-16">
                <div className="p-4 bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-100 dark:border-gray-700">
                  <code className="text-sm text-blue-600 dark:text-blue-400 font-mono">Oracle Contract --&gt; Smart Contract</code>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Connection */}
      <div className="flex justify-center py-6">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
      </div>

      {/* Features Section */}
      <section id="main-features" className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Main Features</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">REST API Integration</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Secure bridge enabling smart contracts to request and receive data from any external web service while maintaining blockchain security principles.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Selective Data Extraction</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Extract only the specific fields needed from API responses, keeping all other data private and off-chain to ensure maximum privacy.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Input Encryption</h3>
            <p className="text-gray-600 dark:text-gray-300">
              End-to-end encryption for sensitive request components including URLs, query parameters, and API tokens, preventing exposure on the blockchain.
            </p>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Confidential Verification</h3>
            <p className="text-gray-600 dark:text-gray-300">
              Perform private condition checks against API data within the TEE, returning only boolean results while keeping actual values hidden from the blockchain.
            </p>
          </div>
        </div>
      </section>

      {/* Visual Connection */}
      <div className="flex justify-center py-6">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
      </div>

      {/* Use Cases Section */}
      <section id="use-cases" className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Example Use Cases</h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Parametric Insurance</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Create trustless insurance policies with automatic claims processing based on predefined thresholds.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Earthquake magnitude detection</li>
              <li>Flight delays verification</li>
              <li>Weather data for crop insurance</li>
             
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 12l3-3 3 3 4-4M8 21l4-4 4 4M3 4h18M4 4h16v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Prediction Markets</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
            Secure and trustless verification of outcomes from official sources, eliminating data manipulation risk.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Sports game results</li>
              <li>Company earnings releases and KPIs</li>
              <li>Political and social event outcomes</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">DeFi Loans</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Verify real-world financial information for automated loan approvals without exposing sensitive data.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Bank account balance verification</li>
              <li>Credit score assessment</li>
              <li>Income verification</li>
            </ul>
          </div>
          <div className="p-6 rounded-xl bg-white dark:bg-gray-800 shadow-sm border border-gray-100 dark:border-gray-700">
            <div className="w-12 h-12 mb-4 flex items-center justify-center rounded-full bg-blue-100 dark:bg-blue-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-semibold mb-2">Climate & Supply Chain</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-4">
              Integrate IoT sensor data with blockchain for climate and supply chain applications.
            </p>
            <ul className="list-disc pl-5 text-gray-600 dark:text-gray-300 space-y-1">
              <li>Weather data monitoring</li>
              <li>Air quality measurements</li>
              <li>Supply chain condition verification</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Visual Connection */}
      <div className="flex justify-center py-6">
        <div className="w-1 h-8 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
      </div>

      {/* Documentation Section */}
      <section id="documentation" className="container mx-auto px-4 py-10">
        <h2 className="text-3xl font-bold text-center mb-10">Developer Documentation</h2>
        
        <div className="max-w-4xl mx-auto mb-10">
          <h3 className="text-2xl font-semibold mb-4">Getting Started with TeeAPI</h3>
          <p className="text-gray-600 dark:text-gray-300 mb-8">
            TeeAPI makes it easy to securely connect your smart contracts with any external API. Follow these examples to integrate TeeAPI into your projects.
          </p>

          {/* Tabs */}
          <div className="mb-8">
            <div className="flex border-b border-gray-200 dark:border-gray-700 mb-4">
              <button className="px-6 py-2 border-b-2 border-blue-600 text-blue-600 font-medium">Flight Delay Insurance</button>
              {/* Hide Bank Balance Verification button for now 
              <button className="px-6 py-2 text-gray-500 dark:text-gray-400 font-medium">Bank Balance Verification</button>
              */}
            </div>
          </div>

          {/* Flight Delay Example */}
          <div className="block">
            <h4 className="text-xl font-semibold mb-4">Example: Flight Delay Insurance</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Create a smart contract that automatically pays out insurance claims when a flight is delayed.
            </p>

            <div className="mb-6">
              <h5 className="font-semibold mb-2">Step 1: Initialize TeeAPI in your contract</h5>
              <div className="bg-gray-800 rounded-lg p-4 overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: `<pre class="text-sm font-mono"><span class="comment">// SPDX-License-Identifier: MIT</span>
<span class="keyword">pragma solidity</span> ^0.8.0;

<span class="keyword">import</span> <span class="string">"@teeapi/contracts/RestApiClient.sol"</span>;
<span class="keyword">import</span> <span class="string">"@solady/src/utils/SafeTransferLib.sol"</span>;

<span class="keyword">contract</span> <span class="class-name">FlightDelayInsurance</span> <span class="keyword">is</span> <span class="class-name">RestApiClient</span> {
    <span class="comment">// Amount to pay out for delayed flights</span>
    <span class="keyword">uint256</span> <span class="keyword">constant</span> <span class="keyword">public</span> INSURANCE_PAYOUT = 0.001 ether;
    
    <span class="comment">// Flight information structure</span>
    <span class="keyword">struct</span> <span class="class-name">FlightInfo</span> {
        <span class="keyword">bool</span> delayed;
        <span class="keyword">uint256</span> delayMinutes;
        <span class="keyword">bool</span> claimed;
        <span class="keyword">uint256</span> claimTimestamp;
    }
    
    <span class="comment">// Flight identifier structure</span>
    <span class="keyword">struct</span> <span class="class-name">FlightId</span> {
        <span class="keyword">string</span> flightNumber;
        <span class="keyword">string</span> date;
    }
    
    <span class="comment">// Mappings to store flight data and claims</span>
    <span class="keyword">mapping</span>(<span class="keyword">string</span> => <span class="keyword">mapping</span>(<span class="keyword">string</span> => <span class="class-name">FlightInfo</span>)) <span class="keyword">public</span> flightData;
    <span class="keyword">mapping</span>(<span class="keyword">bytes32</span> => <span class="keyword">address</span>) <span class="keyword">public</span> claimers;
    <span class="keyword">mapping</span>(<span class="keyword">bytes32</span> => <span class="class-name">FlightId</span>) <span class="keyword">public</span> flightIds;
    
    <span class="comment">// Events</span>
    <span class="keyword">event</span> <span class="function">FlightDelayVerified</span>(<span class="keyword">string</span> flightNumber, <span class="keyword">string</span> date, <span class="keyword">bool</span> delayed, <span class="keyword">uint256</span> delayMinutes);
    <span class="keyword">event</span> <span class="function">ClaimPaid</span>(<span class="keyword">address</span> claimer, <span class="keyword">string</span> flightNumber, <span class="keyword">string</span> date, <span class="keyword">uint256</span> amount);
    
    <span class="comment">/**
     * @dev Constructor
     * @param _oracle Address of the Oracle contract
     */</span>
    <span class="function">constructor</span>(<span class="keyword">address</span> _oracle) <span class="class-name">RestApiClient</span>(_oracle) {
        _initializeOwner(msg.sender);
    }
}</pre>` }}/>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold mb-2">Step 2: Create the claim initiation function</h5>
              <div className="bg-gray-800 rounded-lg p-4 overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: `<pre class="text-sm font-mono"><span class="comment">/**
 * @dev Check if a flight is delayed
 * @param flightNumber IATA flight number (e.g., UA1606)
 * @return requestId The unique identifier for the request
 */</span>
<span class="function">function</span> <span class="function">initiateClaim</span>(<span class="keyword">string</span> <span class="keyword">memory</span> flightNumber) <span class="keyword">external</span> <span class="keyword">payable</span> <span class="keyword">returns</span> (<span class="keyword">bytes32</span>) {
    <span class="comment">// Create query parameters with encrypted API key</span>
    <span class="class-name">IOracle</span>.<span class="class-name">KeyValue</span>[] <span class="keyword">memory</span> queryParams = <span class="keyword">new</span> <span class="class-name">IOracle</span>.<span class="class-name">KeyValue</span>[](2);
    queryParams[0] = <span class="class-name">IOracle</span>.<span class="class-name">KeyValue</span>({
        key: <span class="string">"access_key"</span>,
        value: <span class="string">"BKYsjhVlGzVth8axoDpWJNxstMuU+W8rgLdye1MsAiWIfLbUg5xVfST34kp/b7DvI1SLmECJKuBplDxdDxF1NrlT/f6w/XX7Unp0i3E2Aygi85W8nZbGjSk07BVJO4xlxuopzJDbbZceJrLhih3royD/9xIWyLy34n32SvbD9mAl"</span>,
        encrypted: <span class="keyword">true</span>
    });
    queryParams[1] = <span class="class-name">IOracle</span>.<span class="class-name">KeyValue</span>({
        key: <span class="string">"flight_iata"</span>, 
        value: flightNumber, 
        encrypted: <span class="keyword">false</span>
    });

    <span class="comment">// Define conditions for verification</span>
    <span class="class-name">IOracle</span>.<span class="class-name">Condition</span> <span class="keyword">memory</span> flightLanded = <span class="class-name">IOracle</span>.<span class="class-name">Condition</span>({
        operator: <span class="string">"eq"</span>, 
        value: <span class="string">"landed"</span>, 
        encrypted: <span class="keyword">false</span>
    });
    <span class="class-name">IOracle</span>.<span class="class-name">Condition</span> <span class="keyword">memory</span> isDelayed = <span class="class-name">IOracle</span>.<span class="class-name">Condition</span>({
        operator: <span class="string">"gt"</span>, 
        value: <span class="string">"0"</span>, 
        encrypted: <span class="keyword">false</span>
    });
    <span class="class-name">IOracle</span>.<span class="class-name">Condition</span> <span class="keyword">memory</span> noCondition = <span class="class-name">IOracle</span>.<span class="class-name">Condition</span>({
        operator: <span class="string">""</span>, 
        value: <span class="string">""</span>, 
        encrypted: <span class="keyword">false</span>
    });

    <span class="comment">// Create response fields with conditions to verify</span>
    <span class="class-name">IOracle</span>.<span class="class-name">ResponseField</span>[] <span class="keyword">memory</span> responseFields = <span class="keyword">new</span> <span class="class-name">IOracle</span>.<span class="class-name">ResponseField</span>[](5);

    <span class="comment">// Verify if flight has landed</span>
    responseFields[0] = <span class="class-name">IOracle</span>.<span class="class-name">ResponseField</span>({
        path: <span class="string">"$.data[0].flight_status"</span>, 
        responseType: <span class="string">"string"</span>, 
        condition: flightLanded
    });

    <span class="comment">// Verify if arrival delay is greater than 0</span>
    responseFields[1] = <span class="class-name">IOracle</span>.<span class="class-name">ResponseField</span>({
        path: <span class="string">"$.data[0].arrival.delay"</span>, 
        responseType: <span class="string">"uint256"</span>, 
        condition: isDelayed
    });

    <span class="comment">// Extract the actual delay minutes</span>
    responseFields[2] = <span class="class-name">IOracle</span>.<span class="class-name">ResponseField</span>({
        path: <span class="string">"$.data[0].arrival.delay"</span>, 
        responseType: <span class="string">"uint256"</span>, 
        condition: noCondition
    });

    <span class="comment">// Extract the flight number</span>
    responseFields[3] = <span class="class-name">IOracle</span>.<span class="class-name">ResponseField</span>({
        path: <span class="string">"$.data[0].flight.iata"</span>, 
        responseType: <span class="string">"string"</span>, 
        condition: noCondition
    });

    <span class="comment">// Extract the flight date</span>
    responseFields[4] = <span class="class-name">IOracle</span>.<span class="class-name">ResponseField</span>({
        path: <span class="string">"$.data[0].flight_date"</span>, 
        responseType: <span class="string">"string"</span>, 
        condition: noCondition
    });

    <span class="comment">// Make the request</span>
    <span class="keyword">bytes32</span> requestId = makeRequest({
        method: <span class="class-name">IOracle</span>.<span class="class-name">HttpMethod</span>.GET,
        url: <span class="string">"https://api.aviationstack.com/v1/flights"</span>,
        urlEncrypted: <span class="keyword">false</span>,
        headers: <span class="keyword">new</span> <span class="class-name">IOracle</span>.<span class="class-name">KeyValue</span>[](0),
        queryParams: queryParams,
        body: <span class="string">""</span>,
        bodyEncrypted: <span class="keyword">false</span>,
        responseFields: responseFields
    });

    <span class="comment">// Store claim information</span>
    claimers[requestId] = msg.sender;
    flightIds[requestId] = <span class="class-name">FlightId</span>({flightNumber: flightNumber, date: <span class="string">""</span>});
    <span class="keyword">return</span> requestId;
}

<span class="comment">/**
 * @dev Fund the contract to pay for insurance claims
 */</span>
<span class="function">function</span> <span class="function">fundContract</span>() <span class="keyword">external</span> <span class="keyword">payable</span> <span class="keyword">onlyOwner</span> {
    <span class="comment">// Simply accepts ETH sent to the contract</span>
}

<span class="comment">/**
 * @dev Withdraw funds from the contract (owner only)
 */</span>
<span class="function">function</span> <span class="function">withdrawFunds</span>() <span class="keyword">external</span> <span class="keyword">onlyOwner</span> {
    <span class="class-name">SafeTransferLib</span>.safeTransferAllETH(owner());
}

<span class="comment">/**
 * @dev Get flight information
 * @param flightNumber IATA flight number
 * @param date Flight date in YYYY-MM-DD format
 * @return Information about the flight
 */</span>
<span class="function">function</span> <span class="function">getFlightInfo</span>(<span class="keyword">string</span> <span class="keyword">memory</span> flightNumber, <span class="keyword">string</span> <span class="keyword">memory</span> date) <span class="keyword">external</span> <span class="keyword">view</span> <span class="keyword">returns</span> (<span class="class-name">FlightInfo</span> <span class="keyword">memory</span>) {
    <span class="keyword">return</span> flightData[flightNumber][date];
}

<span class="comment">/**
 * @dev Get flight information by requestId
 * @param requestId Unique identifier for the request
 * @return Information about the flight
 */</span>
<span class="function">function</span> <span class="function">getFlightInfoById</span>(<span class="keyword">bytes32</span> requestId) <span class="keyword">external</span> <span class="keyword">view</span> <span class="keyword">returns</span> (<span class="class-name">FlightInfo</span> <span class="keyword">memory</span>) {
    <span class="class-name">FlightId</span> <span class="keyword">memory</span> flightId = flightIds[requestId];
    <span class="keyword">return</span> flightData[flightId.flightNumber][flightId.date];
}

<span class="comment">/**
 * @dev Implementation of _handleResponse from RestApiClient
 * @param requestId Unique identifier for the request
 * @param success Whether the API request was successful
 * @param data ABI-encoded response data according to the requested fields
 */</span>
<span class="function">function</span> <span class="function">_handleResponse</span>(<span class="keyword">bytes32</span> requestId, <span class="keyword">bool</span> success, <span class="keyword">bytes</span> <span class="keyword">calldata</span> data) <span class="keyword">internal</span> <span class="keyword">override</span> {
    <span class="keyword">address</span> claimer = claimers[requestId];

    (<span class="keyword">bool</span> isLanded, <span class="keyword">bool</span> isDelayed, <span class="keyword">uint256</span> delayMinutes, <span class="keyword">string</span> <span class="keyword">memory</span> flightNumber, <span class="keyword">string</span> <span class="keyword">memory</span> date) =
        abi.decode(data, (<span class="keyword">bool</span>, <span class="keyword">bool</span>, <span class="keyword">uint256</span>, <span class="keyword">string</span>, <span class="keyword">string</span>));

    <span class="comment">// Update flight data</span>
    <span class="class-name">FlightInfo</span> <span class="keyword">memory</span> flight = flightData[flightNumber][date];
    <span class="comment">// Return early if flight already exists</span>
    <span class="keyword">if</span> (flight.claimTimestamp != 0) {
        <span class="keyword">return</span>;
    }
    flight.delayed = isLanded && isDelayed;
    flight.delayMinutes = delayMinutes;

    <span class="keyword">emit</span> <span class="function">FlightDelayVerified</span>(flightNumber, date, flight.delayed, delayMinutes);
    <span class="keyword">if</span> (flight.delayed) {
        flight.claimed = <span class="keyword">true</span>;
        flight.claimTimestamp = block.timestamp;
        <span class="comment">// Transfer payout to claimant</span>
        <span class="class-name">SafeTransferLib</span>.safeTransferETH(claimer, INSURANCE_PAYOUT);
        <span class="keyword">emit</span> <span class="function">ClaimPaid</span>(claimer, flightNumber, date, INSURANCE_PAYOUT);
    }
    flightData[flightNumber][date] = flight;
    flightIds[requestId].date = date;
}</pre>` }}/>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold mb-2">Step 3: Implement the response handler</h5>
              <div className="bg-gray-800 rounded-lg p-4 overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: `<pre class="text-sm font-mono"><span class="comment">/**
 * @dev Implementation of _handleResponse from RestApiClient
 * @param requestId Unique identifier for the request
 * @param success Whether the API request was successful
 * @param data ABI-encoded response data according to the requested fields
 */</span>
<span class="function">function</span> <span class="function">_handleResponse</span>(<span class="keyword">bytes32</span> requestId, <span class="keyword">bool</span> success, <span class="keyword">bytes</span> <span class="keyword">calldata</span> data) <span class="keyword">internal</span> <span class="keyword">override</span> {
    <span class="keyword">address</span> claimer = claimers[requestId];

    (<span class="keyword">bool</span> isLanded, <span class="keyword">bool</span> isDelayed, <span class="keyword">uint256</span> delayMinutes, <span class="keyword">string</span> <span class="keyword">memory</span> flightNumber, <span class="keyword">string</span> <span class="keyword">memory</span> date) =
        abi.decode(data, (<span class="keyword">bool</span>, <span class="keyword">bool</span>, <span class="keyword">uint256</span>, <span class="keyword">string</span>, <span class="keyword">string</span>));

    <span class="comment">// Update flight data</span>
    <span class="class-name">FlightInfo</span> <span class="keyword">memory</span> flight = flightData[flightNumber][date];
    <span class="comment">// Return early if flight already exists</span>
    <span class="keyword">if</span> (flight.claimTimestamp != 0) {
        <span class="keyword">return</span>;
    }
    flight.delayed = isLanded && isDelayed;
    flight.delayMinutes = delayMinutes;

    <span class="keyword">emit</span> <span class="function">FlightDelayVerified</span>(flightNumber, date, flight.delayed, delayMinutes);
    <span class="keyword">if</span> (flight.delayed) {
        flight.claimed = <span class="keyword">true</span>;
        flight.claimTimestamp = block.timestamp;
        <span class="comment">// Transfer payout to claimant</span>
        <span class="class-name">SafeTransferLib</span>.safeTransferETH(claimer, INSURANCE_PAYOUT);
        <span class="keyword">emit</span> <span class="function">ClaimPaid</span>(claimer, flightNumber, date, INSURANCE_PAYOUT);
    }
    flightData[flightNumber][date] = flight;
    flightIds[requestId].date = date;
}</pre>` }}/>
              </div>
            </div>
          </div>

          {/* Commenting out Bank Balance Verification section
          <div className="hidden">
            <h4 className="text-xl font-semibold mb-4">Example 2: Bank Balance Verification</h4>
            <p className="text-gray-600 dark:text-gray-300 mb-6">Verify bank account balances for DeFi loans without exposing sensitive data.</p>

            <div className="mb-6">
              <h5 className="font-semibold mb-2">Step 1: Initialize TeeAPI in your contract</h5>
              <div className="bg-gray-800 rounded-lg p-4 overflow-auto">
                <div dangerouslySetInnerHTML={{ __html: `<pre class="text-sm font-mono"><span class="comment">// SPDX-License-Identifier: MIT</span>
<span class="keyword">pragma solidity</span> ^0.8.0;

<span class="keyword">import</span> <span class="string">"@teeapi/contracts/TeeApiConsumer.sol"</span>;

<span class="keyword">contract</span> <span class="class-name">BankBalanceVerification</span> <span class="keyword">is</span> <span class="class-name">TeeApiConsumer</span> {
    <span class="comment">// Loan details struct</span>
    <span class="keyword">struct</span> <span class="class-name">Loan</span> {
        <span class="keyword">address</span> borrower;
        <span class="keyword">uint256</span> loanAmount;
        <span class="keyword">uint256</span> interestRate;
        <span class="keyword">uint256</span> repaymentDate;
        <span class="keyword">bool</span> approved;
    }
    
    <span class="keyword">mapping</span>(<span class="keyword">uint256</span> => <span class="class-name">Loan</span>) <span class="keyword">public</span> loans;
    <span class="keyword">uint256</span> <span class="keyword">public</span> nextLoanId;
    
    <span class="function">constructor</span>(<span class="keyword">address</span> _teeApiAddress) <span class="class-name">TeeApiConsumer</span>(_teeApiAddress) {
        <span class="comment">// Initialize contract with TeeAPI Oracle address</span>
    }
}</pre>` }}/>
              </div>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold mb-2">Step 2: Create the loan application function</h5>
              <div className="bg-gray-800 rounded-lg p-4 overflow-auto">
                <pre className="text-sm font-mono" dangerouslySetInnerHTML={{ __html: `<span class="function">function</span> <span class="function">applyForLoan</span>(<span class="keyword">uint256</span> _loanAmount, <span class="keyword">uint256</span> _interestRate, <span class="keyword">uint256</span> _repaymentDate) <span class="keyword">external</span> {
    <span class="function">require</span>(_loanAmount > 0, <span class="string">"Loan amount must be greater than 0"</span>);
    <span class="function">require</span>(_interestRate > 0, <span class="string">"Interest rate must be greater than 0"</span>);
    <span class="function">require</span>(_repaymentDate > block.timestamp, <span class="string">"Repayment date must be in the future"</span>);
    
    <span class="keyword">uint256</span> loanId = nextLoanId++;
    
    loans[loanId] = <span class="class-name">Loan</span>({
        borrower: msg.sender,
        loanAmount: _loanAmount,
        interestRate: _interestRate,
        repaymentDate: _repaymentDate,
        approved: <span class="keyword">false</span>
    });
    
    <span class="keyword">emit</span> <span class="function">LoanApplied</span>(loanId, msg.sender, _loanAmount);
}` }} />
              </div>
            </div>

            <div className="mb-6">
              <h5 className="font-semibold mb-2">Step 3: Create loan approval function using TeeAPI</h5>
              <div className="bg-gray-800 rounded-lg p-4 overflow-auto">
                <pre className="text-sm font-mono" dangerouslySetInnerHTML={{ __html: `<span class="function">function</span> <span class="function">checkBankBalance</span>(<span class="keyword">uint256</span> _loanId) <span class="keyword">external</span> {
    <span class="class-name">Loan</span> <span class="keyword">storage</span> loan = loans[_loanId];
    <span class="function">require</span>(loan.borrower != <span class="keyword">address</span>(0), <span class="string">"Loan does not exist"</span>);
    <span class="function">require</span>(!loan.approved, <span class="string">"Loan already approved"</span>);
    
    <span class="comment">// Define API request</span>
    <span class="keyword">bytes</span> <span class="keyword">memory</span> encodedRequest = <span class="function">abi.encode</span>(
        <span class="string">"https://api.bankdata.com/balance"</span>, <span class="comment">// API endpoint</span>
        <span class="keyword">string</span>(<span class="function">abi.encodePacked</span>(<span class="string">"account="</span>, loan.borrower)),
        <span class="string">""</span>, <span class="comment">// No headers needed for this example</span>
        <span class="string">"$.balance"</span> <span class="comment">// JSON path to extract the balance</span>
    );
    
    <span class="comment">// Request API data through TeeAPI</span>
    <span class="function">requestTeeApi</span>(encodedRequest, <span class="keyword">this</span>.processBankBalance.<span class="property">selector</span>, <span class="function">abi.encode</span>(_loanId));
}` }} />
              </div>
            </div>
          </div>
          */}
        </div>

        <div className="bg-blue-50 dark:bg-gray-800 p-6 rounded-lg border border-blue-100 dark:border-gray-700 mt-12">
          <h4 className="text-lg font-semibold mb-2">Ready to Try TeeAPI?</h4>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            Interact with TeeAPI smart contracts on any EVM chain and see the power of secure API integration firsthand.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="https://abi.ninja/0x08B761d3D9300e56CaC0c85A438C9f6aC2e7DCd3/84532?methods=initiateClaim" target="_blank" rel="noopener noreferrer" className="px-6 py-2 rounded-lg bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center">
              Try It Now
            </a>
            <p className="text-sm text-gray-500 dark:text-gray-400 self-center">
              Powered by <a href="https://abi.ninja/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ABI Ninja</a> - Interact with smart contracts on any EVM chain
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-10 flex flex-col items-center text-center">
        <Image 
          src="/teeapi-logo.svg" 
          alt="TeeAPI - Secure Blockchain API Bridge" 
          width={120} 
          height={30} 
          priority
        />
        <p className="text-gray-600 dark:text-gray-300 mt-4">
          The Secure Bridge Between Blockchain and APIs
        </p>
        <p className="text-sm text-gray-500 dark:text-gray-400 mt-4">
          &copy; {new Date().getFullYear()} TeeAPI. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
