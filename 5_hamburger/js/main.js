const domHamburger = document.getElementById('hamburger');

domHamburger.addEventListener('click', 
    function() {
        const domMenuHamburger = document.getElementById('menu-hamburger');
        domMenuHamburger.classList.remove('d-none');
    }
);



const domCloseMenuHamburger = document.getElementById('close-menu-hamburger');

domCloseMenuHamburger.addEventListener('click', 
    function() {
        const domMenuHamburger = document.getElementById('menu-hamburger');
        domMenuHamburger.classList.add('d-none');
    }
);
