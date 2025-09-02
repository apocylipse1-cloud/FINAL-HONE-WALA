import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const Contact = () => {
  const pageRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo('.contact-content',
      {
        opacity: 0,
        y: 30
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        ease: "power2.out",
        stagger: {
          amount: 0.3
        },
        delay: 0.5
      }
    )
  })

  const socialLinks = [
    { name: 'Instagram', url: 'https://instagram.com/k72wedding', icon: '📷' },
    { name: 'Facebook', url: 'https://facebook.com/k72wedding', icon: '📘' },
    { name: 'LinkedIn', url: 'https://linkedin.com/company/k72wedding', icon: '💼' }
  ]

  return (
    <div ref={pageRef} className='min-h-screen bg-black text-white'>
      {/* Header */}
      <div className='pt-24 pb-16 text-center'>
        <Link to='/' className='inline-block mb-8 text-[#D3FD50] hover:text-white transition-colors duration-300'>
          ← Back to Home
        </Link>
        <h1 className='contact-content font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight'>
          Contact Us
        </h1>
        <p className='contact-content font-[font1] lg:text-xl text-lg lg:max-w-3xl max-w-xl mx-auto leading-relaxed text-gray-300 px-6'>
          Prêt à transformer votre mariage en chef-d'œuvre cinématographique? Contactez-nous dès aujourd'hui.
        </p>
      </div>

      <div className='container mx-auto lg:px-12 px-6 pb-24'>
        <div className='grid lg:grid-cols-2 grid-cols-1 gap-12 lg:gap-16 max-w-6xl mx-auto'>
          {/* Contact Form */}
          <div className='contact-content'>
            <div className='bg-gray-900 rounded-2xl p-8 lg:p-10'>
              <h2 className='font-[font2] text-3xl lg:text-4xl uppercase text-[#D3FD50] mb-8'>
                Inquire Now
              </h2>
              
              <form className='space-y-6'>
                <div className='grid lg:grid-cols-2 grid-cols-1 gap-4'>
                  <input 
                    type="text" 
                    placeholder="First Name *"
                    required
                    className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                  />
                  <input 
                    type="text" 
                    placeholder="Last Name *"
                    required
                    className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                  />
                </div>
                
                <input 
                  type="email" 
                  placeholder="Email Address *"
                  required
                  className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                />
                
                <input 
                  type="tel" 
                  placeholder="Phone Number"
                  className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                />
                
                <input 
                  type="date" 
                  placeholder="Wedding Date *"
                  required
                  className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                />
                
                <input 
                  type="text" 
                  placeholder="Wedding Venue"
                  className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'
                />
                
                <select className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white focus:border-[#D3FD50] focus:outline-none transition-colors duration-300'>
                  <option value="">Select Package</option>
                  <option value="essential">Essential Package</option>
                  <option value="premium">Premium Package</option>
                  <option value="luxury">Luxury Package</option>
                  <option value="custom">Custom Package</option>
                </select>
                
                <textarea 
                  placeholder="Tell us about your wedding vision, special requests, or any questions you have..."
                  rows="5"
                  className='w-full px-4 py-4 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:border-[#D3FD50] focus:outline-none transition-colors duration-300 resize-none'
                ></textarea>
                
                <button 
                  type="submit"
                  className='w-full lg:h-16 h-14 bg-[#D3FD50] hover:bg-[#b8e03e] text-black font-[font2] text-xl lg:text-2xl uppercase rounded-lg transition-all duration-300 hover:scale-105'
                >
                  Send Inquiry
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className='space-y-8'>
            <div className='contact-content space-y-6'>
              <h3 className='font-[font2] text-3xl lg:text-4xl uppercase text-[#D3FD50]'>
                Let's Connect
              </h3>
              <div className='space-y-4 font-[font1] text-lg lg:text-xl text-gray-300'>
                <div className='flex items-center space-x-4'>
                  <span className='text-2xl'>📧</span>
                  <a href="mailto:contact@wedding92.com" className='hover:text-[#D3FD50] transition-colors duration-300'>
                    contact@wedding92.com
                  </a>
                </div>
                <div className='flex items-center space-x-4'>
                  <span className='text-2xl'>📍</span>
                  <span>22 ruelle du Clerc, 59126, Linselles (France)</span>
                </div>
                <div className='flex items-center space-x-4'>
                  <span className='text-2xl'>🕒</span>
                  <span>M–F: 9am – 7pm (UTC+1)</span>
                </div>
              </div>
            </div>

            <div className='contact-content space-y-6'>
              <h3 className='font-[font2] text-2xl lg:text-3xl uppercase text-[#D3FD50]'>
                Follow Our Work
              </h3>
              <div className='flex space-x-4'>
                {socialLinks.map((social, index) => (
                  <a 
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className='w-14 h-14 lg:w-16 lg:h-16 bg-gray-800 hover:bg-[#D3FD50] rounded-full flex items-center justify-center transition-all duration-300 hover:scale-110 group'
                  >
                    <span className='text-2xl lg:text-3xl group-hover:scale-110 transition-transform duration-300'>
                      {social.icon}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className='contact-content'>
              <div className='bg-gray-900 rounded-2xl p-6 lg:p-8'>
                <h4 className='font-[font2] text-xl lg:text-2xl uppercase text-[#D3FD50] mb-4'>
                  Response Time
                </h4>
                <p className='font-[font1] text-base lg:text-lg text-gray-300 leading-relaxed'>
                  Nous répondons à toutes les demandes dans les 24 heures. Pour les urgences, n'hésitez pas à nous appeler directement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact