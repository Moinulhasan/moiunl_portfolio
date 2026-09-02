export interface Project {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  image: string; // Used for Details Page
  cardImage: string; // Used for Project List Card
  gallery?: string[];
  technologies: string[];
  role: string;
  liveLink?: string;
  githubLink?: string;
  features: string[];
  challenges?: string[];
  solutions?: string[];
  year: string;
  company?: string;
}

export const projects: Project[] = [
    {
    id: "easy-consumer-platform",
    title: "Easy Consumer Platform",
    shortDescription:
      "Scalable consumer platform with payment gateway, inventory, and CRM features.",
    fullDescription:
      "Built a scalable consumer platform with payment gateway integration, inventory management, and customer relationship features. Implemented a microservices architecture using Laravel, MySQL and Redis for optimal performance and user experience. This platform serves as a one-stop solution for consumers to manage their subscriptions, payments, and service requests.",
    image: "/project/easy_profile.jfif",
    cardImage: "/project/easy_profile.jfif",
    technologies: [
      "Laravel",
      "MySQL",
      "Redis",
      "Payment APIs",
      "Microservices",
    ],
    role: "Full Stack Developer",
    liveLink: "https://easy.com.bd/",
    features: [
      "Seamless payment gateway integration",
      "Real-time inventory management",
      "Customer support ticketing system",
      "Personalized user dashboards",
      "Automated subscription renewals",
    ],
    year: "2022",
    company: "Easy",
  },
  {
    id: "overseas-expat-portal",
    title: "Overseas FacilitateXpat Portal",
    shortDescription:
      "An expatriate support and overseas services portal designed to help users explore opportunities abroad, access guidance, and connect with international resources.",
    fullDescription:
      "Developed a comprehensive overseas expat support portal that serves as a centralized hub for users seeking information, guidance, and services related to international opportunities. The system provides intuitive navigation, resource pages, and service links tailored to expatriates planning to work, study, or live abroad. It enhances user engagement with clear pathways to relevant country guides, visa information, and relocation assistance.",
    image: "/project/overseas/home.jpg",
    cardImage: "/project/overseas/overseas-expat-portal.png",
    technologies: [
      "Laravel",
      "MySQL",
      "React JS",
      "Tailwind CSS",
      "API Integrations",
    ],
    role: "Full Stack Developer",
    liveLink: "https://overseas.facilitatexpat.com/",
    features: [
      "Responsive multi-page design for desktop and mobile",
      "Country-specific information hubs for expatriate guidance",
      "Integrated contact and consultation request forms",
      "Service directory for overseas support and providers",
      "Dynamic image & content components for easy updates",
    ],
    challenges: [
      "Ensuring cross-device responsiveness and performance optimization",
      "Structuring a scalable content model for a variety of country and service pages",
      "Implementing clean UI/UX flow for diverse user needs",
    ],
    year: "2024",
    company: "Freelancing",
  },
  {
    id: "real-time-analytics",
    title: "Real-time Analytics Dashboard",
    shortDescription:
      "A comprehensive ERP Billing System for a telecom company using Laravel, MySQL, Redis, and AWS.",
    fullDescription:
      "Developed a comprehensive ERP Billing System for a telecom company using Laravel, MySQL, Redis, and AWS. The system streamlined billing processes, reduced errors by 35%, and improved overall operational efficiency by automating complex calculations and generating detailed reports. The system handles millions of transactions daily and provides real-time insights into revenue and customer usage.",
    image: "/project/billing.png",
    cardImage: "/project/billing.png",
    technologies: ["Laravel", "MySQL", "Redis", "AWS", "Vue.js"],
    role: "Lead Developer",
    liveLink: "https://ssl-billing.sslwireless.com/",
    features: [
      "Real-time revenue tracking and visualization",
      "Automated invoice generation and dispatch",
      "Complex tariff calculation engine",
      "Role-based access control (RBAC)",
      "High-performance caching with Redis",
    ],
    challenges: [
      "Handling massive concurrent transaction data.",
      "Ensuring zero downtime during billing cycles.",
      "Migrating legacy data without integrity loss.",
    ],
    year: "2023",
    company: "SSL Wireless",
  },
  {
    id: "bat-roi-dashboard",
    title: "BAT ROI Dashboard",
    shortDescription:
      "Real-time analytics dashboard processing and visualizing data from multiple sources.",
    fullDescription:
      "Created a real-time analytics dashboard that processes and visualizes data from multiple sources. The system provides actionable insights through customizable reports and alerts, helping businesses make data-driven decisions quickly. It integrates with various data streams to provide a unified view of return on investment metrics.",
    image: "/project/bat roi.jfif",
    cardImage: "/project/bat roi.jfif",
    technologies: ["PHP", "JavaScript", "WebSockets", "Chart.js", "MySQL"],
    role: "Backend Developer",
    liveLink: "http://peachtree.sslwireless.com/",
    features: [
      "Interactive data visualization charts",
      "Real-time data processing via WebSockets",
      "Customizable report builder",
      "Exportable data formats (PDF, Excel)",
      "User activity logging",
    ],
    year: "2021",
    company: "BAT / SSL Wireless",
  },
  {
    id: "dproperty-bd",
    title: "DProperty Real Estate Portal",
    shortDescription:
      "A comprehensive real-estate listing and property services platform for buying, selling, and renting properties across Bangladesh.",
    fullDescription:
      "Developed an intuitive real-estate portal providing a full suite of property services including buying, selling, and renting residential and commercial spaces. The platform features verified listings, search filters, and support services such as legal assistance and interior design consultations. It streamlines property transactions and connects users to trusted local agents for seamless experiences in the Bangladesh real-estate market.",
    image: "/project/dpropert/dproperty.png",
    cardImage: "/project/dpropert/dproperty-portal.png",
    technologies: ["Laravel", "MySQL", "Tailwind CSS", "API Integrations"],
    role: "Full Stack Developer",
    liveLink: "https://dproperty.com.bd/",
    features: [
      "Responsive property listings with search filters",
      "Verified buy, sell, and rent property listings",
      "Dedicated service pages including legal assistance and interior services",
      "Interactive contact and inquiry forms",
      "Support for residential, commercial, and land properties",
    ],
    challenges: [
      "Ensuring data consistency across listing categories",
      "Implementing efficient search and filter performance",
      "Designing a clear UI/UX for diverse property types",
    ],
    year: "2025",
    company: "DProperty Real Estate Services",
  },
];
