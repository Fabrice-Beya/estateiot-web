
import { useState, useEffect } from 'react'
import { Building, Menu, X } from 'lucide-react'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrollY > 50 ? 'bg-white/95 backdrop-blur-sm shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10">
              <img src="/icon.png" alt="EstateIoT Logo" className="w-10 h-10 rounded-xl" />
            </div>
            <span className="text-2xl font-bold text-[#3498db]">
              EstateIoT
            </span>
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-700 hover:text-[#3498db] transition-colors">Features</a>
            <a href="#benefits" className="text-gray-700 hover:text-[#3498db] transition-colors">Benefits</a>
            <a href="/support" className="text-gray-700 hover:text-[#3498db] transition-colors">Support</a>
            <a href="#contact" className="text-gray-700 hover:text-[#3498db] transition-colors">Contact</a>
            <button className="bg-[#3498db] text-white px-6 py-2 rounded-lg hover:bg-[#2980b9] hover:shadow-lg transition-all">
              Get Started
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 text-gray-700 hover:text-[#3498db]">Features</a>
              <a href="#benefits" className="block px-3 py-2 text-gray-700 hover:text-[#3498db]">Benefits</a>
              <a href="/support" className="block px-3 py-2 text-gray-700 hover:text-[#3498db]">Support</a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-[#3498db]">Contact</a>
              <button className="w-full mt-4 bg-[#3498db] text-white px-6 py-2 rounded-lg">
                Get Started
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
