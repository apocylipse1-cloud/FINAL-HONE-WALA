import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { Link } from 'react-router-dom'

const Affiliates = () => {
  const pageRef = useRef(null)

  useGSAP(() => {
    gsap.fromTo('.affiliate-content',
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

  const benefits = [
    {
      icon: '💰',
      title: '15% Lifetime Commission',
      description: 'Earn 15% commission on every client you refer, for the lifetime of their relationship with us.'
    },
    {
      icon: '🎯',
      title: 'High Conversion Rate',
      description: 'Our premium services and proven track record ensure high conversion rates for your referrals.'
    },
    {
      icon: '📊',
      title: 'Real-Time Tracking',
      description: 'Monitor your referrals and earnings with our comprehensive affiliate dashboard.'
    },
    {
      icon: '🤝',
      title: 'Dedicated Support',
      description: 'Get personalized support from our affiliate team to maximize your earning potential.'
    }
  ]

  return (
    <div ref={pageRef} className='min-h-screen bg-white text-black'>
      <div className='container mx-auto lg:px-12 px-6 py-24'>
        <div className='max-w-6xl mx-auto'>
          <Link to='/' className='inline-block mb-8 text-[#D3FD50] hover:text-black transition-colors duration-300'>
            ← Back to Home
          </Link>
          
          <div className='text-center mb-16'>
            <h1 className='affiliate-content font-[font2] lg:text-[8vw] text-6xl uppercase mb-8 leading-tight'>
              Affiliate Program
            </h1>
            <p className='affiliate-content font-[font1] lg:text-xl text-lg lg:max-w-3xl max-w-xl mx-auto leading-relaxed text-gray-700'>
              Rejoignez notre programme d'affiliation et gagnez des commissions en recommandant nos services de vidéographie de mariage.
            </p>
          </div>

          {/* Commission Highlight */}
          <div className='affiliate-content text-center mb-16'>
            <div className='bg-[#D3FD50] rounded-2xl p-8 lg:p-12 inline-block'>
              <h2 className='font-[font2] text-4xl lg:text-6xl uppercase text-black mb-4'>
                15% Lifetime
              </h2>
              <p className='font-[font1] text-xl lg:text-2xl text-black'>
                Commission Rate
              </p>
            </div>
          </div>

          {/* Benefits Grid */}
          <div className='grid lg:grid-cols-2 grid-cols-1 gap-8 lg:gap-12 mb-16'>
            {benefits.map((benefit, index) => (
              <div 
                key={index}
                className='affiliate-content group bg-gray-50 hover:bg-gray-100 rounded-2xl p-8 lg:p-10 transition-all duration-500 hover:shadow-xl hover:-translate-y-2'
              >
                <div className='text-5xl lg:text-6xl mb-6 group-hover:scale-110 transition-transform duration-300'>
                  {benefit.icon}
                </div>
                
                <div className='space-y-4'>
                  <h3 className='font-[font2] text-2xl lg:text-3xl uppercase text-black group-hover:text-[#D3FD50] transition-colors duration-300'>
                    {benefit.title}
                  </h3>
                  <p className='font-[font1] text-base lg:text-lg leading-relaxed text-gray-600'>
                    {benefit.description}
                  </p>
                </div>

                <div className='w-0 group-hover:w-full h-1 bg-[#D3FD50] transition-all duration-500 mt-6 rounded-full'></div>
              </div>
            ))}
          </div>

          {/* AmouraWorks Branding */}
          <div className='affiliate-content text-center mb-16'>
            <div className='bg-black rounded-2xl p-8 lg:p-12'>
              <h3 className='font-[font2] text-3xl lg:text-4xl uppercase text-[#D3FD50] mb-6'>
                Powered by AmouraWorks
              </h3>
              <p className='font-[font1] text-lg lg:text-xl text-gray-300 leading-relaxed mb-8'>
                Notre programme d'affiliation est géré par AmouraWorks, garantissant des paiements fiables et un suivi transparent.
              </p>
              <div className='inline-flex items-center space-x-4'>
                <div className='w-12 h-12 bg-[#D3FD50] rounded-full flex items-center justify-center'>
                  <span className='font-[font2] text-black text-xl'>A</span>
                </div>
                <span className='font-[font2] text-2xl lg:text-3xl text-white uppercase'>
                  AmouraWorks
                </span>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className='affiliate-content text-center'>
            <button className='lg:border-3 border-2 hover:border-[#D3FD50] hover:bg-[#D3FD50] hover:text-black lg:h-16 h-12 flex items-center justify-center px-12 lg:px-16 border-black rounded-full uppercase transition-all duration-300 cursor-pointer group inline-flex'>
              <span className='font-[font2] text-lg lg:text-xl group-hover:scale-105 transition-transform duration-300'>
                Join Affiliate Program
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Affiliates