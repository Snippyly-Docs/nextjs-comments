"use client";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <div className={styles.Hero}>
      <div className={styles.HeroWrapper}>
        <div className={styles.HeroSubtitle}>
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill="#212134"
              d="m12 18.26-7.053 3.948 1.575-7.928L.587 8.792l8.027-.952L12 .5l3.386 7.34 8.027.952-5.935 5.488 1.575 7.928L12 18.26Z"
            ></path>
          </svg>
          New: Our AI integration just landed
        </div>
        <h1 className={styles.HeroTitle}>Think better with Acme</h1>
        <p className={styles.HeroDescription}>
          Never miss a note, idea, or connection.
        </p>
        <div className={styles.HeroButtons}>
          <button className="button">Get Started</button>
          <button className="button button-secondary">Read Docs</button>
        </div>
        <div className={styles.HeroScreenshot} />
      </div>
    </div>
  );
}
