import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import WorkTogether from "../WorkTogether/WorkTogether";

const BlogPosts = () => {
  const { postId } = useParams(); // Get post ID from URL parameters
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await fetch(
          `http://localhost/wordpress/wp-json/wp/v2/posts/${postId}?_embed`, // Fetch post with embedded data
        );
        const data = await response.json();
        setPost(data);
      } catch (error) {
        console.error("Error fetching post:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [postId]);

  if (loading) return <p>Loading...</p>;
  if (!post) return <p>Post not found.</p>;

  // Extract the featured image URL from the post's embedded data
  const featuredImage = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url;

  return (
    <>
      <div>
        {featuredImage && (
          <div className="overflow-hidden rounded-[16px]">
            <img src={featuredImage} alt="Post image" />
          </div>
        )}

        <div className="my-[16px] flex items-center justify-between text-White3">
          <span>{new Date(post.date).toLocaleDateString()}</span>
          <span>{new Date(post.date).toLocaleTimeString()}</span>
        </div>

        <h3 className="mb-[5rem] text-[5rem] font-bold leading-[6rem]">
          {post.title.rendered}
        </h3>

        <div
          className="text-[1.8rem] leading-[2.52rem] text-White3"
          dangerouslySetInnerHTML={{ __html: post.content.rendered }}
        />

        <div className="pt-[120px]">
          <WorkTogether />
        </div>
      </div>
    </>
  );
};

export default BlogPosts;
