import { Package, Shield, ShoppingCart, Code } from 'lucide-react'; 
 


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
     title: "Basic Website",
     price: "GHS 2,499",
     icon: <Package className="w-10 h-10 text-indigo-500" />,
     features: [
         "Up to 5 pages",
         "Mobile-responsive design",
         "Basic SEO optimization",
         "Contact form integration",
         "Social media integration",
         "Free domain & hosting setup",
         "1-month post-launch support"
     ]
  },
  {
     title: "Business Website",
     price: "GHS 4,799",
     icon: <Shield className="w-10 h-10 text-indigo-500" />,
     features: [
         "Up to 10 pages",
         "Custom UI/UX design",
         "SEO optimization",
         "Blog setup",
         "Google Maps integration",
         "WhatsApp chat integration",
         "3 months of post-launch support"
     ]
  },
  {
     title: "E-commerce Website",
     price: "GHS 8,499",
     icon: <ShoppingCart className="w-10 h-10 text-indigo-500" />,
     features: [
         "Up to 50 products",
         "Secure payment gateway",
         "Order & inventory management",
         "Customer accounts",
         "Discount & coupon system",
         "Free SSL Certificate",
         "3-6 months of support"
     ]
  },
  {
     title: "Custom Web Applications",
     price: "GHS 18,599",
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
     price: "GHS 300",
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
     price: "GHS 800",
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
     price: "GHS 1,500",
     period: "month",
     features: [
         "Everything in Standard Plan",
         "Priority support",
         "Advanced SEO & analytics",
         "Unlimited content updates"
     ]
  }
 ];