"use client"

import { useState } from "react";
import "./page.scss";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <main className="main">
      <header className="header">
        <div className="header-container">
          <div className="header-left">
            <a href="/">
              <img src="/logo.svg" alt="logo" />
            </a>
          </div>
          <div className={`${isOpen ? "header-right active" : "header-right"}`}>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About me</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
            <a className="cv" href="#">
              Download CV
            </a>
          </div>
          <div className="header-burger"
          onClick={() => setIsOpen(!isOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </div>
        </div>
      </header>
    </main>
  );
}
