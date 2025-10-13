# Production Environment Variables Guide

## Required Environment Variables for Production

### 1. Database Configuration
```env
# PostgreSQL Database URL (Production)
DATABASE_URL="postgresql://username:password@your-production-db-host:5432/portfolio_db"

# Alternative: Use connection pooling for better performance
DATABASE_URL="postgresql://username:password@your-production-db-host:5432/portfolio_db?pgbouncer=true&connection_limit=1"
```

### 2. NextAuth Configuration
```env
# NextAuth URL (your production domain)
NEXTAUTH_URL="https://your-domain.com"

# NextAuth Secret (generate a strong secret)
NEXTAUTH_SECRET="your-super-secure-secret-key-here-minimum-32-characters"

# Optional: NextAuth Database URL (if using database sessions)
NEXTAUTH_DATABASE_URL="postgresql://username:password@your-production-db-host:5432/portfolio_db"
```

### 3. JWT Configuration
```env
# JWT Secret for token signing
JWT_SECRET="your-jwt-secret-key-here-minimum-32-characters"
```

### 4. Application Configuration
```env
# Node Environment
NODE_ENV="production"

# Optional: Custom port (if not using default 3000)
PORT="3000"
```

### 5. Optional: External Services
```env
# Email Service (if you add email functionality)
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"

# File Upload Service (if you add file uploads)
UPLOADTHING_SECRET="your-uploadthing-secret"
UPLOADTHING_APP_ID="your-uploadthing-app-id"

# Analytics (optional)
GOOGLE_ANALYTICS_ID="GA-XXXXXXXXX"
```

## Production Deployment Platforms

### Vercel (Recommended)
```env
# In Vercel Dashboard > Project Settings > Environment Variables
DATABASE_URL="postgresql://username:password@host:5432/db"
NEXTAUTH_URL="https://your-app.vercel.app"
NEXTAUTH_SECRET="your-secret"
JWT_SECRET="your-jwt-secret"
NODE_ENV="production"
```

### Netlify
```env
# In Netlify Dashboard > Site Settings > Environment Variables
DATABASE_URL="postgresql://username:password@host:5432/db"
NEXTAUTH_URL="https://your-app.netlify.app"
NEXTAUTH_SECRET="your-secret"
JWT_SECRET="your-jwt-secret"
NODE_ENV="production"
```

### Railway
```env
# In Railway Dashboard > Variables tab
DATABASE_URL="postgresql://username:password@host:5432/db"
NEXTAUTH_URL="https://your-app.railway.app"
NEXTAUTH_SECRET="your-secret"
JWT_SECRET="your-jwt-secret"
NODE_ENV="production"
```

### DigitalOcean App Platform
```env
# In DigitalOcean Dashboard > App Settings > Environment Variables
DATABASE_URL="postgresql://username:password@host:5432/db"
NEXTAUTH_URL="https://your-app.ondigitalocean.app"
NEXTAUTH_SECRET="your-secret"
JWT_SECRET="your-jwt-secret"
NODE_ENV="production"
```

## Database Setup for Production

### Option 1: Managed PostgreSQL Services
- **Neon** (Recommended): `https://neon.tech`
- **Supabase**: `https://supabase.com`
- **PlanetScale**: `https://planetscale.com`
- **Railway**: `https://railway.app`
- **DigitalOcean Managed Databases**

### Option 2: Self-Hosted PostgreSQL
- **Docker**: Use PostgreSQL Docker container
- **VPS**: Install PostgreSQL on your server
- **Cloud VMs**: AWS RDS, Google Cloud SQL, Azure Database

## Security Best Practices

### 1. Generate Strong Secrets
```bash
# Generate random secrets
openssl rand -base64 32
# or
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 2. Database Security
- Use strong passwords
- Enable SSL connections
- Restrict database access by IP
- Use connection pooling
- Regular backups

### 3. Environment Variables Security
- Never commit `.env` files to version control
- Use platform-specific secret management
- Rotate secrets regularly
- Use different secrets for different environments

## Production Checklist

### Before Deployment
- [ ] Set up production database
- [ ] Generate strong secrets
- [ ] Configure environment variables
- [ ] Test database connection
- [ ] Run database migrations
- [ ] Test authentication flow

### After Deployment
- [ ] Verify all environment variables are set
- [ ] Test all API endpoints
- [ ] Check database connectivity
- [ ] Verify authentication works
- [ ] Test category and project CRUD operations
- [ ] Monitor application logs
- [ ] Set up monitoring and alerts

## Example Production .env File

```env
# Database
DATABASE_URL="postgresql://portfolio_user:secure_password_123@db.railway.app:5432/portfolio_prod"

# Authentication
NEXTAUTH_URL="https://your-portfolio.vercel.app"
NEXTAUTH_SECRET="a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6q7r8s9t0u1v2w3x4y5z6"
JWT_SECRET="z9y8x7w6v5u4t3s2r1q0p9o8n7m6l5k4j3i2h1g0f9e8d7c6b5a4"

# Environment
NODE_ENV="production"

# Optional Services
SMTP_HOST="smtp.gmail.com"
SMTP_PORT="587"
SMTP_USER="your-email@gmail.com"
SMTP_PASS="your-app-password"
```

## Quick Start Commands

### 1. Generate Secrets
```bash
# Generate NextAuth secret
openssl rand -base64 32

# Generate JWT secret
node -e "console.log(require('crypto').randomBytes(32).toString('base64'))"
```

### 2. Database Setup
```bash
# Run migrations
npx prisma migrate deploy

# Generate Prisma client
npx prisma generate
```

### 3. Build for Production
```bash
# Install dependencies
npm install

# Build the application
npm run build

# Start production server
npm start
```

## Platform-Specific Notes

### Vercel
- Environment variables are set in the dashboard
- Automatic deployments from Git
- Built-in PostgreSQL integration
- Edge functions support

### Netlify
- Environment variables in site settings
- Git-based deployments
- Serverless functions
- Form handling built-in

### Railway
- Environment variables in project settings
- Automatic deployments
- Built-in PostgreSQL
- Easy scaling

### DigitalOcean App Platform
- Environment variables in app settings
- Git-based deployments
- Managed databases
- Load balancing
