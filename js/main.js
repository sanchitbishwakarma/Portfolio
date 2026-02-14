// ===================================
// Data - All your portfolio information
// ===================================

const portfolioData = {
    projects: [
        {
            title: "Discord Moderation Bot",
            description: "A powerful Discord bot focused on moderation and security features with automated workflows and contextual logging.",
            icon: "fab fa-discord",
            badge: "Public",
            image: "images/project1.jpg",
            tags: ["JavaScript", "Discord.js", "Node.js"],
            stars: 127,
            forks: 23,
            link: "#"
        },
        {
            title: "Portfolio Website",
            description: "Modern portfolio website with stunning animations and responsive design. Built with vanilla HTML, CSS, and JavaScript.",
            icon: "fas fa-globe",
            badge: "Public",
            image: "images/project2.jpg",
            tags: ["HTML", "CSS", "JavaScript"],
            stars: 89,
            forks: 15,
            link: "#"
        },
        {
            title: "Chrome Extension - Media Downloader",
            description: "Browser extension that allows users to download images and videos with advanced filtering options.",
            icon: "fab fa-chrome",
            badge: "Public",
            image: "images/project3.jpg",
            tags: ["JavaScript", "Chrome API", "HTML"],
            stars: 234,
            forks: 45,
            link: "#"
        },
        {
            title: "Full Stack E-Commerce",
            description: "Complete e-commerce platform with payment integration, inventory management, and admin dashboard.",
            icon: "fas fa-shopping-cart",
            badge: "Public",
            image: "images/project4.jpg",
            tags: ["React", "Node.js", "MongoDB"],
            stars: 156,
            forks: 32,
            link: "#"
        },
        {
            title: "AI Chat Application",
            description: "Real-time chat application with AI-powered responses and sentiment analysis.",
            icon: "fas fa-robot",
            badge: "Public",
            image: "images/project5.jpg",
            tags: ["Python", "Flask", "OpenAI"],
            stars: 198,
            forks: 41,
            link: "#"
        },
        {
            title: "Task Management System",
            description: "Collaborative task management tool with real-time updates and team collaboration features.",
            icon: "fas fa-tasks",
            badge: "Public",
            image: "images/project6.jpg",
            tags: ["Vue.js", "Firebase", "Tailwind"],
            stars: 112,
            forks: 28,
            link: "#"
        }
    ],

    skills: [
        {
            name: "JavaScript",
            icon: "fab fa-js",
            level: "Expert",
            percentage: 95,
            color: "#f0db4f"
        },
        {
            name: "React",
            icon: "fab fa-react",
            level: "Advanced",
            percentage: 90,
            color: "#61dafb"
        },
        {
            name: "Node.js",
            icon: "fab fa-node",
            level: "Advanced",
            percentage: 88,
            color: "#68a063"
        },
        {
            name: "Python",
            icon: "fab fa-python",
            level: "Intermediate",
            percentage: 80,
            color: "#3776ab"
        },
        {
            name: "HTML/CSS",
            icon: "fab fa-html5",
            level: "Expert",
            percentage: 95,
            color: "#e34c26"
        },
        {
            name: "Git & GitHub",
            icon: "fab fa-git-alt",
            level: "Advanced",
            percentage: 85,
            color: "#f05032"
        },
        {
            name: "MongoDB",
            icon: "fas fa-database",
            level: "Intermediate",
            percentage: 75,
            color: "#4db33d"
        },
        {
            name: "Docker",
            icon: "fab fa-docker",
            level: "Intermediate",
            percentage: 70,
            color: "#0db7ed"
        }
    ],

    platforms: [
        {
            name: "YouTube Channel",
            icon: "fab fa-youtube",
            description: "Building with the new tech and frameworks",
            subscribers: "12.5K",
            videos: 145,
            link: "#"
        },
        {
            name: "Dev Blog",
            icon: "fas fa-blog",
            description: "Sharing knowledge and insights about web development",
            subscribers: "8.2K",
            videos: 89,
            link: "#"
        },
        {
            name: "GitHub",
            icon: "fab fa-github",
            description: "Open source contributions and personal projects",
            subscribers: "2.3K",
            videos: 67,
            link: "#"
        }
    ]
};

// ===================================
// DOM Ready
// ===================================

$(document).ready(function () {
    // Load all content
    loadProjects();
    loadSkills();
    loadPlatforms();

    // Initialize interactions
    initNavigation();
    initScrollAnimations();
    initMobileMenu();
});

// ===================================
// Load Projects
// ===================================

function loadProjects() {
    const projectsGrid = $('#projectsGrid');

    portfolioData.projects.forEach((project, index) => {
        const projectCard = `
            <div class="project-card" style="animation-delay: ${index * 0.1}s">
                <div class="project-header">
                    <i class="${project.icon} project-icon"></i>
                    <a href="${project.link}" class="project-title">${project.title}</a>
                    <span class="project-badge">${project.badge}</span>
                </div>
                <p class="project-description">${project.description}</p>
                <div class="project-tags">
                    ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join('')}
                </div>
                <div class="project-stats">
                    <span class="stat">
                        <i class="fas fa-star"></i>
                        ${project.stars}
                    </span>
                    <span class="stat">
                        <i class="fas fa-code-branch"></i>
                        ${project.forks}
                    </span>
                </div>
            </div>
        `;

        projectsGrid.append(projectCard);
    });
}

