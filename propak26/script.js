const A = 'assets/';
const products = [
  ['PK-01','Small clear jar','jars','Black ribbed screw cap','ChatGPT Image Oct 27, 2026, 10_37_31 AM-1.png'],
  ['PK-02','Slim clear bottle','bottles','White ribbed screw cap','ChatGPT Image Oct 27, 2026, 10_37_32 AM-2.png'],
  ['PK-03','Precision nozzle bottle','dispensers','Long twist nozzle closure','ChatGPT Image Oct 27, 2026, 10_37_33 AM-3.png'],
  ['PK-04','Round-shoulder bottle','bottles','Clear PET-style body · screw cap','ChatGPT Image Oct 27, 2026, 10_37_35 AM-4.png'],
  ['PK-05','Opaque ribbed bottle','bottles','Wide shoulder · screw cap','ChatGPT Image Oct 27, 2026, 10_37_36 AM-5.png'],
  ['PK-06','Tall flip-top bottle','bottles','Clear cylindrical body','ChatGPT Image Oct 27, 2026, 10_37_37 AM-6.png'],
  ['PK-07','Large press-fit tub','tubs','Translucent round body','ChatGPT Image Oct 27, 2026, 10_37_38 AM-7.png'],
  ['PK-08','Medium press-fit tub','tubs','Translucent round body','ChatGPT Image Oct 27, 2026, 10_37_40 AM-8.png'],
  ['PK-09','Handled dough pail','tubs','Black lid · side handle','ChatGPT Image Oct 27, 2026, 10_37_41 AM-9.png'],
  ['PK-10','Small dough tub','tubs','White snap-on lid','ChatGPT Image Oct 27, 2026, 10_37_42 AM-10.png'],
  ['PK-11','Handled jerry can','bottles','Opaque body · screw cap','ChatGPT Image Oct 27, 2026, 10_37_39 AM-1.png'],
  ['PK-12','Opaque cylinder bottle','bottles','Ribbed tamper-evident cap','ChatGPT Image Oct 27, 2026, 10_37_41 AM-2.png'],
  ['PK-13','Tall clear flip-top','bottles','Disc-top closure','ChatGPT Image Oct 27, 2026, 10_37_42 AM-3.png'],
  ['PK-14','Compact clear flip-top','bottles','Disc-top closure','ChatGPT Image Oct 27, 2026, 10_37_43 AM-4.png'],
  ['PK-15','Large ribbed jar','jars','Wide-mouth white screw cap','ChatGPT Image Oct 27, 2026, 10_37_46 AM-5.png'],
  ['PK-16','Wide-mouth clear jar','jars','Smooth white screw cap','ChatGPT Image Oct 27, 2026, 10_37_47 AM-6.png'],
  ['PK-17','Shouldered clear jar','jars','Ribbed white screw cap','ChatGPT Image Oct 27, 2026, 10_37_49 AM-7.png'],
  ['PK-18','Roll-on applicator','dispensers','Opaque cylinder · roller ball','ChatGPT Image Oct 27, 2026, 10_37_50 AM-8.png'],
  ['PK-19','Fine mist spray bottle','dispensers','Clear body · overcap','ChatGPT Image Oct 27, 2026, 10_37_51 AM-9.png'],
  ['PK-20','Small clear screw bottle','bottles','Black ribbed cap','ChatGPT Image Oct 27, 2026, 10_37_54 AM-10.png']
];
const grid=document.querySelector('#product-grid');
const selected=new Set();
function card(p){const [code,name,category,detail,file]=p;return `<article class="product-card" data-category="${category}"><button class="product-image" data-lightbox="${A+file}" data-title="${name}"><span class="render-tag">Reference render</span><img src="${A+file}" alt="${name} packaging reference" loading="lazy"></button><div class="card-body"><div class="card-topline"><div><span class="card-code">${code}</span><h3>${name}</h3></div></div><p>${detail}</p><button class="add-button" data-add="${code}" type="button">+ Add to shortlist</button></div></article>`}
grid.innerHTML=products.map(card).join('');
document.querySelectorAll('.filter').forEach(btn=>btn.addEventListener('click',()=>{document.querySelector('.filter.active').classList.remove('active');btn.classList.add('active');const f=btn.dataset.filter;document.querySelectorAll('.product-card').forEach(card=>card.hidden=f!=='all'&&card.dataset.category!==f)}));
const lightbox=document.querySelector('#lightbox');
document.addEventListener('click',e=>{const trigger=e.target.closest('[data-lightbox]');if(trigger){lightbox.querySelector('img').src=trigger.dataset.lightbox;lightbox.querySelector('img').alt=trigger.dataset.title;lightbox.querySelector('p').textContent=trigger.dataset.title;lightbox.showModal()}const add=e.target.closest('[data-add]');if(add){selected.has(add.dataset.add)?selected.delete(add.dataset.add):selected.add(add.dataset.add);syncShortlist()}});
document.querySelectorAll('.dialog-close').forEach(b=>b.addEventListener('click',()=>b.closest('dialog').close()));
document.querySelectorAll('dialog').forEach(d=>d.addEventListener('click',e=>{if(e.target===d)d.close()}));
const shortDialog=document.querySelector('#shortlist-dialog'), shortItems=document.querySelector('#shortlist-items');
document.querySelectorAll('[data-open-shortlist]').forEach(b=>b.addEventListener('click',()=>{syncShortlist();shortDialog.showModal()}));
function syncShortlist(){document.querySelectorAll('[data-shortlist-count]').forEach(n=>n.textContent=selected.size);document.querySelectorAll('[data-add]').forEach(b=>{const on=selected.has(b.dataset.add);b.classList.toggle('selected',on);b.textContent=on?'✓ Shortlisted':'+ Add to shortlist'});const chosen=products.filter(p=>selected.has(p[0]));shortItems.innerHTML=chosen.map(p=>`<div class="shortlist-item"><span><b>${p[0]}</b> · ${p[1]}</span><button data-add="${p[0]}" aria-label="Remove ${p[1]}">Remove</button></div>`).join('');shortDialog.querySelector('.empty-shortlist').hidden=chosen.length>0;shortDialog.querySelector('.copy-button').hidden=chosen.length===0}
document.querySelector('.copy-button').addEventListener('click',async()=>{const chosen=products.filter(p=>selected.has(p[0]));const text=['DALA PACKAGING SUPPLIER ENQUIRY','Please quote comparable formats for:','',...chosen.map(p=>`${p[0]} — ${p[1]} (${p[3]})`),'','Please include container + closure, material, capacity options, MOQ, unit pricing, tooling, lead time and sample availability. Final approval is subject to comparison with a physical Dala sample.'].join('\n');try{await navigator.clipboard.writeText(text)}catch{const ta=document.createElement('textarea');ta.value=text;document.body.append(ta);ta.select();document.execCommand('copy');ta.remove()}const toast=document.querySelector('.toast');toast.classList.add('show');setTimeout(()=>toast.classList.remove('show'),1800)});
