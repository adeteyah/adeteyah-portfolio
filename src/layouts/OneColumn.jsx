import React from 'react';
import { Outlet } from 'react-router-dom';

function OneColumn() {
  return (
    <>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default OneColumn;
