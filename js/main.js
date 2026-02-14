// ===================================
// Projects Data
// ===================================
const projects = [
    {
        title: "Discord Moderation Bot",
        description: "A powerful Discord bot focused on moderation and security features with automated workflows, contextual logging, and self-healing configurations.",
        image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600",
        tags: ["JavaScript", "Discord.js", "Node.js", "MongoDB"],
        github: "https://github.com/sanchitbishwakarma",
        demo: "#"
    },
    {
        title: "E-Commerce Platform",
        description: "Full-featured e-commerce platform with payment integration, inventory management, and comprehensive admin dashboard.",
        image: "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=600",
        tags: ["React", "Node.js", "MongoDB", "Stripe"],
        github: "https://github.com/sanchitbishwakarma",
        demo: "#"
    },
    {
        title: "Task Management System",
        description: "Collaborative task management tool with real-time updates, team collaboration features, and intuitive drag-and-drop interface.",
        image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=600",
        tags: ["Vue.js", "Firebase", "Tailwind CSS"],
        github: "https://github.com/sanchitbishwakarma",
        demo: "#"
    },
    {
        title: "AI Chat Application",
        description: "Real-time chat application powered by AI with sentiment analysis, smart replies, and natural language processing.",
        image: "https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=600",
        tags: ["Python", "Flask", "OpenAI", "WebSocket"],
        github: "https://github.com/sanchitbishwakarma",
        demo: "#"
    },
    {
        title: "Portfolio Website Builder",
        description: "Drag-and-drop portfolio website builder with customizable templates, real-time preview, and one-click deployment.",
        image: "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=600",
        tags: ["React", "Node.js", "AWS", "Docker"],
        github: "https://github.com/sanchitbishwakarma",
        demo: "#"
    },
    {
        title: "Weather Dashboard",
        description: "Beautiful weather dashboard with real-time data, forecasts, interactive maps, and customizable widgets.",
        image: "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=600",
        tags: ["JavaScript", "API Integration", "Chart.js"],
        github: "https://github.com/sanchitbishwakarma",
        demo: "#"
    }
];

// ===================================
// DOM Ready
// ===================================
$(document).ready(function () {
    // Load projects
    loadProjects();

    // Initialize all features
    initNavigation();
    initMobileMenu();
    initScrollAnimations();
    initCounters();
    initSkillBars();
    initContactForm();
});

