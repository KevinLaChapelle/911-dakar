const modes = {
  offroad: { category: 'DUNES / UNEVEN GROUND', title: 'The horizon is an invitation.', description: 'Offroad mode raises the suspension automatically and prioritizes traction. More clearance. Stronger differential locking. A 911 ready to explore beyond the asphalt.', metric: '+30 <small>mm</small>', detail: 'AUTOMATIC ADDITIONAL LIFT', image: 'assets/dakar-1.jpg', alt: '911 Dakar crossing desert dunes' },
  rallye: { category: 'GRAVEL / LOOSE SURFACES', title: 'Let the loose stuff fly.', description: 'Rear-biased all-wheel drive and a more permissive traction setting bring the rally spirit to gravel. Rallye Launch Control allows up to 20 percent wheel slip on loose surfaces.', metric: '20 <small>%</small>', detail: 'WHEEL SLIP WITH RALLYE LAUNCH CONTROL', image: 'assets/dakar-0.jpg', alt: '911 Dakar throwing up sand on loose desert terrain' },
  sport: { category: 'ASPHALT / OPEN ROAD', title: 'Still every inch a 911.', description: 'The road returns. The sports car never left. Sport mode brings classic Launch Control to the Dakar, with a twin-turbo flat-six and eight-speed PDK at the heart of the experience.', metric: '3.2 <small>s</small>', detail: '0–60 MPH · MANUFACTURER FIGURE', image: 'assets/dakar-3.jpg', alt: 'The road-going Porsche 911 Dakar in the desert' }
};
const tabs = [...document.querySelectorAll('[data-mode]')];
function selectMode(tab) {
  const mode=modes[tab.dataset.mode];
  tabs.forEach(button=>{ const selected=button===tab; button.setAttribute('aria-selected',String(selected)); button.tabIndex=selected?0:-1; });
  document.querySelector('#mode-content').setAttribute('aria-labelledby',tab.id);
  document.querySelector('#mode-category').textContent=mode.category;
  document.querySelector('#mode-title').textContent=mode.title;
  document.querySelector('#mode-description').textContent=mode.description;
  document.querySelector('#mode-number').innerHTML=mode.metric;
  document.querySelector('#mode-detail').textContent=mode.detail;
  const photo=document.querySelector('#terrain-photo'); photo.src=mode.image; photo.alt=mode.alt;
}
tabs.forEach((tab,index)=>{
  tab.addEventListener('click',()=>selectMode(tab));
  tab.addEventListener('keydown',event=>{
    let next;
    if(event.key==='ArrowRight') next=(index+1)%tabs.length;
    if(event.key==='ArrowLeft') next=(index+tabs.length-1)%tabs.length;
    if(event.key==='Home') next=0;
    if(event.key==='End') next=tabs.length-1;
    if(next!==undefined){event.preventDefault();selectMode(tabs[next]);tabs[next].focus();}
  });
});
const credits=document.querySelector('#credits');
document.querySelector('#credits-open').addEventListener('click',()=>credits.showModal());
document.querySelector('.dialog-close').addEventListener('click',()=>credits.close());
credits.addEventListener('click',event=>{if(event.target===credits){const box=credits.getBoundingClientRect();if(event.clientX<box.left||event.clientX>box.right||event.clientY<box.top||event.clientY>box.bottom)credits.close();}});
document.querySelector('#copyright-year').textContent=new Date().getFullYear();
