"use client";

import Image from "next/image";
import { Calendar, User, ArrowRight } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      title: "How AI-Powered Food Scanning is Revolutionizing Nutrition Planning",
      excerpt:
        "Discover how OpenAI integration enables users to snap a photo and instantly get detailed nutritional information, transforming the way we track our diet.",
      author: "ARSTEG Tech Team",
      date: "Jan 15, 2025",
      category: "Health-Tech",
      image: "/images/food.jpg",
    },
    {
      title: "Top 5 Health-Tech APIs to Watch in 2025",
      excerpt:
        "An in-depth look at the most promising health-tech APIs including iHealth, Fitbit, Dexcom, and more that are shaping the future of digital health.",
      author: "Integration Experts",
      date: "Jan 10, 2025",
      category: "API Integration",
      image: "/images/health.jpg",
    },
    {
      title: "Scaling Legacy Systems with Modern .NET Core Solutions",
      excerpt:
        "Learn how we help businesses modernize their legacy applications while maintaining business continuity and improving performance.",
      author: "Development Team",
      date: "Jan 5, 2025",
      category: "Software Development",
      image: "/images/business.jpg",
    },
  ];

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Insights & <span className="gradient-text">Trends</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay updated with the latest in software development and health-tech
            innovations. Our blog covers industry trends, case studies, and tips
            to help your business thrive.
          </p>
        </div>

        {/* Blog Cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {posts.map((post, index) => (
            <article
              key={index}
              className="bg-card rounded-xl shadow-card hover:shadow-card-hover transition-all duration-300 hover:scale-105 animate-scale-in border border-border group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden rounded-t-xl">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-transparent" />
                <div className="absolute top-4 left-4">
                  <span className="px-2 py-1 bg-muted rounded-md text-xs font-medium text-muted-foreground">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Post Content */}
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors duration-300">
                  {post.title}
                </h3>
                <p className="text-muted-foreground mb-4 leading-relaxed text-sm">
                  {post.excerpt}
                </p>

                <div className="text-primary font-semibold flex items-center gap-2 group-hover:gap-3 transition-all duration-300 cursor-pointer">
                  Read More
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button
            className="inline-flex items-center justify-center px-6 py-3 text-lg font-semibold text-white gradient-hero rounded-[var(--radius)] hover:opacity-90 transition-[var(--transition-smooth)]"
          >
            See More Posts
          </button>
        </div>
      </div>
    </section>
  );
};

export default Blog;