document.addEventListener('DOMContentLoaded', function() {
    const learnMoreButtons = document.querySelectorAll('.learn-more');
    const backButtons = document.querySelectorAll('.back-btn');
    const mainContent = document.getElementById('main-content');
    const destinationPages = document.getElementById('destination-pages');
    const nav = document.querySelector('nav');
    
    learnMoreButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            const destination = this.getAttribute('data-destination');
            
            mainContent.style.display = 'none';
            nav.style.background = 'var(--light)';
            nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.style.color = 'var(--dark)';
            });
            
            document.querySelectorAll('.destination-page').forEach(page => {
                page.classList.remove('active');
            });
            
            document.getElementById(`${destination}-page`).classList.add('active');
            
            history.pushState(null, '', `#${destination}`);
            
            window.scrollTo(0, 0);
        });
    });
    
    backButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            
            mainContent.style.display = 'block';
            nav.style.background = 'var(--light)';
            nav.style.boxShadow = '0 2px 4px rgba(0,0,0,0.1)';
            
            document.querySelectorAll('nav ul li a').forEach(link => {
                link.style.color = 'var(--dark)';
            });
            
            document.querySelectorAll('.destination-page').forEach(page => {
                page.classList.remove('active');
            });
            
            history.pushState(null, '', '#');
            
            document.getElementById('destinations').scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    if(window.location.hash) {
        const hash = window.location.hash.substring(1);
        if(['paris', 'kyoto', 'santorini'].includes(hash)) {
            document.querySelector(`.learn-more[data-destination="${hash}"]`).click();
        }
    }

    window.addEventListener('popstate', function() {
        if(window.location.hash) {
            const hash = window.location.hash.substring(1);
            if(['paris', 'kyoto', 'santorini'].includes(hash)) {
                document.querySelector(`.learn-more[data-destination="${hash}"]`).click();
            }
        } else {
            backButtons[0].click();
        }
    });
});
