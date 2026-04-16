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

# Group Project Phase 2

## Project Overview
This is a travel web application built with Next.js and Tailwind CSS.  
Users can browse destinations, view destination details, and save destinations for later.
---

## Components

### Header
The Header component displays the navigation bar and allows users to move between pages.

### Card
The Card component is used to display destination preview information such as image, title, and continent.

### Footer
The Footer component displays footer content across the application.

### SavedList / SavedDestinations
This component shows destinations saved by the user.
---

## Routes

### `/`
Home page of the application.

### `/destinations`
Displays all destination cards.

### `/destinationpages/[id]`
Dynamic route that shows detailed information for a selected destination.

### `/saved`
Displays the user’s saved destinations.
---

## State Management
State is managed using React state and props.
- Saved destinations are stored in component state or lifted state.
- Data is passed from parent components to child components using props.
- Event handlers are used to save and remove destinations.

If localStorage is used:
- Saved destinations are persisted in localStorage so the user does not lose them after refreshing the page.
---

## Technologies Used
- Next.jss
- React
- Tailwind CSS
- JavaScript / TypeScript
---

## Screenshots

### Home Page
![Home Page](public/screenshots/homepage.png)

### Destinations Page
![Destinations Page](public/screenshots/destinations-page.png)

### Destination Detail Page
![Destination Detail Page](public/screenshots/destination-detail.png)

### Saved Page
![Saved Page](public/screenshots/saved-page.png)