// ===================================
// Load Projects
// ===================================
function loadProjects() {
    const projectsGrid = $('#projectsGrid');

    projects.forEach((project, index) => {
        const projectCard = `
            <div class="project-card fade-in" style="animation-delay: ${index * 0.1}s">
                <div class="project-image-wrapper">
                    <img src="${project.image}" alt="${project.title}" class="project-image">
                    <div class="project-overlay">
                        <a href="${project.github}" target="_blank" class="project-link">
                            <i class="fab fa-github"></i>
                        </a>
                        <a href="${project.demo}" class="project-link">
                            <i class="fas fa-external-link-alt"></i>
                        </a>
                    </div>
                </div>
                <div class="project-content">
                    <h3 class="project-title">${project.title}</h3>
                    <p class="project-description">${project.description}</p>
                    <div class="project-tags">
                        ${project.tags.map(tag => `<span class="project-tag">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        `;

        projectsGrid.append(projectCard);
    });
}

// ===================================
// Navigation
// ===================================
function initNavigation() {
    // Smooth scroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 1000);

            // Update active link
            $('.nav-link').removeClass('active');
            $(this).addClass('active');

            // Close mobile menu
            $('.nav-menu').removeClass('active');
            $('.hamburger').removeClass('active');
        }
    });

    // Scroll spy
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop() + 100;

        // Add scrolled class to navbar
        if ($(window).scrollTop() > 50) {
            $('.navbar').addClass('scrolled');
        } else {
            $('.navbar').removeClass('scrolled');
        }

        // Highlight active section
        $('section[id]').each(function () {
            const section = $(this);
            const sectionTop = section.offset().top;
            const sectionBottom = sectionTop + section.outerHeight();
            const sectionId = section.attr('id');

            if (scrollPos >= sectionTop && scrollPos < sectionBottom) {
                $('.nav-link').removeClass('active');
                $(`.nav-link[href="#${sectionId}"]`).addClass('active');
            }
        });
    });
}

// ===================================
// Mobile Menu
// ===================================
function initMobileMenu() {
    $('#hamburger').on('click', function () {
        $(this).toggleClass('active');
        $('#navMenu').toggleClass('active');
    });

    // Close menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.navbar').length) {
            $('#navMenu').removeClass('active');
            $('#hamburger').removeClass('active');
        }
    });
}

// ===================================
// Scroll Animations
// ===================================
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function (entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in');
            }
        });
    }, observerOptions);

    // Observe all sections
    $('section').each(function () {
        observer.observe(this);
    });

    // Observe project cards
    $('.project-card').each(function () {
        observer.observe(this);
    });
}

// ===================================
// Animated Counters
// ===================================
function initCounters() {
    let countersAnimated = false;

    $(window).on('scroll', function () {
        const aboutSection = $('#about');
        if (!aboutSection.length) return;

        const aboutTop = aboutSection.offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > aboutTop && !countersAnimated) {
            countersAnimated = true;

            $('.stat-number').each(function () {
                const $this = $(this);
                const target = parseInt($this.data('target'));

                $({ counter: 0 }).animate({ counter: target }, {
                    duration: 2000,
                    easing: 'swing',
                    step: function () {
                        $this.text(Math.ceil(this.counter));
                    },
                    complete: function () {
                        $this.text(target);
                    }
                });
            });
        }
    });
}

// ===================================
// Skill Bars Animation
// ===================================
function initSkillBars() {
    let skillsAnimated = false;

    $(window).on('scroll', function () {
        const skillsSection = $('#skills');
        if (!skillsSection.length) return;

        const skillsTop = skillsSection.offset().top;
        const windowBottom = $(window).scrollTop() + $(window).height();

        if (windowBottom > skillsTop + 100 && !skillsAnimated) {
            skillsAnimated = true;

            $('.skill-progress').each(function () {
                const $this = $(this);
                const progress = $this.data('progress');

                $this.animate({
                    width: progress + '%'
                }, 1500, 'swing');
            });
        }
    });
}

// ===================================
// Contact Form
// ===================================
function initContactForm() {
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();

        const name = $('#name').val();
        const email = $('#email').val();
        const subject = $('#subject').val();
        const message = $('#message').val();

        // Validate
        if (!name || !email || !subject || !message) {
            alert('Please fill in all fields');
            return;
        }

        // Show loading state
        const $submitBtn = $('.btn-submit');
        const originalText = $submitBtn.html();
        $submitBtn.html('<i class="fas fa-spinner fa-spin"></i> Sending...').prop('disabled', true);

        // Simulate form submission
        setTimeout(function () {
            // Success message
            $submitBtn.html('<i class="fas fa-check"></i> Message Sent!');

            // Reset form
            $('#contactForm')[0].reset();

            // Show success alert
            alert('Thank you for your message! I will get back to you soon.');

            // Reset button
            setTimeout(function () {
                $submitBtn.html(originalText).prop('disabled', false);
            }, 2000);
        }, 1500);
    });
}

// ===================================
// Smooth Page Load
// ===================================
$(window).on('load', function () {
    // Trigger scroll event to initialize animations
    $(window).trigger('scroll');
});

// ===================================
// Parallax Effect (Optional)
// ===================================
$(window).on('scroll', function () {
    const scrolled = $(window).scrollTop();
    $('.hero').css('transform', 'translateY(' + (scrolled * 0.3) + 'px)');
});

// ===================================
// Typing Effect for Hero (Optional Enhancement)
// ===================================
function typeWriter(element, text, speed = 100) {
    let i = 0;
    const $element = $(element);
    $element.text('');

    function type() {
        if (i < text.length) {
            $element.text($element.text() + text.charAt(i));
            i++;
            setTimeout(type, speed);
        }
    }

    type();
}

// Uncomment to enable typing effect
// $(document).ready(function() {
//     typeWriter('.hero-subtitle', 'Full Stack Developer & Creative Coder', 80);
// });

// ===================================
// Console Message
// ===================================
console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold; color: #2563eb;');
console.log('%cLooking for something? Feel free to reach out!', 'font-size: 14px; color: #6b7280;');
console.log('%c💼 Built with HTML, CSS, JavaScript & jQuery', 'font-size: 12px; color: #10b981;');
