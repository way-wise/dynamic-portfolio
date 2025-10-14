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
  {
    id: '7',
    name: 'AI/ML',
    description: 'Artificial Intelligence and Machine Learning projects',
    color: '#EC4899', // Pink
    icon: '🤖',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '8',
    name: 'Blockchain',
    description: 'Decentralized applications and Web3 projects',
    color: '#84CC16', // Lime
    icon: '⛓️',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '9',
    name: 'DevOps',
    description: 'Development operations and infrastructure',
    color: '#6B7280', // Gray
    icon: '🔧',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '10',
    name: 'Data Science',
    description: 'Data analysis, visualization, and insights',
    color: '#8B5CF6', // Purple
    icon: '📊',
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  }
]

// Projects data
export const projects: Project[] = [
  {
    id: '1',
    title: 'E-commerce Platform',
    description: 'A modern e-commerce platform built with Next.js and Stripe integration. Features include user authentication, product catalog, shopping cart, and payment processing. Includes admin dashboard for inventory management and order tracking.',
    image: '/modern-ecommerce-interface.png',
    technologies: 'Next.js, TypeScript, Stripe, Tailwind CSS, Prisma, PostgreSQL',
    github: 'https://github.com/example/ecommerce',
    demo: 'https://ecommerce-demo.vercel.app',
    featured: true,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-01-15T00:00:00Z',
    updatedAt: '2024-01-15T00:00:00Z',
  },
  {
    id: '2',
    title: 'Task Management Dashboard',
    description: 'A comprehensive task management application with real-time collaboration features. Built with React and Firebase for seamless team coordination. Includes project boards, time tracking, and team chat functionality.',
    image: '/task-management-dashboard.png',
    technologies: 'React, Firebase, Material-UI, Redux, Socket.io',
    github: 'https://github.com/example/task-manager',
    demo: 'https://task-manager-demo.vercel.app',
    featured: true,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-01-10T00:00:00Z',
    updatedAt: '2024-01-10T00:00:00Z',
  },
  {
    id: '3',
    title: 'Weather Dashboard',
    description: 'A beautiful weather dashboard that displays current weather conditions and forecasts. Integrates with multiple weather APIs for accurate data. Features location-based weather, 7-day forecasts, and weather alerts.',
    image: '/weather-dashboard.png',
    technologies: 'Vue.js, Chart.js, OpenWeather API, PWA, Geolocation API',
    github: 'https://github.com/example/weather-dashboard',
    demo: 'https://weather-demo.vercel.app',
    featured: false,
    published: true,
    categoryId: '1', // Frontend
    createdAt: '2024-01-05T00:00:00Z',
    updatedAt: '2024-01-05T00:00:00Z',
  },
  {
    id: '4',
    title: 'CMS Admin Panel',
    description: 'A content management system with a modern admin interface. Allows users to create, edit, and manage content with a user-friendly dashboard. Features include WYSIWYG editor, media library, and role-based permissions.',
    image: '/cms-admin-panel-interface.jpg',
    technologies: 'React, Node.js, MongoDB, Express, Quill.js, JWT',
    github: 'https://github.com/example/cms-admin',
    demo: 'https://cms-demo.vercel.app',
    featured: false,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-01-01T00:00:00Z',
    updatedAt: '2024-01-01T00:00:00Z',
  },
  {
    id: '5',
    title: 'AI-Powered Chat Application',
    description: 'A modern chat application with AI integration, real-time messaging, and advanced features like message encryption and file sharing. Uses OpenAI API for intelligent responses and conversation summaries.',
    image: '/placeholder.svg',
    technologies: 'React, Node.js, Socket.io, OpenAI API, MongoDB, Redis',
    github: 'https://github.com/example/ai-chat',
    demo: 'https://ai-chat-demo.vercel.app',
    featured: true,
    published: true,
    categoryId: '7', // AI/ML
    createdAt: '2024-02-01T00:00:00Z',
    updatedAt: '2024-02-01T00:00:00Z',
  },
  {
    id: '6',
    title: 'Blockchain Voting System',
    description: 'A secure voting system built on blockchain technology ensuring transparency and immutability of votes. Features voter authentication, real-time results, and audit trails. Deployed on Ethereum testnet.',
    image: '/placeholder.svg',
    technologies: 'Solidity, Web3.js, React, Ethereum, MetaMask, IPFS',
    github: 'https://github.com/example/blockchain-voting',
    demo: 'https://voting-demo.vercel.app',
    featured: true,
    published: true,
    categoryId: '8', // Blockchain
    createdAt: '2024-02-05T00:00:00Z',
    updatedAt: '2024-02-05T00:00:00Z',
  },
  {
    id: '7',
    title: 'Machine Learning Dashboard',
    description: 'A comprehensive dashboard for machine learning model training, monitoring, and deployment with real-time analytics. Features model versioning, performance metrics, and automated retraining pipelines.',
    image: '/placeholder.svg',
    technologies: 'Python, TensorFlow, React, D3.js, FastAPI, Docker',
    github: 'https://github.com/example/ml-dashboard',
    demo: 'https://ml-dashboard.vercel.app',
    featured: false,
    published: true,
    categoryId: '7', // AI/ML
    createdAt: '2024-02-10T00:00:00Z',
    updatedAt: '2024-02-10T00:00:00Z',
  },
  {
    id: '8',
    title: 'IoT Home Automation',
    description: 'Smart home automation system controlling lights, temperature, and security through IoT devices and mobile app. Features voice control, scheduling, and energy monitoring with real-time notifications.',
    image: '/placeholder.svg',
    technologies: 'React Native, Arduino, MQTT, Node.js, AWS IoT, Alexa API',
    github: 'https://github.com/example/iot-home',
    demo: 'https://iot-demo.vercel.app',
    featured: false,
    published: false,
    categoryId: '4', // Mobile
    createdAt: '2024-02-15T00:00:00Z',
    updatedAt: '2024-02-15T00:00:00Z',
  },
  {
    id: '9',
    title: 'Cryptocurrency Tracker',
    description: 'Real-time cryptocurrency price tracking with portfolio management, price alerts, and market analysis tools. Features include portfolio analytics, price predictions, and news integration.',
    image: '/placeholder.svg',
    technologies: 'Vue.js, Chart.js, CoinGecko API, PWA, WebSocket, IndexedDB',
    github: 'https://github.com/example/crypto-tracker',
    demo: 'https://crypto-tracker.vercel.app',
    featured: false,
    published: true,
    categoryId: '1', // Frontend
    createdAt: '2024-02-20T00:00:00Z',
    updatedAt: '2024-02-20T00:00:00Z',
  },
  {
    id: '10',
    title: 'Social Media Analytics',
    description: 'Advanced analytics platform for social media performance tracking with sentiment analysis and engagement metrics. Integrates with Twitter, Instagram, and LinkedIn APIs for comprehensive insights.',
    image: '/placeholder.svg',
    technologies: 'Next.js, Python, Twitter API, PostgreSQL, Redis, Chart.js',
    github: 'https://github.com/example/social-analytics',
    demo: 'https://social-analytics.vercel.app',
    featured: false,
    published: false,
    categoryId: '10', // Data Science
    createdAt: '2024-02-25T00:00:00Z',
    updatedAt: '2024-02-25T00:00:00Z',
  },
  {
    id: '11',
    title: 'Real Estate Platform',
    description: 'A comprehensive real estate platform with property listings, virtual tours, and mortgage calculators. Features include advanced search filters, map integration, and agent management system.',
    image: '/placeholder.svg',
    technologies: 'React, Node.js, MongoDB, Google Maps API, Stripe, Cloudinary',
    github: 'https://github.com/example/real-estate',
    demo: 'https://real-estate-demo.vercel.app',
    featured: false,
    published: true,
    categoryId: '3', // Full-Stack
    createdAt: '2024-03-01T00:00:00Z',
    updatedAt: '2024-03-01T00:00:00Z',
  },
  {
    id: '12',
    title: 'Fitness Tracking App',
    description: 'A comprehensive fitness tracking application with workout plans, nutrition tracking, and progress analytics. Features include wearable device integration, social challenges, and personalized recommendations.',
    image: '/placeholder.svg',
    technologies: 'React Native, Node.js, PostgreSQL, Firebase, HealthKit API',
    github: 'https://github.com/example/fitness-tracker',
    demo: 'https://fitness-demo.vercel.app',
    featured: false,
    published: false,
    categoryId: '4', // Mobile
    createdAt: '2024-03-05T00:00:00Z',
    updatedAt: '2024-03-05T00:00:00Z',
  },
  {
    id: '13',
    title: 'RESTful API Service',
    description: 'A comprehensive REST API service for managing user data, authentication, and business logic. Features include rate limiting, API documentation, and comprehensive error handling.',
    image: '/placeholder.svg',
    technologies: 'Node.js, Express, JWT, MongoDB, Swagger, Redis',
    github: 'https://github.com/example/rest-api',
    demo: 'https://api-docs.vercel.app',
    featured: false,
    published: true,
    categoryId: '5', // API
    createdAt: '2024-03-10T00:00:00Z',
    updatedAt: '2024-03-10T00:00:00Z',
  },
  {
    id: '14',
    title: 'WordPress E-commerce Site',
    description: 'A complete e-commerce website built with WordPress and WooCommerce. Features include custom themes, payment integration, inventory management, and SEO optimization.',
    image: '/placeholder.svg',
    technologies: 'WordPress, WooCommerce, PHP, MySQL, Stripe, Elementor',
    github: 'https://github.com/example/wordpress-store',
    demo: 'https://wordpress-store.vercel.app',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-03-15T00:00:00Z',
    updatedAt: '2024-03-15T00:00:00Z',
  },
  {
    id: '15',
    title: 'Shopify Store Setup',
    description: 'Complete Shopify store setup with custom theme development, product management, and marketing automation. Includes custom apps and integrations.',
    image: '/placeholder.svg',
    technologies: 'Shopify, Liquid, JavaScript, Shopify API, Klaviyo, Zapier',
    github: 'https://github.com/example/shopify-store',
    demo: 'https://shopify-store.myshopify.com',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-03-20T00:00:00Z',
    updatedAt: '2024-03-20T00:00:00Z',
  },
  {
    id: '16',
    title: 'Wix Business Website',
    description: 'Professional business website built with Wix featuring custom design, contact forms, booking system, and analytics integration.',
    image: '/placeholder.svg',
    technologies: 'Wix, Wix Code, JavaScript, Google Analytics, Mailchimp',
    github: 'https://github.com/example/wix-website',
    demo: 'https://business-site.wixsite.com',
    featured: false,
    published: true,
    categoryId: '6', // No-Code
    createdAt: '2024-03-25T00:00:00Z',
    updatedAt: '2024-03-25T00:00:00Z',
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
