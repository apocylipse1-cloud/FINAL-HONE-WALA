import React from 'react'
import { Link } from 'react-router-dom'

const Navigation = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      })
    }
  }

  const navItems = [
    { name: 'Why Us', action: () => scrollToSection('why-us') },
    { name: 'Portfolio', action: () => scrollToSection('portfolio') },
    { name: 'Stats', action: () => scrollToSection('stats') },
    { name: 'Services', action: () => scrollToSection('services') },
    { name: 'Process', action: () => scrollToSection('process') },
    { name: 'Call-to-Action', action: () => scrollToSection('cta') },
    { name: 'About Us', action: () => scrollToSection('about') },
    { name: 'Contact', link: '/contact' }
  ]

  return (
    <nav className='fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm border-b border-gray-100'>
      <div className='container mx-auto lg:px-12 px-6'>
        <div className='flex items-center justify-between h-16 lg:h-18'>
          {/* Logo/Brand */}
          <Link to='/' className='font-[font2] text-xl lg:text-2xl uppercase text-black hover:text-[#FF6B35] transition-colors duration-300'>
            K72
          </Link>

          {/* Desktop Navigation */}
          <ul className='hidden lg:flex items-center space-x-6 xl:space-x-8'>
            {navItems.map((item, index) => (
              <li key={index}>
                {item.link ? (
                  <Link 
                    to={item.link}
                    className='font-[font1] text-sm xl:text-base text-black hover:text-[#FF6B35] transition-colors duration-300 uppercase tracking-wide'
                  >
                    {item.name}
                  </Link>
                ) : (
                  <button 
                    onClick={item.action}
                    className='font-[font1] text-sm xl:text-base text-black hover:text-[#FF6B35] transition-colors duration-300 uppercase tracking-wide'
                  >
                    {item.name}
                  </button>
                )}
              </li>
            ))}
          </ul>

          {/* Mobile Navigation - Horizontal Scroll */}
          <div className='lg:hidden flex-1 ml-6'>
            <div className='flex items-center space-x-4 overflow-x-auto scrollbar-hide'>
              {navItems.map((item, index) => (
                <div key={index} className='flex-shrink-0'>
                  {item.link ? (
                    <Link 
                      to={item.link}
                      className='font-[font1] text-xs text-black hover:text-[#FF6B35] transition-colors duration-300 uppercase tracking-wide whitespace-nowrap'
                    >
                      {item.name}
                    </Link>
                  ) : (
                    <button 
                      onClick={item.action}
                      className='font-[font1] text-xs text-black hover:text-[#FF6B35] transition-colors duration-300 uppercase tracking-wide whitespace-nowrap'
                    >
                      {item.name}
                    </button>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navigation