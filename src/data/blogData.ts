export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  date: string;
  readTime: string;
  category: string;
  image: string;
  tags: string[];
}

export const blogPosts: BlogPost[] = [
  {
    id: 'getting-started-web-development',
    title: 'Getting Started with Web Development in 2024',
    excerpt: 'A comprehensive guide for beginners looking to start their journey in web development.',
    content: `
# Getting Started with Web Development in 2024

Web development is an exciting and rewarding field that continues to evolve. This guide will help you start your journey into web development with the right foundation.

## Essential Skills to Learn

1. HTML & CSS
   - Understanding document structure
   - Styling and layout
   - Responsive design principles

2. JavaScript
   - Basic syntax and concepts
   - DOM manipulation
   - Modern ES6+ features

3. Version Control
   - Git basics
   - GitHub collaboration

## Learning Path

Start with the basics and gradually move to more advanced topics:

1. Month 1-2: HTML & CSS
2. Month 3-4: JavaScript
3. Month 5-6: Frontend Framework (React)
4. Month 7-8: Backend Basics

## Resources

- MDN Web Docs
- freeCodeCamp
- Web Tech Academy courses
    `,
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Lead Instructor'
    },
    date: '2024-03-01',
    readTime: '8 min',
    category: 'Web Development',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['Web Development', 'Programming', 'Beginners']
  },
  {
    id: 'mastering-react-hooks',
    title: 'Mastering React Hooks: A Deep Dive',
    excerpt: 'Learn how to effectively use React Hooks to write cleaner and more efficient React components.',
    content: `
# Mastering React Hooks: A Deep Dive

React Hooks have revolutionized how we write React components. This guide explores advanced patterns and best practices.

## Understanding Hooks

1. useState
   - Managing component state
   - State updates and batching
   - Complex state patterns

2. useEffect
   - Side effects in components
   - Cleanup functions
   - Dependencies array

3. Custom Hooks
   - Creating reusable logic
   - Composition patterns
   - Testing custom hooks

## Advanced Patterns

Learn about advanced patterns like:

- useReducer for complex state
- useCallback for performance
- useMemo for expensive calculations
    `,
    author: {
      name: 'Michael Chen',
      avatar: 'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      role: 'Senior Developer'
    },
    date: '2024-02-28',
    readTime: '12 min',
    category: 'React',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    tags: ['React', 'JavaScript', 'Web Development']
  }
];