## Admin Dashboard UI Recreation Plan

This plan outlines the steps to create a pixel-perfect recreation of the provided dashboard UI, adhering strictly to the specified color palette and design.

### Phase 1: Setup and Layout

- [x] **Update `app/admin/dashboard/page.js`:**
    - Set up the main dashboard layout (sidebar and main content area).
    - Integrate new components into this layout.

- [x] **Create `components/admin/Sidebar.js`:**
    - Implement the navigation sidebar with links for Dashboard, Projects, Services, Blog Posts, Testimonials, and Messages.
    - Include the "Sharma Space" logo and "Admin Panel" text.
    - Add the "Back to Website" link at the bottom.
    - Use appropriate Lucide React icons for each menu item.

- [x] **Create `components/admin/DashboardHeader.js`:**
    - Implement the "Dashboard" title and "Overview of your website content and analytics" subtitle.

### Phase 2: Dashboard Widgets

- [x] **Create `components/admin/StatsCard.js`:**
    - Design a reusable card component for displaying statistics (Total Projects, Total Services, Testimonials, Messages, Blog Posts).
    - Ensure it matches the reference image's layout, typography, and colors.
    - Use appropriate Lucide React icons.

- [x] **Create `components/admin/RecentMessages.js`:**
    - Implement the "Recent Messages" section, displaying sender, timestamp, and message snippet.
    - Match the typography, spacing, and card design.

- [x] **Create `components/admin/ProjectCategories.js`:**
    - Implement the "Project Categories" section with progress bars.
    - Match the bar colors, percentages, and typography.

- [x] **Create `components/admin/RecentProjects.js`:**
    - Implement the "Recent Projects" section with project images, titles, and categories.
    - Match the layout, image sizes, and typography.

### Phase 3: Styling and Refinement

- [x] **Apply Global Styling and Refinements:**
    - Ensure all components strictly adhere to the provided color palette:
        - Primary: Soft White (#F8F9FA)
        - Accent: Red (#E63946)
        - Secondary: Charcoal Black (#1C1C1C)
        - Highlight: Light Gray (#EDEDED)
        - CTA: Deep Red (#D62828)
    - Maintain identical proportions, spacing, alignment, line weights, and shadows as shown in the reference image.
    - Use placeholder data for all dynamic content.

### Review

- [ ] All visual elements match the reference images exactly.
- [ ] Precise color palette is used, with no color substitutions.
- [ ] Identical proportions, spacing, and alignment are maintained.
- [ ] All details including shapes, line weights, textures, typography, shadows, highlights, and gradients are replicated.
- [ ] Dimensions and scale match the original.
- [ ] Specific design elements or unique characteristics are preserved.
- [ ] Output is indistinguishable from the reference images when compared side-by-side.
