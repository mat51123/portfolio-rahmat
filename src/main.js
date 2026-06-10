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
  // Dynamically add reveal class to major sections/cards for premium scroll animations
  const targets = document.querySelectorAll(
    'section, .project-card, .exp-item, .pan-card, .magang-card, .edu-card, .stat-box'
  )
  
  targets.forEach(el => {
    el.classList.add('reveal')
  })

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active')
        // Option: stop observing once revealed
        observer.unobserve(entry.target)
      }
    })
  }, {
    threshold: 0.08,
    rootMargin: '0px 0px -40px 0px'
  })

  targets.forEach(el => observer.observe(el))
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
