'use client';
import { motion } from 'motion/react';
import { Link, Mail, MapPin, Send } from 'lucide-react';
import React from 'react';

const CONTACT_INFO = [
  {
    icon: <Mail className="w-6 h-6" />,
    label: 'Email',
    value: 'tarek@example.com',
    link: 'mailto:tarek@example.com',
  },
  {
    icon: <MapPin className="w-6 h-6" />,
    label: 'Location',
    value: 'Istanbul, Turkey',
    link: null,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="relative py-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">
              Touch
            </span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-orange-400 to-red-400 mx-auto rounded-full"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Ready to bring your next project to life? Let&apos;s connect and
            discuss how we can work together to create something amazing.
          </p>
        </motion.div>

        <div className="flex flex-col items-center max-w-lg mx-auto">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-12"
          >
            <h3 className="text-lg font-bold text-white mb-4 text-center">
              Send me a message
            </h3>

            <form className="space-y-4">
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer text-sm"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors cursor-pointer text-sm"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full px-3 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-orange-500 transition-colors resize-none cursor-pointer text-sm"
                  placeholder="Tell me about your project..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-600 transition-all duration-200 cursor-pointer text-sm"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="w-full text-center space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Let&apos;s start a conversation
              </h3>
              <p className="text-gray-400 leading-relaxed mb-8 max-w-xl mx-auto">
                I&apos;m always interested in discussing new opportunities,
                creative projects, and innovative ideas. Whether you&apos;re
                looking for a full-stack developer or just want to say hello,
                I&apos;d love to hear from you.
              </p>
            </div>

            {/* Contact Details */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              {CONTACT_INFO.map((info, index) => (
                <motion.div
                  key={info.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-4 justify-center"
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-orange-500 to-orange-500 text-white">
                    {info.icon}
                  </div>
                  <div className="text-left">
                    <div className="text-gray-400 text-sm">{info.label}</div>
                    {info.link ? (
                      <Link
                        href={info.link}
                        className="text-white font-medium hover:text-orange-400 transition-colors cursor-pointer"
                      >
                        {info.value}
                      </Link>
                    ) : (
                      <div className="text-white font-medium">{info.value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
