import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Clock, Tag } from 'lucide-react';
import { format } from 'date-fns';
import { blogPosts } from '../data/blogData';
import { FadeIn } from '../components/animations/FadeIn';

export function BlogPage() {
  return (
    <div className="min-h-screen bg-gray-50 pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl">
              Our Blog
            </h1>
            <p className="mt-4 text-xl text-gray-600">
              Latest insights, tutorials, and updates from our team
            </p>
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post, index) => (
            <FadeIn key={post.id} delay={index * 0.1}>
              <Link to={`/blog/${post.id}`}>
                <motion.article
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-lg shadow-lg overflow-hidden"
                >
                  <div className="relative h-48">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm">
                      {post.category}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center mb-4">
                      <img
                        src={post.author.avatar}
                        alt={post.author.name}
                        className="h-10 w-10 rounded-full"
                      />
                      <div className="ml-3">
                        <p className="text-sm font-medium text-gray-900">{post.author.name}</p>
                        <p className="text-sm text-gray-500">{post.author.role}</p>
                      </div>
                    </div>
                    
                    <h2 className="text-xl font-semibold text-gray-900 mb-2">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 mb-4">{post.excerpt}</p>
                    
                    <div className="flex items-center justify-between text-sm text-gray-500">
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 mr-1" />
                        {post.readTime}
                      </div>
                      <div className="flex items-center">
                        <Tag className="h-4 w-4 mr-1" />
                        {format(new Date(post.date), 'MMM d, yyyy')}
                      </div>
                    </div>
                  </div>
                </motion.article>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}