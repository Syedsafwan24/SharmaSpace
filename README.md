# Sharma Space - Next.js Interior Design Website

A modern, responsive interior design website built with Next.js 14, TypeScript, and Tailwind CSS.

## Features

- **Next.js 14** with App Router
- **TypeScript** for type safety
- **Tailwind CSS** for styling
- **Responsive Design** optimized for all devices
- **SEO Optimized** with proper meta tags and structured data
- **Image Optimization** using Next.js Image component
- **Performance Optimized** with lazy loading and code splitting

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn
- PostgreSQL (local or remote)

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd sharma-space-nextjs
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

### Database Setup (PostgreSQL & Prisma)

This project uses PostgreSQL as its database and Prisma as the ORM.

1.  **Ensure PostgreSQL is running:** If you're using a local PostgreSQL instance, make sure it's active. For Ubuntu, you can start it with:
    ```bash
    sudo pg_ctlcluster 16 main start
    ```

2.  **Create Database and User:** If you haven't already, create a database and a user for your application. For example:
    ```sql
    -- Connect to your PostgreSQL server (e.g., psql -U postgres)
    CREATE USER sharmaspaceadmin WITH PASSWORD 'Admin@123';
    CREATE DATABASE sharma_space OWNER sharmaspaceadmin;
    GRANT ALL PRIVILEGES ON DATABASE sharma_space TO sharmaspaceadmin;
    ```

3.  **Configure Environment Variables:** Create a `.env.local` file in the root of your project (if it doesn't exist) and add your database connection string. Replace `YOUR_PASSWORD` with the actual password you set for `sharmaspaceadmin`.
    ```env
    DATABASE_URL="postgresql://sharmaspaceadmin:'Admin@123'@localhost:5432/sharma_space"
    ```

4.  **Initialize Prisma:** Run the following command to generate the Prisma client and synchronize your database schema with your Prisma schema. This will create tables based on your `prisma/schema.prisma` file.
    ```bash
    npm run db:push
    ```

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   ├── page.tsx          # Home page
│   ├── about/            # About page
│   ├── services/         # Services page
│   ├── portfolio/        # Portfolio page
│   ├── blog/            # Blog page
│   └── contact/         # Contact page
├── components/           # Reusable components
│   ├── ui/              # UI components
│   └── providers/       # Context providers
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── public/             # Static assets
```

## Key Features

### SEO Optimization
- Proper meta tags for each page
- Structured data (JSON-LD) for local business
- Open Graph and Twitter Card support
- Optimized for search engines

### Performance
- Next.js Image optimization
- Lazy loading for images and components
- Code splitting and tree shaking
- Optimized bundle size

### Responsive Design
- Mobile-first approach
- Tailwind CSS responsive utilities
- Optimized for all screen sizes

### Accessibility
- Semantic HTML structure
- Proper ARIA labels
- Keyboard navigation support
- Screen reader friendly

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

Build the project:
```bash
npm run build
```

Start the production server:
```bash
npm start
```

## Environment Variables

Environment variables, including your `DATABASE_URL`, are configured in the `.env.local` file. Refer to the [Database Setup](#database-setup-postgresql--prisma) section for details on configuring your `DATABASE_URL`.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## License

This project is licensed under the MIT License.