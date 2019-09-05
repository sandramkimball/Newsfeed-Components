/* This is the data we will be using, study it but don't change anything, yet. */

let menuItems = [
  'Students',
  'Faculty',
  "What's New",
  'Tech Trends',
  'Music',
  'Log Out'
];

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

const menuHeader = document.querySelector('.header');

function menuComponent(arr){

  //setup structure
  const navMenu = document.createElement('div');
  const navList = document.createElement('ul');
  const navItem = document.createElement('li');
  
  
  //append
  menuHeader.appendChild(navMenu);
  navMenu.appendChild(navList);
  navList.appendChild(navItem);

  //classes
  navMenu.classList.add('menu');

  //add text content  

  //listener
  const menuButton = document.querySelector('.menu-button');
  menuButton.addEventListener('click', e=>{
    navMenu.classList.toggle('menu-open');
  })

  return navMenu
}

 menuItems.forEach(item => {
  let navItem = menuComponent(item);
  menuHeader.appendChild(navItem);
});

// menuHeader.appendChild(menuComponent(menuItems));


// menuItems.forEach(item => {
//   let navItem = document.createElement('li');
//   navList.appendChild(navItem);
// });

// let navList = menuItems.map((item) => {
//   let navItem = menuComponent(item);
//   return navItem;
// })




