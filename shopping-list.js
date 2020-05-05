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
item.remove();s
  log(item.title + 'was Removed');
}

/* Add product to list */
function addToList(product) { 
  const activelist=document.getElementById('active-items-list');
  const newItem= document.createElement('li');
  newItem.title = product;
  newItem.innerHTML = product + ' ';
  log(product + ' added.'); 
  activelist.appendChild(newItem); 
}
  
  

function init() {
  log('Page Loaded');
  addToList()

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
     })
}

window.addEventListener("load", init);