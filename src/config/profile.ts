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
    telegram?: string;
    discord?: string;
  };
  experience: {
    title: string;
    items: Array<{
      company: string;
      position: string;
      duration: string;
      location: string;
      workMode: string; // Remote | Onsite | Hybrid
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
    title: "Senior Software Engineer",
    subtitle: "Building amazing digital experiences",
    bio: "Passionate senior full stack engineer with 11+ years of experience creating scalable web and mobile applications. I love turning complex problems into simple, beautiful, and intuitive solutions.",
    location: "Hong Kong",
    email: "seriousman217winter@email.com",
    phone: "",
    website: "https://wangzeongxiang.vercel.app/",
    linkedin: "",
    github: "https://github.com/frontsunriver",
    twitter: "",
    telegram: "https://t.me/sunriver0217",
    discord: "https://discord.com/users/1335901345793966123"
  },
  experience: {
    title: "Experience",
    items: [
      {
        company: "Genius Tech Inc",
        position: "Senior Software Engineer",
        duration: "12/2024 - Present",
        location: "Toronto, Canada",
        workMode: "Remote",
        description: "Designed the POS product Ionic Cordova app; integrated payments with Moneris and Global Payments devices; developed backend using Node/Express and MongoDB; designed Node.js APIs and integrated with Ionic frontends; built a printing server to resolve printing command queue issues.",
        technologies: ["Ionic", "Cordova", "Node.js", "Express", "MongoDB", "Moneris", "Global Payments", "Printing"]
      },
      {
        company: "Posley Capital",
        position: "Senior Software Engineer",
        duration: "07/2022 - 01/2025",
        location: "Hong Kong, Hong Kong",
        workMode: "Onsite",
        description: "Integrated Web3.js and Ethers.js into Next.js and web applications; developed a crypto e‑commerce storefront with VeChain USD‑locked checkout and automated shipping APIs; designed Node.js APIs and integrated them with React frontends; migrated legacy Python apps to modern Node.js/React stacks.",
        technologies: ["Web3.js", "Ethers.js", "Next.js", "Node.js", "React", "VeChain", "Shipping APIs", "Python"]
      },
      {
        company: "Nuon",
        position: "Senior Project Manager",
        duration: "02/2020 - 08/2022",
        location: "Amsterdam, North Holland, Netherlands",
        workMode: "Remote",
        description: "Integrated Web3.js and Ethers.js into React, Next.js and Vue.js web applications; implemented multiple wallet support using RainbowKit and Wagmi; developed smart contracts with Hardhat and integrated with OpenSea; built The Graph backend for tracking events and storing statistics; maintained and updated projects per business requirements.",
        technologies: ["Web3.js", "Ethers.js", "React", "Next.js", "Vue.js", "RainbowKit", "Wagmi", "Hardhat", "OpenSea", "The Graph"]
      },
      {
        company: "Nuon",
        position: "Full-stack Developer",
        duration: "05/2019 - 06/2020",
        location: "Amsterdam, North Holland, Netherlands",
        workMode: "Remote",
        description: "Developed enterprise‑scale financial applications with React/TypeScript and Java Spring Boot; created modular frontend component libraries with Material UI; improved app performance by ~30% via code‑splitting, caching, and database query optimization; led a team of 4 developers, conducting code reviews, mentorship, and sprint planning.",
        technologies: ["React", "TypeScript", "Java", "Spring Boot", "Material UI", "Performance", "Caching", "Database Optimization", "Leadership"]
      },
      {
        company: "Maryoku",
        position: "Full Stack Developer",
        duration: "04/2015 - 01/2020",
        location: "Tel Aviv‑Yafo, Tel Aviv, Israel",
        workMode: "Remote",
        description: "Designed backend with Java Spring Boot and Grails, integrated AWS S3 storage and built a security module; implemented UI/UX with React, Angular, and Vue.js; developed REST APIs with Python and integrated them into front‑end applications; designed data structures and managed MongoDB; continuously updated UI/UX and integrated APIs; deployed to AWS Lightsail and maintained infrastructure; worked in Agile teams; developed hybrid mobile apps using React Native and Ionic Cordova.",
        technologies: ["Java", "Spring Boot", "Grails", "AWS S3", "Security", "React", "Angular", "Vue.js", "Python", "REST", "MongoDB", "AWS Lightsail", "React Native", "Ionic", "Cordova", "Agile"]
      },
      {
        company: "MasDat Solutions LLP",
        position: "Software Developer Internship",
        duration: "11/2013 - 09/2014",
        location: "Bengaluru, India",
        workMode: "Remote",
        description: "Contributed to web and desktop application development in C++, C#, and PHP with gradual transition into full‑stack web work; built internal tools for data processing and reporting using JavaScript and MySQL; assisted in migration of legacy codebases to modern JavaScript frameworks.",
        technologies: ["C++", "C#", "PHP", "JavaScript", "MySQL", "Migration"]
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
        institution: "University of Hong Kong",
        degree: "Bachelor's Degree of Computer Science",
        duration: "May 2009 – May 2013",
        description: "Bachelor's degree with focus on computer science and engineering fundamentals."
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
