function toggleMenu() {
    var menuContainer = document.getElementById('menuContainer');
    if (menuContainer.style.display === 'none' || menuContainer.style.display === '') {
        menuContainer.style.display = 'block';
        document.getElementById('menuButton').textContent = 'Hide the Menu';
    } else {
        menuContainer.style.display = 'none';
        document.getElementById('menuButton').textContent = 'Check the Menu';
    }
}

function toggleNav() {
    var navbar = document.getElementById('navbar');
    var ham1 = document.getElementById('ham1');
    var ham2 = document.getElementById('ham2');
    
    if (navbar.style.left === '0px' || navbar.style.left === '') {
        navbar.style.left = '-100%';
        ham1.style.display = 'block';
        ham2.style.display = 'none';
    } else {
        navbar.style.left = '0px';
        ham1.style.display = 'none';
        ham2.style.display = 'block';
    }
  }
