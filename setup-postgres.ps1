# Quick PostgreSQL Setup with Docker (PowerShell)
# Run this script to start PostgreSQL in Docker

Write-Host "Starting PostgreSQL with Docker..." -ForegroundColor Green

# Stop and remove existing container if it exists
docker stop portfolio-postgres 2>$null
docker rm portfolio-postgres 2>$null

# Start new PostgreSQL container
docker run --name portfolio-postgres `
  -e POSTGRES_DB=portfolio_db `
  -e POSTGRES_USER=portfolio_user `
  -e POSTGRES_PASSWORD=portfolio123 `
  -p 5432:5432 `
  -d postgres:15

Write-Host "PostgreSQL is starting up..." -ForegroundColor Yellow
Write-Host "Database: portfolio_db" -ForegroundColor Cyan
Write-Host "User: portfolio_user" -ForegroundColor Cyan
Write-Host "Password: portfolio123" -ForegroundColor Cyan
Write-Host "Port: 5432" -ForegroundColor Cyan
Write-Host ""
Write-Host "Wait 10 seconds for PostgreSQL to start, then run:" -ForegroundColor Yellow
Write-Host "pnpm prisma generate" -ForegroundColor White
Write-Host "pnpm prisma db push" -ForegroundColor White
Write-Host "pnpm db:seed" -ForegroundColor White
Write-Host "pnpm dev" -ForegroundColor White
