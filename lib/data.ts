// Static data for projects and categories
// This file contains all the project and category data that can be easily managed

export interface Project {
  id: string
  title: string
  description: string
  image?: string
  technologies: string
  github?: string
  demo?: string
  featured: boolean
  published: boolean
  categoryId: string
  createdAt: string
  updatedAt: string
}

export interface Category {
  id: string
  name: string
  description: string
  color: string
  icon: string
  createdAt: string
  updatedAt: string
}

// Categories data
export const categories: Category[] = [
  {
    id: '1',
    name: 'Frontend',
    description: 'User interface and client-side development',
    color: '#3B82F6', // Blue
    icon: '🎨',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '2',
    name: 'Backend',
    description: 'Server-side development and APIs',
    color: '#10B981', // Green
    icon: '⚙️',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '3',
    name: 'Full-Stack',
    description: 'Complete web applications with frontend and backend',
    color: '#8B5CF6', // Purple
    icon: '🚀',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '4',
    name: 'Mobile',
    description: 'Mobile application development',
    color: '#F59E0B', // Orange
    icon: '📱',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    name: 'API',
    description: 'Application Programming Interfaces and integrations',
    color: '#EF4444', // Red
    icon: '🔌',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '6',
    name: 'No-Code',
    description: 'Platform-based solutions without traditional coding',
    color: '#06B6D4', // Cyan
    icon: '🛠️',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
]

// Projects data
export const projects: Project[] = [
  // Web Development Projects
  {
    id: '1',
    title: 'WayWise Global Trading Platform',
    description: 'A comprehensive trading platform built for WayWise Global featuring real-time market data, portfolio management, and advanced trading tools. The platform includes user authentication, secure payment processing, and comprehensive analytics dashboard for traders.',
    image: '/uploads/web/waywiseglobal.png',
    technologies: 'Next.js, TypeScript, Tailwind CSS, Prisma, PostgreSQL, Stripe, Chart.js',
    github: 'https://github.com/way-wise/waywise-global-trading',
    demo: '',
    featured: true,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    title: 'FoxBridge Corporate Website',
    description: 'Modern corporate website for FoxBridge featuring responsive design, interactive animations, and comprehensive business information. Built with performance optimization and SEO best practices for maximum visibility.',
    image: '/uploads/web/foxbridge.png',
    technologies: 'React, Next.js, Framer Motion, Tailwind CSS, Contentful CMS',
    github: 'https://github.com/way-wise/foxbridge-corporate',
    demo: '',
    featured: true,
    published: true,
    categoryId: '1', // Frontend
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z',
  },
  {
    id: '3',
    title: 'Sasify AI Platform',
    description: 'AI-powered SaaS platform providing intelligent automation solutions for businesses. Features include machine learning models, API integrations, and comprehensive dashboard for monitoring AI performance and usage analytics.',
    image: '/uploads/web/sasifyai.png',
    technologies: 'React, Node.js, Python, TensorFlow, MongoDB, Redis, Docker',
    github: 'https://github.com/way-wise/sasify-ai-platform',
    demo: '',
    featured: true,
    published: true,
    categoryId: '7', // AI/ML
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z',
  },
  {
    id: '4',
    title: 'VoiceHealth Telemedicine Platform',
    description: 'Comprehensive telemedicine platform connecting patients with healthcare providers through secure video consultations, appointment scheduling, and digital health records management.',
    image: '/uploads/web/voicehealth.png',
    technologies: 'Next.js, WebRTC, Node.js, PostgreSQL, AWS, Stripe, Twilio',
    github: 'https://github.com/way-wise/voicehealth-platform',
    demo: '',
    featured: false,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    title: 'SearchForce Recruitment Platform',
    description: 'Advanced recruitment platform with AI-powered candidate matching, automated screening, and comprehensive HR analytics. Features include video interviews, skill assessments, and talent pipeline management.',
    image: '/uploads/web/searchforce.png',
    technologies: 'React, Node.js, MongoDB, OpenAI API, WebRTC, Chart.js',
    github: 'https://github.com/way-wise/searchforce-recruitment',
    demo: '',
    featured: true,
    published: true,
    categoryId: '7', // AI/ML
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-02-01T00:00:00Z',
  },
  {
    id: '6',
    title: 'WayWise Jobs Portal',
    description: 'Professional job portal connecting employers with qualified candidates. Features include advanced search filters, company profiles, application tracking, and real-time notifications for job opportunities.',
    image: '/uploads/web/waywisejobs.png',
    technologies: 'Next.js, TypeScript, Prisma, PostgreSQL, Redis, SendGrid',
    github: 'https://github.com/way-wise/waywise-jobs-portal',
    demo: '',
    featured: false,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-02-05T00:00:00Z',
    updatedAt: '2024-02-05T00:00:00Z',
  },
  {
    id: '7',
    title: 'Allora Corporate Solutions',
    description: 'Enterprise-grade corporate solutions platform offering business process automation, document management, and team collaboration tools. Built for scalability and enterprise security requirements.',
    image: '/uploads/web/allora corporate.png',
    technologies: 'React, Node.js, MongoDB, AWS, Docker, Kubernetes, Redis',
    github: 'https://github.com/way-wise/allora-corporate-solutions',
    demo: '',
    featured: false,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-02-10T00:00:00Z',
    updatedAt: '2024-02-10T00:00:00Z',
  },
  {
    id: '8',
    title: 'Nirmaan Source Construction Portal',
    description: 'Comprehensive construction management platform for Nirmaan Source featuring project tracking, resource management, and client communication tools. Includes mobile app for on-site workers.',
    image: '/uploads/web/nirmaansource.png',
    technologies: 'React Native, Node.js, PostgreSQL, AWS S3, Push Notifications',
    github: 'https://github.com/way-wise/nirmaan-source-portal',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-02-15T00:00:00Z',
    updatedAt: '2024-02-15T00:00:00Z',
  },
  {
    id: '9',
    title: 'WayWise Trading Dashboard',
    description: 'Advanced trading dashboard with real-time market data, portfolio analytics, and automated trading strategies. Features include risk management tools, performance tracking, and comprehensive reporting.',
    image: '/uploads/waywisetrading.png',
    technologies: 'Vue.js, Chart.js, WebSocket, Node.js, PostgreSQL, Redis',
    github: 'https://github.com/way-wise/waywise-trading-dashboard',
    demo: '',
    featured: false,
    published: true,
    categoryId: '1', // Frontend
    createdAt: '2024-02-20T00:00:00Z',
    updatedAt: '2024-02-20T00:00:00Z',
  },
  {
    id: '10',
    title: 'WWT Business Solutions',
    description: 'Comprehensive business solutions platform offering CRM, project management, and financial tracking tools. Designed for small to medium businesses with scalable architecture.',
    image: '/uploads/web/wwt.png',
    technologies: 'React, Node.js, MongoDB, Stripe, SendGrid, AWS',
    github: 'https://github.com/way-wise/wwt-business-solutions',
    demo: '',
    featured: false,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-02-25T00:00:00Z',
    updatedAt: '2024-02-25T00:00:00Z',
  },

  // Backend/API Projects
  {
    id: '11',
    title: 'ActiveIreland API Service',
    description: 'RESTful API service for ActiveIreland platform providing tourism data, booking management, and location services. Features include rate limiting, comprehensive documentation, and real-time data synchronization.',
    image: '/uploads/backend/activeireland.png',
    technologies: 'Node.js, Express, PostgreSQL, Redis, Swagger, JWT, AWS',
    github: 'https://github.com/way-wise/activeireland-api',
    demo: '',
    featured: false,
    published: true,
    categoryId: '5', // API
    createdAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-03-01T00:00:00Z',
  },
  {
    id: '12',
    title: 'FlyArzan Travel Platform',
    description: 'Backend infrastructure for FlyArzan travel booking platform featuring flight search, hotel reservations, and payment processing. Includes microservices architecture and real-time pricing updates.',
    image: '/uploads/backend/flyarzan.png',
    technologies: 'Node.js, Express, MongoDB, Redis, Docker, Kubernetes, Stripe',
    github: 'https://github.com/way-wise/flyarzan-backend',
    demo: '',
    featured: false,
    published: true,
    categoryId: '2', // Backend
    createdAt: '2024-03-05T00:00:00Z',
    updatedAt: '2024-03-05T00:00:00Z',
  },
  {
    id: '13',
    title: 'GlobalCareer Job API',
    description: 'Comprehensive API service for GlobalCareer job platform providing job listings, candidate management, and employer services. Features include advanced search algorithms and recommendation engine.',
    image: '/uploads/backend/globalcareer.png',
    technologies: 'Python, FastAPI, PostgreSQL, Redis, Elasticsearch, Docker',
    github: 'https://github.com/way-wise/globalcareer-api',
    demo: '',
    featured: false,
    published: true,
    categoryId: '5', // API
    createdAt: '2024-03-10T00:00:00Z',
    updatedAt: '2024-03-10T00:00:00Z',
  },
  {
    id: '14',
    title: 'PortPlugs Shipping System',
    description: 'Backend system for PortPlugs shipping and logistics platform featuring route optimization, package tracking, and delivery management. Includes real-time GPS tracking and automated notifications.',
    image: '/uploads/backend/portplugs.png',
    technologies: 'Node.js, Express, MongoDB, Redis, WebSocket, Google Maps API',
    github: 'https://github.com/way-wise/portplugs-shipping-system',
    demo: '',
    featured: false,
    published: true,
    categoryId: '2', // Backend
    createdAt: '2024-03-15T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z',
  },
  {
    id: '15',
    title: 'SeatWaves Event Management',
    description: 'Backend infrastructure for SeatWaves event management platform featuring ticket sales, event scheduling, and attendee management. Includes payment processing and real-time seat availability.',
    image: '/uploads/backend/seatwaves.png',
    technologies: 'Node.js, Express, PostgreSQL, Redis, Stripe, WebSocket',
    github: 'https://github.com/way-wise/seatwaves-backend',
    demo: '',
    featured: false,
    published: true,
    categoryId: '2', // Backend
    createdAt: '2024-03-20T00:00:00Z',
    updatedAt: '2024-03-20T00:00:00Z',
  },
  {
    id: '16',
    title: 'WeOut Social Platform API',
    description: 'Social media platform backend for WeOut featuring user management, content sharing, and real-time messaging. Includes advanced privacy controls and content moderation systems.',
    image: '/uploads/backend/weout.png',
    technologies: 'Node.js, Express, MongoDB, Redis, Socket.io, AWS S3',
    github: 'https://github.com/way-wise/weout-social-api',
    demo: '',
    featured: false,
    published: true,
    categoryId: '2', // Backend
    createdAt: '2024-03-25T00:00:00Z',
    updatedAt: '2024-03-25T00:00:00Z',
  },

  // Mobile Applications
  {
    id: '17',
    title: 'Fitness Tracking Mobile App',
    description: 'Comprehensive fitness tracking mobile application featuring workout plans, nutrition tracking, and progress analytics. Includes wearable device integration and social challenges.',
    image: '/uploads/mobile/app-1.png',
    technologies: 'React Native, Node.js, PostgreSQL, Firebase, HealthKit API',
    github: 'https://github.com/way-wise/fitness-tracking-app',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-04-01T00:00:00Z',
    updatedAt: '2024-04-01T00:00:00Z',
  },
  {
    id: '18',
    title: 'E-commerce Mobile App',
    description: 'Modern e-commerce mobile application with seamless shopping experience, secure payments, and real-time order tracking. Features include push notifications and offline browsing.',
    image: '/uploads/mobile/app-2.png',
    technologies: 'React Native, Node.js, MongoDB, Stripe, Firebase, Redux',
    github: 'https://github.com/way-wise/ecommerce-mobile-app',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-04-05T00:00:00Z',
    updatedAt: '2024-04-05T00:00:00Z',
  },
  {
    id: '19',
    title: 'Food Delivery App',
    description: 'Food delivery mobile application connecting customers with local restaurants. Features include real-time tracking, multiple payment options, and restaurant ratings.',
    image: '/uploads/mobile/app-3.png',
    technologies: 'React Native, Node.js, MongoDB, Stripe, Google Maps API',
    github: 'https://github.com/way-wise/food-delivery-app',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-04-10T00:00:00Z',
    updatedAt: '2024-04-10T00:00:00Z',
  },
  {
    id: '20',
    title: 'Banking Mobile App',
    description: 'Secure banking mobile application with biometric authentication, fund transfers, and financial management tools. Includes real-time notifications and transaction history.',
    image: '/uploads/mobile/app-4.png',
    technologies: 'React Native, Node.js, PostgreSQL, Biometric Auth, Encryption',
    github: 'https://github.com/way-wise/banking-mobile-app',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-04-15T00:00:00Z',
    updatedAt: '2024-04-15T00:00:00Z',
  },
  {
    id: '21',
    title: 'Social Media Mobile App',
    description: 'Social media mobile application with photo sharing, messaging, and story features. Includes advanced privacy controls and content moderation.',
    image: '/uploads/mobile/app-5.png',
    technologies: 'React Native, Node.js, MongoDB, AWS S3, Socket.io',
    github: 'https://github.com/way-wise/social-media-mobile-app',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-04-20T00:00:00Z',
    updatedAt: '2024-04-20T00:00:00Z',
  },
  {
    id: '22',
    title: 'Healthcare Mobile App',
    description: 'Healthcare mobile application for telemedicine consultations, appointment booking, and health record management. Features include video calls and prescription management.',
    image: '/uploads/mobile/app-6.png',
    technologies: 'React Native, Node.js, PostgreSQL, WebRTC, HIPAA Compliance',
    github: 'https://github.com/way-wise/healthcare-mobile-app',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-04-25T00:00:00Z',
    updatedAt: '2024-04-25T00:00:00Z',
  },
  {
    id: '23',
    title: 'Education Mobile App',
    description: 'Educational mobile application with interactive learning modules, progress tracking, and offline content access. Features include quizzes, certificates, and discussion forums.',
    image: '/uploads/mobile/app-7.png',
    technologies: 'React Native, Node.js, MongoDB, Video Streaming, Offline Storage',
    github: 'https://github.com/way-wise/education-mobile-app',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-05-01T00:00:00Z',
    updatedAt: '2024-05-01T00:00:00Z',
  },
  {
    id: '24',
    title: 'Travel Planning Mobile App',
    description: 'Travel planning mobile application with itinerary management, booking integration, and offline maps. Features include expense tracking and travel recommendations.',
    image: '/uploads/mobile/app-8.png',
    technologies: 'React Native, Node.js, MongoDB, Google Maps API, Offline Maps',
    github: 'https://github.com/way-wise/travel-planning-mobile-app',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-05-05T00:00:00Z',
    updatedAt: '2024-05-05T00:00:00Z',
  },
  {
    id: '25',
    title: 'Task Management Mobile App',
    description: 'Productivity mobile application for task management, team collaboration, and project tracking. Features include real-time synchronization and offline access.',
    image: '/uploads/mobile/app-9.png',
    technologies: 'React Native, Node.js, PostgreSQL, Socket.io, Offline Sync',
    github: 'https://github.com/way-wise/task-management-mobile-app',
    demo: '',
    featured: false,
    published: true,
    categoryId: '4', // Mobile
    createdAt: '2024-05-10T00:00:00Z',
    updatedAt: '2024-05-10T00:00:00Z',
  },

  // No-Code/Shopify Projects
  {
    id: '26',
    title: 'E-commerce Shopify Store',
    description: 'Complete Shopify store setup with custom theme development, product management, and marketing automation. Features include custom apps, payment integration, and analytics.',
    image: '/uploads/shopify-1.jpg',
    technologies: 'Shopify, Liquid, JavaScript, Shopify API, Klaviyo, Zapier',
    github: 'https://github.com/way-wise/shopify-ecommerce-store',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-05-15T00:00:00Z',
    updatedAt: '2024-05-15T00:00:00Z',
  },
  {
    id: '27',
    title: 'Fashion Shopify Store',
    description: 'Modern fashion e-commerce store built on Shopify with custom design, size guides, and virtual try-on features. Includes advanced inventory management and customer reviews.',
    image: '/uploads/shopify-2.jpg',
    technologies: 'Shopify, Liquid, CSS3, Shopify Apps, Mailchimp, Google Analytics',
    github: 'https://github.com/way-wise/fashion-shopify-store',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-05-20T00:00:00Z',
    updatedAt: '2024-05-20T00:00:00Z',
  },
  {
    id: '28',
    title: 'Electronics Shopify Store',
    description: 'Electronics e-commerce store with advanced product filtering, technical specifications, and warranty management. Features include bulk ordering and technical support integration.',
    image: '/uploads/shopify-3.jpg',
    technologies: 'Shopify, Liquid, JavaScript, Custom Apps, Zendesk, Inventory Management',
    github: 'https://github.com/way-wise/electronics-shopify-store',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-05-25T00:00:00Z',
    updatedAt: '2024-05-25T00:00:00Z',
  },
  {
    id: '29',
    title: 'Home & Garden Shopify Store',
    description: 'Home and garden e-commerce store with visual product configurators, room planning tools, and installation guides. Features include AR visualization and project calculators.',
    image: '/uploads/shopify-4.jpg',
    technologies: 'Shopify, Liquid, AR.js, Custom Apps, Project Management Tools',
    github: 'https://github.com/way-wise/home-garden-shopify-store',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-06-01T00:00:00Z',
    updatedAt: '2024-06-01T00:00:00Z',
  },
  {
    id: '30',
    title: 'Beauty & Cosmetics Shopify Store',
    description: 'Beauty and cosmetics e-commerce store with skin analysis tools, shade matching, and subscription boxes. Features include virtual consultations and ingredient information.',
    image: '/uploads/shopify-5.jpg',
    technologies: 'Shopify, Liquid, AI Integration, Subscription Management, AR Filters',
    github: 'https://github.com/way-wise/beauty-cosmetics-shopify-store',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-06-05T00:00:00Z',
    updatedAt: '2024-06-05T00:00:00Z',
  },
  {
    id: '31',
    title: 'Sports & Fitness Shopify Store',
    description: 'Sports and fitness equipment store with workout guides, size calculators, and nutrition supplements. Features include community features and fitness challenges.',
    image: '/uploads/shopify-6.jpg',
    technologies: 'Shopify, Liquid, Community Apps, Fitness APIs, Nutrition Database',
    github: 'https://github.com/way-wise/sports-fitness-shopify-store',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-06-10T00:00:00Z',
    updatedAt: '2024-06-10T00:00:00Z',
  },
  {
    id: '32',
    title: 'Books & Media Shopify Store',
    description: 'Books and media e-commerce store with digital downloads, audiobook integration, and reading recommendations. Features include book clubs and author interviews.',
    image: '/uploads/shopify-7.jpg',
    technologies: 'Shopify, Liquid, Digital Downloads, Audio Streaming, Recommendation Engine',
    github: 'https://github.com/way-wise/books-media-shopify-store',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-06-15T00:00:00Z',
    updatedAt: '2024-06-15T00:00:00Z',
  },
  {
    id: '33',
    title: 'Jewelry & Accessories Shopify Store',
    description: 'Luxury jewelry and accessories store with custom engraving, virtual try-on, and gift wrapping services. Features include jewelry care guides and customization tools.',
    image: '/uploads/shopify-8.jpg',
    technologies: 'Shopify, Liquid, 3D Visualization, Customization Tools, Gift Services',
    github: 'https://github.com/way-wise/jewelry-accessories-shopify-store',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-06-20T00:00:00Z',
    updatedAt: '2024-06-20T00:00:00Z',
  },

  // No-Code Platform Projects
  {
    id: '34',
    title: 'Business Automation Platform',
    description: 'No-code business automation platform allowing users to create custom workflows, integrations, and data processing pipelines without coding knowledge.',
    image: '/uploads/nc-1.webp',
    technologies: 'No-Code Platform, Workflow Automation, API Integrations, Data Processing',
    github: 'https://github.com/way-wise/business-automation-platform',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-06-25T00:00:00Z',
    updatedAt: '2024-06-25T00:00:00Z',
  },
  {
    id: '35',
    title: 'Landing Page Builder',
    description: 'Drag-and-drop landing page builder with pre-built templates, A/B testing capabilities, and conversion optimization tools for marketing campaigns.',
    image: '/uploads/nc-2.webp',
    technologies: 'No-Code Builder, Drag-and-Drop, A/B Testing, Conversion Optimization',
    github: 'https://github.com/way-wise/landing-page-builder',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-07-01T00:00:00Z',
    updatedAt: '2024-07-01T00:00:00Z',
  },
  {
    id: '36',
    title: 'CRM System Builder',
    description: 'No-code CRM system builder allowing businesses to create custom customer relationship management solutions with automated workflows and reporting.',
    image: '/uploads/nc-3.webp',
    technologies: 'No-Code CRM, Workflow Automation, Reporting Tools, Data Management',
    github: 'https://github.com/way-wise/crm-system-builder',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-07-05T00:00:00Z',
    updatedAt: '2024-07-05T00:00:00Z',
  },
  {
    id: '37',
    title: 'Survey & Form Builder',
    description: 'Advanced survey and form builder with conditional logic, data validation, and analytics. Features include multi-step forms and response visualization.',
    image: '/uploads/nc-4.webp',
    technologies: 'No-Code Forms, Conditional Logic, Data Validation, Analytics',
    github: 'https://github.com/way-wise/survey-form-builder',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-07-10T00:00:00Z',
    updatedAt: '2024-07-10T00:00:00Z',
  },
  {
    id: '38',
    title: 'E-learning Platform Builder',
    description: 'No-code e-learning platform builder for creating online courses, quizzes, and learning management systems with progress tracking and certificates.',
    image: '/uploads/no-code-05.jpg',
    technologies: 'No-Code LMS, Course Creation, Quiz Builder, Progress Tracking',
    github: 'https://github.com/way-wise/elearning-platform-builder',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-07-15T00:00:00Z',
    updatedAt: '2024-07-15T00:00:00Z',
  },
  {
    id: '39',
    title: 'Event Management Platform',
    description: 'No-code event management platform for creating, managing, and promoting events with ticketing, attendee management, and analytics.',
    image: '/uploads/no-code-06.jpg',
    technologies: 'No-Code Events, Ticketing System, Attendee Management, Analytics',
    github: 'https://github.com/way-wise/event-management-platform',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-07-20T00:00:00Z',
    updatedAt: '2024-07-20T00:00:00Z',
  },
  {
    id: '40',
    title: 'Project Management Tool',
    description: 'No-code project management tool with task tracking, team collaboration, and resource management features for agile development workflows.',
    image: '/uploads/no-code-08.jpg',
    technologies: 'No-Code PM, Task Tracking, Team Collaboration, Resource Management',
    github: 'https://github.com/way-wise/project-management-tool',
    demo: '',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-07-25T00:00:00Z',
    updatedAt: '2024-07-25T00:00:00Z',
  },

  // Additional Projects
  {
    id: '41',
    title: 'BulletProof Fitness Platform',
    description: 'Comprehensive fitness platform with workout tracking, nutrition planning, and personal training features. Includes mobile app integration and community features.',
    image: '/uploads/bulletprooffitness.png',
    technologies: 'React, Node.js, MongoDB, React Native, Stripe, Firebase',
    github: 'https://github.com/way-wise/bulletproof-fitness-platform',
    demo: '',
    featured: false,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-08-01T00:00:00Z',
    updatedAt: '2024-08-01T00:00:00Z',
  },
  {
    id: '42',
    title: 'Taylor Alumni Network',
    description: 'Alumni networking platform for Taylor University featuring event management, mentorship programs, and career development resources.',
    image: '/uploads/tayloralumni.png',
    technologies: 'Next.js, Node.js, PostgreSQL, Redis, SendGrid, AWS',
    github: 'https://github.com/way-wise/taylor-alumni-network',
    demo: '',
    featured: false,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-08-05T00:00:00Z',
    updatedAt: '2024-08-05T00:00:00Z',
  },

  // Email Template Projects
  {
    id: '43',
    title: 'Email Marketing Templates',
    description: 'Professional email marketing templates with responsive design, A/B testing capabilities, and automation features for various industries.',
    image: '/uploads/email-template/email-template-1.png',
    technologies: 'HTML, CSS, JavaScript, Email Marketing Platforms, A/B Testing',
    github: 'https://github.com/way-wise/email-marketing-templates',
    demo: '',
    featured: false,
    published: true,
    categoryId: '1', // Frontend
    createdAt: '2024-08-10T00:00:00Z',
    updatedAt: '2024-08-10T00:00:00Z',
  },
  {
    id: '44',
    title: 'Newsletter Templates',
    description: 'Custom newsletter templates with drag-and-drop editor, analytics integration, and subscriber management for content marketing campaigns.',
    image: '/uploads/email-template/email-template-2.png',
    technologies: 'HTML, CSS, Drag-and-Drop Editor, Analytics, Subscriber Management',
    github: 'https://github.com/way-wise/newsletter-templates',
    demo: '',
    featured: false,
    published: true,
    categoryId: '1', // Frontend
    createdAt: '2024-08-15T00:00:00Z',
    updatedAt: '2024-08-15T00:00:00Z',
  },
  {
    id: '45',
    title: 'Transactional Email Templates',
    description: 'Professional transactional email templates for order confirmations, password resets, and account notifications with branding consistency.',
    image: '/uploads/email-template/email-template-3.png',
    technologies: 'HTML, CSS, Transactional Email Services, Branding, Automation',
    github: 'https://github.com/way-wise/transactional-email-templates',
    demo: '',
    featured: false,
    published: true,
    categoryId: '1', // Frontend
    createdAt: '2024-08-20T00:00:00Z',
    updatedAt: '2024-08-20T00:00:00Z',
  },
  {
    id: '46',
    title: 'Welcome Email Series',
    description: 'Automated welcome email series with onboarding sequences, user engagement tracking, and personalized content delivery for new subscribers.',
    image: '/uploads/email-template/email-template-4.png',
    technologies: 'HTML, CSS, Email Automation, Personalization, Engagement Tracking',
    github: 'https://github.com/way-wise/welcome-email-series',
    demo: '',
    featured: false,
    published: true,
    categoryId: '1', // Frontend
    createdAt: '2024-08-25T00:00:00Z',
    updatedAt: '2024-08-25T00:00:00Z',
  }
]

// Helper functions to get data
export const getProjects = (): Project[] => {
  return projects.filter(project => project.published)
}

export const getCategories = (): Category[] => {
  return categories
}

export const getProjectById = (id: string): Project | undefined => {
  return projects.find(project => project.id === id)
}

export const getCategoryById = (id: string): Category | undefined => {
  return categories.find(category => category.id === id)
}
