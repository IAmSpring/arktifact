# Arktifact Chronicles

[![Deploy Arktifact Chronicles](https://github.com/IAmSpring/arktifact/actions/workflows/deploy.yml/badge.svg)](https://github.com/IAmSpring/arktifact/actions/workflows/deploy.yml)

A Web3-enabled NFT collection platform built with Next.js, showcasing the Arktifact Chronicles series.

Visit the live site: [Arktifact Chronicles](https://arktifact.com)

## Features

- 🎨 Dynamic NFT Gallery
- 🌐 Web3 Integration with MetaMask
- 📱 Responsive Design
- ⚡ Static Site Generation
- 🔄 Continuous Deployment

## Domain Setup

### GitHub Pages Configuration

1. Repository Settings:
   - Go to Settings > Pages
   - Under "Custom domain", enter: `arktifact.com`
   - Ensure "Enforce HTTPS" is checked

2. DNS Configuration (Squarespace):
   - Go to Home Menu → Settings → Domains
   - Click on your domain to manage it
   - Go to "Advanced Settings" > "DNS Settings"
   - Add these records:

   ```
   Type    | Host/Name | Points To/Value              | TTL
   --------|-----------|-----------------------------|---------
   A       | @         | 185.199.108.153            | 600
   A       | @         | 185.199.109.153            | 600
   A       | @         | 185.199.110.153            | 600
   A       | @         | 185.199.111.153            | 600
   CNAME   | www       | iamspring.github.io         | 600
   ```

3. Repository Configuration:
   - CNAME file in repository root contains: `arktifact.com`
   - Deploy workflow preserves CNAME during deployment

### Deployment

The site is automatically deployed to GitHub Pages on every push to the main branch. The deployment process:
1. Builds the Next.js application
2. Generates static files
3. Preserves CNAME configuration
4. Deploys to GitHub Pages

## Development

### Prerequisites
- Node.js 18+
- npm 9+
- Git

### Environment Setup

Create a `.env.local` file in the root directory:

```env
NEXT_PUBLIC_OPENSEA_API_KEY=your_key_here
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### Commands

```bash
# Run development server
npm run dev

# Run type checking
npm run type-check

# Run linting
npm run lint

# Run tests
npm test

# Build project
npm run build
```

## Features

- 8 Episodes of NFT Collections
- Interactive Story Elements
- Community Integration
- OpenSea Integration
- Blog System
- Social Media Integration

## Tech Stack

- Next.js 14
- TypeScript
- TailwindCSS
- Framer Motion
- Web3/Ethereum Integration

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

# Deployment Environments

## Production
- URL: https://arktifact.com
- Branch: main
- Environment: production
- Protection: Required reviews

### Deployment Process
1. Push to main branch
2. Automated checks run
3. Required reviewers approve
4. Production build created
5. Deploy to GitHub Pages
