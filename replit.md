# Overview

Triocalc is a multi-tool calculator and converter suite built for portfolio demonstration and monetization. The application provides three core calculation tools: a tip calculator, percentage calculator, and currency converter. Built as a modern web application using React and TypeScript, it features a clean, responsive interface with tab-based navigation, real-time calculations, dark/light mode toggle, and Google AdSense integration ready for deployment.

# User Preferences

Preferred communication style: Simple, everyday language.
Branding: Triocalc (rebranded from ConvertEasy)
Monetization: Google AdSense ready with ad placement sections
Author: Yasir Ispawoo (https://github.com/ispawoo)
Deployment: Ready for Vercel with SEO optimization

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
- **Build Tool**: Vite for fast development and optimized production builds
- **UI Components**: shadcn/ui component library built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system variables, responsive design, and dark mode support
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: React hooks for local component state, TanStack Query for server state
- **Form Handling**: React Hook Form with Zod validation schemas
- **Theme System**: Dark/light mode toggle with localStorage persistence and system preference detection

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript for full-stack type safety
- **Development**: Hot module replacement via Vite integration in development mode
- **Database Layer**: Drizzle ORM with PostgreSQL dialect for type-safe database operations
- **Session Management**: Express sessions with PostgreSQL store via connect-pg-simple

## Data Storage
- **Primary Database**: PostgreSQL for persistent data storage
- **ORM**: Drizzle ORM with schema-first approach and automatic type generation
- **Migration System**: Drizzle Kit for database schema migrations
- **Development Storage**: In-memory storage implementation for development/testing

## External Dependencies

### Database Services
- **PostgreSQL**: Primary database (configured via DATABASE_URL environment variable)
- **Neon Database**: Serverless PostgreSQL provider (@neondatabase/serverless)

### UI and Styling
- **Radix UI**: Headless component primitives for accessibility
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: Type-safe styling API

### Development and Build Tools
- **Vite**: Frontend build tool and development server
- **ESBuild**: JavaScript bundler for production builds
- **TSX**: TypeScript execution for development server
- **PostCSS**: CSS processing with Autoprefixer

### Utility Libraries
- **date-fns**: Date manipulation and formatting
- **clsx**: Conditional class name utility
- **cmdk**: Command palette component
- **embla-carousel**: Carousel/slider functionality

### Authentication and Session Management
- **connect-pg-simple**: PostgreSQL session store for Express sessions
- **crypto**: Node.js built-in for UUID generation

### API and Data Fetching
- **TanStack Query**: Server state management and caching
- **Wouter**: Lightweight routing solution
- **ExchangeRate-API**: Real-time currency conversion with PKR support

### SEO and Monetization
- **SEO Optimization**: Complete meta tags, Open Graph, Twitter Cards, and structured data
- **Google AdSense**: Ad placement sections ready for monetization
- **Progressive Web App**: Mobile-optimized with proper meta tags for PWA features

### Recent Changes (August 2025)
- Rebranded from ConvertEasy to Triocalc
- Added comprehensive SEO meta tags and structured data
- Implemented dark/light mode toggle with system preference detection
- Added Google AdSense placement sections and compliance features
- Created navigation system between all pages
- Enhanced footer with contact developer button and social media links
- Added comprehensive how-to guides for each calculator tool
- Integrated real-time PKR currency conversion with automatic updates