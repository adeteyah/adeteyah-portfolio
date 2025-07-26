import React from "react";
import * as My from "../components";
import works from "../data/work";

function HomePage() {
  return (
    <My.Grid cols={2} gap={8}>
      {works.map((work, index) => (
        <My.ItemPost
          key={index}
          imageUrl={work.imageUrl}
          title={work.title}
          desc={work.desc}
          slug={work.slug}
        />
      ))}
    </My.Grid>
  );
}

export default HomePage;
