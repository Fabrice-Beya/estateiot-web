'use client'

import { motion } from 'framer-motion'
import { Lock, Bell, Users, Eye, Cpu, BarChart3, Wifi, Shield, Smartphone, Database, Settings, Zap } from 'lucide-react'

export default function Features() {
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

  const features = [
    {
      icon: Lock,
      title: "Smart Access Control",
      description: "Automated gate management with RFID, mobile app control, visitor pre-registration, and comprehensive security logs.",
      color: "#3498db"
    },
    {
      icon: Bell,
      title: "Intelligent Notifications",
      description: "Targeted announcement system with SMS, email, and push notifications. Analytics tracking for resident engagement.",
      color: "#3498db"
    },
    {
      icon: Wifi,
      title: "IoT Device Integration",
      description: "Seamlessly connect sensors, cameras, smart meters, and other IoT devices through our unified platform.",
      color: "#3498db"
    },
    {
      icon: Eye,
      title: "24/7 Monitoring",
      description: "Real-time surveillance with AI-powered threat detection, motion sensors, and instant alert systems.",
      color: "#3498db"
    },
    {
      icon: BarChart3,
      title: "Advanced Analytics",
      description: "Comprehensive dashboards with predictive insights, usage patterns, and operational efficiency metrics.",
      color: "#3498db"
    },
    {
      icon: Database,
      title: "Cloud Infrastructure",
      description: "Secure, scalable cloud platform with 99.9% uptime, automatic backups, and enterprise-grade security.",
      color: "#3498db"
    },
    {
      icon: Smartphone,
      title: "Mobile-First Design",
      description: "Native iOS and Android apps for residents and administrators with offline capabilities and real-time sync.",
      color: "#3498db"
    },
    {
      icon: Users,
      title: "User Management",
      description: "Role-based access control, resident profiles, staff management, and visitor tracking with detailed permissions.",
      color: "#3498db"
    },
    {
      icon: Settings,
      title: "Automation Engine",
      description: "Create custom workflows, scheduled tasks, and automated responses based on sensor data and events.",
      color: "#3498db"
    }
  ]

  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div
            className="inline-flex items-center px-4 py-2 bg-[#3498db]/10 rounded-full text-[#3498db] font-medium text-sm mb-6"
            variants={fadeInUp}
          >
            <Cpu className="w-4 h-4 mr-2" />
            IoT-Powered Features
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            Complete Estate Management Ecosystem
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            Enterprise-grade IoT platform designed for modern residential communities. 
            Seamlessly integrate all your smart devices and services.
          </motion.p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-[#3498db]/30 relative overflow-hidden"
              variants={fadeInUp}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Background Gradient on Hover */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#3498db]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative z-10">
                <div className="w-16 h-16 bg-[#3498db]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-[#3498db]/20 transition-colors duration-300">
                  <feature.icon className="w-8 h-8 text-[#3498db]" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-[#3498db] transition-colors duration-300">
                  {feature.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              {/* Corner Accent */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#3498db]/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Technology Stack Section */}
        <motion.div 
          className="mt-20 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h3 
            className="text-2xl font-bold text-gray-900 mb-8"
            variants={fadeInUp}
          >
            Built on Enterprise Technology
          </motion.h3>
          <motion.div 
            className="flex flex-wrap justify-center items-center gap-8 opacity-60"
            variants={fadeInUp}
          >
            <div className="flex items-center space-x-2">
              <Shield className="w-6 h-6 text-[#3498db]" />
              <span className="font-medium">Azure Cloud</span>
            </div>
            <div className="flex items-center space-x-2">
              <Database className="w-6 h-6 text-[#3498db]" />
              <span className="font-medium">PostgreSQL</span>
            </div>
            <div className="flex items-center space-x-2">
              <Wifi className="w-6 h-6 text-[#3498db]" />
              <span className="font-medium">IoT Hub</span>
            </div>
            <div className="flex items-center space-x-2">
              <Zap className="w-6 h-6 text-[#3498db]" />
              <span className="font-medium">Real-time APIs</span>
            </div>
            <div className="flex items-center space-x-2">
              <Smartphone className="w-6 h-6 text-[#3498db]" />
              <span className="font-medium">Native Apps</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}