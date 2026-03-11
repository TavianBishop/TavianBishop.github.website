// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';
    navLinks.style.flexDirection = 'column';
    navLinks.style.position = 'absolute';
    navLinks.style.top = '100%';
    navLinks.style.left = '0';
    navLinks.style.right = '0';
    navLinks.style.background = 'var(--color-bg)';
    navLinks.style.padding = 'var(--spacing-md)';
    navLinks.style.borderTop = '1px solid var(--color-border)';
});

// Resume upload functionality
const resumeUpload = document.getElementById('resume-upload');
const resumeDownload = document.getElementById('resume-download');
const resumeFilename = document.getElementById('resume-filename');
let uploadedResume = null;

resumeUpload.addEventListener('change', function(e) {
    const file = e.target.files[0];
    if (file && file.type === 'application/pdf') {
        uploadedResume = file;
        resumeFilename.textContent = file.name;
        
        // Create download link
        const url = URL.createObjectURL(file);
        resumeDownload.href = url;
        resumeDownload.download = file.name;
        resumeDownload.style.display = 'inline-flex';
        
        // Hide upload button
        document.querySelector('.upload-btn').style.display = 'none';
        
        console.log('Resume uploaded:', file.name);
    } else {
        alert('Please upload a PDF file');
    }
});

// Project form handling
const projectForm = document.getElementById('project-form');
const projectsGrid = document.getElementById('projects-grid');

projectForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const title = document.getElementById('project-title').value;
    const description = document.getElementById('project-description').value;
    const techString = document.getElementById('project-tech').value;
    const demoUrl = document.getElementById('project-demo').value;
    const githubUrl = document.getElementById('project-github').value;
    
    // Parse technologies
    const technologies = techString.split(',').map(tech => tech.trim());
    
    // Create project card
    const projectCard = document.createElement('div');
    projectCard.className = 'project-card';
    projectCard.style.animation = 'fadeInUp 0.6s ease forwards';
    
    projectCard.innerHTML = `
        <div class="project-image">
            <div class="project-placeholder">
                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1">
                    <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                    <circle cx="8.5" cy="8.5" r="1.5"></circle>
                    <polyline points="21 15 16 10 5 21"></polyline>
                </svg>
            </div>
        </div>
        <div class="project-content">
            <h3>${escapeHtml(title)}</h3>
            <p>${escapeHtml(description)}</p>
            <div class="tech-tags">
                ${technologies.map(tech => `<span>${escapeHtml(tech)}</span>`).join('')}
            </div>
            <div class="project-links">
                ${demoUrl ? `
                    <a href="${escapeHtml(demoUrl)}" target="_blank" class="project-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                            <polyline points="15 3 21 3 21 9"></polyline>
                            <line x1="10" y1="14" x2="21" y2="3"></line>
                        </svg>
                        Live Demo
                    </a>
                ` : ''}
                ${githubUrl ? `
                    <a href="${escapeHtml(githubUrl)}" target="_blank" class="project-link">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                        </svg>
                        GitHub
                    </a>
                ` : ''}
            </div>
        </div>
    `;
    
    projectsGrid.appendChild(projectCard);
    
    // Reset form
    projectForm.reset();
    
    // Show success message
    showNotification('Project added successfully!');
});

// Contact form handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    // In a real application, you would send this data to a server
    console.log('Contact form submitted:', { name, email, message });
    
    // Show success message
    showNotification('Message sent successfully! I\'ll get back to you soon.');
    
    // Reset form
    contactForm.reset();
});

// Helper function to escape HTML
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Notification function
function showNotification(message) {
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        bottom: 30px;
        right: 30px;
        background: var(--color-accent);
        color: var(--color-bg);
        padding: 1rem 1.5rem;
        border-radius: 4px;
        font-size: 0.95rem;
        z-index: 10000;
        animation: slideInRight 0.4s ease forwards;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
    `;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.4s ease forwards';
        setTimeout(() => {
            notification.remove();
        }, 400);
    }, 3000);
}

// Add animation styles
const style = document.createElement('style');
style.textContent = `
    @keyframes slideInRight {
        from {
            transform: translateX(400px);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(400px);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Intersection Observer for scroll animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe sections for scroll animations
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(30px)';
    section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
    observer.observe(section);
});

// Active navigation link on scroll
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.pageYOffset >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Parallax effect for hero background
window.addEventListener('scroll', () => {
    const heroBackground = document.querySelector('.hero-background');
    if (heroBackground) {
        const scrolled = window.pageYOffset;
        heroBackground.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Skill bar animation on scroll
const skillObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const progressBars = entry.target.querySelectorAll('.skill-progress');
            progressBars.forEach(bar => {
                bar.style.animation = 'skillLoad 1.5s ease forwards';
            });
            skillObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

const skillsSection = document.querySelector('.skills');
if (skillsSection) {
    skillObserver.observe(skillsSection);
}

console.log('Portfolio website loaded successfully!');
