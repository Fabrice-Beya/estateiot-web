'use client'

import { motion } from 'framer-motion'
import { CheckCircle, TrendingUp, Shield, Clock, Users, DollarSign } from 'lucide-react'

export default function Benefits() {
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

  const benefits = [
    "Reduce operational costs by up to 40%",
    "Increase security effectiveness by 85%", 
    "Improve resident satisfaction scores by 90%",
    "Automate 70% of routine management tasks",
    "Reduce emergency response time by 60%",
    "Scale seamlessly from 10 to 10,000+ units"
  ]

  const stats = [
    {
      number: "500+",
      label: "Estates Managed",
      icon: Users,
      color: "#3498db"
    },
    {
      number: "99.9%",
      label: "System Uptime",
      icon: Shield,
      color: "#27ae60"
    },
    {
      number: "50K+",
      label: "Active Residents",
      icon: TrendingUp,
      color: "#8e44ad"
    },
    {
      number: "24/7",
      label: "Support Available",
      icon: Clock,
      color: "#e67e22"
    }
  ]

  return (
    <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-[#3498db]/10 rounded-full text-[#3498db] font-medium text-sm mb-6"
              variants={fadeInUp}
            >
              <TrendingUp className="w-4 h-4 mr-2" />
              Proven Results
            </motion.div>

            <motion.h2 
              className="text-3xl sm:text-4xl font-bold text-gray-900 mb-8"
              variants={fadeInUp}
            >
              Why Leading Estates Choose
              <span className="block text-[#3498db]">EstateIoT</span>
            </motion.h2>
            
            <motion.p 
              className="text-lg text-gray-600 mb-8"
              variants={fadeInUp}
            >
              Transform your estate operations with measurable improvements in efficiency, 
              security, and resident satisfaction through our proven IoT platform.
            </motion.p>

            <motion.div className="space-y-4" variants={staggerContainer}>
              {benefits.map((benefit, index) => (
                <motion.div 
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-sm border border-gray-100"
                  variants={fadeInUp}
                  whileHover={{ scale: 1.02, x: 10 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="flex-shrink-0">
                    <CheckCircle className="w-6 h-6 text-[#27ae60]" />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{benefit}</span>
                </motion.div>
              ))}
            </motion.div>

            <motion.div 
              className="mt-8 p-6 bg-[#3498db]/5 rounded-xl border border-[#3498db]/20"
              variants={fadeInUp}
            >
              <div className="flex items-center mb-3">
                <DollarSign className="w-5 h-5 text-[#3498db] mr-2" />
                <span className="font-semibold text-gray-900">ROI Guarantee</span>
              </div>
              <p className="text-gray-700">
                See measurable returns within 6 months or we'll work with you until you do. 
                Our platform typically pays for itself through operational savings alone.
              </p>
            </motion.div>
          </motion.div>

          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                >
                  <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl flex items-center justify-center group-hover:from-[#3498db]/10 group-hover:to-[#3498db]/20 transition-all duration-300">
                    <stat.icon className="w-8 h-8" style={{ color: stat.color }} />
                  </div>
                  <div className="text-4xl font-bold mb-2" style={{ color: stat.color }}>
                    {stat.number}
                  </div>
                  <div className="text-gray-600 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Background decoration */}
            <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#3498db]/10 to-transparent rounded-full -z-10"></div>
            <div className="absolute -bottom-8 -left-8 w-24 h-24 bg-gradient-to-tr from-[#3498db]/10 to-transparent rounded-full -z-10"></div>
          </motion.div>
        </div>

        {/* Vision Section */}
        <motion.div 
          className="mt-20 text-center"
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.div 
            className="max-w-4xl mx-auto bg-gradient-to-br from-[#3498db]/5 to-[#3498db]/10 rounded-2xl p-8 border border-[#3498db]/20"
            variants={fadeInUp}
          >
            <motion.h3 
              className="text-2xl font-bold text-gray-900 mb-4"
              variants={fadeInUp}
            >
              The Future of Estate Management is Here
            </motion.h3>
            <motion.p 
              className="text-lg text-gray-700 mb-6"
              variants={fadeInUp}
            >
              We're building the next generation of smart community management. Join us in revolutionizing 
              how residential estates operate with cutting-edge IoT technology, intelligent automation, 
              and user-centric design.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              variants={fadeInUp}
            >
              <button className="bg-[#3498db] text-white px-8 py-3 rounded-lg font-semibold hover:bg-[#2980b9] transition-all">
                Join the Beta Program
              </button>
              <button className="border-2 border-[#3498db] text-[#3498db] px-8 py-3 rounded-lg font-semibold hover:bg-[#3498db] hover:text-white transition-all">
                Request Early Access
              </button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}