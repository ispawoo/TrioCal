import { Calculator, Mail, Github, MessageSquare, ExternalLink, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Contact() {
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
                <p className="text-sm text-gray-500">Contact Us</p>
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
            {/* Header */}
            <div className="text-center space-y-4">
              <MessageSquare className="w-16 h-16 text-primary mx-auto" />
              <h2 className="text-3xl font-bold text-gray-900">Get In Touch 📬</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Have questions, suggestions, or found a bug? We'd love to hear from you!
              </p>
            </div>

            {/* Contact Options */}
            <div className="grid md:grid-cols-2 gap-8">
              {/* Developer Contact */}
              <div className="space-y-6">
                <div className="text-center p-6 bg-gradient-to-r from-primary/10 to-blue-100 rounded-lg">
                  <div className="bg-primary text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Github className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Developer</h3>
                  <p className="text-gray-700 mb-4">Connect with the creator of Triocalc</p>
                  <div className="space-y-2">
                    <p className="font-medium text-gray-900">Yasir Ispawoo</p>
                    <a 
                      href="https://github.com/ispawoo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-primary hover:text-blue-600 transition-colors"
                    >
                      <Github className="w-4 h-4 mr-2" />
                      @ispawoo
                      <ExternalLink className="w-3 h-3 ml-1" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Links */}
              <div className="space-y-6">
                <div className="text-center p-6 bg-gray-50 rounded-lg">
                  <div className="bg-gray-600 text-white p-3 rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                    <Calculator className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Open Source</h3>
                  <p className="text-gray-700 mb-4">Triocalc is built with modern web technologies</p>
                  <div className="space-y-2">
                    <div className="text-sm text-gray-600">
                      <p>Built with React, TypeScript & Tailwind CSS</p>
                      <p>Deployed on Vercel</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Support Section */}
            <div className="border-t border-gray-200 pt-8">
              <h3 className="text-2xl font-bold text-gray-900 text-center mb-6">How Can We Help? 🤝</h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl mb-2">🐛</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Bug Reports</h4>
                  <p className="text-sm text-gray-600">
                    Found something not working? Let us know on GitHub Issues.
                  </p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl mb-2">💡</div>
                  <h4 className="font-semibold text-gray-900 mb-2">Feature Requests</h4>
                  <p className="text-sm text-gray-600">
                    Have an idea for a new calculator or feature? Share it with us!
                  </p>
                </div>
                
                <div className="text-center p-4 border border-gray-200 rounded-lg">
                  <div className="text-2xl mb-2">❓</div>
                  <h4 className="font-semibold text-gray-900 mb-2">General Questions</h4>
                  <p className="text-sm text-gray-600">
                    Need help using Triocalc? Check our how-to guides or ask!
                  </p>
                </div>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <p className="text-blue-800 text-sm text-center">
                ⚡ <strong>Response Time:</strong> We typically respond to GitHub messages within 24-48 hours. 
                This is a side project, so please be patient!
              </p>
            </div>

            {/* Thank You */}
            <div className="text-center space-y-4 pt-8">
              <h3 className="text-xl font-semibold text-gray-900">Thank You! 🙏</h3>
              <p className="text-gray-600 max-w-xl mx-auto">
                Triocalc exists to make calculations easier for everyone. Your feedback helps us improve and add new features.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}