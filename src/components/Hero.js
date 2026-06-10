import { profile, tickerItems } from '../data/portfolio.js'

export function Hero() {
  const doubled = [...tickerItems, ...tickerItems]
    .map(item => `<span class="ticker-item">${item}</span>`)
    .join('')

  const waPhone = profile.phone.replace(/[^0-9]/g, '').replace(/^0/, '62')
  const waUrl = `https://wa.me/${waPhone}`

  return `
  <div class="hero">
    <div class="hero-bg"></div>
    <div class="hero-avatar">
      <img class="hero-avatar-img" src="/images/profile.jpg" alt="${profile.name}">
    </div>
    <div class="hero-tag grad-border">
      &nbsp;&nbsp;${profile.subtitle}&nbsp;&nbsp;
    </div>
    <h1>Rahmat<br><span class="grad-text">Syahputra</span></h1>
    <p class="hero-sub">${profile.title}.</p>
    <div class="hero-actions">
      <a href="${waUrl}" target="_blank" class="btn-primary">Hubungi Saya ↗</a>
      <a href="#about" class="btn-outline">Lihat Portfolio</a>
    </div>
  </div>

  <div class="ticker">
    <div class="ticker-track">
      ${doubled}
    </div>
  </div>
  `
}
