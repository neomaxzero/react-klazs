import React from "react";
import klazs from "../../lib";

const styles = {
  textPrimary: "textPrimary"
};

export default props => {
  const { children } = props;
  const myKlazs = klazs(styles, props);

  return <h2 className={myKlazs.textPrimary}> {children}</h2>;
};
