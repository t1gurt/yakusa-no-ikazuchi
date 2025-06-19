# Yakusa no Ikazuchi / 薬師の雷

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## GitHub Pages Deployment

This project is configured for automatic deployment to GitHub Pages. The site uses Next.js static export functionality to generate static files.

### Setup GitHub Pages

1. **Enable GitHub Pages in your repository:**
   - Go to your repository settings
   - Navigate to "Pages" section
   - Set source to "GitHub Actions"

2. **Push to main branch:**
   - The GitHub Actions workflow (`.github/workflows/deploy.yml`) will automatically build and deploy your site
   - Your site will be available at `https://[username].github.io/[repository-name]`

### Manual Build

To build the static site locally:

```bash
npm run build
```

This will generate static files in the `out/` directory.

### Features

- 🎨 Modern, minimal design with consistent branding
- 📱 Responsive layout optimized for all devices
- ⚡ Fast loading with optimized static generation
- 🔧 Configurable navigation and content sections
- 🎭 Interactive member profiles with modal displays
- 🤝 Partner showcase with categorized listings

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
