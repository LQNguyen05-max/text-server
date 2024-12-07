import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Home() {
  const [listOfPosts, setListOfPosts] = useState([]);
  let navigate = useNavigate();

  // useEffect is calling after rendering a get request to the server in posts.js
  useEffect(() => {
    axios.get('http://localhost:3001/posts').then((response) => {
      setListOfPosts(response.data);
    });
  }, []);

  return (
    <div>
      {listOfPosts.map((value, key) => {
        // returning the value of the title, description, and username of post
        return (
          <div
            className="post"
            onClick={() => {
              navigate(`/post/${value.id}`);
            }}
          >
            <div className="title"> {value.title} </div>
            <div className="body"> {value.postDescription} </div>
            <div className="footer"> {value.username} </div>
          </div>
        );
      })}
    </div>
  );
}

export default Home;
