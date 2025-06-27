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

### Phase 4: Projects Page Implementation

- [x] **Create `app/admin/projects/page.js`:** Set up the main page structure, including the sidebar and top navbar (for responsiveness).
- [x] **Create `components/admin/projects/ProjectHeader.js`:** Implement the page title, subtitle, and "Add New Project" button.
- [x] **Create `components/admin/projects/ProjectSearchFilter.js`:** Implement the search input and category filter buttons.
- [x] **Create `components/admin/projects/ProjectCard.js`:** Design a reusable component for each project entry, including image, details, and action buttons.
- [x] **Integrate components**: Assemble these new components within `app/admin/projects/page.js`.
- [x] **Apply pixel-perfect styling**: Ensure all elements match the reference image's proportions, colors, typography, and visual effects using the provided color palette.
- [x] **Ensure responsiveness**: Make sure the layout adapts well to different screen sizes.
- [x] **Make sure the filter are working**: Implement filtering logic for project categories and search query.

### Phase 5: Edit Project Modal Implementation

- [x] **Create `components/admin/projects/EditProjectModal.js`**: This will be the main modal wrapper, handling visibility and the close button.
- [x] **Create `components/admin/projects/EditProjectForm.js`**: This component will contain all the input fields and logic for editing a project, including dynamic fields for images.
- [x] **Create `components/admin/projects/ImageInput.js`**: A reusable sub-component for handling individual image URL inputs with previews.
- [x] **Modify `components/admin/projects/ProjectCard.js`**: Add an "Edit" button that triggers the modal and passes project data.
- [x] **Modify `app/admin/projects/page.js`**: Manage the modal's open/closed state and the selected project data.

### Phase 6: Services Page Implementation

- [x] **Create `app/admin/services/page.js`**: Set up the main page structure, including the sidebar and top navbar (for responsiveness).
- [x] **Create `components/admin/services/ServiceHeader.js`**: Implement the page title, subtitle, and "Add New Service" button.
- [x] **Create `components/admin/services/ServiceSearchFilter.js`**: Implement the search input.
- [x] **Create `components/admin/services/ServiceCard.js`**: Design a reusable component for each service entry, including title, description, icon, and action buttons.
- [x] **Create `components/admin/services/EditServiceModal.js`**: A modal for adding/editing services.
- [x] **Create `components/admin/services/EditServiceForm.js`**: The form within the modal for service details.
- [x] **Integrate components**: Assemble these new components within `app/admin/services/page.js`.
- [x] **Apply pixel-perfect styling**: Ensure all elements match the reference image's proportions, colors, typography, and visual effects using the provided color palette.
- [x] **Ensure responsiveness**: Make sure the layout adapts well to different screen sizes, including the floating "Add New Service" button for mobile.

### Phase 7: Blog Posts Page Implementation

- [x] **Create `app/admin/blog-posts/page.js`**: Set up the main page structure, including the sidebar and top navbar (for responsiveness).
- [x] **Create `components/admin/blog-posts/BlogHeader.js`**: Implement the page title, subtitle, and "New Blog Post" button.
- [x] **Create `components/admin/blog-posts/BlogSearchFilter.js`**: Implement the search input and category filter dropdown.
- [x] **Create `components/admin/blog-posts/BlogCard.js`**: Design a reusable component for each blog post entry.
- [x] **Create `components/admin/blog-posts/EditBlogModal.js`**: A modal for adding/editing blog posts.
- [x] **Create `components/admin/blog-posts/EditBlogForm.js`**: The form within the modal for blog post details.
- [x] **Integrate components**: Assemble these new components within `app/admin/blog-posts/page.js`.
- [x] **Apply pixel-perfect styling**: Ensure all elements match the reference image's proportions, colors, typography, and visual effects using the provided color palette.
- [x] **Ensure responsiveness**: Make sure the layout adapts well to different screen sizes, including the floating "New Blog Post" button for mobile.

### Review

- [ ] All visual elements match the reference images exactly.
- [ ] Precise color palette is used, with no color substitutions.
- [ ] Identical proportions, spacing, and alignment are maintained.
- [ ] All details including shapes, line weights, textures, typography, shadows, highlights, and gradients are replicated.
- [ ] Dimensions and scale match the original.
- [ ] Specific design elements or unique characteristics are preserved.
- [ ] Output is indistinguishable from the reference images when compared side-by-side.