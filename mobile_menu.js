// Mobile Menu Implementation for STLCC Programming Club Website

document.addEventListener('DOMContentLoaded', function() {
    // Create mobile menu toggle button
    function createMobileMenuToggle() {
      // Check if navbar exists
      const navbar = document.querySelector('.navbar');
      if (!navbar) return;
      
      // Check if toggle already exists
      if (document.getElementById('mobile-menu-toggle')) return;
      
      // Create toggle button
      const toggleButton = document.createElement('button');
      toggleButton.id = 'mobile-menu-toggle';
      toggleButton.className = 'mobile-menu-toggle';
      toggleButton.innerHTML = '<span></span><span></span><span></span>';
      toggleButton.setAttribute('aria-label', 'Toggle navigation menu');
      
      // Insert before the navbar
      navbar.parentNode.insertBefore(toggleButton, navbar);
      
      // Add menu-closed class to navbar
      navbar.classList.add('menu-closed');
      
      // Add event listener
      toggleButton.addEventListener('click', function() {
        navbar.classList.toggle('menu-closed');
        toggleButton.classList.toggle('active');
      });
    }
    
    // Function to handle screen resize
    function handleResize() {
      const navbar = document.querySelector('.navbar');
      const toggleButton = document.getElementById('mobile-menu-toggle');
      
      if (!navbar || !toggleButton) return;
      
      // If screen is larger than 768px, ensure menu is visible
      if (window.innerWidth >= 768) {
        navbar.classList.remove('menu-closed');
      } else {
        // On smaller screens, collapse menu initially
        if (!toggleButton.classList.contains('active')) {
          navbar.classList.add('menu-closed');
        }
      }
    }
    
    // Initialize mobile menu
    createMobileMenuToggle();
    
    // Add resize event listener
    window.addEventListener('resize', handleResize);
    
    // Initial call to set up correct state
    handleResize();
    
    // Close menu when clicking outside
    document.addEventListener('click', function(event) {
      const navbar = document.querySelector('.navbar');
      const toggleButton = document.getElementById('mobile-menu-toggle');
      
      if (!navbar || !toggleButton) return;
      
      const isClickInside = navbar.contains(event.target) || toggleButton.contains(event.target);
      
      if (!isClickInside && window.innerWidth < 768 && !navbar.classList.contains('menu-closed')) {
        navbar.classList.add('menu-closed');
        toggleButton.classList.remove('active');
      }
    });
  });