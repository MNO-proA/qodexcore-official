import { Package, ShoppingCart, Code, Building, TrendingUp } from 'lucide-react';
 


export const expertise = [
  {
    id: 1,
    title: "Software Development",
    cover: "/images/e1.jpg",
    link: "/services",
    desc: [{ text: "Front End Development (UI/UX, Web Interface, Mobile Interface, Desktop Interface)" }, { text: "API development" }, { text: "Databases" }, { text: "Cloud Computing and Services (AWS, AZURE, GCP)" }, { text: "Web Security" }, ],
  },
  {
    id: 2,
    title: "AI & Data Solutions",
    cover: "/images/e12.webp",
    link: "/services",
    desc: [{ text: "Data Science (Data Analytics and Visualization)" }, { text: "Machine Learning (Classical Algorithms)" }, { text: "AI Development & Integration (Building and deploying AI models)" }],
  },
  {
    id: 3,
    title: "Digital Marketing",
    cover: "/images/e7.avif",
    link: "/services",
    desc: [{ text: "Social media marketing" }, { text: "Marketing campaigns" }, { text: "Marketing management" }, { text: "SEO" }, {text: "Pay Per Click (PPC) Advertising"}, {text: "Content Marketing"}],
  },
  {
    id: 4,
    title: "E-Commerce",
    cover: "/images/e8.jpg",
    link: "/services",
    desc: [{ text: "Custom E-Commerce and Payment Integration" }, { text: "Content management" }, { text: "Hosting" }],
  },
 
  {
    id: 5,
    title: "Payment Gateway and Integration",
    cover: "/images/e5.png",
    link: "/services",
    desc: [{ text: "Invoice Payment System" }, { text: "Subscription" }, { text: "Recurring Payment" }, { text: "QR Payment" },],
  },
]

//  export const packages = [
//         {
//           title: "Basic Website",
//           price: "GHS 2,499",
//           icon: <Package/>,
//           features: [
//             "Up to 5 pages",
//             "Mobile-responsive design",
//             "Basic SEO optimization",
//             "Contact form integration",
//             "Social media integration",
//             "Free domain & hosting setup",
//             "1-month post-launch support"
//           ]
//         },
//         {
//           title: "Business Website",
//           price: "GHS 4,799",
//           icon: <Shield className="w-10 h-10 text-purple-500" />,
//           features: [
//             "Up to 10 pages",
//             "Custom UI/UX design",
//             "SEO optimization",
//             "Blog setup",
//             "Google Maps integration",
//             "WhatsApp chat integration",
//             "3 months of post-launch support"
//           ]
//         },
//         {
//           title: "E-commerce Website",
//           price: "GHS 8,499",
//           icon: <ShoppingCart className="w-10 h-10 text-purple-500" />,
//           features: [
//             "Up to 50 products",
//             "Secure payment gateway",
//             "Order & inventory management",
//             "Customer accounts",
//             "Discount & coupon system",
//             "Free SSL Certificate",
//             "3-6 months of support"
//           ]
//         },
//         {
//           title: "Custom Web Applications",
//           price: "GHS 18,599",
//           icon: <Code className="w-10 h-10 text-purple-500" />,
//           features: [
//             "Fully custom-built web application",
//             "Database integration",
//             "API integrations",
//             "Advanced security features",
//             "Scalable architecture",
//             "Performance optimization",
//             "6 months of maintenance"
//           ]
//         }
//       ];
    
// export const maintenancePackages = [
//         {
//           title: "Basic Plan",
//           price: "GHS 300",
//           period: "month",
//           features: [
//             "Regular security updates",
//             "Monthly backups",
//             "Bug fixes & minor edits",
//             "Email support"
//           ]
//         },
//         {
//           title: "Standard Plan",
//           price: "GHS 800",
//           period: "month",
//           features: [
//             "Everything in Basic Plan",
//             "Monthly website optimization",
//             "Content & image updates",
//             "SEO improvements"
//           ]
//         },
//         {
//           title: "Premium Plan",
//           price: "GHS 1,500",
//           period: "month",
//           features: [
//             "Everything in Standard Plan",
//             "Priority support",
//             "Advanced SEO & analytics",
//             "Unlimited content updates"
//           ]
//         }
//       ];

