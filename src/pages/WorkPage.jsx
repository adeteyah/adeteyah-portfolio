import React from "react";
import { useParams } from "react-router-dom";
import works from "../data/work";

function WorkPage() {
  const { slug } = useParams();
  const work = works.find((item) => item.slug === slug);

  if (!work) {
    return (
      <div>
        <h1>404 - Work Not Found</h1>
        <p>The requested work with slug "{slug}" does not exist.</p>
      </div>
    );
  }

  return (
    <div>
      <h1>{work.title}</h1>
      <img src={work.imageUrl} alt={work.title} />
      <p>{work.desc}</p>
    </div>
  );
}

export default WorkPage;
