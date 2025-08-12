# Portfolio Website

This is a personal portfolio and blog website built with [Next.js](https://nextjs.org/), designed to share articles, tutorials, and experiences about web development, technology, and teaching.

## Features

- **Blog**: Write and publish articles using MDX.
- **Contact Form**: Users can contact me via a form with validation and reCAPTCHA.
- **FAQ Section**: Frequently asked questions with answers.
- **Responsive Design**: Optimized for all devices.
- **SEO Optimized**: Includes metadata, Open Graph, and sitemap.
- **Cookie Consent**: Integrated with Iubenda for cookie management.
- **CDN-ready**: Assets are served via CDN for better performance.

## Getting Started

First, install dependencies:

```sh
pnpm install
# or
npm install
# or
yarn install
```

Then, run the development server:

```sh
pnpm dev
# or
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## Project Structure

- `app/` – Next.js app directory (pages, layouts, API routes)
- `components/` – React components (Navbar, Footer, Forms, etc.)
- `content/blog/` – Blog posts in MDX format
- `lib/` – Utilities, constants, and schemas
- `assets/` – Images and static assets
- `public/` – Public files (favicons, manifest, robots.txt, etc.)

## Deployment

The project is currently deployed on [Vercel](https://vercel.com/).

## License

This project is licensed under the [MIT License](../LICENSE).
