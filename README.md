<h4 align="center" styles="font-weight: 200;">
  React
  <br>
  
  <img src="https://github.com/neomaxzero/react-klazs/blob/master/Klazs-logo.png?raw=true" alt="React-klazs logo" title="klazs logo" width="280">
  <br>
</h1>

[![Build Status](https://travis-ci.org/neomaxzero/react-klazs.svg?branch=master)](https://travis-ci.org/neomaxzero/react-klazs)
[![Coverage Status](https://coveralls.io/repos/github/neomaxzero/react-klazs/badge.svg?branch=master)](https://coveralls.io/github/neomaxzero/react-klazs?branch=master)

Opinionated utility to override CSS Modules.

## Demo & Examples

## Installation

```js
yarn add react-klazs
```
## Usage 

```js
// Paragraph.js

import klazs from 'react-klazs';
const styles = {
    textPrimary: 'innerText',
}
const Paragraph = props => {
  const { children } = props;
  const myKlazs = klazs(styles, props);

  return <p className={myKlazs.textPrimary}> {children}</p>;
};

```

Then you can override all the classes inside your component from the props. 

```js
import Paragraph from './Paragraph';

const CoolParagraph = () => 
    (<Paragraph
      overrideClasses={{
        textPrimary: "textImportant"
      }}
    >
        React Klazs is awesome. Dan abramov and Sophie Bits recomended without even knowing.
    </Paragraph>)
```

The resulting CSS class for the Component will be the merged css classes for that tag.

# License

MIT Licensed. Copyright (c)  | Neomaxzero.
