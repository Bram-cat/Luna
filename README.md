# Luna Eclectic Emporium

A modern, elegant website for Luna Eclectic Emporium - a unique gift shop located in Charlottetown, PEI. Built with Next.js 15, React 19, and styled with a sleek black, white, and grey color scheme.

## Features

- **3-Page Website Structure**
  - Home: Hero section, features, gallery, and customer reviews
  - About: Store story, values, and location information
  - Contact: Contact form, store hours, and visit information

- **Design & Styling**
  - Black primary background with white text
  - Various shades of grey for components
  - Fully responsive design for mobile, tablet, and desktop
  - Custom Shadcn/UI components
  - Smooth scrolling and custom scrollbar
  - Image galleries with hover effects

- **Components**
  - Responsive navigation with mobile menu
  - Customer reviews section with 5-star ratings
  - Contact form with validation
  - Reusable UI components (Button, Card, Input, Textarea, Label)

## Tech Stack

- **Framework**: Next.js 15.5.6 with Turbopack
- **React**: 19.1.0
- **Styling**: Tailwind CSS 4.0
- **UI Components**: Custom Shadcn/UI components
- **TypeScript**: Full type safety
- **Utilities**: clsx, tailwind-merge, class-variance-authority

## Getting Started

### Prerequisites

- Node.js 20.x or higher
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Bram-cat/Luna.git
cd Luna
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
Agency_website/
├── public/               # Static assets (images)
│   ├── 1.jpg - 9.jpg    # Store and product images
├── src/
│   ├── app/             # Next.js app directory
│   │   ├── about/       # About page
│   │   ├── contact/     # Contact page
│   │   ├── layout.tsx   # Root layout
│   │   ├── page.tsx     # Home page
│   │   └── globals.css  # Global styles
│   ├── components/      # React components
│   │   ├── ui/          # Shadcn UI components
│   │   ├── Navigation.tsx
│   │   ├── Footer.tsx
│   │   └── Reviews.tsx
│   └── lib/
│       └── utils.ts     # Utility functions
```

## Color Scheme

- **Primary Background**: Black (#000000)
- **Text**: White (#FFFFFF)
- **Secondary Background**: Dark Grey (#0D0D0D)
- **Card Backgrounds**: Various greys (#262626, #333333)
- **Muted Text**: Light Grey (#B3B3B3)
- **Borders**: Medium Grey (#333333)

## Pages

### Home Page
- Hero section with store image
- "What Makes Us Special" features section
- Image gallery with all 9 product photos
- Customer reviews (5-star ratings)
- Call-to-action section

### About Page
- Store story and mission
- Core values (Creativity, Community, Quality, Service)
- Store interior images
- Location information

### Contact Page
- Contact form (Name, Email, Phone, Message)
- Store information cards
- Location image
- Store hours section

## Contributing

This is a custom website built for Luna Eclectic Emporium. For any suggestions or improvements, please reach out to the store directly.

## License

Copyright © 2025 Luna Eclectic Emporium. All rights reserved.

## Acknowledgments

- Built with Next.js and React
- UI components inspired by Shadcn/UI
- Images provided by Luna Eclectic Emporium
