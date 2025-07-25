import React from 'react';
import * as My from '../';

function ItemPost({ imageUrl, title, desc }) {
  return (
    <My.GridY>
      <My.Image src={imageUrl} />
      <My.GridY className="gap-1">
        <My.Title>{title}</My.Title>
        <My.Paragraph>{desc}</My.Paragraph>
      </My.GridY>
    </My.GridY>
  );
}

export default ItemPost;
