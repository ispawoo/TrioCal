import { Calculator, Heart, Target, Zap, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function About() {
  return (
    <div className="bg-gray-50 font-inter text-gray-900 min-h-screen">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="bg-primary text-white p-2 rounded-lg">
                <Calculator className="w-6 h-6" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Triocalc</h1>
                <p className="text-sm text-gray-500">About Us</p>
              </div>
            </div>
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-blue-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-8">
          <div className="space-y-8">
            {/* About Section */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl font-bold text-gray-900">About Triocalc 📊</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Triocalc is a comprehensive multi-tool calculator suite designed to make your daily calculations quick, easy, and accurate.
              </p>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Calculator className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Tip Calculator</h3>
                <p className="text-gray-600">Calculate tips and split bills with ease. Perfect for dining out with friends and family.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Percentage Calculator</h3>
                <p className="text-gray-600">Handle percentage calculations effortlessly. Great for discounts, taxes, and academic use.</p>
              </div>
              
              <div className="text-center p-6 bg-gray-50 rounded-lg">
                <div className="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <Zap className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">Currency Converter</h3>
                <p className="text-gray-600">Convert between currencies with real-time exchange rates. Stay updated with global markets.</p>
              </div>
            </div>

            {/* Mission Section */}
            <div className="bg-gradient-to-r from-primary/10 to-blue-100 rounded-lg p-8">
              <div className="text-center space-y-4">
                <Heart className="w-12 h-12 text-primary mx-auto" />
                <h3 className="text-2xl font-bold text-gray-900">Our Mission</h3>
                <p className="text-gray-700 max-w-2xl mx-auto">
                  We believe that everyday calculations shouldn't be complicated. Our goal is to provide simple, 
                  reliable tools that help students, professionals, and anyone who needs quick calculations in their daily life.
                </p>
              </div>
            </div>

            {/* Technology Stack */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">Built with Modern Technology 🚀</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Frontend</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• React 18 with TypeScript</li>
                    <li>• Tailwind CSS for styling</li>
                    <li>• Vite for fast development</li>
                    <li>• Modern UI components</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900 mb-2">Features</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>• Real-time calculations</li>
                    <li>• Responsive design</li>
                    <li>• Live currency rates</li>
                    <li>• Mobile-friendly interface</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}