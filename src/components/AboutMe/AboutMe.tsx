import { useEffect, useState } from "react";
import { CoddingArea } from "../CoddingArea/CoddingArea";
import "./AboutMe.scss";

export const AboutMe = () => {
  const defaultText = "Front-end Developer & Web Architect";
  const [title, setTitle] = useState("");
  const [write, setWrite] = useState(true);
  const [reserv, setReserv] = useState(false);

  useEffect(() => {
    let timer;
    setWrite(true);

    if (reserv) {
      if (title.length > 0) {
        timer = setTimeout(() => {
          setTitle((prev) => prev.slice(0, -1));
        }, 150);
      } else {
        setWrite(false);
        timer = setTimeout(() => {
          setReserv(false);
        }, 20000);
      }
    } else {
      setWrite(true);
      if (title.length < defaultText.length) {
        timer = setTimeout(() => {
          setTitle(defaultText.slice(0, title.length + 1));
        }, 150);
      } else {
        setWrite(false);
        timer = setTimeout(() => {
          setReserv(true);
        }, 5000);
      }
    }

    return () => clearTimeout(timer);
  }, [title, reserv, defaultText]);

  useEffect(() => {
    const animatedElements = document.querySelectorAll(".animate-on-scroll");

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
    <section className="about-me">
      <div className="about-me__header">
        <h1 className="about-me__title">
          {title}
          {write && <span className="about-me__title--cursor">|</span>}
        </h1>

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

        <div className="about-me__description">
          Привіт! Я Влад — 21-річний Frontend / Full-Stack розробник початківець
          та практикуючий системний адміністратор. Маючи ступінь бакалавра з
          комп'ютерних наук та навчаючись на магістратурі з «Інженерії
          програмного забезпечення», я поєдную академічну базу з реальним
          практичним досвідом. Працюючи системним адміністратором, я щодня
          взаємодію з інфраструктурою, мережами та серверами. Це дає мені
          унікальну перевагу у веб-розробці: я розумію проєкт від першого
          пікселя в браузері до його розгортання, CI/CD та налаштування
          серверного середовища.
        </div>

        <ul className="about-me__tech-list">
          <li className="about-me__tech-list__item animate-on-scroll">
            <span>[Front-End]</span> Type-Safe & Pixel-Perfect: Пишу на React &
            TypeScript, обираючи сувору типізацію та чистий SCSS. Мої інтерфейси
            не ламаються при масштабуванні, а компоненти легко
            перевикористовувати.
          </li>
          <li className="about-me__tech-list__item animate-on-scroll">
            <span>[Infrastructure]</span> Full-System Control: Завдяки досвіду в
            системному адмініструванні (Linux/Proxmox/Networks), я розумію шлях
            коду від git push до конфігурації сервера, DNS та налаштування
            збереження даних.
          </li>
          <li className="about-me__tech-list__item animate-on-scroll">
            <span>[Automation]</span> Scripting & Optimization: Не люблю рутину,
            тому автоматизую все, що можна — від парсингу даних та написання
            Bash/Python скриптів до швидкої збірки та деплою.
          </li>
        </ul>
      </div>

      <div className="about-me__visual">
        <CoddingArea />
      </div>

      <div className="about-me__visual">
        <CoddingArea />
      </div>
    </section>
  );
};
