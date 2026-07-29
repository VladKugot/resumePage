import React, { useEffect, useState } from "react";
import { CoddingArea } from "../CoddingArea/CoddingArea";
import "./AboutMe.scss";

export const AboutMe: React.FC = () => {
  const defaultText = "Front-end Developer & Web Architect";
  const [title, setTitle] = useState<string>("");

  useEffect(() => {
    let currentIndex = 0;

    const timer = setInterval(() => {
      if (currentIndex < defaultText.length) {
        const nextChar = defaultText.charAt(currentIndex);
        setTitle((prev) => prev + nextChar);
        currentIndex++;
      } else {
        clearInterval(timer);
      }
    }, 150);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="about-me">
      <div className="about-me__header">
        <h1 className="about-me__title">{title}</h1>

        <div className="about-me__status">
          <p className="about-me__status--point"></p>
          <p className="about-me__status--text">
            Open for New Opportunities & Freelance
          </p>
        </div>

        <p className="about-me__text">
          Розробляю сучасні, швидкі та чутливі веб-сайти й додатки на React,
          TypeScript та Node.js — від ідеї до деплою.
        </p>
      </div>
      <div className="about-me__grid-cont">
        <div className="about-me__content">
          <div className="about-me__actions">
            <a href="#projects" className="btn btn--primary">
              Переглянути проєкти
            </a>
            <a href="#contact" className="btn btn--secondary">
              Зв'язатися
            </a>
          </div>

          <div className="about-me__features">
            <div className="feature-badge">
              <div className="feature-badge__icon feature-badge__icon--cyan">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <span className="feature-badge__text">
                React & High Performance
              </span>
            </div>

            <div className="feature-badge">
              <div className="feature-badge__icon feature-badge__icon--purple">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <line x1="12" y1="18" x2="12.01" y2="18"></line>
                </svg>
              </div>
              <span className="feature-badge__text">
                Mobile-First & Responsive
              </span>
            </div>

            <div className="feature-badge">
              <div className="feature-badge__icon feature-badge__icon--green">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="12" cy="12" r="10"></circle>
                  <circle cx="12" cy="12" r="6"></circle>
                  <circle cx="12" cy="12" r="2"></circle>
                </svg>
              </div>
              <span className="feature-badge__text">Clean Architecture</span>
            </div>
          </div>
        </div>

        <div className="about-me__visual">
          <CoddingArea />
        </div>
      </div>
    </section>
  );
};
