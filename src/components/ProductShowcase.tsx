import { motion } from 'framer-motion'
import { Smartphone, Monitor, Tablet, Lock, Bell, Users, BarChart3, Wifi, Zap } from 'lucide-react'
// Using regular img tags for React app

export default function ProductShowcase() {
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

  const showcaseItems = [
    {
      icon: Smartphone,
      title: "Mobile-First Experience",
      description: "Native iOS and Android apps designed for residents, guards, and administrators",
      image: "/screenshot_0.png",
      features: ["Instant notifications", "Gate control", "Visitor management", "Community updates"]
    },
    {
      icon: Monitor,
      title: "Admin Dashboard",
      description: "Comprehensive web portal for estate managers and property administrators",
      image: "/screenshot_3.png", 
      features: ["Real-time monitoring", "User management", "Analytics & reports", "System configuration"]
    },
    {
      icon: Lock,
      title: "Smart Access Control",
      description: "Advanced gate management with IoT integration and security protocols",
      image: "/screenshot_1.png",
      features: ["RFID integration", "Mobile gate control", "Visitor pre-approval", "Access logs"]
    }
  ]

  const platforms = [
    { name: "iOS App", icon: Smartphone, status: "Coming Soon", color: "#3498db" },
    { name: "Android App", icon: Tablet, status: "Coming Soon", color: "#3498db" },
    { name: "Web Dashboard", icon: Monitor, status: "Beta", color: "#27ae60" },
    { name: "IoT Hub", icon: Wifi, status: "Development", color: "#f39c12" }
  ]

  return (
    <section className="py-20 bg-gradient-to-br from-white via-blue-50/30 to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
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
            <Zap className="w-4 h-4 mr-2" />
            Product Showcase
          </motion.div>
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4"
            variants={fadeInUp}
          >
            Experience the Complete
            <span className="block text-[#3498db]">Estate Management Ecosystem</span>
          </motion.h2>
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            variants={fadeInUp}
          >
            From mobile apps to web dashboards, IoT integration to smart automation - 
            discover how EstateIoT transforms every aspect of community management.
          </motion.p>
        </motion.div>

        {/* Product Showcase Grid */}
        <div className="space-y-20">
          {showcaseItems.map((item, index) => (
            <motion.div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={staggerContainer}
            >
              <motion.div 
                className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}
                variants={fadeInUp}
              >
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-[#3498db]/10 rounded-xl flex items-center justify-center mr-4">
                    <item.icon className="w-6 h-6 text-[#3498db]" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">{item.title}</h3>
                </div>
                
                <p className="text-lg text-gray-600 mb-8">{item.description}</p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {item.features.map((feature, featureIndex) => (
                    <motion.div
                      key={featureIndex}
                      className="flex items-center space-x-3 p-3 bg-white rounded-lg shadow-sm border border-gray-100"
                      variants={fadeInUp}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="w-2 h-2 bg-[#3498db] rounded-full"></div>
                      <span className="text-gray-700 font-medium">{feature}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>

              <motion.div 
                className={`relative ${index % 2 === 1 ? 'lg:col-start-1 lg:row-start-1' : ''}`}
                variants={fadeInUp}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="relative bg-white rounded-2xl p-6 shadow-xl border border-gray-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    width={500}
                    height={400}
                    className="w-full h-auto rounded-xl"
                  />
                  <div className="absolute -top-4 -right-4 w-8 h-8 bg-[#3498db] rounded-full flex items-center justify-center">
                    <item.icon className="w-4 h-4 text-white" />
                  </div>
                </div>
                
                {/* Floating decoration */}
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-[#3498db]/20 to-transparent rounded-full -z-10"></div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Platform Status */}
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
            Development Roadmap
          </motion.h3>
          
          <motion.div 
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto"
            variants={staggerContainer}
          >
            {platforms.map((platform, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100 text-center"
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gray-50 rounded-xl flex items-center justify-center">
                  <platform.icon className="w-8 h-8 text-gray-600" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">{platform.name}</h4>
                <span 
                  className="inline-block px-3 py-1 rounded-full text-sm font-medium text-white"
                  style={{ backgroundColor: platform.color }}
                >
                  {platform.status}
                </span>
              </motion.div>
            ))}
          </motion.div>

          <motion.div 
            className="mt-8 p-4 bg-[#3498db]/5 rounded-lg border border-[#3498db]/20 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            <p className="text-gray-700">
              <strong>Join our beta program</strong> to get early access to new features and help shape the future of estate management technology.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
