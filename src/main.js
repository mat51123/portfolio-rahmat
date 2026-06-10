// ---- STYLES ----
import './styles/variables.css'
import './styles/components.css'
import './styles/style.css'

// ---- COMPONENTS ----
import { Navbar }          from './components/Navbar.js'
import { Hero }            from './components/Hero.js'
import { Skills }          from './components/Skills.js'
import { Exp }             from './components/Exp.js'
import { Projects, initProjects } from './components/Projects.js'
import { About }           from './components/About.js'
import { Contact } from './components/Contact.js'
import { Footer }          from './components/portfolio.js'

// ---- RENDER APP ----
document.querySelector('#app').innerHTML = `
  ${Navbar()}
  ${Hero()}
  ${Skills()}
  ${Exp()}
  ${Projects()}
  ${About()}
  ${Contact()}
  ${Footer()}
`

// ---- INIT THEME TOGGLE ----
function initThemeToggle() {
  const themeToggleBtn = document.getElementById('theme-toggle')
  
  // Load saved theme
  const savedTheme = localStorage.getItem('theme') || 'light'
  document.documentElement.setAttribute('data-theme', savedTheme)

  themeToggleBtn?.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme')
    const targetTheme = currentTheme === 'dark' ? 'light' : 'dark'
    
    document.documentElement.setAttribute('data-theme', targetTheme)
    localStorage.setItem('theme', targetTheme)
  })
}

// ---- INIT SCROLL REVEAL ----
function initScrollReveal() {
  // 1. Observe sections for standard fade-up reveal
  const sections = document.querySelectorAll('section')
  sections.forEach(sec => {
    sec.classList.add('reveal')
  })

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        sectionObserver.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.05,
    rootMargin: '0px 0px -40px 0px'
  })

  sections.forEach(sec => sectionObserver.observe(sec))

  // 2. Staggered reveal for child elements in grids/lists
  const parents = document.querySelectorAll(
    '.projects-grid, .panitiaan-grid, .magang-grid, .edu-grid, .stats-row, .exp-list'
  )

  const parentObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const children = entry.target.children
        Array.from(children).forEach((child, index) => {
          child.style.opacity = '1'
          child.style.transform = 'translateY(0)'
          child.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
          child.style.transitionDelay = `${index * 0.12}s`
        })
        parentObserver.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  })

  parents.forEach(parent => {
    Array.from(parent.children).forEach(child => {
      child.style.opacity = '0'
      child.style.transform = 'translateY(30px)'
      child.style.transition = 'opacity 0.8s cubic-bezier(0.16, 1, 0.3, 1), transform 0.8s cubic-bezier(0.16, 1, 0.3, 1)'
    })
    parentObserver.observe(parent)
  })
}

// ---- INIT MOBILE MENU ----
function initMobileMenu() {
  const menuToggleBtn = document.getElementById('menu-toggle')
  const navLinks = document.querySelector('.nav-links')
  const nav = document.querySelector('nav')
  const links = document.querySelectorAll('.nav-links a')

  menuToggleBtn?.addEventListener('click', () => {
    nav.classList.toggle('menu-active')
    navLinks.classList.toggle('active')
  })

  links.forEach(link => {
    link.addEventListener('click', () => {
      nav.classList.remove('menu-active')
      navLinks.classList.remove('active')
    })
  })
}

// ---- INIT INTERACTIONS ----
initThemeToggle()
initMobileMenu()
initProjects()
initScrollReveal()
