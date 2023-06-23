import React from "react";
import styles from "../../styles/components/offerings/underline.module.scss";
export default function App({ text }) {
  return (
    <span className={`${styles.strong}`}>
      <strong>{text}</strong>
    </span>
  );
}
