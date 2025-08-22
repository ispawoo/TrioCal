import { Calculator, FileText, AlertTriangle, CheckCircle, ArrowLeft } from "lucide-react";
import { Link } from "wouter";

export default function Terms() {
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
                <p className="text-sm text-gray-500">Terms of Service</p>
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
              <FileText className="w-16 h-16 text-primary mx-auto" />
              <h2 className="text-3xl font-bold text-gray-900">Terms of Service 📋</h2>
              <p className="text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>
            </div>

            {/* Terms Sections */}
            <div className="space-y-6">
              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <CheckCircle className="w-6 h-6 text-primary" />
                  <h3 className="text-xl font-semibold text-gray-900">Acceptance of Terms</h3>
                </div>
                <div className="pl-9 text-gray-700">
                  <p>
                    By accessing and using Triocalc, you agree to be bound by these Terms of Service. 
                    If you do not agree to these terms, please do not use our service.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Use of Service</h3>
                <div className="text-gray-700 space-y-2">
                  <p>Triocalc provides calculation tools for:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Tip calculations and bill splitting</li>
                    <li>Percentage calculations and conversions</li>
                    <li>Currency conversion with real-time rates</li>
                  </ul>
                  <p className="mt-2">You may use these tools for personal, educational, or commercial purposes.</p>
                </div>
              </section>

              <section>
                <div className="flex items-center space-x-3 mb-4">
                  <AlertTriangle className="w-6 h-6 text-amber-500" />
                  <h3 className="text-xl font-semibold text-gray-900">Accuracy Disclaimer</h3>
                </div>
                <div className="pl-9 text-gray-700 space-y-2">
                  <p>While we strive for accuracy, please note:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Currency rates are provided by third-party APIs and may have delays</li>
                    <li>Always verify important calculations independently</li>
                    <li>We are not responsible for decisions made based on our calculations</li>
                    <li>Use our tools as a helpful reference, not as financial advice</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Prohibited Uses</h3>
                <div className="text-gray-700 space-y-2">
                  <p>You agree not to:</p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>Use the service for any illegal or unauthorized purpose</li>
                    <li>Attempt to interfere with the proper functioning of the service</li>
                    <li>Reverse engineer or attempt to extract source code</li>
                    <li>Use the service to harm, threaten, or harass others</li>
                  </ul>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Intellectual Property</h3>
                <div className="text-gray-700">
                  <p>
                    Triocalc and its original content, features, and functionality are owned by Yasir Ispawoo 
                    and are protected by international copyright, trademark, and other intellectual property laws.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Limitation of Liability</h3>
                <div className="text-gray-700">
                  <p>
                    Triocalc is provided "as is" without any warranties. We shall not be liable for any 
                    damages arising from your use of our service, including but not limited to direct, 
                    indirect, incidental, or consequential damages.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Changes to Terms</h3>
                <div className="text-gray-700">
                  <p>
                    We reserve the right to modify these terms at any time. Changes will be effective immediately 
                    upon posting on this page. Your continued use of the service constitutes acceptance of the revised terms.
                  </p>
                </div>
              </section>

              <section>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Contact Information</h3>
                <div className="text-gray-700">
                  <p>Questions about these Terms of Service? Contact us:</p>
                  <p className="mt-2">
                    <strong>Developer:</strong> Yasir Ispawoo<br />
                    <strong>GitHub:</strong> <a href="https://github.com/ispawoo" className="text-primary hover:underline">@ispawoo</a>
                  </p>
                </div>
              </section>
            </div>

            {/* Footer Note */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-8">
              <p className="text-green-800 text-sm">
                ✅ <strong>Free Service:</strong> Triocalc is completely free to use with no hidden charges or premium features.
              </p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
