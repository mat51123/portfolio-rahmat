import { profile } from '../data/portfolio.js'

export function Contact() {
  // Convert 0882-0067-44979 to international format for wa.me link: 62882006744979
  const waPhone = profile.phone ? '62' + profile.phone.replace(/[^0-9]/g, '').substring(1) : ''

  return `
  <section id="contact" class="contact-section">
    <div class="section-inner" style="max-width: 1120px; text-align: center;">
      <div class="section-tag" style="margin-bottom: 24px;">Kontak</div>
      <h2 class="contact-heading">Mari berkolaborasi bersama!</h2>
      <p class="contact-desc" style="margin-bottom: 48px;">Punya project atau ingin berdiskusi? Hubungi saya langsung melalui kontak berikut.</p>
      
      <div class="contact-horizontal-list">
        <!-- Email -->
        <a href="mailto:${profile.email}" class="contact-item-link" title="Kirim Email">
          <div class="contact-info-row">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
            </div>
            <span class="contact-text">${profile.email}</span>
          </div>
        </a>

        <!-- WhatsApp -->
        <a href="https://wa.me/${waPhone}" target="_blank" class="contact-item-link" title="Hubungi via WhatsApp">
          <div class="contact-info-row">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.9 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.81 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.93a16 16 0 0 0 6.16 6.16l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
            </div>
            <span class="contact-text">${profile.phone}</span>
          </div>
        </a>

        <!-- Alamat -->
        <div class="contact-item-static" title="Lokasi Purwokerto">
          <div class="contact-info-row">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <span class="contact-text">${profile.address}</span>
          </div>
        </div>

        <!-- Instagram -->
        <a href="${profile.instagramUrl}" target="_blank" class="contact-item-link" title="Instagram Profile">
          <div class="contact-info-row">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </div>
            <span class="contact-text">${profile.instagram}</span>
          </div>
        </a>

        <!-- TikTok -->
        <a href="${profile.tiktokUrl}" target="_blank" class="contact-item-link" title="TikTok Profile">
          <div class="contact-info-row">
            <div class="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M9 12a4 4 0 1 0 4 4V4a5 5 0 0 0 5 5" />
              </svg>
            </div>
            <span class="contact-text">${profile.tiktok}</span>
          </div>
        </a>
      </div>
    </div>
  </section>
  `
}
