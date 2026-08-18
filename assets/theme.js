const key="pixora-theme",theme=localStorage.getItem(key)||"dark";
document.documentElement.dataset.theme=theme;
function toggleTheme(){const n=document.documentElement.dataset.theme==="dark"?"light":"dark";document.documentElement.dataset.theme=n;localStorage.setItem(key,n);document.getElementById("themeToggle")?.classList.toggle("light",n==="light")}
document.addEventListener("DOMContentLoaded",()=>document.getElementById("themeToggle")?.classList.toggle("light",theme==="light"));
