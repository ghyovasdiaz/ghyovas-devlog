// app.js - Main Application Logic for Ghyovas DevLog
document.addEventListener('DOMContentLoaded', () => {
  // State
  let displayedPostsCount = 4;
  let allPosts = [...blogData.posts];

  // Check localStorage for any newly added posts by the user
  const savedCustomPosts = localStorage.getItem('ghyovas_devlog_posts');
  if (savedCustomPosts) {
    try {
      const parsed = JSON.parse(savedCustomPosts);
      if (Array.isArray(parsed)) {
        // Prepend custom posts to allPosts
        allPosts = [...parsed, ...allPosts];
      }
    } catch (e) {
      console.error('Error parsing custom posts', e);
    }
  }

  // DOM Elements
  const techBadgesContainer = document.getElementById('tech-badges-list');
  const postsGrid = document.getElementById('posts-grid');
  const loadMoreBtn = document.getElementById('btn-load-more');
  const sortOrderSelect = document.getElementById('sort-order-select');
  const projectsGrid = document.getElementById('projects-grid');
  const navLinks = document.querySelectorAll('.nav-link');
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.getElementById('nav-menu');

  // Modals
  const postReaderModal = document.getElementById('post-reader-modal');
  const readerHeroImg = document.getElementById('reader-hero-img');
  const readerTag = document.getElementById('reader-tag');
  const readerDate = document.getElementById('reader-date');
  const readerTitle = document.getElementById('reader-title');
  const readerAuthor = document.getElementById('reader-author');
  const readerSummary = document.getElementById('reader-summary');
  const readerTasks = document.getElementById('reader-tasks');
  const readerLearnings = document.getElementById('reader-learnings');
  const readerChallenges = document.getElementById('reader-challenges');
  const readerSolutions = document.getElementById('reader-solutions');
  const readerNext = document.getElementById('reader-next');

  // Search Modal Elements
  const searchBtn = document.getElementById('btn-search');
  const searchModal = document.getElementById('search-modal');
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  // Add Post Modal Elements
  const addPostBtn = document.getElementById('btn-add-post');
  const addPostModal = document.getElementById('add-post-modal');
  const addPostForm = document.getElementById('add-post-form');

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  const toastNotice = document.getElementById('toast-notice');

  // ============================================================
  // 1. Render Weekly Posts Cards Grid
  // ============================================================
  function getSortedPosts() {
    const order = sortOrderSelect ? sortOrderSelect.value : 'newest';
    const sorted = [...allPosts];
    if (order === 'oldest') {
      return sorted.sort((a, b) => a.weekNumber - b.weekNumber);
    } else {
      return sorted.sort((a, b) => b.weekNumber - a.weekNumber);
    }
  }

  function renderPosts() {
    if (!postsGrid) return;
    postsGrid.innerHTML = '';

    const sorted = getSortedPosts();
    const postsToDisplay = sorted.slice(0, displayedPostsCount);

    postsToDisplay.forEach(post => {
      const card = document.createElement('article');
      card.className = 'post-card';
      card.setAttribute('data-id', post.id);

      const displayDate = post.dateRange ? `${post.dateRange}` : post.date;

      card.innerHTML = `
        <div class="post-card-thumb-wrapper">
          <img src="${post.thumbnail}" alt="${post.title}" class="post-card-thumb-img" loading="lazy" />
        </div>
        <div class="post-card-content">
          <h3 class="post-card-title">${post.title}</h3>
          <p class="post-card-excerpt">${post.excerpt}</p>
        </div>
        <div class="post-card-footer">
          <span class="post-card-date">${displayDate}</span>
          <span class="post-card-author">${post.author}</span>
        </div>
      `;

      card.addEventListener('click', () => openPostReader(post));
      postsGrid.appendChild(card);
    });

    // Update Load More Button visibility & text
    if (loadMoreBtn) {
      if (displayedPostsCount >= allPosts.length) {
        loadMoreBtn.innerText = 'Semua 13 Minggu Ditampilkan';
        loadMoreBtn.style.opacity = '0.6';
        loadMoreBtn.style.cursor = 'default';
      } else {
        loadMoreBtn.innerText = `Muat Lebih Banyak (${displayedPostsCount}/${allPosts.length} Minggu)`;
        loadMoreBtn.style.opacity = '1';
        loadMoreBtn.style.cursor = 'pointer';
      }
    }
  }

  // Sort Order Selector Event
  if (sortOrderSelect) {
    sortOrderSelect.addEventListener('change', () => {
      renderPosts();
      showToast(`Mengurutkan: ${sortOrderSelect.options[sortOrderSelect.selectedIndex].text}`);
    });
  }

  // Load More Button Event
  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      if (displayedPostsCount < allPosts.length) {
        displayedPostsCount = Math.min(displayedPostsCount + 4, allPosts.length);
        renderPosts();
        showToast(`Memuat catatan mingguan tambahan...`);
      }
    });
  }

  // ============================================================
  // 3. Post Reader Modal Logic
  // ============================================================
  function openPostReader(post) {
    if (!postReaderModal) return;

    readerHeroImg.src = post.thumbnail;
    readerHeroImg.alt = post.title;
    readerTag.textContent = post.tags ? post.tags.join(' • ') : `WEEK ${post.weekNumber}`;
    readerDate.textContent = post.dateRange ? `${post.dateRange} • ${post.date}` : post.date;
    readerAuthor.textContent = `Oleh: ${post.author}`;
    readerTitle.textContent = post.title;
    readerSummary.textContent = post.summary || post.excerpt;

    // Daily Activities from Official Logbook PDF
    const readerDailyList = document.getElementById('reader-daily-list');
    const readerDailyBox = document.querySelector('.reader-daily-box');
    if (readerDailyList) {
      readerDailyList.innerHTML = '';
      if (post.dailyActivities && post.dailyActivities.length > 0) {
        if (readerDailyBox) readerDailyBox.style.display = 'block';
        post.dailyActivities.forEach(act => {
          const item = document.createElement('div');
          item.style.padding = '10px 14px';
          item.style.background = 'var(--bg-card)';
          item.style.border = '1px solid var(--border-color)';
          item.style.borderRadius = '8px';
          item.style.fontSize = '0.825rem';
          item.style.boxShadow = '0 1px 2px rgba(15, 23, 42, 0.03)';
          item.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px; flex-wrap: wrap; gap: 4px;">
              <span style="font-weight: 700; color: var(--text-primary); font-family: var(--font-display);">${act.dayDate}</span>
              <span style="color: var(--text-muted); font-size: 0.725rem; background: var(--bg-alt); padding: 2px 7px; border-radius: 4px; font-weight: 500;">${act.time || '09.00 - 17.00 WITA'}</span>
            </div>
            <div style="color: var(--text-secondary); line-height: 1.5;">${act.activity}</div>
          `;
          readerDailyList.appendChild(item);
        });
      } else {
        if (readerDailyBox) readerDailyBox.style.display = 'none';
      }
    }

    // Tasks list
    readerTasks.innerHTML = '';
    if (post.tasks && post.tasks.length > 0) {
      post.tasks.forEach(task => {
        const li = document.createElement('li');
        li.textContent = task;
        readerTasks.appendChild(li);
      });
    } else {
      const li = document.createElement('li');
      li.textContent = 'Mengerjakan pengembangan fitur modul dan integrasi sistem.';
      readerTasks.appendChild(li);
    }

    readerLearnings.textContent = post.keyLearnings || 'Memperdalam pemahaman arsitektur sistem dan integrasi framework.';
    readerChallenges.textContent = post.challenges || 'Penyesuaian konfigurasi arsitektur dan penanganan integrasi service.';
    readerSolutions.textContent = post.solutions || 'Melakukan debugging terstruktur, konsultasi dokumentasi resmi, dan arahan mentor.';
    readerNext.textContent = post.nextWeek || 'Melanjutkan modul berikutnya sesuai roadmap proyek magang.';

    postReaderModal.classList.add('active');
    document.body.style.overflow = 'hidden';
  }

  // ============================================================
  // 4. Render Projects Grid
  // ============================================================
  function renderProjects() {
    if (!projectsGrid) return;
    projectsGrid.innerHTML = '';

    blogData.projects.forEach(project => {
      const card = document.createElement('div');
      card.className = 'project-card';

      const techTags = project.techStack
        .map(t => `<span class="tech-tag-pill">${t}</span>`)
        .join('');

      const featureList = project.features
        .map(f => `<li>${f}</li>`)
        .join('');

      card.innerHTML = `
        <span class="project-category">${project.category}</span>
        <h4 class="project-title">${project.title}</h4>
        <p class="project-desc">${project.description}</p>
        <div class="project-tech-tags">${techTags}</div>
        <ul class="project-features">${featureList}</ul>
      `;

      projectsGrid.appendChild(card);
    });
  }

  // ============================================================
  // 5. Navigation Tabs & Smooth Scrolling
  // ============================================================
  navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('data-target');
      
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');

      if (targetId) {
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
          const headerHeight = document.querySelector('.site-header').offsetHeight || 64;
          const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
          });
        }
      }

      // Close mobile menu if opened
      if (navMenu && navMenu.classList.contains('mobile-open')) {
        navMenu.classList.remove('mobile-open');
      }
    });
  });

  // Mobile menu toggle
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('mobile-open');
    });
  }

  // Update active nav based on scroll position
  window.addEventListener('scroll', () => {
    const scrollPos = window.scrollY + 100;
    const sections = ['home', 'posts', 'about', 'projects', 'dokumentasi', 'contact'];

    sections.forEach(secId => {
      const sec = document.getElementById(secId);
      if (sec) {
        const top = sec.offsetTop;
        const height = sec.offsetHeight;
        if (scrollPos >= top && scrollPos < top + height) {
          navLinks.forEach(l => {
            if (l.getAttribute('data-target') === secId) {
              l.classList.add('active');
            } else {
              l.classList.remove('active');
            }
          });
        }
      }
    });
  });

  // ============================================================
  // 7. Search Modal Logic
  // ============================================================
  if (searchBtn && searchModal && searchInput && searchResults) {
    searchBtn.addEventListener('click', () => {
      searchModal.classList.add('active');
      document.body.style.overflow = 'hidden';
      setTimeout(() => searchInput.focus(), 100);
      renderSearchResults(allPosts);
    });

    searchInput.addEventListener('input', (e) => {
      const query = e.target.value.toLowerCase().trim();
      if (!query) {
        renderSearchResults(allPosts);
        return;
      }
      const filtered = allPosts.filter(p => {
        return (
          p.title.toLowerCase().includes(query) ||
          p.excerpt.toLowerCase().includes(query) ||
          (p.tags && p.tags.some(t => t.toLowerCase().includes(query))) ||
          `minggu ${p.weekNumber}`.includes(query)
        );
      });
      renderSearchResults(filtered);
    });

    function renderSearchResults(posts) {
      searchResults.innerHTML = '';
      if (posts.length === 0) {
        searchResults.innerHTML = `
          <div style="padding: 20px; text-align: center; color: #94A3B8; font-size: 0.875rem;">
            Tidak ditemukan catatan magang yang sesuai.
          </div>
        `;
        return;
      }

      posts.forEach(p => {
        const item = document.createElement('div');
        item.className = 'search-item';
        item.innerHTML = `
          <div>
            <div style="font-weight: 600; font-size: 0.875rem; color: var(--text-primary);">${p.title}</div>
            <div style="font-size: 0.75rem; color: var(--text-muted);">Week ${p.weekNumber} • ${p.date}</div>
          </div>
          <span style="font-size: 0.75rem; color: var(--primary); font-weight: 600;">Baca →</span>
        `;
        item.addEventListener('click', () => {
          searchModal.classList.remove('active');
          document.body.style.overflow = '';
          openPostReader(p);
        });
        searchResults.appendChild(item);
      });
    }
  }

  // ============================================================
  // 8. Add Post Modal Logic
  // ============================================================
  if (addPostBtn && addPostModal) {
    addPostBtn.addEventListener('click', () => {
      addPostModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  if (addPostForm) {
    addPostForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const weekNum = parseInt(document.getElementById('new-week-number').value) || (allPosts.length + 1);
      const title = document.getElementById('new-post-title').value.trim();
      const excerpt = document.getElementById('new-post-excerpt').value.trim();
      const summary = document.getElementById('new-post-summary').value.trim() || excerpt;
      const tasksInput = document.getElementById('new-post-tasks').value.trim();
      const learnings = document.getElementById('new-post-learnings').value.trim();
      const challenges = document.getElementById('new-post-challenges').value.trim();
      const solutions = document.getElementById('new-post-solutions').value.trim();

      const tasks = tasksInput
        ? tasksInput.split('\n').filter(t => t.trim().length > 0)
        : ['Menyelesaikan pengembangan modul dan dokumentasi.'];

      const newPost = {
        id: `minggu-${weekNum}-${Date.now()}`,
        weekNumber: weekNum,
        title: title || `Minggu ${weekNum}: Progres Magang`,
        excerpt: excerpt || 'Pengerjaan modul dan integrasi fitur baru pada sistem.',
        summary: summary,
        date: new Date().toLocaleDateString('en-US', { month: 'long', day: '2-digit', year: 'numeric' }),
        author: blogData.profile.name,
        thumbnail: 'assets/thumbnails/thumb_minggu4.svg',
        tags: ['Magang', 'DevLog'],
        tasks: tasks,
        keyLearnings: learnings || 'Meningkatkan pemahaman mengenai problem solving kode.',
        challenges: challenges || 'Penyesuaian logic database.',
        solutions: solutions || 'Refactoring kode dan testing.',
        nextWeek: 'Melanjutkan sprint pengembangan minggu berikutnya.'
      };

      // Save to custom storage
      let customPosts = [];
      const existing = localStorage.getItem('ghyovas_devlog_posts');
      if (existing) {
        try { customPosts = JSON.parse(existing); } catch(err){}
      }
      customPosts.unshift(newPost);
      localStorage.setItem('ghyovas_devlog_posts', JSON.stringify(customPosts));

      allPosts.unshift(newPost);
      displayedPostsCount++;
      renderPosts();

      addPostModal.classList.remove('active');
      document.body.style.overflow = '';
      addPostForm.reset();
      showToast('🎉 Berhasil menambahkan catatan magang baru!');
    });
  }

  // ============================================================
  // 9. Close Modal Buttons & Overlay Click
  // ============================================================
  document.querySelectorAll('.modal-close-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('active'));
      document.body.style.overflow = '';
    });
  });

  document.querySelectorAll('.modal-overlay').forEach(modal => {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.classList.remove('active');
        document.body.style.overflow = '';
      }
    });
  });

  // ESC key to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      document.querySelectorAll('.modal-overlay').forEach(modal => modal.classList.remove('active'));
      document.body.style.overflow = '';
    }
  });

  // ============================================================
  // 10. Contact Form Handling
  // ============================================================
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      showToast('✉️ Pesan Anda berhasil dikirim! Terima kasih telah menghubungi saya.');
      contactForm.reset();
    });
  }

  // Toast Function
  function showToast(msg) {
    if (!toastNotice) return;
    toastNotice.textContent = msg;
    toastNotice.classList.add('show');
    setTimeout(() => {
      toastNotice.classList.remove('show');
    }, 3500);
  }

  // Copy Email Button
  const copyEmailBtn = document.getElementById('btn-copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(blogData.profile.email).then(() => {
        showToast(`📋 Email disalin: ${blogData.profile.email}`);
      }).catch(() => {
        showToast(`Email: ${blogData.profile.email}`);
      });
    });
  }

  // ============================================================
  // 11. Theme Palette Switcher Logic
  // ============================================================
  const themeBtn = document.getElementById('btn-theme-palette');
  const themeModal = document.getElementById('theme-modal');
  const themeCards = document.querySelectorAll('.theme-option-card');

  // Load saved theme (defaults to emerald)
  const savedTheme = localStorage.getItem('ghyovas_blog_theme') === 'dark' ? 'dark' : 'emerald';
  applyTheme(savedTheme, false);

  function applyTheme(themeName, notify = true) {
    if (themeName === 'dark') {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'emerald');
      themeName = 'emerald';
    }
    localStorage.setItem('ghyovas_blog_theme', themeName);

    // Update active class on cards
    themeCards.forEach(c => {
      if (c.getAttribute('data-theme-name') === themeName) {
        c.classList.add('active');
      } else {
        c.classList.remove('active');
      }
    });

    if (notify) {
      const activeCard = document.querySelector(`.theme-option-card[data-theme-name="${themeName}"] strong`);
      const name = activeCard ? activeCard.textContent : (themeName === 'dark' ? 'Dark Mode' : 'Emerald & Sage');
      showToast(`🎨 Tema diubah: ${name}`);
    }
  }

  if (themeBtn && themeModal) {
    themeBtn.addEventListener('click', () => {
      themeModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  }

  themeCards.forEach(card => {
    card.addEventListener('click', () => {
      const selected = card.getAttribute('data-theme-name');
      applyTheme(selected, true);
      setTimeout(() => {
        if (themeModal) themeModal.classList.remove('active');
        document.body.style.overflow = '';
      }, 350);
    });
  });

  // ============================================================
  //  RENDER DOKUMENTASI MAGANG
  // ============================================================
  function renderDokumentasi() {
    const container = document.getElementById('docs-grid');
    if (!container || !blogData.dokumentasi) return;

    const kategoriColor = {
      'Logbook':       { bg: '#EFF6FF', border: '#BFDBFE', text: '#1D4ED8' },
      'Laporan':       { bg: '#F0FDF4', border: '#BBF7D0', text: '#15803D' },
      'Dokumen Kerja': { bg: '#FDF4FF', border: '#E9D5FF', text: '#7E22CE' },
      'Sertifikat':    { bg: '#FFFBEB', border: '#FDE68A', text: '#B45309' },
      'Foto':          { bg: '#FFF1F2', border: '#FECDD3', text: '#BE123C' },
      'Slide':         { bg: '#F0F9FF', border: '#BAE6FD', text: '#0369A1' }
    };

    const statusConfig = {
      'Selesai':  { cls: 'doc-status-selesai',  label: '✅ Selesai' },
      'Proses':   { cls: 'doc-status-proses',    label: '🔄 Dalam Proses' },
      'Menunggu': { cls: 'doc-status-menunggu',  label: '⏳ Menunggu' }
    };

    container.innerHTML = blogData.dokumentasi.map((dok) => {
      const kColor = kategoriColor[dok.kategori] || { bg: '#F8FAFC', border: '#E2E8F0', text: '#475569' };
      const sCfg = statusConfig[dok.status] || { cls: 'doc-status-proses', label: dok.status };

      return `
        <div class="doc-card">
          <div class="doc-card-top">
            <div class="doc-icon-wrap">${dok.icon}</div>
            <span class="doc-category-pill" style="background:${kColor.bg}; border:1px solid ${kColor.border}; color:${kColor.text};">${dok.kategori}</span>
          </div>
          <h4 class="doc-card-title">${dok.judul}</h4>
          <p class="doc-card-desc">${dok.deskripsi}</p>
          <div class="doc-card-footer">
            <div class="doc-meta">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
              <span>${dok.tanggal}</span>
            </div>
            <span class="doc-status-pill ${sCfg.cls}">${sCfg.label}</span>
          </div>
          <a href="${dok.link}" class="doc-btn-view" ${dok.link !== '#' ? 'target="_blank" rel="noopener noreferrer"' : ''}>
            <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            ${dok.link === '#' ? 'Segera Tersedia' : 'Lihat Dokumen'}
          </a>
        </div>
      `;
    }).join('');
  }

  // Initialize
  renderPosts();
  renderProjects();
  renderDokumentasi();
});
