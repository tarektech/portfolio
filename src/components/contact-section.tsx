'use client'
import { Send } from 'lucide-react'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import ContectMotion from './motion/contectMotion'

// Define validation schema using Zod
const contactFormSchema = z.object({
  name: z
    .string()
    .min(2, 'Name must be at least 2 characters')
    .max(50, 'Name must be less than 50 characters'),
  email: z
    .email({
      message: 'Please enter a valid email address',
      pattern: z.regexes.html5Email,
    })
    .min(1, 'Email is required'),
  subject: z
    .string()
    .min(3, 'Subject must be at least 3 characters')
    .max(100, 'Subject must be less than 100 characters'),
  message: z
    .string()
    .min(10, 'Message must be at least 10 characters')
    .max(1000, 'Message must be less than 1000 characters'),
})

type ContactFormData = z.infer<typeof contactFormSchema>

export function ContactSection() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: 'onBlur',
  })

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      })

      const result = await response.json()

      console.log(result)

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: "Message sent successfully! I'll get back to you soon.",
        })
        reset()
      } else {
        setSubmitStatus({
          type: 'error',
          message: result.error || 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      console.error('Error sending message:', error)
      setSubmitStatus({
        type: 'error',
        message: 'An error occurred. Please try again later.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="relative py-20 px-6 min-h-screen">
      <div className="container mx-auto max-w-6xl">
        {/* Section Header */}
        <ContectMotion className="text-center mb-16">
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
        </ContectMotion>

        <div className="flex flex-col items-center max-w-lg mx-auto">
          {/* Contact Form */}
          <ContectMotion className="w-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 mb-12">
            <h3 className="text-lg font-bold text-white mb-4 text-center">
              Send me a message
            </h3>

            {/* Status Messages */}
            {submitStatus.type && (
              <ContectMotion
                className={`mb-4 p-3 rounded-lg text-sm ${
                  submitStatus.type === 'success'
                    ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                    : 'bg-red-500/20 text-red-400 border border-red-500/30'
                }`}
              >
                {submitStatus.message}
              </ContectMotion>
            )}

            <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  {...register('name')}
                  className={`w-full px-3 py-2 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors  text-sm ${
                    errors.name
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-600 focus:border-orange-500'
                  }`}
                  placeholder="John Doe"
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  {...register('email')}
                  className={`w-full px-3 py-2 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors  text-sm ${
                    errors.email
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-600 focus:border-orange-500'
                  }`}
                  placeholder="john@example.com"
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1">
                  Subject
                </label>
                <input
                  type="text"
                  {...register('subject')}
                  className={`w-full px-3 py-2 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors  text-sm ${
                    errors.subject
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-600 focus:border-orange-500'
                  }`}
                  placeholder="Project Inquiry"
                  disabled={isSubmitting}
                />
                {errors.subject && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.subject.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-gray-400 text-sm font-medium mb-1">
                  Message
                </label>
                <textarea
                  rows={4}
                  {...register('message')}
                  className={`w-full px-3 py-2 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none transition-colors resize-none  text-sm ${
                    errors.message
                      ? 'border-red-500 focus:border-red-500'
                      : 'border-gray-600 focus:border-orange-500'
                  }`}
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                ></textarea>
                {errors.message && (
                  <p className="mt-1 text-xs text-red-400">
                    {errors.message.message}
                  </p>
                )}
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-gradient-to-r from-orange-500 to-orange-500 text-white rounded-lg font-medium hover:from-orange-600 hover:to-orange-600 transition-all duration-200 cursor-pointer text-sm disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (
                  <>
                    <span className="inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </ContectMotion>

          {/* Contact Info */}
          <ContectMotion className="w-full text-center space-y-8">
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
          </ContectMotion>
        </div>
      </div>
    </section>
  )
}
