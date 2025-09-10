// client-side search: highlights matching sections
const search = document.getElementById('search');
search.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const sections = document.querySelectorAll('main section');
  sections.forEach(sec => {
    const txt = sec.innerText.toLowerCase();
    if(!q) {
      sec.style.display = '';
    } else if(txt.includes(q)) {
      sec.style.display = '';
    } else {
      sec.style.display = 'none';
    }
  });
});

// handle download zip (link already points to file); no extra JS required