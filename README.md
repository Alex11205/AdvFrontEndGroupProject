Components
1.Card.tsx: All the cards in the destination page and collection page call and use this card component
2.footer.tsx: All the pages use this component as a footer
3.header.tsx: All the pages use this component as a header, it includes a navigation bar and a title
4.Hero.tsx: The home page calls this component to display a hero element
5.TripPlanner.tsx: The trips page call this component

Routes
Every page has a navigation bar, which can route to different pages. In destination page, each card's picture and "discover" button can direct to the detailed destination page. Also, in each individual desitination page, a link is provided to navigate to the full destination list page.

State management
Each destination can be stored in a localstorage. The state of whether a card has been saved, as well as the contents of the stored cards are stored in different states. And the stored content can be displayed in another page.














<<<<<<< HEAD
This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/pages/api-reference/create-next-app).

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

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/pages/building-your-application/routing/api-routes) instead of React pages.

This project uses [`next/font`](https://nextjs.org/docs/pages/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn-pages-router) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/pages/building-your-application/deploying) for more details.
=======
# AdvFrontEndGroupProject
# Advance Front End Group Project
>>>>>>> 3e37c1a7d8b0ed19c9c1d203b943eeccbdf62735
