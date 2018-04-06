import React from "react";
import './styles.css';
import { withKlazs } from "../../lib";

const styles = {
  titleMagic: "textPrimary"
};

const Title = props => {
  const { children, klazs } = props;

  return <p className={klazs.titleMagic}> {children}</p>;
};

export default withKlazs(styles, Title);
