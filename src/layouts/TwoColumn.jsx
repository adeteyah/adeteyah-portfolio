import React from 'react';
import { Outlet } from 'react-router-dom';
import * as My from '../components';

function TwoColumn() {
  return (
    <div className="flex">
      <div className="w-sm">
        <div className="h-svh sticky top-0 p-4">
          <My.GridY className="flex flex-col justify-between h-full">
            <My.GridY className="gap-8">
              <My.Image src="https://placehold.co/500x500" />
              <My.GridY className="gap-2">
                <My.Title>Aditiya Rachman</My.Title>
                <My.Paragraph>
                  I’m a UX designer. I’m passionate about creating usable
                  digital products. I have worked with incredibly talented
                  people across different companies.
                </My.Paragraph>
              </My.GridY>
            </My.GridY>
            <My.GridY className="gap-8">
              <My.GridX className="gap-2 justify-between">
                <My.Button>CV</My.Button>
                <My.GridX className="gap-2">
                  <My.Button>Gh</My.Button>
                  <My.Button>X</My.Button>
                </My.GridX>
              </My.GridX>
            </My.GridY>
          </My.GridY>
        </div>
      </div>
      <div className="w-full bg-[red]">
        <Outlet />
      </div>
    </div>
  );
}

export default TwoColumn;
