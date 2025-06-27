
# Gemini Workspace Instructions

This document provides project-specific instructions for the Gemini AI assistant to ensure it can effectively and safely work within this codebase.

## 1. Core Mandates & Conventions

- **Framework:** This is a Next.js project. Adhere to all Next.js conventions, including file-based routing in the `app/` directory and the use of React components.
- **Styling:** The project uses Tailwind CSS. All new components and styling should use Tailwind utility classes. Do not write custom CSS files unless absolutely necessary. Adhere to the styles defined in `app/globals.css` and `tailwind.config.js`.
- **Components:** Reusable UI components are located in the `components/` directory. When creating new UI elements, check if a suitable component already exists. New components should be modular and self-contained.
- **State Management:** For client-side state, use React Hooks (`useState`, `useContext`). For server-side data fetching and caching, use `@tanstack/react-query`.

## 2. Development & Verification Commands

Before making changes, and especially before committing, always use the following commands to ensure code quality and functionality.

- **Install Dependencies:** If you suspect dependencies are missing or out of date, run:
  ```bash
  npm install
  ```

- **Run Development Server:** To start the local development server, use:
  ```bash
  npm run dev
  ```

- **Run Linter:** To check for code style and quality issues, run:
  ```bash
  npm run lint
  ```

- **Build Project:** To create a production-ready build, use:
  ```bash
  npm run build
  ```

- **Start Production Server:** To run the production build locally, use:
  ```bash
  npm run start
  ```

## 3. SEO Instructions

Refer to the `project-wide SEO instruction sheet for Sharma Space.pdf` file for detailed instructions on SEO best practices and keywords to be used throughout the website. When adding or modifying pages, ensure all content adheres to these guidelines to maintain and improve search engine rankings.

## 4. File Structure Overview

- **`app/`**: Contains the application's routes and core layout files.
  - **`app/layout.js`**: The root layout for the entire application.
  - **`app/page.js`**: The main landing page.
  - **`app/globals.css`**: Global styles for the application.
- **`components/`**: Contains reusable React components.
  - **`components/ui/`**: Contains UI components from `shadcn/ui`.
- **`public/`**: Contains static assets like images, fonts, and icons.
- **`lib/`**: Contains utility functions and libraries.

By following these instructions, you will be able to work efficiently and safely within the Sharma Space project.

## 5. Standard Workflow

1.  First think through the problem, read the codebase for relevant files, and write a plan to todo.md.
2.  The plan should have a list of todo items that you can check off as you complete them
3.  Before you begin working, check in with me and I will verify the plan.
4.  Then, begin working on the todo items, marking them as complete as you go.
5.  Please every step of the way just give me a high level explanation of what changes you made
6.  Make every task and code change you do as simple as possible. We want to avoid making any massive or complex changes. Every change should impact as little code as possible. Everything is about simplicity.
7.  Finally, add a review section to the todo.md file with a summary of the changes you made and any other relevant information.
