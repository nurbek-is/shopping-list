/* Log Messages */
function log(msg) {
  const log=document.querySelector('section#log>ol')
  const newItem=document.createElement('li')
  const now = new Date();
  newItem.innerHTML = now.toLocaleTimeString() + '<em> '+ msg +' </em>'
   log.appendChild(newItem)
}


/* Remove item from list */
function removeFromList(e) {
const item = e.currentTarget.parentNode;
item.remove();
log(item.title +  ' was Removed');
let selector= '#common-items-list>li>button[name="' + item.title + '"]';
  const btnMatch= document.querySelector(selector);
 if (btnMatch)
  btnMatch.disabled=false;
}
/* Add product to list */
function addToList(product) { 
  product=product.trim();
  // Check if list item is already in active list
  //  or if product is empty string.
  const selector2='#active-items-list>li[title="' + product + '"]';
  const liMatch=document.querySelector('#active-items-list>li[title="' + product + '"]')
  console.log(liMatch==='true')
  if (liMatch||!product.length)  {
    return false
  }
  const activelist=document.getElementById('active-items-list');
  let newItem= document.createElement('li');
  newItem= document.createElement('li');
  newItem.title = product;
  newItem.innerHTML = product + '';
  activelist.appendChild(newItem); 
  log(product + ' added.'); 
  const button= document.createElement('button');
  button.innerHTML="-";
  newItem.appendChild(button); 
  button.addEventListener('click',removeFromList);
  // Check if list item being added is in common list items
  // If it is, we need to disable its button there.
  let selector= '#common-items-list>li>button[name="' + product + '"]';
  const btnMatch= document.querySelector(selector);
      if(btnMatch){
      btnMatch.disabled=true;
    }
}
function init() {
  log('Page Loaded');
  const btnListAdd=document.getElementsByClassName('btn-add');
    const btnAddNewItem=document.getElementById('add-new-item');
    const newItem = document.getElementById("new-item");
    newItem.focus()
    for(btn of btnListAdd) {
      btn.addEventListener('click',function(e){
        const button = e.currentTarget;
        const product=button.name;
        addToList(product);
        newItem.focus();
      })
    } 
     /* Add event listener to New Item Add button */
     btnAddNewItem.addEventListener('click',function() {
       addToList(newItem.value)
       newTextVal='';
       newItem.focus();
     })
  newItem.addEventListener('keypress',function(e) {
    if(e.key==='Enter') {
      addToList(newItem.value);
      newTextVal='';
      newItem.focus();
    }
  })
}
window.addEventListener("load", init);