import { ArrowRight, Calendar, Clock, ChevronRight } from "lucide-react";
import Link from "next/link";

const blogPosts = [
  {
    id: 1,
    title: "Why Every Small Business Needs a Modern Website",
    excerpt:
      "Your website is your 24/7 salesperson. In today's digital-first world, a slow or outdated site actively drives customers straight to your competitors. Here is why an upgrade is your best ROI.",
    category: "Business Growth",
    date: "Oct 12, 2023",
    readTime: "4 min read",
    slug: "#",
    featured: true,
  },
  {
    id: 2,
    title: "5 Mistakes That Make Visitors Leave Your Website",
    excerpt:
      "From slow loading times to confusing navigation and hidden contact forms, discover the top conversion killers that are costing you leads—and exactly how to fix them today.",
    category: "UI/UX Design",
    date: "Oct 28, 2023",
    readTime: "5 min read",
    slug: "#",
    featured: false,
  },
  {
    id: 3,
    title: "How Much Does a Business Website Cost?",
    excerpt:
      "Are you overpaying for a template? We break down the real costs of web development, from cheap DIY builders to custom, scalable enterprise platforms so you can budget properly.",
    category: "Strategy",
    date: "Nov 05, 2023",
    readTime: "7 min read",
    slug: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Django vs. WordPress: Which is Right for You?",
    excerpt:
      "Choosing the right tech stack is crucial. We compare WordPress's ease of use and plugin ecosystem with Django's raw computing power, security, and scalability for growing SaaS businesses.",
    category: "Development",
    date: "Nov 14, 2023",
    readTime: "6 min read",
    slug: "#",
    featured: false,
  },
  {
    id: 5,
    title: "What Makes a Website Convert?",
    excerpt:
      "Traffic is useless if it doesn't convert. Learn the psychology of user interface design, effective Call-to-Actions (CTAs), and the trust signals that turn casual visitors into paying clients.",
    category: "Marketing",
    date: "Nov 22, 2023",
    readTime: "5 min read",
    slug: "#",
    featured: false,
  },
];

export default function BlogPage() {
  const featuredPost = blogPosts.find((post) => post.featured);
  const regularPosts = blogPosts.filter((post) => !post.featured);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white pt-32 pb-24 px-4 md:px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm mb-6">
            <span className="text-sm font-medium text-blue-400">
              Insights & Articles
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
            The <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Incodet</span> Blog
          </h1>
          <p className="text-lg text-gray-400 max-w-2xl">
            Expert advice on software development, digital strategy, and scaling your business with modern technology.
          </p>
        </div>

        {/* Featured Post (Hero) */}
        {featuredPost && (
          <div className="mb-16 group relative rounded-[2rem] bg-gradient-to-br from-[#1a1a1a] to-[#121212] border border-white/10 overflow-hidden hover:border-white/20 transition-all duration-500">
            <div className="absolute inset-0 bg-blue-500/5 group-hover:bg-blue-500/10 transition-colors duration-500" />
            <div className="relative p-8 md:p-12 lg:p-16 flex flex-col md:flex-row gap-10 items-center">
              <div className="flex-1 space-y-6">
                <div className="flex items-center gap-4 text-sm font-medium text-gray-400">
                  <span className="text-blue-400 bg-blue-400/10 px-3 py-1 rounded-full">
                    {featuredPost.category}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-4 h-4" />
                    {featuredPost.date}
                  </div>
                  <div className="flex items-center gap-1.5 hidden sm:flex">
                    <Clock className="w-4 h-4" />
                    {featuredPost.readTime}
                  </div>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold leading-tight group-hover:text-blue-400 transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-gray-400 leading-relaxed max-w-2xl">
                  {featuredPost.excerpt}
                </p>
                <Link
                  href={featuredPost.slug}
                  className="inline-flex items-center gap-2 text-white font-semibold hover:text-blue-400 transition-colors pt-4"
                >
                  Read Full Article <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        )}

        {/* Grid of Remaining Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {regularPosts.map((post) => (
            <div
              key={post.id}
              className="group bg-[#121212] rounded-3xl p-8 border border-white/5 hover:border-white/10 hover:bg-[#161616] transition-all duration-300 flex flex-col h-full"
            >
              <div className="flex items-center gap-4 text-xs font-medium text-gray-500 mb-6">
                <span className="text-purple-400 bg-purple-400/10 px-3 py-1 rounded-full">
                  {post.category}
                </span>
                <div className="flex items-center gap-1.5">
                  <Calendar className="w-3.5 h-3.5" />
                  {post.date}
                </div>
              </div>
              
              <h3 className="text-2xl font-semibold mb-4 group-hover:text-purple-400 transition-colors line-clamp-2">
                {post.title}
              </h3>
              
              <p className="text-gray-400 leading-relaxed mb-8 flex-grow">
                {post.excerpt}
              </p>
              
              <Link
                href={post.slug}
                className="inline-flex items-center gap-2 text-sm font-semibold text-gray-300 group-hover:text-white transition-colors mt-auto"
              >
                Read Article 
                <div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-purple-500 transition-colors">
                  <ChevronRight className="w-4 h-4 text-white" />
                </div>
              </Link>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}