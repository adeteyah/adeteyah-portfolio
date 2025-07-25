import React from 'react';
import * as My from '../components';

function HomePage() {
  return (
    <div>
      <h1>HomePage</h1>
      <My.Image
        src="https://plus.unsplash.com/premium_photo-1675979807697-24195c443a7f?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGxhY2V8ZW58MHx8MHx8fDA%3D"
        alt="Placeholder"
        width={300}
        height={200}
        className="shadow-md"
      />
    </div>
  );
}

export default HomePage;
