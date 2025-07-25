import React from 'react';
import { Link } from 'react-router-dom';
import * as My from '../';

function ItemPost({ imageUrl, title, desc, slug }) {
  return (
    <Link to={`/post/${slug}`} className="block hover:opacity-80 transition">
      <My.GridY>
        <My.Image src={imageUrl} />
        <My.GridY className="gap-1">
          <My.Title>{title}</My.Title>
          <My.Paragraph>{desc}</My.Paragraph>
        </My.GridY>
      </My.GridY>
    </Link>
  );
}

export default ItemPost;
