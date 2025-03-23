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
            alt="TeeAPI Logo" 
            width={120} 
            height={30} 
            priority
          />
        </div>
        <nav className="hidden md:flex space-x-6">
          <a href="#features" className="text-sm font-medium hover:text-blue-600 transition-colors">Features</a>
          <a href="#use-cases" className="text-sm font-medium hover:text-blue-600 transition-colors">Use Cases</a>
          <a href="#why" className="text-sm font-medium hover:text-blue-600 transition-colors">Why TEE</a>
          <a href="#how-it-works" className="text-sm font-medium hover:text-blue-600 transition-colors">How It Works</a>
          <a href="#contact" className="text-sm font-medium hover:text-blue-600 transition-colors">Try It Now</a>
        </nav>
        <a href="#contact" className="hidden md:block px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors">Try It Now</a>
        
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
              href="#why" 
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
              href="#contact" 
              className="text-sm font-medium hover:text-blue-600 transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try It Now
            </a>
            <a 
              href="#contact" 
              className="mt-2 px-4 py-2 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-colors text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Try It Now
            </a>
          </nav>
        </div>
      )}

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 flex flex-col items-center text-center relative">
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
      <div className="flex justify-center py-10">
        <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
      </div>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Key Benefits</h2>
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
      <div className="flex justify-center py-10">
        <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
      </div>

      {/* How It Works Section */}
      <section id="how-it-works" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">How TeeAPI Works</h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="relative py-10">
            {/* Workflow diagram */}
            <div className="absolute left-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-cyan-500 transform -translate-x-1/2"></div>
            
            {/* Step 1 */}
            <div className="relative flex items-center mb-16">
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
            <div className="relative flex items-center mb-16">
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
      <div className="flex justify-center py-10">
        <div className="w-1 h-16 bg-gradient-to-b from-blue-500 to-cyan-500 rounded-full"></div>
      </div>

      {/* Use Cases Section */}
      <section id="use-cases" className="container mx-auto px-4 py-20">
        <h2 className="text-3xl font-bold text-center mb-16">Example Use Cases</h2>
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

      {/* CTA Section */}
      <section id="contact" className="container mx-auto px-4 py-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Try TeeAPI?</h2>
        <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-10">
          Interact with TeeAPI smart contracts on any EVM chain and see the power of secure API integration firsthand.
        </p>
        <div className="flex flex-col items-center">
          <a 
            href="https://abi.ninja/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="px-8 py-3 rounded-full bg-blue-600 text-white font-medium hover:bg-blue-700 transition-colors inline-block mb-4"
          >
            Try It Now
          </a>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Powered by <a href="https://abi.ninja/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">ABI Ninja</a> - Interact with smart contracts on any EVM chain
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-800 py-12">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <Image 
                src="/teeapi-logo.svg" 
                alt="TeeAPI Logo" 
                width={100} 
                height={25} 
                className="mb-2"
              />
              <p className="text-gray-600 dark:text-gray-300 mt-2">Secure API Bridge for Blockchain</p>
            </div>
            <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-8">
              <a href="#features" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">Features</a>
              <a href="#use-cases" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">Use Cases</a>
              <a href="#why" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">Why TEE</a>
              <a href="#how-it-works" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">How It Works</a>
              <a href="#contact" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 transition-colors">Try It Now</a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-gray-700">
            <p className="text-center text-gray-600 dark:text-gray-300">© {new Date().getFullYear()} TeeAPI. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
