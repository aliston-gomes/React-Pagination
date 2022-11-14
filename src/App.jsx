import React, { useEffect, useState } from "react";
import Posts from "./Components/Posts";
import Pagination from "./Components/Pagination";
import axios from "axios";

const App = () => {
  let [posts, setPosts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [currentPage, setCurrentPage] = useState(1);
  let [postsPerPage,setPostsPerPage] = useState(10);

  useEffect(() => {
    try {
      let fetchPosts = async () => {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setPosts(res.data);
        setLoading(true);
        console.log(res);
      };
      setLoading(false);
      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  }, []);
  //   console.log(posts);
  // GET CURRENT POSTS
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // CHANGE PAGE
  const paginate = pageNumber => setCurrentPage(pageNumber);
  return (
    <div>
      {/* <h1 posts={posts} loading={loading}>ALISTON GOMES</h1> */}
      <Posts attr={{ currentPosts, loading }} />
          <Pagination
        postsPerPage={postsPerPage}
        totalPosts={posts}
        paginate={paginate}
      />
    </div>
  );
};

export default App;
