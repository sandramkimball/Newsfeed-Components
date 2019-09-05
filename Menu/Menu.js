/* This is the data we will be using, study it but don't change anything, yet. */



/* 
  Step 1: Write a function that will create a menu component as seen below:

  <div class="menu">
    <ul>
      {each menu item as a list item}
    </ul>
  </div>

  Step 2: Inside this function, iterate over the array creating a list item <li> element for each item in the array. 
  Add those items to the <ul>
  Step 3: Using a DOM selector, select the menu button (the element with a class of 'menu-button') currently on the DOM.
  Step 4: add a click event listener to the menu button. When clicked it should toggle the class 'menu--open' on the menu (your div with a 'menu' class).
  Step 5: return the menu component.
  Step 6: add the menu component to the DOM.  
*/

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

const menuHeader = document.querySelector('.header');
function menuComponent(arr){
  //setup structure
  const navMenu = document.createElement('div');
  const navList = document.createElement('ul');
  
  for (let i = 0; i < arr.length; i++) {
    let navItem = document.createElement('li')
    navItem.textContent = arr[i];
    navList.appendChild(navItem);
  }
  
  menuHeader.appendChild(navList);
    
  //append
  menuHeader.appendChild(navMenu);
  navMenu.appendChild(navList);

  //classes
  navMenu.classList.add('menu');

  //listener
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', ()=>{
    navMenu.classList.toggle('menu-open');
  })

  return navMenu
}

menuHeader.prepend(menuComponent(menuItems));
//  menuItems.forEach(object => {
//   let navItem = document.createElement('li');
//   navItem.textContent = object[i];
//   menuHeader.appendChild(navItem);
// });

// menuHeader.appendChild(menuComponent(menuItems));
// const navItem = document.createElement('li');




