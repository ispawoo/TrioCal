import { Calculator, Shield, Eye, Lock, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Privacy() {
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
                <p className="text-sm text-gray-500">Privacy Policy</p>
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
              <Shield className="w-16 h-16 text-primary mx-auto" />
              <h2 className="text-3xl font-bold text-gray-900">Privacy Policy 🔒</h2>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Privacy Sections */}
            <div className="space-y-6">
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Eye className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-900">What We Collect</h3>
                </div>
                <div className="pl-9 text-gray-700 space-y-2">
                  <p>Triocalc is designed with privacy in mind. We collect minimal information:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>No personal information is collected or stored</li>
                    <li>All calculations are performed locally in your browser</li>
                    <li>We may use anonymous analytics to improve our service</li>
                    <li>Currency exchange rates are fetched from external APIs</li>
                  </ul>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <Lock className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-900">How We Protect Your Data</h3>
                </div>
                <div className="pl-9 text-gray-700 space-y-2">
                  <p>Your privacy and security are our top priorities:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>All calculations happen on your device - nothing is sent to our servers</li>
                    <li>We use HTTPS encryption for all communications</li>
                    <li>No cookies are used for tracking purposes</li>
                    <li>Your calculation history is not stored anywhere</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Third-Party Services</h3>
                <div className="text-gray-700 space-y-2">
                  <p>We use the following third-party services:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li><strong>Currency Exchange API:</strong> For real-time currency conversion rates</li>
                    <li><strong>Google Fonts:</strong> For typography (Inter font family)</li>
                    <li><strong>Vercel:</strong> For hosting our application</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Your Rights</h3>
                <div className="text-gray-700 space-y-2">
                  <p>Since we don't collect personal data, you have full control:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Use Triocalc without creating any accounts</li>
                    <li>Clear your browser data anytime to remove any local storage</li>
                    <li>No personal information to delete or modify</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Us</h3>
                <div className="text-gray-700">
                  <p>If you have any questions about this Privacy Policy, please contact us:</p>
                  <p className="mt-2">
                    <strong>Developer:</strong> Yasir Ispawoo<br />
                    <strong>GitHub:</strong> <a href="https://github.com/ispawoo" className="text-primary hover:underline">@ispawoo</a>
                  </p>
                </div>
              </section>
            </div>

            {/* Footer Note */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mt-8">
              <p className="text-blue-800 text-sm">
                💡 <strong>Note:</strong> This privacy policy applies only to ConvertEasy. 
                Third-party services may have their own privacy policies.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}