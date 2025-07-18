import React from 'react';
import Navbar from '../Components/Navbar'; // Assuming you have a Navbar
import Footer from '../Components/Footer'; // Assuming you have a Footer
import BlogCard from '../Components/Cards/BlogCard'; // Import the card
import Image from 'next/image'; // Import Next.js Image
import { FaArrowRight } from 'react-icons/fa';
import Link from 'next/link'; // Import Next.js Link

// --- Sample Data (Replace with actual data fetching) ---
interface BlogData {
  slug: string;
  imageUrl: string;
  title: string;
  date: string; // Use ISO format ideally (e.g., "2024-05-05")
  authorName?: string;
  authorImageUrl?: string;
}

const heroBlogData: BlogData = {
    slug: '10-romantic-sunset-dinners',
    imageUrl: 'https://images.unsplash.com/photo-1639244132045-94c307ff4bfc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmVhY2glMjBkaW5uZXJ8ZW58MHx8MHx8fDA%3D', // Replace with your image path
    title: '10 Romantic Sunset Dinners Around the World',
    date: '2024-05-01',
};

const featuredBlogsData: BlogData[] = [
  {
    slug: '4-days-trip-from-delhi',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1697730334768-6e65fa8fded0?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGRlbGhpJTIwdHJpcHxlbnwwfHwwfHx8MA%3D%3D', // Replace
    title: 'Looking For 4 Days Trip From Delhi?',
    date: '2024-04-05',
    authorName: 'Jyoti Singh',
    authorImageUrl: '/authors/jyoti.jpg', // Replace
  },
  {
    slug: 'explore-dubai-5-star-hotels',
    imageUrl: 'https://images.unsplash.com/flagged/photo-1559717201-fbb671ff56b7?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8ZHViYWl8ZW58MHx8MHx8fDA%3D', // Replace
    title: 'Explore 5 Star Hotels In Dubai: Luxurious E...', // Truncated example
    date: '2024-04-27',
    // No author info shown in example
  },
  {
    slug: '7-reasons-visit-spiti-valley',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1661878309257-f4343940ce4d?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8c3BpdGl8ZW58MHx8MHx8fDA%3D', // Replace
    title: '7 Reasons to Visit Spiti Valley',
    date: '2024-04-06',
     // No author info shown in example
  },
];

const recentBlogsData: BlogData[] = [
   {
    slug: '15-amazing-places-almaty',
    imageUrl: 'https://images.unsplash.com/photo-1659651117607-d2b397cf100f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWxtYXR5fGVufDB8fDB8fHww', // Replace
    title: 'Explore 15 Amazing Places to Visit in Almaty',
    date: '2024-04-19',
    authorName: 'Shazan Ali',
    authorImageUrl: '/authors/shazan.jpg', // Replace
  },
  //  {
  //   slug: '23-places-visit-baku',
  //   imageUrl: '/blog/featured2.jpg', // Replace
  //   title: '23 Best Places to Visit in Baku: The Ultimate Guide',
  //   date: '2024-04-05',
  // },
   {
    slug: 'darjeeling-may-weather',
    imageUrl: 'https://images.pexels.com/photos/634753/pexels-photo-634753.jpeg?auto=compress&cs=tinysrgb&w=1200', // Replace
    title: 'Darjeeling in May: Ideal Weather, Stunning Views, & More!',
    date: '2025-04-30', // Future date example
  },
   {
    slug: 'best-beaches-azerbaijan-2025',
    imageUrl: 'https://images.pexels.com/photos/50594/sea-bay-waterfront-beach-50594.jpeg?auto=compress&cs=tinysrgb&w=1200', // Replace
    title: 'Best Beaches in Azerbaijan to Visit in 2025',
    date: '2025-04-30', // Future date example
  },
   {
    slug: 'almaty-may-complete-guide',
    imageUrl: 'https://plus.unsplash.com/premium_photo-1731501020051-8ea84c8a16bc?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fGFsbWF0eSUyMHRyaXB8ZW58MHx8MHx8fDA%3D', // Replace
    title: 'Almaty in May: Your Complete Travel Guide to Weather,...',
    date: '2025-04-30', // Future date example
  },
   {
    slug: 'top-15-haunted-places',
    imageUrl: 'https://images.pexels.com/photos/13107081/pexels-photo-13107081.jpeg?auto=compress&cs=tinysrgb&w=1200', // Replace
    title: 'Top 15 Haunted Places in the World',
    date: '2025-04-30', // Future date example
  },
   {
    slug: 'top-20-places-himachal',
    imageUrl: 'https://images.unsplash.com/photo-1692719058797-2954b100c8fe?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aGltYWNoYWx8ZW58MHx8MHx8fDA%3D', // Replace
    title: 'Top 20 Places to visit in Himachal Pradesh',
    date: '2024-04-05',
  },
   {
    slug: 'rich-tastes-andaman-nicobar',
    imageUrl: 'https://images.unsplash.com/photo-1586053226626-febc8817962f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YW5kYW1hbnxlbnwwfHwwfHx8MA%3D%3D', // Replace
    title: 'Rich Tastes Of Andaman And Nicobar Food: A Culinary Adventure',
    date: '2024-11-22',
  },
];
// --- End Sample Data ---

const BlogPage: React.FC = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <Navbar />

      <main className="pt-8 pb-16"> {/* Add padding top/bottom */}

        {/* --- Hero Blog Section --- */}
        <section className="container mx-auto px-4 mb-16">
          <div className="flex flex-col md:flex-row items-center gap-8 lg:gap-12">
            {/* Text Content */}
            <div className="w-full md:w-1/2 lg:w-2/5">
              <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-3 inline-block border-b-4 border-green-600 pb-1">
                Travel Blogs
              </h1>
              <h2 className="text-xl sm:text-2xl font-semibold text-gray-700 mb-6 mt-4">
                {heroBlogData.title}
              </h2>
              <Link href={`/blog/${heroBlogData.slug}`} legacyBehavior>
                 <a className="inline-flex items-center px-4 py-2 border border-gray-400 rounded text-sm font-medium text-gray-700 hover:bg-gray-100 hover:border-gray-500 transition">
                  Read More
                  <FaArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Link>

            </div>
             {/* Image */}
             <div className="w-full md:w-1/2 lg:w-3/5">
                <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg"> {/* Maintain aspect ratio */}
                   <Image
                      src={heroBlogData.imageUrl}
                      alt={heroBlogData.title}
                      layout="fill"
                      objectFit="cover"
                      priority // Load hero image faster
                    />
                    {/* <Image src={heroBlogData.imageUrl} alt={heroBlogData.title} className="w-full h-full object-cover" /> */}
                </div>
             </div>
          </div>
        </section>

        {/* --- Featured Blogs Section --- */}
        {/* Note: Add carousel logic/library here if needed for arrows/sliding */}
        <section className="container mx-auto px-4 mb-16">
           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
             Featured Blogs
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
             {featuredBlogsData.map((blog) => (
               <BlogCard key={blog.slug} {...blog} />
             ))}
           </div>
           {/* Add carousel arrows here if implementing */}
        </section>

        {/* --- Recent Blogs Section --- */}
        <section className="container mx-auto px-4">
           <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
             Recent Blogs...
           </h2>
           <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
             {recentBlogsData.map((blog) => (
               <BlogCard key={blog.slug} {...blog} />
             ))}
           </div>
        </section>

      </main>

      <Footer />
       {/* Optional: Add fixed WhatsApp button if needed on this page too */}
       {/* <a href="..." className="fixed bottom-5 right-5 ..."> <FaWhatsapp size={24} /> </a> */}
    </div>
  );
};

export default BlogPage;