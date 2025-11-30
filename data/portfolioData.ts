import { Project, Experience, Skill } from '@/types';

export const portfolioData = {
  personal: {
    name: "Maulidiah",
    location: "Mojokerto, Jawa Timur",
    position: "Fullstack Developer / Frontend Developer",
    description: "Aku tertarik dunia IT karena dinamis, terus berkembang, dan selalu bikin aku belajar hal baru. Rasanya satisfying banget setiap kali berhasil bikin fitur, menyelesaikan bug, atau melihat hasil kerjaku digunakan orang lain.",
    email: "lidiaars@gmail.com",
    github: "github.com/maulidiahrizki",
    linkedin: "linkedin.com/in/maulidia-rizki",
    instagram: "@lidiaars",
    whatsapp: "085853164066"
  },

  workValues: [
    "Clean & maintainable code",
    "Fast learner",
    "Problem solver",
    "Suka struktur rapi (MVC)",
    "User experience oriented",
    "Terorganisir & efisien"
  ],

  tools: [
    "JavaScript", "Node.js", "Express.js", "HTML", "CSS", "EJS", 
    "MySQL", "Figma", "VSCode", "GitHub", "SheetJS", "WordPress"
  ],

  skills: {
    hard: [
      "JavaScript", "HTML / CSS", "Node.js", "Express.js (MVC)", "EJS",
      "MySQL", "REST API", "SheetJS", "Tailwind CSS", "Bootstrap",
      "jQuery", "WordPress Elementor"
    ],
    soft: [
      "Cepat belajar", "Detail-oriented", "Problem solving",
      "Kerja tim", "Komunikatif", "Adaptif"
    ]
  },

  projects: [
    {
      id: 1,
      title: "Website Al Rahmah Tour & Travel",
      role: "Fullstack Developer",
      year: "2023-2024",
      tech: ["Express.js", "MySQL", "EJS", "MVC", "Node.js"],
      features: [
        "CRUD operations",
        "Admin panel",
        "File upload system",
        "Landing page",
        "Dynamic content"
      ],
      description: "Membangun website fullstack dari nol dengan struktur MVC untuk tour & travel company"
    },
    {
      id: 2,
      title: "Website Anggaran & Kinerja – Bappeda Malang",
      role: "Frontend Developer",
      year: "2024",
      tech: ["HTML", "CSS", "JavaScript", "SheetJS"],
      features: [
        "Responsive tables",
        "Excel export functionality",
        "API integration",
        "Mobile-friendly UI"
      ],
      description: "Pengembangan frontend untuk sistem anggaran pemerintah dengan fitur export Excel"
    },
    {
      id: 3,
      title: "UI Figma Projects",
      role: "UI Designer",
      year: "2024",
      tech: ["Figma", "Auto-layout", "Prototyping"],
      features: [
        "Food ordering app design",
        "Training landing page",
        "Admin dashboard",
        "Interactive prototypes"
      ],
      description: "Koleksi desain UI/UX untuk berbagai aplikasi menggunakan Figma"
    }
  ],

  whyChooseMe: {
    highlights: [
      "Bisa fullstack & frontend",
      "Fast learner",
      "Berpengalaman real project",
      "Komunikatif",
      "Build project dari nol",
      "Code rapi (MVC)"
    ],
    proudStatement: "Membangun website fullstack Al Rahmah dari nol hingga digunakan admin dan jamaah."
  },

};