import React from 'react';
import { Mail, MessageCircle, Phone, Clock, Globe, Shield, Zap, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Support: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with Navigation */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-2">
              <ArrowLeft className="w-5 h-5 text-[#3498db]" />
              <span className="text-gray-700 hover:text-[#3498db]">Back to EstateIoT</span>
            </Link>
            <div className="flex items-center space-x-2">
              <img src="/icon.png" alt="EstateIoT" className="w-8 h-8 rounded-lg" />
              <span className="text-xl font-bold text-[#3498db]">EstateIoT</span>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Support Center</h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get help with EstateIoT - your smart estate management platform. We're here to support you 24/7.
          </p>
        </div>

        {/* Quick Help Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-[#3498db]/10 rounded-lg flex items-center justify-center mb-4">
              <MessageCircle className="w-6 h-6 text-[#3498db]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
            <p className="text-gray-600 mb-4">Get instant help from our support team</p>
            <button className="text-[#3498db] font-semibold hover:underline">Start Chat →</button>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-[#3498db]/10 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-[#3498db]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
            <p className="text-gray-600 mb-4">Send us your questions and we'll respond within 24 hours</p>
            <a href="mailto:support@estateiot.com" className="text-[#3498db] font-semibold hover:underline">
              support@estateiot.com →
            </a>
          </div>

          <div className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all">
            <div className="w-12 h-12 bg-[#3498db]/10 rounded-lg flex items-center justify-center mb-4">
              <Phone className="w-6 h-6 text-[#3498db]" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Phone Support</h3>
            <p className="text-gray-600 mb-4">Call our technical support team</p>
            <a href="tel:+27123456789" className="text-[#3498db] font-semibold hover:underline">
              +27 12 345 6789 →
            </a>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Technical Support</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#3498db]" />
                  <span className="text-gray-700">support@estateiot.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#3498db]" />
                  <span className="text-gray-700">+27 12 345 6789</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Clock className="w-5 h-5 text-[#3498db]" />
                  <span className="text-gray-700">24/7 Support Available</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Business Inquiries</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-[#3498db]" />
                  <span className="text-gray-700">sales@estateiot.com</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-[#3498db]" />
                  <span className="text-gray-700">+27 12 345 6790</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Globe className="w-5 h-5 text-[#3498db]" />
                  <span className="text-gray-700">estateiot.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-2xl shadow-xl p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
          
          <div className="space-y-6">
            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I set up EstateIoT for my property?</h3>
              <p className="text-gray-600">
                Our setup process is straightforward. Contact our sales team at sales@estateiot.com and we'll guide you through the installation and configuration process. Most setups are completed within 48 hours.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Is my data secure with EstateIoT?</h3>
              <p className="text-gray-600">
                Yes, security is our top priority. We use enterprise-grade encryption, secure cloud infrastructure, and comply with international data protection standards. Your data is stored securely and never shared with third parties.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Can I integrate EstateIoT with existing systems?</h3>
              <p className="text-gray-600">
                EstateIoT is designed to integrate seamlessly with most existing access control, security, and management systems. Our technical team will assess your current setup and provide integration guidance.
              </p>
            </div>

            <div className="border-b border-gray-200 pb-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What support is included with my subscription?</h3>
              <p className="text-gray-600">
                All subscriptions include 24/7 technical support, regular software updates, cloud hosting, and access to our customer success team. Premium plans also include on-site support and priority response times.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I report a bug or request a feature?</h3>
              <p className="text-gray-600">
                You can report bugs or request features by emailing support@estateiot.com or using the in-app feedback system. We review all requests and prioritize based on user needs and system impact.
              </p>
            </div>
          </div>
        </div>

        {/* Features Overview */}
        <div className="bg-gradient-to-br from-[#3498db] to-[#2980b9] rounded-2xl text-white p-8">
          <h2 className="text-2xl font-bold mb-6">What EstateIoT Offers</h2>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-start space-x-3">
              <Shield className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Smart Access Control</h3>
                <p className="text-blue-100 text-sm">Advanced gate management with RFID, mobile control, and visitor management</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Zap className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Real-time Monitoring</h3>
                <p className="text-blue-100 text-sm">24/7 surveillance with AI-powered analytics and instant alerts</p>
              </div>
            </div>

            <div className="flex items-start space-x-3">
              <Globe className="w-6 h-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-semibold mb-1">Cloud Platform</h3>
                <p className="text-blue-100 text-sm">Secure, scalable infrastructure with 99.9% uptime guarantee</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-gray-200">
          <p className="text-gray-600">
            Need immediate assistance? Contact us at{' '}
            <a href="mailto:support@estateiot.com" className="text-[#3498db] font-semibold hover:underline">
              support@estateiot.com
            </a>{' '}
            or call{' '}
            <a href="tel:+27123456789" className="text-[#3498db] font-semibold hover:underline">
              +27 12 345 6789
            </a>
          </p>
          <p className="text-sm text-gray-500 mt-2">
            © 2024 EstateIoT. All rights reserved.
          </p>
        </div>
      </main>
    </div>
  );
};

export default Support;
