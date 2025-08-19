document.addEventListener('DOMContentLoaded', () => {
  // --- THEME TOGGLER ---
  const themeToggle = document.getElementById('theme-toggle');
  const currentTheme = localStorage.getItem('theme') || 'light';
  document.documentElement.setAttribute('data-theme', currentTheme);

  themeToggle.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    if (theme === 'light') {
      theme = 'dark';
    } else {
      theme = 'light';
    }
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  });

  // --- CATEGORY FILTERING ---
  const filterButtons = document.querySelectorAll('.filter-btn');
  const noteCards = document.querySelectorAll('.note-card');
  const notesGrid = document.getElementById('notes-grid');

  if (filterButtons.length > 0) {
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const category = button.dataset.category;

        // Update active button
        filterButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');

        // Filter cards
        noteCards.forEach(card => {
          if (category === 'all' || card.dataset.category === category) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        });
      });
    });
  }

  // --- TABLE OF CONTENTS GENERATION ---
  const tocContainer = document.getElementById('toc');
  const postContent = document.querySelector('.post-content');

  if (tocContainer && postContent) {
    const headings = postContent.querySelectorAll('h2, h3');
    if (headings.length > 0) {
      const tocList = document.createElement('ul');
      let currentH2List = null;

      headings.forEach((heading, index) => {
        const id = `heading-${index}`;
        heading.id = id;

        const listItem = document.createElement('li');
        const link = document.createElement('a');
        link.href = `#${id}`;
        link.textContent = heading.textContent;

        if (heading.tagName === 'H2') {
          listItem.appendChild(link);
          tocList.appendChild(listItem);
          currentH2List = document.createElement('ul');
          listItem.appendChild(currentH2List);
        } else if (heading.tagName === 'H3' && currentH2List) {
          listItem.appendChild(link);
          currentH2List.appendChild(listItem);
        }
      });
      tocContainer.appendChild(tocList);

      // Scroll spy for TOC
      const tocLinks = tocContainer.querySelectorAll('a');
      const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          const id = entry.target.getAttribute('id');
          const correspondingLink = tocContainer.querySelector(`a[href="#${id}"]`);
          if (entry.isIntersecting && entry.intersectionRatio > 0) {
            tocLinks.forEach(link => link.classList.remove('active'));
            correspondingLink.classList.add('active');
          }
        });
      }, { rootMargin: '0px 0px -75% 0px' });

      headings.forEach(heading => observer.observe(heading));
    } else {
      tocContainer.parentElement.style.display = 'none';
    }
  }

  // --- SIMPLE JEKYLL SEARCH ---
  const searchInput = document.getElementById('search-input');
  const searchResults = document.getElementById('search-results');

  if (searchInput) {
    SimpleJekyllSearch({
      searchInput: searchInput,
      resultsContainer: searchResults,
      json: '/search.json',
      searchResultTemplate: '<div class="search-result-item"><a href="{url}"><h3>{title}</h3><p>{excerpt}</p><span class="note-card-category" data-category="{category}">{category}</span></a></div>',
      noResultsText: '<p>No results found.</p>',
      limit: 10,
      fuzzy: false,
      onSearchComplete: (posts, query) => {
        if (query.length > 0) {
          notesGrid.style.display = 'none';
          searchResults.style.display = 'block';
        } else {
          notesGrid.style.display = 'grid';
          searchResults.style.display = 'none';
        }
      }
    });
  }
});
