'use strict';

/*
 * Portfolio configuration.
 * Optional contact links. Leave email or LinkedIn blank to hide that button.
 */
const PROFILE = {
    // These details are displayed publicly in the portfolio contact section.
    email: 'o.bimaya12@icloud.com',
    github: 'https://github.com/oshini-bimaya',
    linkedin: 'https://www.linkedin.com/in/oshini-bimaya-403372345/'
};

// Mark the page as JavaScript-enabled for progressive-enhancement styles.
document.documentElement.classList.add('js');

/*
 * Skills are grouped to power the interactive category tabs.
 * Descriptions intentionally describe learning and practical exposure,
 * rather than suggesting expert-level proficiency.
 */
const skillSets = {
    programming: [
        ['J', 'Java', 'Completed Java Programming for Beginners.'],
        ['Py', 'Python', 'Practising programming and problem-solving.'],
        ['DS', 'Data Structures', 'Learning searching, sorting and fundamentals.']
    ],

    web: [
        ['HTML', 'HTML', 'Creating the structure of web pages.'],
        ['CSS', 'CSS', 'Styling responsive and user-friendly interfaces.'],
        ['JS', 'JavaScript', 'Adding interactive behaviour to websites.'],
        ['PHP', 'PHP', 'Practical experience through the MIRA group project.'],
        ['SQL', 'Database concepts', 'Working with database-backed web applications.']
    ],

    tools: [
        ['Git', 'Git & GitHub', 'Version control and collaborative project work.'],
        ['VS', 'Visual Studio Code', 'Writing, organising and testing code.'],
        ['WEB', 'Web hosting', 'Experience publishing a web project.'],
        ['>_', 'Linux', 'Currently studying Linux Foundation LFS101.'],
        ['☁', 'Cloud & DevOps', 'Exploring automation, cloud and delivery workflows.']
    ],

    ai: [
        ['Py', 'Python', 'Main programming language for the NOVA desktop assistant.'],
        ['✦', 'Gemini API', 'Exploring AI-powered conversations through an API.'],
        ['UI', 'CustomTkinter', 'Building a modern desktop interface.'],
        ['DB', 'SQLite', 'Storing local conversation history.'],
        ['OS', 'subprocess & webbrowser', 'Practising desktop app launching and website opening.'],
        ['Docker', 'Docker', 'A possible future deployment and containerisation learning goal.']
    ]
};

const skillGrid = document.querySelector('#skillsGrid');
const skillTabs = document.querySelectorAll('.tab');

/* Build the skill cards safely using textContent. */
function renderSkills(group) {
    if (!skillGrid || !skillSets[group]) {
        return;
    }

    skillGrid.replaceChildren();

    skillSets[group].forEach(([symbol, name, description]) => {
        const card = document.createElement('article');
        card.className = 'skill';

        const symbolElement = document.createElement('span');
        symbolElement.className = 'symbol';
        symbolElement.textContent = symbol;

        const detail = document.createElement('div');

        const title = document.createElement('strong');
        title.textContent = name;

        const summary = document.createElement('small');
        summary.textContent = description;

        detail.append(title, summary);
        card.append(symbolElement, detail);
        skillGrid.append(card);
    });
}

renderSkills('programming');

function activateSkillTab(selectedTab, moveFocus = false) {
    skillTabs.forEach((tab) => {
        const isSelected = tab === selectedTab;
        tab.classList.toggle('active', isSelected);
        tab.setAttribute('aria-selected', String(isSelected));
        tab.setAttribute('tabindex', isSelected ? '0' : '-1');
    });

    renderSkills(selectedTab.dataset.skill);

    if (moveFocus) {
        selectedTab.focus();
    }
}

skillTabs.forEach((button, index) => {
    button.addEventListener('click', () => {
        activateSkillTab(button);
    });

    button.addEventListener('keydown', (event) => {
        let nextIndex = index;

        if (event.key === 'ArrowRight') {
            nextIndex = (index + 1) % skillTabs.length;
        } else if (event.key === 'ArrowLeft') {
            nextIndex = (index - 1 + skillTabs.length) % skillTabs.length;
        } else if (event.key === 'Home') {
            nextIndex = 0;
        } else if (event.key === 'End') {
            nextIndex = skillTabs.length - 1;
        } else {
            return;
        }

        event.preventDefault();
        activateSkillTab(skillTabs[nextIndex], true);
    });
});

/* Dark mode: remember the visitor's choice on this device. */
const themeButton = document.querySelector('#themeToggle');

try {
    if (localStorage.getItem('oshini-theme') === 'dark') {
        document.body.classList.add('dark');
    }
} catch (error) {
    // The page still works if browser storage is unavailable.
}

