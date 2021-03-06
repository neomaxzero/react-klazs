import React from "react";
import { render } from "react-dom";
import Hello from "./examples/Hello/Hello";
import TitleHOC from './examples/TitleHOC/TItleHOC';
import TitleRenderProp from './examples/TitleRenderProp/TitleRenderProp';

const App = () => (
  <div className="root">
    <h1 className="libName">React Klazs</h1>
    <Hello> Change styles throught out your project in the same way</Hello>
    <Hello
      overrideClasses={{
        textPrimary: "textImportant"
      }}
    >
      Override your classes with style. (Pun intended)
    </Hello>
    <Hello
      overrideClasses={{
        textPrimary: "smallText",
        innerClasses: false,
      }}
    >
      Override destructively inner styles to have complete Control.
    </Hello>
    <TitleHOC
      overrideClasses={{
        titleMagic: "notReally",
      }}
    > HOC ready </TitleHOC>
    <TitleRenderProp
      overrideClasses={{
        titleMagic: "renderPropMagic",
      }}
    >
      RenderProp ready
    </TitleRenderProp> 
  </div>
);

render(<App />, document.getElementById("root"));
