import React from "react";
import klazs from "../../lib";

const styles = {
  textPrimary: "textPrimary"
};

const Hello = props => {
  const { children } = props;
  const myKlazs = klazs(styles, props);

  return <h2 className={myKlazs.textPrimary}> {children}</h2>;
};

export default Hello;
