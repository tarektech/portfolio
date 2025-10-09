import { motion } from 'motion/react'
import { FaAward, FaCalendar, FaCheckCircle } from 'react-icons/fa'
import { useState } from 'react'
import React from 'react'
import { CERTIFICATIONS, CATEGORY_COLORS } from '../../lib/certificationTypes'
import { MorphingDialogBasicImage } from '../motionPrimitives/image-morphing'
import ModelCertification from '../Model-certification'
import { Statistics } from '../statistics'

export function CertificationsSection() {
  const [selectedCertificate, setSelectedCertificate] = useState<
    (typeof CERTIFICATIONS)[0] | null
  >(null)
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleCertificateClick = (cert: (typeof CERTIFICATIONS)[0]) => {
    setSelectedCertificate(cert)
    setIsModalOpen(true)
  }

  return (
    <section id="certifications" className="relative py-20 px-6">
      <motion.div
        key="certificates-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        {/* Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
        >
          <Statistics />
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.05 }}
              className="group relative"
            >
              <div
                className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 cursor-pointer h-full"
                onClick={() => handleCertificateClick(cert)}
              >
                {/* Certificate Image */}
                {cert.image && (
                  <div className="relative h-48 bg-gradient-to-br from-gray-700 to-gray-800 overflow-hidden">
                    <MorphingDialogBasicImage
                      src={cert.image}
                      alt={`${cert.title} Certificate`}
                      className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-500"
                    />

                    {/* Fallback when image fails to load */}
                    <div
                      className="absolute inset-0 items-center justify-center bg-gradient-to-br from-gray-700 to-gray-800"
                      style={{ display: 'none' }}
                    >
                      <FaAward className="text-4xl text-orange-500" />
                    </div>
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  </div>
                )}

                <div className="p-6">
                  {/* Category Badge */}
                  <div
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium text-white bg-gradient-to-r ${
                      CATEGORY_COLORS[
                        cert.category as keyof typeof CATEGORY_COLORS
                      ] || 'from-gray-500 to-gray-600'
                    } mb-4`}
                  >
                    <FaCheckCircle />
                    {cert.category}
                  </div>

                  {/* Content */}
                  <h3 className="text-lg font-semibold text-white mb-3 leading-tight group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-orange-400 group-hover:to-red-400 transition-all duration-300">
                    {cert.title}
                  </h3>

                  {/* Year */}
                  <div className="flex items-center gap-2 text-gray-400 text-sm">
                    <FaCalendar />
                    <span>{cert.year}</span>
                  </div>
                </div>

                {/* Hover Effect */}
                <div className="absolute inset-0 rounded-xl bg-gradient-to-r from-orange-500/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Certificate Modal */}
      <ModelCertification
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false)
          setSelectedCertificate(null)
        }}
        certificate={selectedCertificate}
      />
    </section>
  )
}
