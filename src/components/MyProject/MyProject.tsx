import { SitesPreview } from "../SitesPreview";
import "./MyProject.scss";

export const MyProject = () => {
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
