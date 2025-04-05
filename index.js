const searchBar = document.querySelector('.search-bar');
const articles = document.querySelectorAll('.article');

searchBar.addEventListener('input', () => {
    const searchTerm = searchBar.value.toLowerCase();

    articles.forEach(article => {
        const title = article.querySelector('h2').textContent.toLowerCase();
        article.style.display = title.includes(searchTerm) ? 'block' : 'none';
    });
});

const commentForm = document.querySelector('.comment-form');
const commentSection = document.querySelector('.comments-section');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const textarea = commentForm.querySelector('textarea');
    const commentText = textarea.value.trim();

    if (commentText) {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.innerHTML = `<p>${commentText}</p>`;
        commentSection.appendChild(commentDiv);
        textarea.value = '';
    }
});

document.addEventListener('DOMContentLoaded', () => {
    console.log("DOM loaded ✅");

    const toggle = document.getElementById('darkModeToggle');
    if (toggle) {
        toggle.addEventListener('click', () => {
            document.body.classList.toggle('dark-mode');
            toggle.textContent = document.body.classList.contains('dark-mode') ? '☀️' : '🌙';
        });
    } else {
        console.error("❌ darkModeToggle button not found");
    }
  
    const loginBtn = document.getElementById('loginBtn');
    const loginModal = document.getElementById('loginModal');
    const closeModal = document.querySelector('.close');
    const loginForm = document.getElementById('loginForm');
  
    if (loginBtn && loginModal && closeModal && loginForm) {
      loginBtn.addEventListener('click', () => {
        loginModal.style.display = 'block';
      });
  
      closeModal.addEventListener('click', () => {
        loginModal.style.display = 'none';
      });
  
      window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
          loginModal.style.display = 'none';
        }
      });
  
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();
  
        if (username === 'admin' && password === '1234') {
          alert('✅ Login successful!');
          loginModal.style.display = 'none';
          loginBtn.textContent = `👋 Hi, ${username}`;
        } else {
          alert('❌ Incorrect credentials!');
        }
      });
    } else {
      console.error("One or more login modal elements not found.");
    }
  });  
