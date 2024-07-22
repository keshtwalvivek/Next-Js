"use client";
import React from "react";

function Footer() {
  return (
    <footer className="h-40 bg-blue-600">
      <div className="flex p-5 justify-around">
        <div className="text-center flex flex-col justify-center">
          <h1>Welcome to work manager</h1>
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cum
            necessitatibus suscipit dolorem enim autem eligendi obcaecati
          </p>
        </div>
        <div>
          <h1>Important Links</h1>
          <ul>
            <li>
              <a href={"#!"}>Facebook</a>
            </li>
            <li>
              <a href={"#!"}>Instagram</a>
            </li>
            <li>
              <a href={"#!"}>Linkedin</a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
