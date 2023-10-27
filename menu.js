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