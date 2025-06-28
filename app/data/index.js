/**
 * Centralized Data Export Hub for Sharma Space
 * 
 * This file serves as the main entry point for all mock data used throughout
 * the Sharma Space interior design website. It provides a clean, organized
 * way to import data across components while maintaining SEO compliance
 * and E-E-A-T standards.
 * 
 * @version 1.0.0
 * @author Sharma Space Development Team
 * @compliance SEO 2024 Standards, E-E-A-T Guidelines
 */

// Blog Data
import blogPostsData from './blog/posts.json';
import blogCategoriesData from './blog/categories.json';
import blogAuthorsData from './blog/authors.json';

// Portfolio Data
import portfolioProjectsData from './portfolio/projects.json';
import portfolioCategoriesData from './portfolio/categories.json';

// Services Data
import servicesData from './services/services.json';

// Testimonials Data
import testimonialsData from './testimonials/testimonials.json';

// Team Data
import teamMembersData from './team/members.json';

// Contact Data
import contactMessagesData from './contact/messages.json';

// Company Data
import companyStatsData from './company/stats.json';
import partnerBrandsData from './company/brands.json';

// Blog Exports
export const blogPosts = blogPostsData.posts;
export const blogCategories = blogCategoriesData.categories;
export const blogAuthors = blogAuthorsData.authors;
export const blogMetadata = {
  posts: blogPostsData.metadata,
  categories: blogCategoriesData.metadata,
  authors: blogAuthorsData.metadata
};

// Portfolio Exports
export const portfolioProjects = portfolioProjectsData.projects;
export const portfolioCategories = portfolioCategoriesData.categories;
export const portfolioMetadata = {
  projects: portfolioProjectsData.metadata,
  categories: portfolioCategoriesData.metadata
};

// Services Exports
export const services = servicesData.services;
export const servicesMetadata = servicesData.metadata;

// Testimonials Exports
export const testimonials = testimonialsData.testimonials;
export const testimonialsStats = testimonialsData.stats;
export const testimonialsMetadata = testimonialsData.metadata;

// Team Exports
export const teamMembers = teamMembersData.members;
export const teamStats = teamMembersData.stats;
export const teamMetadata = teamMembersData.metadata;

// Contact Exports
export const contactMessages = contactMessagesData.messages;
export const contactStats = contactMessagesData.stats;
export const contactFilters = contactMessagesData.filters;
export const contactMetadata = contactMessagesData.metadata;

// Company Exports
export const companyStats = companyStatsData.stats;
export const companyInfo = companyStatsData.companyInfo;
export const companyAchievements = companyStatsData.achievements;
export const companyStatsMetadata = companyStatsData.metadata;

// Partner Brands Exports
export const partnerBrands = partnerBrandsData.partnerBrands;
export const brandCategories = partnerBrandsData.categories;
export const brandStats = partnerBrandsData.stats;
export const brandBenefits = partnerBrandsData.benefits;
export const brandsMetadata = partnerBrandsData.metadata;

// Utility Functions
export const getBlogPostBySlug = (slug) => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostsByCategory = (category) => {
  return blogPosts.filter(post => 
    post.category.toLowerCase() === category.toLowerCase()
  );
};

export const getPortfolioProjectBySlug = (slug) => {
  return portfolioProjects.find(project => project.slug === slug);
};

export const getPortfolioProjectsByCategory = (category) => {
  if (category === 'all') return portfolioProjects;
  return portfolioProjects.filter(project => 
    project.category.toLowerCase() === category.toLowerCase()
  );
};

export const getFeaturedProjects = () => {
  return portfolioProjects.filter(project => project.featured);
};

export const getFeaturedTestimonials = () => {
  return testimonials.filter(testimonial => testimonial.featured);
};

export const getServiceBySlug = (slug) => {
  return services.find(service => service.slug === slug);
};

export const getTeamMemberBySlug = (slug) => {
  return teamMembers.find(member => member.slug === slug);
};

export const getAuthorBySlug = (slug) => {
  return blogAuthors.find(author => author.slug === slug);
};

// SEO Helper Functions
export const generateBlogPostSchema = (post) => {
  const author = getAuthorBySlug(post.author.id);
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": post.title,
    "description": post.excerpt,
    "image": post.mainImage.url,
    "datePublished": post.publishedAt,
    "dateModified": post.lastModified,
    "author": {
      "@type": "Person",
      "name": author?.name || post.author.name,
      "jobTitle": author?.title || post.author.specialization
    },
    "publisher": {
      "@type": "Organization",
      "name": "Sharma Space",
      "logo": {
        "@type": "ImageObject",
        "url": "/images/icon/SharmaSpace-Logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://sharmaspace.in/blog/${post.slug}`
    }
  };
};

export const generateProjectSchema = (project) => {
  return {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    "name": project.title,
    "description": project.description,
    "image": project.coverImage.url,
    "creator": {
      "@type": "Organization",
      "name": "Sharma Space"
    },
    "dateCreated": project.completedDate,
    "locationCreated": {
      "@type": "Place",
      "name": project.location
    },
    "genre": project.category
  };
};

// Data Validation
export const validateDataIntegrity = () => {
  const checks = {
    blogPosts: blogPosts.length > 0,
    portfolioProjects: portfolioProjects.length > 0,
    services: services.length > 0,
    testimonials: testimonials.length > 0,
    teamMembers: teamMembers.length > 0,
    partnerBrands: partnerBrands.length > 0
  };
  
  const failedChecks = Object.entries(checks)
    .filter(([key, value]) => !value)
    .map(([key]) => key);
    
  if (failedChecks.length > 0) {
    console.warn('Data integrity check failed for:', failedChecks);
  }
  
  return failedChecks.length === 0;
};

// Export all data for debugging/development
export const allData = {
  blog: { posts: blogPosts, categories: blogCategories, authors: blogAuthors },
  portfolio: { projects: portfolioProjects, categories: portfolioCategories },
  services,
  testimonials,
  team: teamMembers,
  contact: contactMessages,
  company: { stats: companyStats, info: companyInfo, achievements: companyAchievements },
  brands: partnerBrands
};

// Metadata for the entire data system
export const dataSystemMetadata = {
  version: "1.0.0",
  lastUpdated: "2024-05-15T10:00:00Z",
  totalEntities: {
    blogPosts: blogPosts.length,
    portfolioProjects: portfolioProjects.length,
    services: services.length,
    testimonials: testimonials.length,
    teamMembers: teamMembers.length,
    contactMessages: contactMessages.length,
    partnerBrands: partnerBrands.length
  },
  seoCompliance: "2024 Google E-E-A-T Standards",
  location: "Bangalore, India",
  description: "Centralized mock data system for Sharma Space interior design website"
};