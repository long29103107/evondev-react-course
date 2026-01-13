import Heading from "@/components/layout/Heading";
// import { db } from "@/firebase-app/firebase-config";
// import {
//   collection,
//   limit,
//   onSnapshot,
//   query,
//   where,
// } from "firebase/firestore";
import PostNewestItem from "@/module/post/PostNewestItem";
import PostNewestLarge from "@/module/post/PostNewestLarge";
// import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { v4 } from "uuid";

const posts = [
  {
    id: "post-1",
    title: "Learn React the Right Way",
    slug: "learn-react-the-right-way",
    image:
      "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    createdAt: {
      seconds: Math.floor(Date.now() / 1000),
    },
    category: {
      name: "Frontend",
      slug: "frontend",
    },
    user: {
      username: "john-doe",
      fullname: "John Doe",
    },
  },
  {
    id: "post-2",
    title: "Styled Components vs Tailwind",
    slug: "styled-components-vs-tailwind",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    createdAt: {
      seconds: Math.floor(Date.now() / 1000) - 86400,
    },
    category: {
      name: "CSS",
      slug: "css",
    },
    user: {
      username: "jane-smith",
      fullname: "Jane Smith",
    },
  },
  {
    id: "post-3",
    title: "Advanced React Architecture",
    slug: "advanced-react-architecture",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    createdAt: {
      seconds: Math.floor(Date.now() / 1000) - 172800,
    },
    category: {
      name: "React",
      slug: "react",
    },
    user: {
      username: "long-nguyen",
      fullname: "Long Nguyễn",
    },
  },
  {
    id: "post-4",
    title: "Advanced React Architecture",
    slug: "advanced-react-architecture",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475",
    createdAt: {
      seconds: Math.floor(Date.now() / 1000) - 172800,
    },
    category: {
      name: "React",
      slug: "react",
    },
    user: {
      username: "long-nguyen",
      fullname: "Long Nguyễn",
    },
  }
];


const HomeNewestStyles = styled.div`
  .layout {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    grid-gap: 40px;
    margin-bottom: 40px;
    align-items: start;
  }
  .sidebar {
    padding: 28px 20px;
    background-color: #f3edff;
    border-radius: 16px;
  }
  @media screen and (max-width: 1023.98px) {
    .layout {
      grid-template-columns: 100%;
    }
    .sidebar {
      padding: 14px 10px;
    }
  }
`;

const HomeNewest = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   const colRef = collection(db, "posts");
  //   const queries = query(
  //     colRef,
  //     where("status", "==", 1),
  //     where("hot", "==", false),
  //     limit(4)
  //   );
  //   onSnapshot(queries, (snapshot) => {
  //     const results = [];
  //     snapshot.forEach((doc) => {
  //       results.push({
  //         id: doc.id,
  //         ...doc.data(),
  //       });
  //     });
  //     setPosts(results);
  //   });
  // }, []);
  if (posts.length <= 0) return null;
  const [first, ...other] = posts;
  return (
    <HomeNewestStyles className="home-block">
      <div className="container">
        <Heading>Latest posts</Heading>
        <div className="layout">
          <PostNewestLarge data={first}></PostNewestLarge>
          <div className="sidebar">
            {other.length > 0 &&
              other.map((item) => (
                <PostNewestItem key={v4()} data={item}></PostNewestItem>
              ))}
          </div>
        </div>
      </div>
    </HomeNewestStyles>
  );
};

export default HomeNewest;
