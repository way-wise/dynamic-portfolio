# Quick PostgreSQL Setup with Docker
# Run this script to start PostgreSQL in Docker

echo "Starting PostgreSQL with Docker..."

# Stop and remove existing container if it exists
docker stop portfolio-postgres 2>/dev/null || true
docker rm portfolio-postgres 2>/dev/null || true

# Start new PostgreSQL container
docker run --name portfolio-postgres \
  -e POSTGRES_DB=portfolio_db \
  -e POSTGRES_USER=portfolio_user \
  -e POSTGRES_PASSWORD=portfolio123 \
  -p 5432:5432 \
  -d postgres:15

echo "PostgreSQL is starting up..."
echo "Database: portfolio_db"
echo "User: portfolio_user"
echo "Password: portfolio123"
echo "Port: 5432"
echo ""
echo "Wait 10 seconds for PostgreSQL to start, then run:"
echo "pnpm prisma generate"
echo "pnpm prisma db push"
echo "pnpm db:seed"
echo "pnpm dev"
