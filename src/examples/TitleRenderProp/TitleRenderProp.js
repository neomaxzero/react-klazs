import React from "react";
import { RenderWithKlazs } from "../../lib";
import './styles.css';

const styles = {
  titleMagic: "textPrimary"
};

const Title = props => {
  const { children, overrideClasses} = props;
  
  return <RenderWithKlazs 
    styles={styles} 
    overrideClasses={overrideClasses} 
    render={
      klazs => (<p className={klazs.titleMagic}>{children}</p>) 
    }
  />;
};

export default Title;
