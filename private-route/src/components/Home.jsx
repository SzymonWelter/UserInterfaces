import React from "react";
import {authenticationService} from 'services';
export function Home() {
  return (
    <div>
      <h1>Home</h1>
      <div>
        <button onClick={authenticationService.logout}>Log out</button>
      </div>
    </div>
  );
}
