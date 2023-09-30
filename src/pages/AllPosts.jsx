import { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Cont, PostCard } from "../components";

function AllPosts() {
  const [posts, setPosts] = useState([]);
  useEffect(() => {}, []);
  appwriteService.getPosts([]).then((post) => {
    if (post) {
      setPosts(post.documents);
    }
  });
  return (
    <div className="w-full py-8">
      <Cont>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard post={post} />
            </div>
          ))}
        </div>
      </Cont>
    </div>
  );
}

export default AllPosts;