// ===================================
// Load Skills
// ===================================

function loadSkills() {
    const skillsGrid = $('#skillsGrid');

    portfolioData.skills.forEach((skill, index) => {
        const skillCard = `
            <div class="skill-card" style="animation-delay: ${index * 0.1}s">
                <div class="skill-header">
                    <i class="${skill.icon} skill-icon" style="color: ${skill.color}"></i>
                    <div>
                        <div class="skill-name">${skill.name}</div>
                        <div class="skill-level">${skill.level}</div>
                    </div>
                </div>
                <div class="skill-bar">
                    <div class="skill-progress" data-progress="${skill.percentage}" style="width: 0%"></div>
                </div>
            </div>
        `;

        skillsGrid.append(skillCard);
    });
}

// ===================================
// Load Platforms
// ===================================

function loadPlatforms() {
    const platformsGrid = $('#platformsGrid');

    portfolioData.platforms.forEach((platform, index) => {
        const platformCard = `
            <div class="platform-card" style="animation-delay: ${index * 0.1}s">
                <div class="platform-header">
                    <i class="${platform.icon} platform-icon"></i>
                    <div class="platform-name">${platform.name}</div>
                </div>
                <p class="platform-description">${platform.description}</p>
                <div class="platform-stats">
                    <span class="stat">
                        <i class="fas fa-users"></i>
                        ${platform.subscribers} subscribers
                    </span>
                    <span class="stat">
                        <i class="fas fa-video"></i>
                        ${platform.videos} posts
                    </span>
                </div>
            </div>
        `;

        platformsGrid.append(platformCard);
    });
}

// ===================================
// Navigation
// ===================================

function initNavigation() {
    // Smooth scroll for navigation links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();

        const target = $(this.getAttribute('href'));
        if (target.length) {
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 80
            }, 800);

            // Update active link
            $('.nav-link, .mobile-link').removeClass('active');
            $(this).addClass('active');

            // Close mobile menu if open
            $('.mobile-menu').removeClass('active');
        }
    });

    // Highlight active section on scroll
    $(window).on('scroll', function () {
        const scrollPos = $(window).scrollTop() + 100;

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
    $('.mobile-menu-btn').on('click', function () {
        $('.mobile-menu').toggleClass('active');

        // Animate icon
        const icon = $(this).find('i');
        if (icon.hasClass('fa-bars')) {
            icon.removeClass('fa-bars').addClass('fa-times');
        } else {
            icon.removeClass('fa-times').addClass('fa-bars');
        }
    });

    // Close menu when clicking outside
    $(document).on('click', function (e) {
        if (!$(e.target).closest('.mobile-menu-btn, .mobile-menu').length) {
            $('.mobile-menu').removeClass('active');
            $('.mobile-menu-btn i').removeClass('fa-times').addClass('fa-bars');
        }
    });
}

// ===================================
// Scroll Animations
// ===================================

function initScrollAnimations() {
    // Animate skill bars when they come into view
    const animateSkillBars = () => {
        $('.skill-progress').each(function () {
            const skillBar = $(this);
            const progress = skillBar.data('progress');
            const skillTop = skillBar.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > skillTop && skillBar.width() === 0) {
                skillBar.animate({
                    width: progress + '%'
                }, 1500, 'swing');
            }
        });
    };

    // Fade in elements on scroll
    const fadeInOnScroll = () => {
        $('.project-card, .skill-card, .platform-card').each(function () {
            const element = $(this);
            const elementTop = element.offset().top;
            const windowBottom = $(window).scrollTop() + $(window).height();

            if (windowBottom > elementTop + 100) {
                element.css('opacity', '1');
            }
        });
    };

    // Run on scroll
    $(window).on('scroll', function () {
        animateSkillBars();
        fadeInOnScroll();
    });

    // Run once on load
    animateSkillBars();
    fadeInOnScroll();
}

// ===================================
// Counter Animation
// ===================================

function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.text(target);
            clearInterval(timer);
        } else {
            element.text(Math.floor(current));
        }
    }, 16);
}

// ===================================
// Add hover effects to cards
// ===================================

$(document).on('mouseenter', '.project-card, .skill-card, .platform-card', function () {
    $(this).css('transform', 'translateY(-5px)');
});

$(document).on('mouseleave', '.project-card, .skill-card, .platform-card', function () {
    $(this).css('transform', 'translateY(0)');
});

// ===================================
// Console Easter Egg
// ===================================

console.log('%c👋 Hey there, fellow developer!', 'font-size: 20px; font-weight: bold; color: #58a6ff;');
console.log('%cLooking for something? Feel free to reach out!', 'font-size: 14px; color: #8b949e;');
console.log('%c💼 Portfolio built with ❤️ using HTML, CSS, JavaScript & jQuery', 'font-size: 12px; color: #238636;');
