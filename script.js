function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobileMenu');
    const hamburgerIcon = document.getElementById('hamburgerIcon');
    
    mobileMenu.classList.toggle('show');
    hamburgerIcon.classList.toggle('active');
}

// Close mobile menu when clicking on nav links
document.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => {
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburgerIcon = document.getElementById('hamburgerIcon');
        
        mobileMenu.classList.remove('show');
        hamburgerIcon.classList.remove('active');
    });
});

// Close mobile menu on window resize to desktop
window.addEventListener('resize', () => {
    if (window.innerWidth >= 992) {
        const mobileMenu = document.getElementById('mobileMenu');
        const hamburgerIcon = document.getElementById('hamburgerIcon');
        
        mobileMenu.classList.remove('show');
        hamburgerIcon.classList.remove('active');
    }
});

//help center script
function handleCardClick(cardType) {
    // Add click feedback
    const card = event.currentTarget;
    card.style.transform = 'scale(0.98)';
    
    setTimeout(() => {
        card.style.transform = '';
    }, 150);

    // Handle different card actions
    switch(cardType) {
        case 'service-hotline':
            console.log('Service Hotline clicked');
            // Add your service hotline logic here
            // Example: window.location.href = '/contact-support';
            alert('Opening Service Hotline...');
            break;
            
        case 'video-guides':
            console.log('Video Guides clicked');
            // Add your video guides logic here  
            // Example: window.location.href = '/video-tutorials';
            alert('Opening Video Guides...');
            break;
    }
}

// Accessibility enhancements
document.querySelectorAll('.help-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    
    // Keyboard navigation
    card.addEventListener('keydown', function(e) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.click();
        }
    });
    
    // Focus styles
    card.addEventListener('focus', function() {
        this.style.outline = '3px solid rgba(74, 144, 226, 0.6)';
        this.style.outlineOffset = '2px';
    });
    
    card.addEventListener('blur', function() {
        this.style.outline = 'none';
    });
});
function handleCardClick(cardType) {
    console.log('Card clicked:', cardType);
    switch(cardType) {
        case 'product-help':
            alert('Navigating to Product Help & Setup');
            break;
        case 'orders':
            alert('Navigating to Orders & Deliveries');
            break;
        case 'payments':
            alert('Navigating to Payments & Billing');
            break;
        case 'warranty':
            alert('Navigating to Warranty & Returns');
            break;
        case 'store':
            alert('Navigating to Brand Store Berlin');
            break;
        case 'app':
            alert('Navigating to Sportstech Live App');
            break;
    }
}

function handleChatClick() {
    console.log('Chat bubble clicked');
    alert('Opening chat support');
}

// Add smooth hover animations
document.querySelectorAll('.support-card, .wide-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0)';
    });
});
function showSection(section) {
    console.log(`Navigating to ${section} section`);
    alert(`Navigate to ${section.charAt(0).toUpperCase() + section.slice(1)} section`);
}

function openChat() {
    console.log('Opening chat');
    alert('Opening chat support...');
}

document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to slogan lines
    const sloganLines = document.querySelectorAll('.slogan-line');
    sloganLines.forEach(line => {
        line.addEventListener('mouseenter', function() {
            this.style.transform = 'translateX(5px)';
            this.style.transition = 'transform 0.3s ease';
        });
        
        line.addEventListener('mouseleave', function() {
            this.style.transform = 'translateX(0)';
        });
    });
});
const items = document.querySelectorAll(".carousel-item");
let current = 0;

function showNext() {
  // remove active from current
  items[current].classList.remove("active");

  // move to next index
  current = (current + 1) % items.length; // loop back after 8

  // add active to next
  items[current].classList.add("active");
}

// start: first icon visible
items[current].classList.add("active");

// change every 1.2s (adjust for speed)
setInterval(showNext, 1200);
