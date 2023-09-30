import { useEffect, useState } from "react";
import appwriteService from "../appwrite/config";
import { Cont, PostCard } from "../components";

function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((post) => {
      if (post) {
        setPosts(post.documents);
      }
    });
  }, []);
  if (posts.length === 0) {
    return (
      <div className="w-full py-8 mt-4 text-center">
        <Cont>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Log in to read posts
              </h1>
            </div>
          </div>
        </Cont>
      </div>
    );
  }

  return (
    <div className="w-full py-8">
      <Cont>
        <div className="flex flex-wrap">
          {posts.map((post) => (
            <div className="p-2 w-1/4" key={post.$id}>
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Cont>
    </div>
  );
}

export default Home;
