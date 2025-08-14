'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Star, Smartphone, Tablet, Download, Apple, Play } from 'lucide-react'
import Image from 'next/image'

export default function Hero() {
  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  }

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  }

  const phoneFloat = {
    y: [-10, 10, -10],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }

  return (
    <section className="pt-24 pb-20 bg-gradient-to-br from-gray-50 via-blue-50 to-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-20 h-20 border-4 border-[#3498db] rounded-full"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-[#3498db] rounded-full"></div>
        <div className="absolute bottom-40 left-20 w-12 h-12 border-2 border-[#3498db] rounded-lg rotate-45"></div>
        <div className="absolute bottom-20 right-40 w-8 h-8 bg-[#3498db] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            className="text-center lg:text-left order-2 lg:order-1"
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-[#3498db]/10 rounded-full text-[#3498db] font-medium text-sm mb-6"
              variants={fadeInUp}
            >
              <Smartphone className="w-4 h-4 mr-2" />
              Smart Estate Management Platform
            </motion.div>

            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
              variants={fadeInUp}
            >
              The Future of
              <span className="block text-[#3498db]">
                Estate Management
              </span>
            </motion.h1>
            
            <motion.p 
              className="mt-6 text-xl text-gray-600 max-w-2xl"
              variants={fadeInUp}
            >
              Transform your residential community with our comprehensive IoT platform. 
              Advanced gate control, resident communication, and smart monitoring - all in one solution.
            </motion.p>
            
            <motion.div 
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              variants={fadeInUp}
            >
              <button className="bg-[#3498db] text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#2980b9] hover:shadow-xl transition-all transform hover:scale-105">
                Start Free Trial
                <ArrowRight className="inline-block ml-2 w-5 h-5" />
              </button>
              <button className="border-2 border-[#3498db] text-[#3498db] px-8 py-4 rounded-lg text-lg font-semibold hover:bg-[#3498db] hover:text-white transition-all">
                Watch Demo
              </button>
            </motion.div>

            {/* Mobile App Download Section */}
            <motion.div 
              className="mt-12 p-6 bg-white rounded-xl border border-gray-200 shadow-sm"
              variants={fadeInUp}
            >
              <div className="flex items-center justify-center lg:justify-start mb-4">
                <Smartphone className="w-5 h-5 text-[#3498db] mr-2" />
                <h3 className="text-lg font-semibold text-gray-900">Mobile App</h3>
              </div>
              <p className="text-gray-600 mb-4 text-center lg:text-left">
                Control your estate from anywhere with our mobile apps
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center lg:justify-start">
                <div className="flex items-center px-4 py-3 bg-gray-100 rounded-lg cursor-not-allowed">
                  <Apple className="w-6 h-6 mr-3" />
                  <div>
                    <div className="text-xs text-gray-500">Coming Soon</div>
                    <div className="text-sm font-medium text-gray-700">App Store</div>
                  </div>
                </div>
                <div className="flex items-center px-4 py-3 bg-gray-100 rounded-lg cursor-not-allowed">
                  <Play className="w-6 h-6 mr-3" />
                  <div>
                    <div className="text-xs text-gray-500">Coming Soon</div>
                    <div className="text-sm font-medium text-gray-700">Google Play</div>
                  </div>
                </div>
              </div>
            </motion.div>
            
            <motion.div 
              className="mt-8 flex items-center justify-center lg:justify-start space-x-6"
              variants={fadeInUp}
            >
              <div className="flex items-center space-x-1">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <span className="ml-2 text-gray-600">5.0 rating</span>
              </div>
              <div className="text-gray-600">
                <span className="font-semibold text-[#3498db]">500+</span> estates managed
              </div>
            </motion.div>
          </motion.div>

          {/* App Screenshots Section */}
          <motion.div 
            className="relative order-1 lg:order-2"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative flex justify-center items-center h-[600px]">
              {/* Main Phone - Center */}
              <motion.div 
                className="relative z-30"
                animate={phoneFloat}
              >
                <div className="relative">
                  <Image 
                    src="/screenshot-ios.png" 
                    alt="EstateIoT Mobile App" 
                    width={280}
                    height={560}
                    className="shadow-2xl rounded-3xl"
                  />
                  {/* Phone highlight */}
                  <div className="absolute -inset-4 bg-gradient-to-r from-[#3498db]/20 to-transparent rounded-[3rem] -z-10"></div>
                </div>
              </motion.div>

              {/* Secondary Phones */}
              <motion.div 
                className="absolute left-0 top-16 z-20"
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
              >
                <Image 
                  src="/screenshot_1.png" 
                  alt="EstateIoT Features" 
                  width={200}
                  height={400}
                  className="shadow-xl rounded-2xl transform rotate-[-8deg]"
                />
              </motion.div>

              <motion.div 
                className="absolute right-0 top-24 z-10"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.7, duration: 0.8 }}
              >
                <Image 
                  src="/screenshot_2.png" 
                  alt="EstateIoT Dashboard" 
                  width={200}
                  height={400}
                  className="shadow-xl rounded-2xl transform rotate-[8deg]"
                />
              </motion.div>

              {/* Background Tablet */}
              <motion.div 
                className="absolute top-32 left-1/2 transform -translate-x-1/2 z-0"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 0.3, scale: 1 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <Image 
                  src="/screenshot_3.png" 
                  alt="EstateIoT Admin Panel" 
                  width={320}
                  height={240}
                  className="shadow-lg rounded-2xl"
                />
              </motion.div>
            </div>

            {/* Floating Elements */}
            <div className="absolute top-10 right-10 w-6 h-6 bg-[#3498db] rounded-full animate-pulse"></div>
            <div className="absolute bottom-20 left-10 w-4 h-4 border-2 border-[#3498db] rounded-full animate-bounce"></div>
            <div className="absolute top-1/2 right-0 w-8 h-8 border-2 border-[#3498db] rounded-lg transform rotate-45 animate-pulse"></div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}