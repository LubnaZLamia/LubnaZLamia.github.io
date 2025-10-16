(function(){
  const yearEl = document.getElementById('year');
  if(yearEl) yearEl.textContent = new Date().getFullYear();
  const themeBtn = document.getElementById('themeToggle');
  if(themeBtn){
    const key='theme-pref';
    function apply(pref){ document.documentElement.dataset.theme = pref; }
    const saved = localStorage.getItem(key); if(saved) apply(saved);
    themeBtn.addEventListener('click', ()=>{
      const current = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
      apply(current); localStorage.setItem(key,current);
    });
  }
})();