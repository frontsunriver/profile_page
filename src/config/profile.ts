export interface ProfileConfig {
  personal: {
    name: string;
    title: string;
    subtitle: string;
    bio: string;
    location: string;
    email: string;
    phone: string;
    website: string;
    linkedin: string;
    github: string;
    twitter: string;
  };
  experience: {
    title: string;
    items: Array<{
      company: string;
      position: string;
      duration: string;
      description: string;
      technologies: string[];
    }>;
  };
  skills: {
    title: string;
    categories: Array<{
      name: string;
      items: string[];
    }>;
  };
  projects: {
    title: string;
    items: Array<{
      name: string;
      description: string;
      technologies: string[];
      github: string;
      live: string;
      image: string;
    }>;
  };
  education: {
    title: string;
    items: Array<{
      institution: string;
      degree: string;
      duration: string;
      description: string;
    }>;
  };
  certifications: {
    title: string;
    items: Array<{
      name: string;
      issuer: string;
      date: string;
      credential: string;
    }>;
  };
}

export const profileConfig: ProfileConfig = {
  personal: {
    name: "Wang Zeng Xiang",
    title: "Full Stack Developer",
    subtitle: "Building amazing digital experiences",
    bio: "Passionate full-stack developer with 5+ years of experience creating scalable web applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    location: "Hong Kong",
    email: "john.doe@email.com",
    phone: "+1 (555) 123-4567",
    website: "https://johndoe.dev",
    linkedin: "https://linkedin.com/in/johndoe",
    github: "https://github.com/frontsunriver",
    twitter: "https://twitter.com/johndoe"
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Tech Corp",
        position: "Senior Full Stack Developer",
        duration: "2022 - Present",
        description: "Lead development of microservices architecture serving 1M+ users. Implemented CI/CD pipelines reducing deployment time by 60%.",
        technologies: ["React", "Node.js", "TypeScript", "AWS", "Docker", "Kubernetes"]
      },
      {
        company: "StartupXYZ",
        position: "Full Stack Developer",
        duration: "2020 - 2022",
        description: "Built and maintained web applications using modern JavaScript frameworks. Collaborated with design team to implement responsive UIs.",
        technologies: ["Vue.js", "Express.js", "MongoDB", "PostgreSQL", "Redis"]
      },
      {
        company: "WebDev Agency",
        position: "Frontend Developer",
        duration: "2019 - 2020",
        description: "Developed responsive websites and web applications for various clients. Focused on performance optimization and user experience.",
        technologies: ["React", "JavaScript", "CSS3", "HTML5", "Sass"]
      }
    ]
  },
  skills: {
    title: "Skills",
    categories: [
      {
        name: "Frontend",
        items: ["React", "Next.js", "TypeScript", "Vue.js", "Tailwind CSS", "Sass", "HTML5", "CSS3"]
      },
      {
        name: "Backend",
        items: ["Node.js", "Express.js", "Python", "Django", "PostgreSQL", "MongoDB", "Redis"]
      },
      {
        name: "DevOps & Tools",
        items: ["AWS", "Docker", "Kubernetes", "Git", "CI/CD", "Linux", "Nginx"]
      },
      {
        name: "Languages",
        items: ["JavaScript", "TypeScript", "Python", "Java", "Go", "SQL"]
      }
    ]
  },
  projects: {
    title: "Featured Projects",
    items: [
      {
        name: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
        technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
        github: "https://github.com/frontsunriver/ecommerce-platform",
        live: "https://ecommerce-demo.com",
        image: "/images/ecommerce.jpg"
      },
      {
        name: "Task Management App",
        description: "A collaborative task management application with real-time updates, team collaboration features, and project tracking.",
        technologies: ["Next.js", "TypeScript", "MongoDB", "Socket.io", "Tailwind CSS"],
        github: "https://github.com/frontsunriver/task-manager",
        live: "https://taskmanager-demo.com",
        image: "/images/taskmanager.jpg"
      },
      {
        name: "Weather Dashboard",
        description: "A responsive weather dashboard with location-based forecasts, interactive maps, and data visualization.",
        technologies: ["Vue.js", "Chart.js", "OpenWeather API", "PWA"],
        github: "https://github.com/frontsunriver/weather-dashboard",
        live: "https://weather-demo.com",
        image: "/images/weather.jpg"
      }
    ]
  },
  education: {
    title: "Education",
    items: [
      {
        institution: "University of California, Berkeley",
        degree: "Bachelor of Science in Computer Science",
        duration: "2015 - 2019",
        description: "Graduated Magna Cum Laude with focus on software engineering and data structures."
      },
      {
        institution: "Stanford University",
        degree: "Machine Learning Specialization",
        duration: "2020",
        description: "Online specialization covering machine learning algorithms and applications."
      }
    ]
  },
  certifications: {
    title: "Certifications",
    items: [
      {
        name: "AWS Certified Solutions Architect",
        issuer: "Amazon Web Services",
        date: "2023",
        credential: "AWS-SAA-2023"
      },
      {
        name: "Google Cloud Professional Developer",
        issuer: "Google Cloud",
        date: "2022",
        credential: "GCP-PD-2022"
      },
      {
        name: "Certified Kubernetes Administrator",
        issuer: "Cloud Native Computing Foundation",
        date: "2021",
        credential: "CKA-2021"
      }
    ]
  }
};
