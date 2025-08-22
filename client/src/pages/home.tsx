import { useState, useEffect } from "react";
import { Calculator, Receipt, Percent, ArrowRightLeft, Github, Facebook, Instagram, BookOpen, MessageSquare, ExternalLink, Sun, Moon } from "lucide-react";
import { Link } from "wouter";
import TipCalculator from "@/components/calculators/tip-calculator";
import PercentageCalculator from "@/components/calculators/percentage-calculator";
import CurrencyConverter from "@/components/calculators/currency-converter";

export default function Home() {
  const [activeTab, setActiveTab] = useState<string>("tip");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  // Dark mode toggle functionality
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    setIsDarkMode(savedTheme === 'dark' || (!savedTheme && prefersDark));
  }, []);

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  const tabs = [
    { id: "tip", label: "Tip Calculator", icon: Receipt },
    { id: "percentage", label: "Percentage", icon: Percent },
    { id: "currency", label: "Currency Converter", icon: ArrowRightLeft },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 font-inter text-gray-900 dark:text-gray-100 min-h-screen transition-colors">
      {/* Header */}
      <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700 transition-colors">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Triocalc</h1>
                <p className="text-sm text-gray-500 dark:text-gray-400">Multi-Tool Calculator Suite</p>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors"
                aria-label="Toggle dark mode"
              >
                {isDarkMode ? (
                  <Sun className="w-5 h-5 text-yellow-500" />
                ) : (
                  <Moon className="w-5 h-5 text-gray-600" />
                )}
              </button>
              <div className="hidden sm:block">
                <span className="bg-success text-white px-3 py-1 rounded-full text-xs font-medium">
                  ⚡ Live
                </span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Top Ad Section */}
      <div className="max-w-4xl mx-auto px-4 py-4">
        <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center transition-colors">
          <span className="text-sm text-gray-500 dark:text-gray-400">Advertisement</span>
          {/* Replace this div with actual AdSense code */}
          <div className="h-20 flex items-center justify-center bg-gray-50 dark:bg-gray-600 rounded mt-2">
            <span className="text-gray-400 dark:text-gray-500 text-sm">Google AdSense Ad Space</span>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 overflow-hidden transition-colors">
          {/* Tab Navigation */}
          <div className="border-b border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-700 transition-colors">
            <nav className="flex space-x-0">
              {tabs.map((tab, index) => {
                const Icon = tab.icon;
                const isActive = activeTab === tab.id;
                const isLast = index === tabs.length - 1;
                
                return (
                  <button
                    key={tab.id}
                    data-testid={`tab-${tab.id}`}
                    onClick={() => setActiveTab(tab.id)}
                    className={`
                      flex-1 px-6 py-4 text-center font-medium text-sm transition-colors duration-200 
                      hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-inset
                      ${!isLast ? 'border-r border-gray-200 dark:border-gray-600' : ''}
                      ${isActive 
                        ? 'bg-primary text-white hover:bg-blue-600' 
                        : 'bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-600'
                      }
                    `}
                  >
                    <Icon className="w-4 h-4 inline mr-2" />
                    {tab.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* Tab Content */}
          <div className="p-6">
            {activeTab === "tip" && <TipCalculator />}
            {activeTab === "percentage" && <PercentageCalculator />}
            {activeTab === "currency" && <CurrencyConverter />}
          </div>
        </div>

        {/* How to Use Sections */}
        <div className="mt-12">
          {activeTab === "tip" && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-6 flex items-center">
                📚 How to Use the Tip Calculator
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      💰 Step 1: Enter Bill Amount
                    </h4>
                    <p className="text-gray-700">
                      Input the total amount of your bill before tip. For example, if your restaurant bill is $85.50, 
                      enter "85.50" in the bill amount field.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      🎯 Step 2: Choose Tip Percentage
                    </h4>
                    <p className="text-gray-700">
                      Select from preset tip percentages (10%, 15%, 18%, 20%) or enter a custom percentage. 
                      Most restaurants expect 15-20% tip for good service.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      👥 Step 3: Split Among People
                    </h4>
                    <p className="text-gray-700">
                      Enter the number of people splitting the bill. The calculator will automatically 
                      show how much each person needs to pay including their share of the tip.
                    </p>
                  </div>
                </div>

                <div className="bg-blue-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-primary mb-4 flex items-center">
                    💡 Pro Tips
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>15%:</strong> Standard tip for average service</li>
                    <li>• <strong>18-20%:</strong> For good to excellent service</li>
                    <li>• <strong>10%:</strong> For below average service</li>
                    <li>• <strong>Custom tip:</strong> Use for special occasions or group events</li>
                    <li>• Always double-check the final amount before paying!</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "percentage" && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                📊 How to Use the Percentage Calculator
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      🔄 Mode 1: Find Percentage Value
                    </h4>
                    <p className="text-gray-700">
                      <strong>"What is X% of Y?"</strong><br />
                      Example: What is 25% of 200?<br />
                      Enter 25 in percentage field, 200 in base amount. Result: 50
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      🔍 Mode 2: Find Percentage Rate
                    </h4>
                    <p className="text-gray-700">
                      <strong>"X is what percent of Y?"</strong><br />
                      Example: 50 is what percent of 200?<br />
                      Enter 50 as part amount, 200 as total amount. Result: 25%
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      ⚡ Real-time Results
                    </h4>
                    <p className="text-gray-700">
                      Results update automatically as you type. No need to click calculate - 
                      just enter your numbers and see the results instantly!
                    </p>
                  </div>
                </div>

                <div className="bg-green-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-green-700 mb-4 flex items-center">
                    🎯 Common Use Cases
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Discounts:</strong> Calculate sale prices and savings</li>
                    <li>• <strong>Taxes:</strong> Find tax amounts on purchases</li>
                    <li>• <strong>Grades:</strong> Calculate test scores and GPA</li>
                    <li>• <strong>Growth:</strong> Measure percentage increase/decrease</li>
                    <li>• <strong>Statistics:</strong> Analyze data and survey results</li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === "currency" && (
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-gray-200 dark:border-gray-700 p-8 transition-colors">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                💱 How to Use the Currency Converter
              </h3>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-6">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      💸 Step 1: Enter Amount
                    </h4>
                    <p className="text-gray-700">
                      Input the amount you want to convert. For example, enter "100" 
                      if you want to convert 100 units of one currency to another.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      🌍 Step 2: Select Currencies
                    </h4>
                    <p className="text-gray-700">
                      Choose your "From" currency (what you have) and "To" currency (what you want). 
                      We support USD, EUR, GBP, PKR, INR, JPY, CAD, AUD, and CHF.
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                      🔄 Step 3: Get Real-time Rates
                    </h4>
                    <p className="text-gray-700">
                      Our system automatically fetches the latest exchange rates and updates them every minute. 
                      You'll see both the exchange rate and converted amount instantly.
                    </p>
                  </div>
                </div>

                <div className="bg-purple-50 rounded-lg p-6">
                  <h4 className="text-lg font-semibold text-purple-700 mb-4 flex items-center">
                    📈 Features & Benefits
                  </h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Real-time rates:</strong> Updated every minute via live API</li>
                    <li>• <strong>PKR support:</strong> Pakistani Rupee included</li>
                    <li>• <strong>Major currencies:</strong> USD, EUR, GBP, INR, JPY, etc.</li>
                    <li>• <strong>Instant conversion:</strong> No need to click convert button</li>
                    <li>• <strong>Accurate symbols:</strong> Proper currency symbols (₨, $, €, £)</li>
                    <li>• <strong>Auto-update:</strong> Fresh rates every 60 seconds</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Middle Ad Section */}
        <div className="mt-8">
          <div className="bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center transition-colors">
            <span className="text-sm text-gray-500 dark:text-gray-400">Advertisement</span>
            {/* Replace this div with actual AdSense code */}
            <div className="h-24 flex items-center justify-center bg-gray-50 dark:bg-gray-600 rounded mt-2">
              <span className="text-gray-400 dark:text-gray-500 text-sm">Google AdSense Ad Space</span>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 mt-16 transition-colors">
        <div className="max-w-6xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="bg-primary text-white p-2 rounded-lg">
                  <Calculator className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100">Triocalc</h3>
                </div>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Multi-tool calculator suite for everyday calculations. Simple, fast, and reliable.
              </p>
            </div>

            {/* Quick Links */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">Pages</h4>
              <div className="space-y-2">
                <Link href="/about" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                  About
                </Link>
                <Link href="/contact" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link href="/privacy" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="block text-sm text-gray-600 hover:text-primary transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">Follow Us</h4>
              <div className="flex space-x-3">
                <a 
                  href="https://github.com/ispawoo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors group"
                >
                  <Github className="w-4 h-4 text-gray-600 group-hover:text-gray-900" />
                </a>
                <a 
                  href="https://facebook.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-blue-100 rounded-lg transition-colors group"
                >
                  <Facebook className="w-4 h-4 text-gray-600 group-hover:text-blue-600" />
                </a>
                <a 
                  href="https://instagram.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-pink-100 rounded-lg transition-colors group"
                >
                  <Instagram className="w-4 h-4 text-gray-600 group-hover:text-pink-600" />
                </a>
                <a 
                  href="https://reddit.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-orange-100 rounded-lg transition-colors group"
                >
                  <MessageSquare className="w-4 h-4 text-gray-600 group-hover:text-orange-600" />
                </a>
                <a 
                  href="https://blog.example.com" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 hover:bg-green-100 rounded-lg transition-colors group"
                >
                  <BookOpen className="w-4 h-4 text-gray-600 group-hover:text-green-600" />
                </a>
              </div>
            </div>

            {/* Contact Developer */}
            <div className="space-y-4">
              <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 uppercase tracking-wider">Contact</h4>
              <a 
                href="https://github.com/ispawoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
              >
                <Github className="w-4 h-4 mr-2" />
                Contact Developer
              </a>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-gray-200 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-left">
              © {new Date().getFullYear()} Triocalc. All rights reserved.
            </div>
            
            <div className="text-sm text-gray-600 dark:text-gray-400 text-center md:text-right">
              Designed with ❤️ by:{" "}
              <a 
                href="https://github.com/ispawoo" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-primary hover:text-blue-600 font-medium transition-colors inline-flex items-center"
              >
                Yasir Ispawoo
                <ExternalLink className="w-3 h-3 ml-1" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
