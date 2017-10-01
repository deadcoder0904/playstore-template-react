import React from "react";

import styles from "./styles";

const Title = ({ name, headline }) => (
  <div style={styles.title}>
    <h1>{headline}</h1>
    <span>{name}</span>
  </div>
);

export default Title;
