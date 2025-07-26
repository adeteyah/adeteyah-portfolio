import React from "react";
import { Outlet } from "react-router-dom";
import * as My from "../components";

function TwoColumn() {
  return (
    <div className="grid md:flex">
      <nav className="w-full md:w-sm">
        <div className="p-4 md:hidden">
          <div className="flex gap-4">
            <My.Image src="https://placehold.co/25x25" />
            <My.Title>Aditiya Rachman</My.Title>
          </div>
        </div>
        <div className="sticky top-0 p-4 hidden md:block">
          <My.GridY>
            <My.Image src="https://placehold.co/500x500" />
            <My.GridY className="gap-2">
              <My.Title>Aditiya Rachman</My.Title>
              <My.Paragraph>
                I design and build applications with a focus on delivering
                smooth, intuitive user experiences
              </My.Paragraph>
            </My.GridY>
            <My.GridX className="gap-2">
              <My.Button>Hire me</My.Button>
              <My.Button>Copy email</My.Button>
            </My.GridX>
          </My.GridY>
        </div>
      </nav>
      <div className="w-full">
        <div className="p-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default TwoColumn;
