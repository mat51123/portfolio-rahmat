import { projects } from '../data/portfolio.js'

export function Projects() {
  const projectCards = projects.map(p => `
    <div class="project-card" data-category="${p.category}" data-id="${p.id}">
      <div class="project-img-wrapper">
        <img class="project-img" src="${p.image}" alt="${p.title}" loading="lazy">
        <div class="project-category-tag">${p.categoryName}</div>
      </div>
      <div class="project-info">
        <h3 class="project-title">${p.title}</h3>
        <div class="project-tags">
          ${p.tags.map(t => `<span class="p-tag">${t}</span>`).join('')}
        </div>
        <p class="project-desc-short">${p.shortDesc}</p>
        <button class="project-cta-btn">Lihat Detail ↗</button>
      </div>
    </div>
  `).join('')

  return `
  <section id="projects" class="projects-section">
    <div class="section-inner">
      <div class="section-tag">Portfolio</div>
      <div class="projects-header">
        <h2 style="font-size:38px;font-weight:700;letter-spacing:-.03em;line-height:1.2">
          Karya &amp; <span class="grad-text">Proyek</span> Pilihan
        </h2>
        <p class="projects-sub">Menampilkan beberapa proyek pengembangan web dan sistem yang telah saya selesaikan.</p>
      </div>



      <!-- PROJECTS GRID -->
      <div class="projects-grid">
        ${projectCards}
      </div>
    </div>
  </section>

  <!-- DETAIL PROJECT MODAL -->
  <div id="project-modal" class="modal-overlay hidden">
    <div class="modal-card">
      <button class="modal-close-btn" id="modal-close-btn">&times;</button>
      <div class="modal-content-grid" id="modal-content-area">
        <!-- Will be filled dynamically by JavaScript -->
      </div>
    </div>
  </div>
  `
}

export function initProjects() {
  const projectCards = document.querySelectorAll('.project-card')
  const modal = document.getElementById('project-modal')
  const modalClose = document.getElementById('modal-close-btn')
  const modalContentArea = document.getElementById('modal-content-area')

  // --- MODAL LOGIC ---
  projectCards.forEach(card => {
    card.addEventListener('click', (e) => {
      // Prevent modal opening if user targets specific text actions in future extensions
      const projectId = card.getAttribute('data-id')
      const projectData = projects.find(p => p.id === projectId)

      if (projectData) {
        openModal(projectData)
      }
    })
  })

  function openModal(data) {
    const featuresHtml = data.features.map(f => `<li>${f}</li>`).join('')
    const tagsHtml = data.tags.map(t => `<span class="p-tag">${t}</span>`).join('')

    modalContentArea.innerHTML = `
      <div class="modal-visual">
        <img class="modal-img" src="${data.image}" alt="${data.title}">
      </div>
      <div class="modal-details">
        <div class="modal-category">${data.categoryName}</div>
        <h2 class="modal-title">${data.title}</h2>
        <div class="project-tags" style="margin-bottom: 20px;">
          ${tagsHtml}
        </div>
        
        <div class="modal-section-title">Tentang Proyek</div>
        <p class="modal-desc-long">${data.desc}</p>
        
        ${data.challenge ? `
          <div class="modal-section-title">Tantangan &amp; Solusi</div>
          <p class="modal-desc-long">${data.challenge}</p>
        ` : ''}
        
        ${data.features && data.features.length > 0 ? `
          <div class="modal-section-title">Fitur yang dibangun</div>
          <ul class="modal-features-list">
            ${featuresHtml}
          </ul>
        ` : ''}

        ${data.backend ? `
          <div class="modal-section-title">Backend</div>
          <p class="modal-desc-long">${data.backend}</p>
        ` : ''}

        ${data.database ? `
          <div class="modal-section-title">Database</div>
          <p class="modal-desc-long">${data.database}</p>
        ` : ''}

        ${data.frontend ? `
          <div class="modal-section-title">Frontend</div>
          <p class="modal-desc-long">${data.frontend}</p>
        ` : ''}

        ${data.tools ? `
          <div class="modal-section-title">Tools &amp; Environment</div>
          <p class="modal-desc-long">${data.tools}</p>
        ` : ''}
      </div>
    `

    modal.classList.remove('hidden')
    document.body.style.overflow = 'hidden' // Disable scroll
  }

  function closeModal() {
    modal.classList.add('hidden')
    document.body.style.overflow = '' // Enable scroll
  }

  modalClose?.addEventListener('click', (e) => {
    e.stopPropagation()
    closeModal()
  })

  modal?.addEventListener('click', (e) => {
    if (e.target === modal) {
      closeModal()
    }
  })

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
      closeModal()
    }
  })
}