export const packages = [
  {
    title: "Static Website Plan",
    price: "GHS 300",
    promo: "GHS 200",
    icon: <Package className="w-10 h-10 text-indigo-500" />,
    features: [
      "Up to 5 pages",
      "25 MiB per file",
      "Web Analytics",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media integration",
      "Free domain & hosting setup",
      "1-month post-launch support"
    ]
  },
  {
    title: "Business Plan",
    price: "GHS 400",
    promo: "GHS 300",
    icon: <Building className="w-10 h-10 text-indigo-500" />,
    features: [
      "Up to 10 pages",
      "25 MiB per file",
      "Web Analytics",
      "Mobile-responsive design",
      "Basic SEO optimization",
      "Contact form integration",
      "Social media integration",
      "Free domain & hosting setup",
      "1-month post-launch support"
    ]
  },
  {
    title: "E-commerce Plan",
    price: "GHS 500",
    promo: "GHS 400",
    icon: <ShoppingCart className="w-10 h-10 text-indigo-500" />,
    features: [
      "Up to 50 products",
      "25 MiB per file",
      "Web Analytics",
      "Secure payment gateway",
      "Order & inventory management",
      "Customer accounts",
      "Discount & coupon system",
      "Free SSL Certificate",
      "3-6 months of support"
    ]
  },
  {
    title: "Enterprise Plan",
    price: "GHS 900",
    promo: "GHS 750",
    icon: <TrendingUp className="w-10 h-10 text-indigo-500" />,
    features: [
      "Up to 25 pages",
      "25 MiB per file",
      "Advanced analytics dashboard",
      "Advanced SEO optimization",
      "CMS integration",
      "Employee accounts & permissions",
      "Priority support",
      "12 months of maintenance"
    ]
  },
  // {
  //   title: "Digital Marketing Bundle",
  //   price: "GHS 700",
  //   promo: "GHS 550",
  //   icon: <TrendingUp className="w-10 h-10 text-indigo-500" />,
  //   features: [
  //     "Basic website (up to 8 pages)",
  //     "Social media setup & strategy",
  //     "Google Business profile setup",
  //     "Monthly SEO report",
  //     "Content calendar",
  //     "Email marketing setup",
  //     "Competitor analysis",
  //     "Monthly performance review",
  //     "6 months of marketing support"
  //   ]
  // },
  {
    title: "Custom Web Applications",
    price: "Contact Sales",
    icon: <Code className="w-10 h-10 text-indigo-500" />,
    features: [
      "Fully custom-built web application",
      "Database integration",
      "API integrations",
      "Advanced security features",
      "Scalable architecture",
      "Performance optimization",
      "6 months of maintenance"
    ]
  }
];
 
 export const maintenancePackages = [
  {
     title: "Basic Plan",
     price: "GHS 30",
     period: "month",
     features: [
         "Regular security updates",
         "Monthly backups",
         "Bug fixes & minor edits",
         "Email support"
     ]
  },
  {
     title: "Standard Plan",
     price: "GHS 80",
     period: "month",
     features: [
         "Everything in Basic Plan",
         "Monthly website optimization",
         "Content & image updates",
         "SEO improvements"
     ]
  },
  {
     title: "Premium Plan",
     price: "GHS 150",
     period: "month",
     features: [
         "Everything in Standard Plan",
         "Priority support",
         "Advanced SEO & analytics",
         "Unlimited content updates"
     ]
  }
 ];

 export const services = [
  {
    id: "software-dev",
    title: "Software Development",
    icon: "/images/e1.jpg",
    items: [
      "Web & Mobile App Development",
      "Custom Software Solutions",
      "Progressive Web Apps (PWA)",
      "Enterprise Software Development",
      "API Development & Integration",
      "Software Architecture & Code Optimization",
      "Scalability & Performance Tuning",
      "UI/UX Design & Frontend Engineering",
    ],
  },
  {
    id: "ai-data",
    title: "AI & Data Solutions",
    icon: "/images/e12.webp",
    items: [
      "Data Analysis, Visualization & Dashboards",
      "Machine Learning Model Development",
      "Predictive & Prescriptive Analytics",
      "Natural Language Processing (NLP)",
      "Generative AI & Large Language Models",
      "AI-Powered Automation & Decision Systems",
      "MLOps & AI Model Deployment",
      "AI Consulting & Strategy",
    ],
  },
  {
    id: "cloud",
    title: "Cloud Computing",
    icon: "/images/cloud.png",
    items: [
      "Cloud Infrastructure & Networking",
      "Serverless & Edge Computing",
      "Hybrid & Multi-Cloud Deployment",
      "Cloud Security & Compliance",
      "Scalability, Load Balancing & Auto-scaling",
      "Cloud Storage, Backup & Disaster Recovery",
      "DevOps, CI/CD Pipelines & Automation",
      "Containerization (Docker, Kubernetes)",
      "API Gateways & Microservices Architecture",
      "Cloud Cost Optimization & FinOps",
    ],
  },
  {
    id: "automation",
    title: "Business Automation",
    icon: "/images/bpa.webp",
    items: [
      "Robotic Process Automation (RPA)",
      "AI-Powered Chatbots & Virtual Assistants",
      "Workflow Automation & CRM Systems",
      "AI Agents & Intelligent Workflows",
      "E-commerce & Payment Automation",
      "Document Processing & OCR Automation",
      "Voice AI & AI-driven Call Centers",
    ],
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    icon: "/images/e7.avif",
    items: [
      "SEO Optimization & Growth Strategy",
      "Content Strategy & Marketing",
      "Social Media Campaigns & Ads",
      "Brand Development & Positioning",
      "A/B Testing & Performance Analytics",
      "Marketing Automation & AI-Powered Ads",
      "Email & Influencer Marketing",
    ],
  },
  {
    id: "ecommerce",
    title: "E-Commerce Solutions",
    icon: "/images/e8.jpg",
    items: [
      "E-commerce Website & App Development",
      "Payment Gateway & Subscription Management",
      "Inventory & Order Management Systems",
      "Omnichannel Commerce Integration",
      "Conversion Rate Optimization (CRO)",
      "AI-Powered Product Recommendations",
      "Marketplace & Multi-Vendor Solutions",
    ],
  },
];
