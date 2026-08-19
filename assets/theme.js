const key="all-free-image-tools-theme";
let theme=localStorage.getItem(key)||"light";
document.documentElement.dataset.theme=theme;

function setTheme(t){
 theme=t;
 document.documentElement.dataset.theme=t;
 localStorage.setItem(key,t);
 document.getElementById("themeToggle")?.classList.toggle("light",t==="light");
}

function toggleTheme(){
 setTheme(document.documentElement.dataset.theme==="dark"?"light":"dark");
}

document.addEventListener("DOMContentLoaded",()=>{
 setTheme(theme);
 document.querySelectorAll(".card").forEach(card=>{
  const link=card.querySelector("a[href]");
  if(!link)return;
  card.addEventListener("click",e=>{
   if(e.target.closest("a"))return;
   window.location.href=link.href;
  });
  card.setAttribute("role","link");
  card.setAttribute("tabindex","0");
  card.addEventListener("keydown",e=>{
   if(e.key==="Enter"||e.key===" "){
    e.preventDefault();
    window.location.href=link.href;
   }
  });
 });
});
