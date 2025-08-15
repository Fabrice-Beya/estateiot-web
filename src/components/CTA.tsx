
import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
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

  return (
    <section className="py-20 bg-gradient-to-r from-[#3498db] to-[#2980b9]">
      <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-white mb-6"
            variants={fadeInUp}
          >
            Be Part of the Future
          </motion.h2>
          <motion.p 
            className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto"
            variants={fadeInUp}
          >
            Join our exclusive beta program and be among the first to experience the next generation of smart estate management.
          </motion.p>
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            variants={fadeInUp}
          >
            <button className="bg-white text-[#3498db] px-8 py-4 rounded-lg text-lg font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              Join Beta Program
              <ArrowRight className="inline-block ml-2 w-5 h-5" />
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-[#3498db] transition-all">
              Request Demo
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
