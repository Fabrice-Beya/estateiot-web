import { Globe, Shield, Zap } from 'lucide-react'

export default function Footer() {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10">
                <img src="/icon.png" alt="EstateIoT Logo" className="w-10 h-10 rounded-xl" />
              </div>
              <span className="text-2xl font-bold">EstateIoT</span>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Transforming residential estate management with cutting-edge IoT technology and intelligent automation.
            </p>
            <div className="flex space-x-4">
              <Globe className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Shield className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
              <Zap className="w-6 h-6 text-gray-400 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-300">
              <li><a href="#features" className="hover:text-white transition-colors">Features</a></li>
              <li><button className="hover:text-white transition-colors text-left">Beta Program</button></li>
              <li><button className="hover:text-white transition-colors text-left">Security</button></li>
              <li><button className="hover:text-white transition-colors text-left">Integrations</button></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-300">
              <li><button className="hover:text-white transition-colors text-left">Documentation</button></li>
              <li><button className="hover:text-white transition-colors text-left">Help Center</button></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
              <li><button className="hover:text-white transition-colors text-left">Status</button></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 mt-12">
          <div className="flex flex-col md:flex-row justify-between items-center text-gray-400">
            <p>&copy; 2024 EstateIoT. All rights reserved. Built with precision for modern estate management.</p>
            <div className="flex space-x-6 mt-4 md:mt-0 text-sm">
              <a href="/support" className="hover:text-white transition-colors">Support</a>
              <button className="hover:text-white transition-colors">Privacy Policy</button>
              <button className="hover:text-white transition-colors">Terms of Service</button>
              <button className="hover:text-white transition-colors">Cookie Policy</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
