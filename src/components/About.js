import { pendidikan, organisasi, kepanitiaan, magang, hardSkills } from '../data/portfolio.js'

export function About() {
  const eduCards = pendidikan.map(e => `
    <div class="edu-card">
      <div class="edu-period">${e.period}</div>
      <div class="edu-school">${e.school}</div>
      ${e.major ? `<div class="edu-major">${e.major}</div>` : ''}
    </div>
  `).join('')

  const dynamicStats = [
    { num: `${magang.length}`, label: 'Pengalaman Magang' },
    { num: `${kepanitiaan.length}`, label: 'Kepanitiaan' },
    { num: `${organisasi.length}`, label: 'Organisasi Aktif' },
    { num: `${hardSkills.length}`, label: 'Teknologi Web' },
  ]

  const statBoxes = dynamicStats.map(s => `
    <div class="stat-box">
      <div class="stat-num">${s.num}</div>
      <div class="stat-label">${s.label}</div>
    </div>
  `).join('')

  return `
  <!-- EDUCATION -->
  <section id="education">
    <div class="section-inner">
      <div class="section-tag">Pendidikan</div>
      <h2 style="font-size:34px;font-weight:700;letter-spacing:-.03em;margin-bottom:32px">Riwayat Pendidikan</h2>
      <div class="edu-grid">
        ${eduCards}
      </div>
    </div>
  </section>

  <!-- STATS -->
  <section class="stats-section">
    <div class="section-inner" style="text-align:center">
      <div class="section-tag">Statistik</div>
      <h2 style="font-size:34px;font-weight:700;letter-spacing:-.03em;margin-top:8px">Angka di Balik Perjalanan</h2>
      <div class="stats-row">
        ${statBoxes}
      </div>
    </div>
  </section>
  `
}
