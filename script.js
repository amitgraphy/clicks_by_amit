const $=s=>document.querySelector(s);
const grid=$("#galleryGrid"), filters=$("#filters"), lb=$("#lightbox"), lbImg=$("#lightboxImg"), lbTitle=$("#lightboxTitle"), lbMeta=$("#lightboxMeta");
let active="All", current=0, visible=[];

document.querySelectorAll("[data-site]").forEach(el=>{const k=el.dataset.site;if(SITE[k])el.textContent=SITE[k]});
document.title=SITE.name;
$("#year").textContent=new Date().getFullYear();

function renderFilters(){
  filters.innerHTML=SITE.categories.map(c=>`<button class="filter ${c===active?"active":""}" data-filter="${c}">${c}</button>`).join("");
  filters.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{active=b.dataset.filter;renderFilters();renderGallery()});
}
function renderGallery(){
  visible=SITE.gallery.filter(x=>active==="All"||x.category===active);
  grid.innerHTML=visible.map((x,i)=>`<article class="card" data-i="${i}">
    <img src="${x.image}" alt="${x.title}" loading="lazy">
    <div class="card-info"><strong>${x.title}</strong><small>${x.category} · ${x.location}</small></div>
  </article>`).join("");
  grid.querySelectorAll(".card").forEach(c=>c.onclick=()=>openLightbox(+c.dataset.i));
}
function openLightbox(i){current=i;const x=visible[i];lbImg.src=x.image;lbImg.alt=x.title;lbTitle.textContent=x.title;lbMeta.textContent=`${x.category} · ${x.location}`;lb.classList.add("open");lb.setAttribute("aria-hidden","false");document.body.style.overflow="hidden"}
function close(){lb.classList.remove("open");lb.setAttribute("aria-hidden","true");document.body.style.overflow=""}
function move(n){current=(current+n+visible.length)%visible.length;openLightbox(current)}
$(".close").onclick=close;$(".prev").onclick=()=>move(-1);$(".next").onclick=()=>move(1);
lb.onclick=e=>{if(e.target===lb)close()};
document.addEventListener("keydown",e=>{if(!lb.classList.contains("open"))return;if(e.key==="Escape")close();if(e.key==="ArrowLeft")move(-1);if(e.key==="ArrowRight")move(1)});
$(".menu-toggle").onclick=()=>{$(".nav").classList.toggle("open");$(".menu-toggle").setAttribute("aria-expanded",$(".nav").classList.contains("open"))};
document.querySelectorAll(".nav a").forEach(a=>a.onclick=()=>$(".nav").classList.remove("open"));

$("#contactForm").onsubmit=e=>{
 e.preventDefault();
 const data=new FormData(e.target);
 const subject=encodeURIComponent("Photography enquiry from "+data.get("name"));
 const body=encodeURIComponent(`Name: ${data.get("name")}\nEmail: ${data.get("email")}\n\n${data.get("message")}`);
 window.location.href=`mailto:${SITE.email}?subject=${subject}&body=${body}`;
 $("#formNote").textContent="Your email app should open now.";
};
renderFilters();renderGallery();