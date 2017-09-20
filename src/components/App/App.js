import React, { Component } from "react";
import Parallax from "react-springy-parallax";

import Title from "../Title";
import styles from "./styles";

class App extends Component {
  render() {
    return (
      <Parallax ref="parallax" pages={3}>
        <Parallax.Layer
          offset={0}
          speed={1}
          style={{ backgroundColor: "#243B4A" }}
        />
        <Parallax.Layer
          offset={1}
          speed={1}
          style={{ backgroundColor: "#805E73" }}
        />
        <Parallax.Layer
          offset={2}
          speed={1}
          style={{ backgroundColor: "#87BCDE" }}
        />

        <Parallax.Layer
          offset={0}
          speed={0.5}
          style={styles.parallax}
          onClick={() => this.refs.parallax.scrollTo(1)}
        >
          <Title headline="Page 1" name="Click!" />
        </Parallax.Layer>

        <Parallax.Layer
          offset={1}
          speed={-0.1}
          style={styles.parallax}
          onClick={() => this.refs.parallax.scrollTo(2)}
        >
          <Title headline="Page 2" name="Another page..." />
        </Parallax.Layer>

        <Parallax.Layer
          offset={2}
          speed={0.5}
          style={styles.parallax}
          onClick={() => this.refs.parallax.scrollTo(0)}
        >
          <Title headline="Page 3" name="The end." />
        </Parallax.Layer>
      </Parallax>
    );
  }
}

export default App;
