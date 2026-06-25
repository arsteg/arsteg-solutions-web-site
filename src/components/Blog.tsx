"use client";

import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowRight, ArrowUpRight, Clock } from "lucide-react";
import { motion } from "framer-motion";

const posts = [
  {
    slug: "ai-powered-enterprise-software",
    title: "How AI-Powered Solutions are Transforming Enterprise Software",
    excerpt:
      "Discover how OpenAI and machine learning integrations enable businesses to automate workflows and deliver personalized experiences at scale.",
    date: "Jan 15, 2025",
    readTime: "8 min read",
    category: "AI & ML",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=90",
    featured: true,
  },
  {
    slug: "building-scalable-apis",
    title: "Building Scalable APIs: Lessons from 150+ Integrations",
    excerpt:
      "API architecture patterns, authentication strategies, and performance optimizations from hundreds of third-party integrations.",
    date: "Jan 10, 2025",
    readTime: "6 min read",
    category: "Engineering",
    image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=90",
    featured: false,
  },
  {
    slug: "legacy-to-cloud-migration",
    title: "From Legacy to Cloud: A Migration Success Story",
    excerpt:
      "How we helped a 15-year-old insurance platform migrate to cloud-native architecture with zero downtime.",
    date: "Jan 5, 2025",
    readTime: "5 min read",
    category: "Case Study",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=90",
    featured: false,
  },
];

export default function Blog() {
  const featuredPost = posts[0];
  const regularPosts = posts.slice(1);

  return (
    <section id="blog" className="relative py-24 lg:py-32 bg-white overflow-hidden">
      <div className="container">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-12"
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-sm font-medium text-gray-600 mb-6">
              <span className="h-1.5 w-1.5 rounded-full bg-blue-600"></span>
              Insights
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
              Latest{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                thinking
              </span>
            </h2>

            <p className="text-lg text-gray-600 max-w-xl">
              Perspectives on software development, engineering best practices, and industry trends.
            </p>
          </div>

          <Link
            href="/blog"
            className="group inline-flex items-center gap-2 text-gray-600 font-semibold hover:text-gray-900 transition-colors"
          >
            View all posts
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>

        {/* Featured Post */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10"
        >
          <Link href={`/blog/${featuredPost.slug}`} className="group block">
            <div className="relative rounded-3xl overflow-hidden bg-gray-900">
              <div className="grid lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                  <Image
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent lg:bg-gradient-to-l" />
                </div>

                <div className="relative p-8 lg:p-12 lg:pr-24">
                  <div className="flex items-center gap-4 mb-6">
                    <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs font-bold text-blue-400">
                      {featuredPost.category}
                    </span>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Calendar className="h-4 w-4" />
                      {featuredPost.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-gray-400">
                      <Clock className="h-4 w-4" />
                      {featuredPost.readTime}
                    </div>
                  </div>

                  <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {featuredPost.title}
                  </h3>

                  <p className="text-gray-400 mb-8 leading-relaxed">
                    {featuredPost.excerpt}
                  </p>

                  <div className="inline-flex items-center gap-2 text-white font-semibold group-hover:gap-3 transition-all">
                    Read article
                    <ArrowRight className="h-5 w-5" />
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>

        {/* Regular Posts */}
        <div className="grid gap-6 md:grid-cols-2">
          {regularPosts.map((post, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <Link href={`/blog/${post.slug}`} className="group flex flex-col sm:flex-row gap-6 p-6 rounded-2xl bg-gray-50 hover:bg-white hover:shadow-lg transition-all">
                <div className="relative w-full sm:w-48 h-48 sm:h-32 flex-shrink-0 rounded-xl overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    width={200}
                    height={150}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>

                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {post.category}
                    </span>
                    <span className="text-xs text-gray-500">{post.readTime}</span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors line-clamp-2">
                    {post.title}
                  </h3>

                  <p className="text-sm text-gray-600 line-clamp-2 mb-4">
                    {post.excerpt}
                  </p>

                  <div className="flex items-center gap-1 text-sm font-medium text-gray-500 group-hover:text-gray-900 transition-colors">
                    Read more
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
