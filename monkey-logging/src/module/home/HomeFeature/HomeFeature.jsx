import Heading from '@/components/layout/Heading';
// import { db } from "@/firebase-app/firebase-config";
// import {
//   collection,
//   limit,
//   onSnapshot,
//   query,
//   where,
// } from "firebase/firestore";
import PostFeatureItem from '@/module/post/PostFeatureItem';
// import React, { useEffect, useState } from "react";

const posts = [
  {
    id: 'post-1',
    title: 'Learn React the Right Way',
    slug: 'learn-react-the-right-way',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
    createdAt: {
      seconds: Math.floor(Date.now() / 1000),
    },
    category: {
      name: 'Frontend',
      slug: 'frontend',
    },
    user: {
      username: 'john-doe',
      fullname: 'John Doe',
    },
  },
  {
    id: 'post-2',
    title: 'Styled Components vs Tailwind',
    slug: 'styled-components-vs-tailwind',
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c',
    createdAt: {
      seconds: Math.floor(Date.now() / 1000) - 86400,
    },
    category: {
      name: 'CSS',
      slug: 'css',
    },
    user: {
      username: 'jane-smith',
      fullname: 'Jane Smith',
    },
  },
  {
    id: 'post-3',
    title: 'Advanced React Architecture',
    slug: 'advanced-react-architecture',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475',
    createdAt: {
      seconds: Math.floor(Date.now() / 1000) - 172800,
    },
    category: {
      name: 'React',
      slug: 'react',
    },
    user: {
      username: 'long-nguyen',
      fullname: 'Long Nguyễn',
    },
  },
];

import styled from 'styled-components';
const HomeFeatureStyles = styled.div``;

const HomeFeature = () => {
  // const [posts, setPosts] = useState([]);
  // useEffect(() => {
  //   // const colRef = collection(db, "posts");
  //   // const queries = query(
  //   //   colRef,
  //   //   where("status", "==", 1),
  //   //   where("hot", "==", true),
  //   //   limit(3)
  //   // );
  //   // onSnapshot(queries, (snapshot) => {
  //   //   const results = [];
  //   //   snapshot.forEach((doc) => {
  //   //     results.push({
  //   //       id: doc.id,
  //   //       ...doc.data(),
  //   //     });
  //   //   });
  //     setPosts(fakePosts);
  // }, []);
  if (posts.length <= 0) return null;
  return (
    <HomeFeatureStyles className="home-block">
      <div className="container">
        <Heading>Featured posts</Heading>
        <div className="grid-layout">
          {posts.map((post) => (
            <PostFeatureItem key={post.id} data={post} />
          ))}
        </div>
      </div>
    </HomeFeatureStyles>
  );
};

export default HomeFeature;
