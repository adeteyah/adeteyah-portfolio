import React from 'react';
import * as My from '../components';

const works = [
  {
    imageUrl: 'https://placehold.co/600x600?text=One',
    title: 'Post One',
    desc: 'Lorem ipsum dolor sit amet.',
    slug: 'text'
  },
  {
    imageUrl: 'https://placehold.co/600x600?text=Two',
    title: 'Post Two',
    desc: 'Consectetur adipiscing elit.',
    slug: 'work2'
  },
  {
    imageUrl: 'https://placehold.co/600x600?text=Three',
    title: 'Post Three',
    desc: 'Sed do eiusmod tempor.',
    slug: 'work3'
  }
];

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
