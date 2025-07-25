import React from 'react';
import { useParams } from 'react-router-dom';

function WorkPage() {
  const { slug } = useParams();

  return (
    <div>
      <h1>Work Page</h1>
      <p>Slug: {slug}</p>
    </div>
  );
}

export default WorkPage;