function updateThemeButton() {
    if (!themeButton) {
        return;
    }

    const darkModeEnabled = document.body.classList.contains('dark');

    themeButton.textContent = darkModeEnabled ? '☀' : '◐';
    themeButton.setAttribute(
        'aria-label',
        darkModeEnabled ? 'Switch to light mode' : 'Switch to dark mode'
    );
    themeButton.setAttribute('aria-pressed', String(darkModeEnabled));
    themeButton.title = darkModeEnabled ? 'Switch to light mode' : 'Switch to dark mode';
}

updateThemeButton();

themeButton?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    updateThemeButton();

    try {
        const selectedTheme = document.body.classList.contains('dark')
            ? 'dark'
            : 'light';

        localStorage.setItem('oshini-theme', selectedTheme);
    } catch (error) {
        // Theme switching still works for the current page session.
    }
});

/* Mobile navigation menu. */
const menuButton = document.querySelector('#menuToggle');
const navLinks = document.querySelector('#navLinks');

menuButton?.addEventListener('click', () => {
    const menuIsOpen = navLinks.classList.toggle('open');

    menuButton.setAttribute('aria-expanded', String(menuIsOpen));
    menuButton.setAttribute('aria-label', menuIsOpen ? 'Close menu' : 'Open menu');
    menuButton.textContent = menuIsOpen ? '✕' : '☰';
});

navLinks?.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('open');

        menuButton?.setAttribute('aria-expanded', 'false');

        if (menuButton) {
            menuButton.textContent = '☰';
            menuButton.setAttribute('aria-label', 'Open menu');
        }
    });
});

menuButton?.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navLinks?.classList.contains('open')) {
        navLinks.classList.remove('open');
        menuButton.setAttribute('aria-expanded', 'false');
        menuButton.setAttribute('aria-label', 'Open menu');
        menuButton.textContent = '☰';
    }
});

/*
 * Learning roadmap.
 * Visitors can tick completed topics. Their selections are stored locally
 * in their own browser and are not sent to a server.
 */
const roadmap = [
    [
        'Linux foundations · LFS101',
        'Currently studying Linux concepts and command-line basics.'
    ],
    [
        'Networking',
        'Protocols, DNS, IP addressing and networking fundamentals.'
    ],
    [
        'Git & GitHub',
        'Version control and collaborative development workflows.'
    ],
    [
        'Bash scripting',
        'Automating small, repetitive command-line tasks.'
    ],
    [
        'Docker',
        'Understanding containers, images and local deployments.'
    ],
    [
        'CI/CD & Cloud',
        'Pipelines, cloud infrastructure and software delivery.'
    ]
];

const roadmapGrid = document.querySelector('#roadmapGrid');
const progressLabel = document.querySelector('#progressLabel');
const progressBar = document.querySelector('#progressBar');

let completedRoadmapItems = [];

try {
    const savedItems = JSON.parse(
        localStorage.getItem('oshini-roadmap') || '[]'
    );

    if (Array.isArray(savedItems)) {
        completedRoadmapItems = savedItems.filter((value) => (
            Number.isInteger(value) &&
            value >= 0 &&
            value < roadmap.length
        ));
    }
} catch (error) {
    completedRoadmapItems = [];
}

function updateRoadmapProgress() {
    const completedCount = completedRoadmapItems.length;
    const totalCount = roadmap.length;
    const percentage = (completedCount / totalCount) * 100;

    if (progressLabel) {
        progressLabel.textContent = `${completedCount} / ${totalCount}`;
    }

    if (progressBar) {
        progressBar.style.width = `${percentage}%`;
    }

    try {
        localStorage.setItem(
            'oshini-roadmap',
            JSON.stringify(completedRoadmapItems)
        );
    } catch (error) {
        // The checklist remains usable even without local storage.
    }
}

roadmap.forEach(([name, description], index) => {
    if (!roadmapGrid) {
        return;
    }

    const item = document.createElement('label');
    item.className = 'roadmap-item';

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = completedRoadmapItems.includes(index);
    checkbox.setAttribute('aria-label', `Mark ${name} as completed`);

    const textContainer = document.createElement('div');

    const title = document.createElement('strong');
    title.textContent = name;

    const detail = document.createElement('small');
    detail.textContent = description;

    textContainer.append(title, detail);
    item.append(checkbox, textContainer);

    item.classList.toggle('done', checkbox.checked);

    checkbox.addEventListener('change', () => {
        if (checkbox.checked) {
            completedRoadmapItems = [
                ...new Set([...completedRoadmapItems, index])
            ];
        } else {
            completedRoadmapItems = completedRoadmapItems.filter(
                (itemIndex) => itemIndex !== index
            );
        }

        item.classList.toggle('done', checkbox.checked);
        updateRoadmapProgress();
    });

    roadmapGrid.append(item);
});

updateRoadmapProgress();

