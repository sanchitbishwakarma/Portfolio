const projectsData = [
    {
        "title": "Complete web development course",
        "link": "https://github.com/sanchitbishwakarma/complete-web-development-course",
        "description": "Master HTML, CSS, JavaScript, and modern frontend and backend frameworks to build, test, and deploy fully functional full-stack web applications through detailed explanations, real-world examples, and hands-on projects designed for beginners to advanced developers.",
        "language": "JavaScript",
        "languageColor": "#f1e05a",
        "stars": 497,
        "forks": 136
    },
    {
        "title": "Docker and Kubernetes for beginners",
        "link": "https://github.com/sanchitbishwakarma/docker-and-kubernetes-for-beginners",
        "description": "Learn containerization with Docker and orchestration with Kubernetes from scratch, including practical DevOps workflows, deployment strategies, scaling applications, and managing production-ready containerized environments step by step.",
        "language": "Go",
        "languageColor": "#00ADD8",
        "stars": 440,
        "forks": 52
    },
    {
        "title": "The Ultimate Python Bootcamp",
        "link": "https://github.com/sanchitbishwakarma/the-ultimate-python-bootcamp",
        "description": "Build 50 real-world Python projects from scratch while mastering core programming concepts, object-oriented programming, file handling, APIs, automation, web development basics, and practical problem-solving skills.",
        "language": "Python",
        "languageColor": "#3572A5",
        "stars": 496,
        "forks": 107
    },
    {
        "title": "Node.js - Beginner to Advance course",
        "link": "https://github.com/sanchitbishwakarma/node-js-beginner-to-advance-course",
        "description": "Complete Node.js course covering fundamentals to advanced topics, including REST APIs, authentication, databases, middleware, performance optimization, and multiple practical project implementations for real-world applications.",
        "language": "JavaScript",
        "languageColor": "#f1e05a",
        "stars": 209,
        "forks": 127
    },
    {
        "title": "Full stack generative AI with python",
        "link": "https://github.com/sanchitbishwakarma/full-stack-generative-ai-with-python",
        "description": "Build end-to-end AI applications using the latest generative AI technologies with Python, including large language models, prompt engineering, backend integration, APIs, and deployment of intelligent, production-ready systems.",
        "language": "Python",
        "languageColor": "#3572A5",
        "stars": 205,
        "forks": 123
    },
    {
        "title": "React - Complete Guide",
        "link": "https://github.com/sanchitbishwakarma/react-complete-guide",
        "description": "Master React.js with hooks, context API, state management, routing, performance optimization, and modern development patterns while building dynamic, scalable, and production-ready frontend applications step by step.",
        "language": "TypeScript",
        "languageColor": "#3178c6",
        "stars": 312,
        "forks": 89
    }
]

const youtubeData = [
    {
        "name": "Sanchit Bishwakarma",
        "channelHandle": "@SanchitCodeLab",
        "description": "Hey there, everyone, Sanchit here back again with another video!",
        "subscribers": "83",
        "videos": "25",
        "avatar": "https://avatars.githubusercontent.com/u/156568930?v=4"
    }
];

const activityData = [
    {
        "username": "sanchitbishwakarma",
        "type": "commit",
        "repo": "sanchitbishwakarma/portfolio",
        "message": "Updated project showcase with new designs",
        "time": "2 hours ago",
        "commits": 3
    },
    {
        "username": "sanchitbishwakarma",
        "type": "star",
        "repo": "facebook/react",
        "repoBio": "The library for web and native user interfaces.",
        "time": "5 hours ago"
    },
    {
        "username": "sanchitbishwakarma",
        "type": "fork",
        "repo": "vercel/next.js",
        "time": "1 day ago"
    },
    {
        "username": "sanchitbishwakarma",
        "type": "commit",
        "repo": "sanchitbishwakarma/discord-bot",
        "message": "Added moderation features and logging",
        "time": "2 days ago",
        "commits": 5
    }
];

const platformsData = [
    {
        "name": "Bookies",
        "website": "https://bookies.xyz",
        "description": "A book review application built with React Native and Expo.",
        "iosLink": "https://sanchitbishwakarma.com.np/download/bookies/ios",
        "androidLink": "https://sanchitbishwakarma.com.np/download/bookies/android",
        "icon": "assets/img/bookies-logo.png"
    },
    {
        "name": "Give Me Movie",
        "website": "https://givememovie.xyz",
        "description": "A movie review application built with React Native and Expo.",
        "iosLink": "https://sanchitbishwakarma.com.np/download/givememovie/ios",
        "androidLink": "https://sanchitbishwakarma.com.np/download/givememovie/android",
        "icon": "assets/img/give-me-movie-logo.png"
    }
];

const testimonialsData = [
    {
        "text": "Sanchit is an exceptional developer who consistently delivers high-quality code. His attention to detail and problem-solving skills are top-notch.",
        "author": "Papu Yadav",
        "role": "Founder & CEO of Billtize",
        "avatar": "https://media.licdn.com/dms/image/v2/D4D35AQGRFHwWbnQDjw/profile-framedphoto-shrink_400_400/profile-framedphoto-shrink_400_400/0/1726156508946?e=1771801200&v=beta&t=c87nMli18eWJ_nYenA2QvZ5r7uKAFOSQ8dAuUYpowUY"
    },
    {
        "text": "Working with Sanchit was a pleasure. He took my vision and turned it into a fully functional, beautiful application faster than expected.",
        "author": "Sagar Gurung",
        "role": "MERN Stack Instructor at Mindrisers",
        "avatar": "https://api.dicebear.com/9.x/avataaars-neutral/svg?seed=Brian"
    },
    {
        "text": "Sanchit's expertise in front-end development is remarkable. He has a keen eye for design and performance, ensuring every user interface is both beautiful and functional.",
        "author": "Suman Sunuwar",
        "role": "Front-End Developer",
        "avatar": "https://media.licdn.com/dms/image/v2/D5603AQHi92OkmY-X3g/profile-displayphoto-scale_400_400/B56ZuR104iKcAg-/0/1767678366750?e=1772668800&v=beta&t=lEBuAIZ2ceDl2zMjKPr54JESpdcXSVivCzneYcgUo3M"
    },
    {
        "text": "Sanchit is a highly skilled developer who excels in both frontend and backend. His ability to build scalable systems and his deep understanding of the MERN stack is truly impressive.",
        "author": "Rochak Gurung",
        "role": "Laravel Backend Developer | MERN Stack Developer | Passionate About Scalable Web Apps",
        "avatar": "https://media.licdn.com/dms/image/v2/D4E03AQHiF95zDiVkhA/profile-displayphoto-scale_400_400/B4EZgDc7gTHoAg-/0/1752404574292?e=1772668800&v=beta&t=CYj-pnojTMA3Gj-VApr9f7BSh1m_sRmD48SakQp-k5w"
    }
];
