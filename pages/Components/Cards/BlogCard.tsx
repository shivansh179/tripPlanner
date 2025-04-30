import React from 'react';
import Image from 'next/image'; // Use Next.js Image for optimization if using Next.js
import Link from 'next/link'; // Use Next.js Link for client-side routing

interface BlogCardProps {
  slug: string; // For linking to the full blog post page
  imageUrl: string;
  title: string;
  date: string;
  authorName?: string; // Optional author name
  authorImageUrl?: string; // Optional author image
}

const BlogCard: React.FC<BlogCardProps> = ({
  slug,
  imageUrl,
  title,
  date,
  authorName,
  authorImageUrl,
}) => {
  // Fallback date formatting if needed
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });

  return (
    // Use Next.js Link for optimal navigation
    <Link href={`/blog/${slug}`} legacyBehavior>
      <a className="block group bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
        {/* Image Container */}
        <div className="relative w-full h-48">
          {/* Using Next.js Image */}
          <Image
            src={imageUrl}
            alt={title}
            layout="fill" // Fills the container
            objectFit="cover" // Scales while maintaining aspect ratio, cropping if necessary
            className="transition-transform duration-300 group-hover:scale-105" // Subtle zoom on hover
          />
          {/* Or use standard img tag if not using Next.js Image */}
          {/* <img src={imageUrl} alt={title} className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105" /> */}
        </div>

        {/* Content */}
        <div className="p-4">
          <h3 className="font-semibold text-gray-800 text-md mb-2 leading-snug line-clamp-2 group-hover:text-green-700 transition-colors">
            {title}
          </h3>
          <div className="flex items-center text-xs text-gray-500">
            {authorImageUrl && authorName && (
              <div className="flex items-center mr-3">
                <div className="relative w-5 h-5 rounded-full overflow-hidden mr-1.5">
                   <Image
                      src={authorImageUrl}
                      alt={authorName}
                      layout="fill"
                      objectFit="cover"
                   />
                   {/* <img src={authorImageUrl} alt={authorName} className="w-full h-full object-cover" /> */}
                </div>
                <span>{authorName},</span>
              </div>
            )}
             {/* Fallback if no author, or just show date */}
             {!authorName && <span>Published on</span>}
            <time dateTime={date} className="ml-1">{formattedDate}</time>
          </div>
        </div>
      </a>
    </Link>
  );
};

export default BlogCard;