/* Interactive terminal content. */
const terminalOutput = document.querySelector('#terminalOutput');
const terminalForm = document.querySelector('#terminalForm');
const terminalInput = document.querySelector('#terminalInput');

function printTerminalLine(message, prefix = '') {
    if (!terminalOutput) {
        return;
    }

    const paragraph = document.createElement('p');
    paragraph.textContent = `${prefix}${message}`;

    terminalOutput.append(paragraph);
    terminalOutput.scrollTop = terminalOutput.scrollHeight;
}

const terminalCommands = {
    help: [
        'Commands: help, about, skills, projects, mira, nova, agent,',
        'learning, certifications, education, roadmap, contact,',
        'whoami, clear'
    ].join(' '),

    about:
        'Oshini Bimaya — Computer Science undergraduate exploring software, Linux, cloud and DevOps.',

    skills:
        'Java · Python · HTML · CSS · JavaScript · PHP · Database concepts · GitHub · VS Code · Linux (learning)',

    projects:
        'MIRA — university group project with my contributions in page design, artwork uploads, approval workflows and admin features. NOVA — a Python-based AI desktop assistant in development.',

    mira:
        'MIRA is a group project. My contributions: homepage and login design, registration interface, artwork-uploading experience, artwork approval workflow, admin dashboard and related admin features. See the MIRA screenshots in the Projects section. Live project: https://mira-nsbm.infinityfreeapp.com/?i=1',

    nova:
        'NOVA is a Python-based AI desktop assistant in development. Its stack includes Gemini API, CustomTkinter, SQLite, subprocess, webbrowser, and Git/GitHub. Planned capabilities include AI chat, app and website launching, file management, notes, web search, voice commands and conversation memory. Docker is a future practice goal.',

    agent:
        'NOVA — a Python-based AI desktop assistant in development. Type nova for its technology stack and planned capabilities.',

    learning:
        'Currently studying Introduction to Linux (LFS101) through the Linux Foundation. Continuing to practise programming and software fundamentals.',

    certifications:
        'Completed: Java Programming for Beginners — Simplilearn, 17 October 2026. Open the Learning section to view the certificate.',

    education:
        'BSc (Hons) Computer Science · NSBM Green University · Sri Lanka',

    roadmap:
        'Linux → Networking → Git & GitHub → Bash scripting → Docker → CI/CD & Cloud',

    contact:
        'See the Contact section for the GitHub repository. Email and LinkedIn links appear when configured.',

    whoami:
        'A curious learner building practical skills and exploring a future in cloud and DevOps.'
};

terminalForm?.addEventListener('submit', (event) => {
    event.preventDefault();

    const command = terminalInput.value.trim().toLowerCase();

    if (!command) {
        return;
    }

    terminalInput.value = '';

    if (command === 'clear') {
        terminalOutput.replaceChildren();
        return;
    }

    printTerminalLine(command, 'visitor@oshini:~$ ');

    const response = terminalCommands[command] ||
        `Command not found: ${command}. Type help to see available commands.`;

    printTerminalLine(response);
});

/* Back-to-top button. */
const backTopButton = document.querySelector('#backTop');

window.addEventListener(
    'scroll',
    () => {
        if (backTopButton) {
            const isVisible = window.scrollY > 550;
            backTopButton.classList.toggle('show', isVisible);
            backTopButton.setAttribute('aria-hidden', String(!isVisible));
            backTopButton.tabIndex = isVisible ? 0 : -1;
        }
    },
    { passive: true }
);

backTopButton?.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

/* Reveal elements as they enter the viewport. */
const prefersReducedMotion = window.matchMedia(
    '(prefers-reduced-motion: reduce)'
).matches;

if (
    prefersReducedMotion ||
    !('IntersectionObserver' in window)
) {
    document.querySelectorAll('.reveal').forEach((element) => {
        element.classList.add('visible');
    });
} else {
    const revealObserver = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.09 }
    );

    document.querySelectorAll('.reveal').forEach((element) => {
        revealObserver.observe(element);
    });
}

/* Apply the configured contact links. */
const emailLink = document.querySelector('#emailLink');
const githubLink = document.querySelector('#githubLink');
const linkedinLink = document.querySelector('#linkedinLink');
const yearElement = document.querySelector('#year');

if (emailLink) {
    const hasEmail = Boolean(PROFILE.email.trim());
    emailLink.hidden = !hasEmail;

    if (hasEmail) {
        emailLink.href = `mailto:${PROFILE.email.trim()}`;
    }
}

if (githubLink) {
    githubLink.href = PROFILE.github;
}

if (linkedinLink) {
    const hasLinkedIn = Boolean(PROFILE.linkedin.trim());
    linkedinLink.hidden = !hasLinkedIn;

    if (hasLinkedIn) {
        linkedinLink.href = PROFILE.linkedin;
    }
}

if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
}
