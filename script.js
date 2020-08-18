const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

// const list = document.getElementsByClassName('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')
 

function getInput(){
  let input = document.getElementById('input-item').value,
       cleanInput = document.getElementById('input-item'),
       ul = document.getElementById('list'), //ul
       li = document.createElement('li'),//li
       button = document.createElement('button');
  let checkbox = document.createElement('input');
      if(input === ""){
        return null;
      }else{
        let getChekbox =  createCheckbob(checkbox);
     
      checkboxInput(getChekbox)

      button.appendChild(document.createTextNode("Erase"))
      createLi(ul, li, getChekbox, input, button)

       increase()
       cleanInput.value = ""

       clearList(button, li);
  }
}

const createLi = (ul, li, getChekbox, input, button) => {
  li.appendChild(getChekbox);
  li.className = "list-homowork"
  li.appendChild(document.createTextNode(input));
  ul.appendChild(li); 
  li.appendChild(button)
}

const checkboxInput = checkbox => {
    checkbox.addEventListener( 'change', function() {
    if(this.checked) {
      uncheckedCountSpan.textContent++
    } else {
      uncheckedCountSpan.textContent--
    }
  });
}

const createCheckbob = checkbox => {
  checkbox.type = "checkbox";
  checkbox.name = "name";
  checkbox.value = "value";
  checkbox.id = "check";
  return checkbox
}

const increase = () => {
  itemCountSpan.textContent++;
}

const clearList = (botton, li) => {
  botton.addEventListener("click", function(){
    li.remove()
  })
}