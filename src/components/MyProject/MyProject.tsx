import { useEffect } from "react";
import { SitesPreview } from "../SitesPreview";
import "./MyProject.scss";

export const MyProject = () => {
  useEffect(() => {
    const animatedElements = document.querySelectorAll(".my-project__card");

    const observerOptions: IntersectionObserverInit = {
      root: null,
      rootMargin: "-50px 0px -50px 0px",
      threshold: 0.1,
    };

    const observerCallback: IntersectionObserverCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
        } else {
          entry.target.classList.remove("is-visible");
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    animatedElements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="my-project">
      <h1 className="my-project__title">My project</h1>

      <div className="my-project__list">
        <div className="my-project__card">
          <div className="my-project__site">
            <SitesPreview link="https://trattoria.com.ua" />
          </div>
          <div className="my-project__link">
            <a
              href="https://trattoria.com.ua"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="my-project__card">
          <div className="my-project__site">
            <SitesPreview link="https://vladkugot.github.io/fascoShop/" />
          </div>
          <div className="my-project__link">
            <a
              href="https://vladkugot.github.io/fascoShop/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="my-project__card">
          <div className="my-project__site">
            <SitesPreview link="https://vladkugot.github.io/react_phone-catalog" />
          </div>
          <div className="my-project__link">
            <a
              href="https://vladkugot.github.io/react_phone-catalog"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="my-project__card">
          <div className="my-project__site">
            <SitesPreview link="https://vladkugot.github.io/page_bakery/" />
          </div>
          <div className="my-project__link">
            <a
              href="https://vladkugot.github.io/page_bakery/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="my-project__card">
          <div className="my-project__site">
            <SitesPreview link="https://vladkugot.github.io/layout_dia/" />
          </div>
          <div className="my-project__link">
            <a
              href="https://vladkugot.github.io/layout_dia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
        <div className="my-project__card">
          <div className="my-project__site">
            <SitesPreview link="https://vladkugot.github.io/PriceChecker/" />
          </div>
          <div className="my-project__link">
            <a
              href="https://vladkugot.github.io/PriceChecker/"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
