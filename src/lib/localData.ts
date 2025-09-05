// Local data store for standalone admin panel
export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  year: string;
  image: string;
  status: 'published' | 'draft';
  featured: boolean;
  views: number;
  likes: number;
  order: number;
  technologies: string[];
  client: {
    name: string;
    website: string;
    industry: string;
  };
  createdAt: string;
  updatedAt: string;
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  category: string;
  tags: string[];
  featuredImage: string;
  status: 'published' | 'draft';
  featured: boolean;
  views: number;
  comments: any[];
  author: {
    username: string;
    profile: any;
  };
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
}

export interface Testimonial {
  id: string;
  clientName: string;
  clientTitle: string;
  company: string;
  content: string;
  rating: number;
  status: 'pending' | 'approved' | 'rejected';
  featured: boolean;
  order: number;
  createdAt: string;
  updatedAt: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  subject: string;
  message: string;
  projectType?: string;
  budget?: string;
  timeline?: string;
  status: 'new' | 'read' | 'replied' | 'closed';
  notes: Array<{
    note: string;
    addedBy: string;
    createdAt: string;
  }>;
  createdAt: string;
  updatedAt: string;
}

// Sample data
export const sampleProjects: Project[] = [
  {
    id: '1',
    title: 'Coffee Brand Identity',
    description: 'Complete brand identity design for a local coffee shop including logo, packaging, and marketing materials.',
    category: 'Brand Design',
    year: '2024',
    image: '/src/assets/coffee-brand-project.jpg',
    status: 'published',
    featured: true,
    views: 245,
    likes: 18,
    order: 1,
    technologies: ['Adobe Illustrator', 'Photoshop', 'InDesign'],
    client: {
      name: 'Brew & Bean Co.',
      website: 'https://brewbean.com',
      industry: 'Food & Beverage'
    },
    createdAt: '2024-01-15T10:00:00Z',
    updatedAt: '2024-01-15T10:00:00Z'
  },
  {
    id: '2',
    title: 'E-commerce UI/UX',
    description: 'Modern e-commerce platform design with focus on user experience and conversion optimization.',
    category: 'UI/UX Design',
    year: '2024',
    image: '/src/assets/ecommerce-project.jpg',
    status: 'published',
    featured: true,
    views: 189,
    likes: 12,
    order: 2,
    technologies: ['Figma', 'Sketch', 'Principle'],
    client: {
      name: 'TechStore Inc.',
      website: 'https://techstore.com',
      industry: 'Technology'
    },
    createdAt: '2024-02-20T14:30:00Z',
    updatedAt: '2024-02-20T14:30:00Z'
  }
];

export const sampleBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of UI/UX Design',
    slug: 'future-of-ui-ux-design',
    excerpt: 'Exploring the latest trends and technologies shaping the future of user interface and experience design.',
    content: 'Full blog post content about UI/UX design trends...',
    category: 'Industry Insights',
    tags: ['UI/UX', 'Design Trends', 'Technology'],
    featuredImage: '/src/assets/ui-ux-placeholder.jpg',
    status: 'published',
    featured: true,
    views: 156,
    comments: [],
    author: {
      username: 'admin',
      profile: { firstName: 'John', lastName: 'Doe' }
    },
    publishedAt: '2024-03-01T09:00:00Z',
    createdAt: '2024-03-01T09:00:00Z',
    updatedAt: '2024-03-01T09:00:00Z'
  }
];

export const sampleTestimonials: Testimonial[] = [
  {
    id: '1',
    clientName: 'Sarah Johnson',
    clientTitle: 'Marketing Director',
    company: 'Brew & Bean Co.',
    content: 'John delivered an exceptional brand identity that perfectly captured our vision. The attention to detail and creative approach exceeded our expectations.',
    rating: 5,
    status: 'approved',
    featured: true,
    order: 1,
    createdAt: '2024-01-20T16:00:00Z',
    updatedAt: '2024-01-20T16:00:00Z'
  }
];

export const sampleContacts: Contact[] = [
  {
    id: '1',
    name: 'Mike Chen',
    email: 'mike@example.com',
    phone: '+1-555-0123',
    company: 'StartupXYZ',
    subject: 'Website Redesign Project',
    message: 'We are looking for a complete website redesign for our startup. Please let me know your availability and pricing.',
    projectType: 'Website Design',
    budget: '$5,000 - $10,000',
    timeline: '2-3 months',
    status: 'new',
    notes: [],
    createdAt: '2024-03-05T11:30:00Z',
    updatedAt: '2024-03-05T11:30:00Z'
  }
];

// Local storage helpers
export const getLocalData = <T>(key: string, defaultValue: T): T => {
  try {
    const stored = localStorage.getItem(key);
    return stored ? JSON.parse(stored) : defaultValue;
  } catch {
    return defaultValue;
  }
};

export const setLocalData = <T>(key: string, data: T): void => {
  try {
    localStorage.setItem(key, JSON.stringify(data));
  } catch (error) {
    console.error('Failed to save to localStorage:', error);
  }
};

// Data management functions
export const dataStore = {
  projects: getLocalData('admin_projects', sampleProjects),
  blogPosts: getLocalData('admin_blog_posts', sampleBlogPosts),
  testimonials: getLocalData('admin_testimonials', sampleTestimonials),
  contacts: getLocalData('admin_contacts', sampleContacts),
  
  saveProjects: (projects: Project[]) => {
    setLocalData('admin_projects', projects);
    dataStore.projects = projects;
  },
  
  saveBlogPosts: (posts: BlogPost[]) => {
    setLocalData('admin_blog_posts', posts);
    dataStore.blogPosts = posts;
  },
  
  saveTestimonials: (testimonials: Testimonial[]) => {
    setLocalData('admin_testimonials', testimonials);
    dataStore.testimonials = testimonials;
  },
  
  saveContacts: (contacts: Contact[]) => {
    setLocalData('admin_contacts', contacts);
    dataStore.contacts = contacts;
  }
};

