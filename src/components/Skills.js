import { profile, hardSkills, softSkills } from '../data/portfolio.js'

export function Skills() {
  const hardTags = hardSkills.map(s => `<span class="skill-tag hard">${s}</span>`).join('')
  const softTags = softSkills.map(s => `<span class="skill-tag soft">${s}</span>`).join('')

  return `
  <section id="about">
    <div class="section-inner">
      <div class="section-tag">Tentang Saya</div>
      <div class="about-grid">
        <div>
          <h2 style="font-size:34px;font-weight:700;letter-spacing:-.03em;line-height:1.2;margin-bottom:20px">
            Saya memadukan <span class="grad-text">kreativitas</span> dengan keahlian teknis
          </h2>
          <p class="about-desc">${profile.bio}</p>
        </div>
        <div>
          <ul class="info-list" style="margin-bottom:32px">
            <li><span>Email</span><span>${profile.email}</span></li>
            <li><span>Nomor</span><span>${profile.phone}</span></li>
            <li><span>Alamat</span><span>${profile.address}</span></li>
            <li><span>Status</span><span>Mahasiswa Aktif — Semester 6</span></li>
          </ul>
          <div class="skill-section">
            <div class="skill-title">Hard Skills</div>
            <div class="skill-tags" style="margin-bottom:16px">${hardTags}</div>
            <div class="skill-title">Soft Skills</div>
            <div class="skill-tags">${softTags}</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  `
}
