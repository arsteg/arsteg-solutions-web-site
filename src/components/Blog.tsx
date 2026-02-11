"use client";

import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "How AI-Powered Solutions are Transforming Enterprise Software",
      excerpt:
        "Discover how OpenAI and machine learning integrations are enabling businesses to automate workflows, enhance decision-making, and deliver personalized experiences at scale.",
      author: "ARSTEG Tech Team",
      date: "Jan 15, 2025",
      category: "AI & ML",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80",
    },
    {
      title: "Building Scalable APIs: Lessons from 150+ Integrations",
      excerpt:
        "An in-depth look at API architecture patterns, authentication strategies, and performance optimizations we've learned from integrating with hundreds of third-party services.",
      author: "Integration Experts",
      date: "Jan 10, 2025",
      category: "Engineering",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=800&q=80",
    },
    {
      title: "From Legacy to Cloud: A Migration Success Story",
      excerpt:
        "Learn how we helped a 15-year-old insurance platform migrate to cloud-native architecture with zero downtime and 80% performance improvement.",
      author: "Development Team",
      date: "Jan 5, 2025",
      category: "Case Study",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&q=80",
    },
  ];

  return (
    <section id="blog" className="relative overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-white py-20 lg:py-28">
      {/* Subtle Background Blobs */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-32 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl" />
        <div className="absolute right-1/4 bottom-32 h-96 w-96 rounded-full bg-indigo-100/40 blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            Insights &{" "}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Trends
            </span>
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-lg text-gray-600 lg:text-xl">
            Stay updated with the latest in software development and health-tech innovations. Our blog covers industry trends, case studies, and tips to help your business thrive.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-16">
          {posts.map((post, index) => (
            <article
              key={index}
              className="group relative overflow-hidden rounded-3xl bg-white/70 shadow-lg backdrop-blur-sm ring-1 ring-gray-200/50 transition-all hover:scale-105 hover:shadow-2xl"
              
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
                {/* Category Badge */}
                <div className="absolute top-4 left-4 rounded-full bg-white/90 px-3 py-1.5 shadow-md ring-1 ring-gray-200/50 backdrop-blur-sm">
                  <span className="text-xs font-semibold text-gray-800">{post.category}</span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-8">
                {/* Meta */}
                <div className="mb-4 flex items-center gap-4 text-sm text-gray-600">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4 text-blue-600" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4 text-blue-600" />
                    <span>{post.author}</span>
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-3 text-xl font-bold text-gray-900 transition-colors group-hover:text-blue-600">
                  {post.title}
                </h3>

                {/* Excerpt */}
                <p className="mb-5 text-sm leading-relaxed text-gray-600 line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Read More */}
                <div className="flex items-center gap-2 text-blue-600 font-semibold text-sm transition-all group-hover:gap-3 cursor-pointer">
                  Read More
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button className="group inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all hover:scale-105 hover:shadow-2xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-blue-500/50">
            See More Posts
            <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>

      {/* Staggered fade-up animation */}
      <style jsx>{`
        @keyframes fadeUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        [style] {
          animation: fadeUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default Blog;