'use client'

import { motion } from 'framer-motion'
import { Mail, MessageCircle, BookOpen, Smartphone, AlertCircle, Settings, Users, Lock } from 'lucide-react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function SupportPage() {
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

  const supportCategories = [
    {
      icon: Smartphone,
      title: "Getting Started",
      description: "Learn how to set up and use the EstateIoT mobile app",
      items: [
        "How to download and install the app",
        "Creating your resident account",
        "Setting up your profile",
        "First-time login and verification"
      ]
    },
    {
      icon: Lock,
      title: "Gate Control & Access",
      description: "Manage gate access and visitor permissions",
      items: [
        "How to open/close gates remotely",
        "Adding and managing visitors",
        "Setting up guest access codes",
        "Viewing access history and logs"
      ]
    },
    {
      icon: Users,
      title: "Community Features",
      description: "Connect with your community and stay informed",
      items: [
        "Viewing community announcements",
        "Reporting maintenance issues",
        "Contacting estate management",
        "Emergency contact procedures"
      ]
    },
    {
      icon: Settings,
      title: "Account Management",
      description: "Manage your account settings and preferences",
      items: [
        "Updating personal information",
        "Managing notification preferences",
        "Changing password and security settings",
        "Account verification and recovery"
      ]
    }
  ]

  const contactOptions = [
    {
      icon: Mail,
      title: "Email Support",
      description: "Get help via email within 24 hours",
      contact: "support@estateiot.com",
      action: "Send Email"
    },
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Chat with our support team in real-time",
      contact: "Available 9 AM - 6 PM",
      action: "Start Chat"
    },
    {
      icon: BookOpen,
      title: "Documentation",
      description: "Browse our comprehensive user guides",
      contact: "Help Center",
      action: "View Docs"
    }
  ]

  const troubleshooting = [
    {
      question: "App won't load or crashes on startup",
      answer: "Try force-closing the app and reopening it. If the issue persists, restart your device or reinstall the app from the App Store."
    },
    {
      question: "Can't connect to gate control",
      answer: "Ensure you have a stable internet connection and that you're within range of your estate's network. Check if your account has gate access permissions."
    },
    {
      question: "Not receiving notifications",
      answer: "Go to Settings > Notifications and ensure EstateIoT notifications are enabled. Also check your Do Not Disturb settings."
    },
    {
      question: "Forgot password or can't log in",
      answer: "Use the 'Forgot Password' link on the login screen. If you still can't access your account, contact your estate management or our support team."
    },
    {
      question: "Guest access code not working",
      answer: "Verify the code was entered correctly and hasn't expired. Guest codes are typically valid for 24 hours unless specified otherwise."
    }
  ]

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-[#3498db]/5 to-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-[#3498db]/10 rounded-full text-[#3498db] font-medium text-sm mb-6"
              variants={fadeInUp}
            >
              <AlertCircle className="w-4 h-4 mr-2" />
              Support Center
            </motion.div>
            <motion.h1 
              className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              How can we help you?
            </motion.h1>
            <motion.p 
              className="text-xl text-gray-600 mb-8"
              variants={fadeInUp}
            >
              Get support for the EstateIoT mobile app and estate management platform
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 text-center mb-12"
              variants={fadeInUp}
            >
              Get in Touch
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {contactOptions.map((option, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow"
                  variants={fadeInUp}
                >
                  <div className="w-16 h-16 bg-[#3498db]/10 rounded-xl flex items-center justify-center mx-auto mb-4">
                    <option.icon className="w-8 h-8 text-[#3498db]" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{option.title}</h3>
                  <p className="text-gray-600 mb-4">{option.description}</p>
                  <p className="text-[#3498db] font-medium mb-4">{option.contact}</p>
                  <button className="bg-[#3498db] text-white px-6 py-2 rounded-lg hover:bg-[#2980b9] transition-colors">
                    {option.action}
                  </button>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Support Categories */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 text-center mb-12"
              variants={fadeInUp}
            >
              Support Categories
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {supportCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                  variants={fadeInUp}
                >
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-[#3498db]/10 rounded-xl flex items-center justify-center mr-4">
                      <category.icon className="w-6 h-6 text-[#3498db]" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-900">{category.title}</h3>
                      <p className="text-gray-600 text-sm">{category.description}</p>
                    </div>
                  </div>
                  <ul className="space-y-2">
                    {category.items.map((item, itemIndex) => (
                      <li key={itemIndex} className="flex items-center text-gray-700">
                        <div className="w-2 h-2 bg-[#3498db] rounded-full mr-3"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Troubleshooting FAQ */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 text-center mb-12"
              variants={fadeInUp}
            >
              Common Issues & Solutions
            </motion.h2>
            <div className="space-y-6">
              {troubleshooting.map((item, index) => (
                <motion.div
                  key={index}
                  className="bg-gray-50 rounded-xl p-6 border border-gray-100"
                  variants={fadeInUp}
                >
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                    <AlertCircle className="w-5 h-5 text-[#3498db] mr-2" />
                    {item.question}
                  </h3>
                  <p className="text-gray-700 leading-relaxed">{item.answer}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* App Store Info */}
      <section className="py-16 bg-[#3498db]/5">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.h2 
              className="text-3xl font-bold text-gray-900 mb-6"
              variants={fadeInUp}
            >
              Download EstateIoT
            </motion.h2>
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              variants={fadeInUp}
            >
              Get the EstateIoT mobile app for iOS and Android devices
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">iOS App</h3>
                <p className="text-sm text-gray-600 mb-3">Coming Soon to App Store</p>
                <button 
                  className="bg-gray-300 text-gray-500 px-6 py-2 rounded-lg cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </button>
              </div>
              <div className="bg-white rounded-lg p-4 shadow-lg border border-gray-100 text-center">
                <h3 className="font-semibold text-gray-900 mb-2">Android App</h3>
                <p className="text-sm text-gray-600 mb-3">Coming Soon to Play Store</p>
                <button 
                  className="bg-gray-300 text-gray-500 px-6 py-2 rounded-lg cursor-not-allowed"
                  disabled
                >
                  Coming Soon
                </button>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
