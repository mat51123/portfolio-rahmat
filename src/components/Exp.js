import { organisasi, kepanitiaan, magang } from '../data/portfolio.js'

export function Exp() {
  const orgItems = organisasi.map(o => `
    <div class="exp-item">
      <div>
        <div class="exp-org grad-text">${o.org}</div>
        <div class="exp-role">${o.role}</div>
        <div class="exp-desc">${o.desc}</div>
      </div>
      <div class="exp-year">${o.year}</div>
    </div>
  `).join('')

  const panCards = kepanitiaan.map(p => `
    <div class="pan-card">
      <div class="pan-year">${p.year}</div>
      <div class="pan-name">${p.name}</div>
      <div class="pan-role">${p.role}</div>
      <div class="pan-desc">${p.desc}</div>
    </div>
  `).join('')

  const magangCards = magang.map(m => `
    <div class="magang-card">
      <div class="magang-company">${m.company}</div>
      <div class="magang-period">${m.period}</div>
      <div class="magang-desc">${m.desc}</div>
    </div>
  `).join('')

  return `
  <!-- ORGANISASI -->
  <section id="experience" class="exp-section">
    <div class="section-inner">
      <div class="exp-grid">
        <div class="exp-sticky">
          <div class="section-tag">Pengalaman</div>
          <h2 class="exp-heading">Organisasi &amp; Kontribusi</h2>
          <p class="exp-sub">Aktif berkontribusi dalam berbagai organisasi kemahasiswaan dan kepemimpinan di lingkungan kampus.</p>
        </div>
        <div class="exp-list">
          ${orgItems}
        </div>
      </div>
    </div>
  </section>

  <!-- KEPANITIAAN -->
  <section>
    <div class="section-inner">
      <div class="section-tag">Kepanitiaan</div>
      <h2 style="font-size:34px;font-weight:700;letter-spacing:-.03em;margin-bottom:40px">Event &amp; Kegiatan</h2>
      <div class="panitiaan-grid">
        ${panCards}
      </div>
    </div>
  </section>

  <!-- MAGANG -->
  <section class="magang-section">
    <div class="section-inner">
      <div class="section-tag">Magang/Kerja</div>
      <h2 style="font-size:38px;font-weight:700;letter-spacing:-.03em;color:var(--white);margin-top:8px;max-width:500px;line-height:1.15">Pengalaman Kerja Nyata</h2>
      <div class="magang-grid">
        ${magangCards}
      </div>
    </div>
  </section>
  `
}
