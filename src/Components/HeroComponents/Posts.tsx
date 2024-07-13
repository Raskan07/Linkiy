import PostCard from "./PostCard"
import { db } from "../../api/firebase"
import {getDocs,collection} from "firebase/firestore"
import { SetStateAction, useEffect, useState } from "react";


function Posts() {

  const [posts, setPosts] = useState<any>([]);
  console.log("posts",posts);

  useEffect(() => {
    const getData = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "Posts"));
        const fetchedPosts: SetStateAction<any> = [];

        querySnapshot.forEach((doc) => {
          fetchedPosts.push(doc.data()); 
        });

        setPosts(fetchedPosts); 
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    getData(); 
  }, []); 


  return (
    <div className="w-full items-center mt-[20px]">
      {
        posts.map((post:any) => (
          <PostCard key={post.id} post={post} />
        ))
      }
    </div>
  )
}

export default Posts
