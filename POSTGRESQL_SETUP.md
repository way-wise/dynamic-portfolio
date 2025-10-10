# PostgreSQL Setup Guide for Portfolio

## 🐘 **PostgreSQL Database Setup**

Your portfolio is now configured to use **PostgreSQL** instead of mock data. Here's how to set it up:

### **Option 1: Local PostgreSQL Installation**

1. **Install PostgreSQL:**
   - Download from: https://www.postgresql.org/download/
   - Or use package manager:
     ```bash
     # Windows (with Chocolatey)
     choco install postgresql
     
     # macOS (with Homebrew)
     brew install postgresql
     
     # Ubuntu/Debian
     sudo apt-get install postgresql postgresql-contrib
     ```

2. **Start PostgreSQL service:**
   ```bash
   # Windows
   net start postgresql
   
   # macOS/Linux
   sudo service postgresql start
   ```

3. **Create database:**
   ```bash
   # Connect to PostgreSQL
   psql -U postgres
   
   # Create database
   CREATE DATABASE portfolio_db;
   
   # Create user (optional)
   CREATE USER portfolio_user WITH PASSWORD 'your_password';
   GRANT ALL PRIVILEGES ON DATABASE portfolio_db TO portfolio_user;
   ```

### **Option 2: Docker PostgreSQL (Recommended)**

1. **Run PostgreSQL in Docker:**
   ```bash
   docker run --name portfolio-postgres \
     -e POSTGRES_DB=portfolio_db \
     -e POSTGRES_USER=portfolio_user \
     -e POSTGRES_PASSWORD=your_password \
     -p 5432:5432 \
     -d postgres:15
   ```

### **Option 3: Cloud PostgreSQL (Production)**

- **Neon** (Free tier): https://neon.tech/
- **Supabase** (Free tier): https://supabase.com/
- **Railway** (Free tier): https://railway.app/
- **Vercel Postgres**: https://vercel.com/storage/postgres

## 🔧 **Environment Configuration**

Create a `.env.local` file in your project root:

```env
# PostgreSQL Database URL
DATABASE_URL="postgresql://username:password@localhost:5432/portfolio_db"

# NextAuth
NEXTAUTH_URL="http://localhost:3000"
NEXTAUTH_SECRET="your-secret-key-here"

# JWT Secret
JWT_SECRET="your-jwt-secret-here"
```

**Replace the values:**
- `username`: Your PostgreSQL username
- `password`: Your PostgreSQL password
- `localhost:5432`: Your PostgreSQL host and port
- `portfolio_db`: Your database name

## 🚀 **Setup Commands**

Once PostgreSQL is running:

```bash
# 1. Generate Prisma client
pnpm prisma generate

# 2. Push schema to database
pnpm prisma db push

# 3. Seed with sample data
pnpm db:seed

# 4. Start development server
pnpm dev
```

## ✅ **Benefits of PostgreSQL**

- ✅ **Persistent data** - survives server restarts
- ✅ **Production ready** - scalable and robust
- ✅ **ACID compliance** - reliable transactions
- ✅ **Rich data types** - JSON, arrays, etc.
- ✅ **Great performance** - optimized for web apps

## 🔍 **Verify Setup**

Test your database connection:

```bash
# Check if database is accessible
pnpm prisma db pull

# View your data
pnpm prisma studio
```

## 🆘 **Troubleshooting**

**Connection issues:**
- Check if PostgreSQL is running
- Verify connection string format
- Ensure database exists
- Check firewall/port access

**Permission errors:**
- Run terminal as administrator (Windows)
- Check PostgreSQL user permissions
- Verify database ownership

---

**Need help?** The portfolio will work with mock data until you set up PostgreSQL, so you can continue developing while setting up the database! 🚀
