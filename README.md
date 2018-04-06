React Klazs
============
[logo]: ./klazs-logo.png "Logo Title Text 2"
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