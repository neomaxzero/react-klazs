import { defaults, omit, isObject } from 'lodash';

const defaultOptions = {
  propToOverride: 'overrideClasses'
};

const defaultProps = {
  innerClasses: true
};

const overrider = (options = defaultOptions) => (innerStyles, props) => {
  const { propToOverride } = options;
  
  if (!props[propToOverride]) {
    return innerStyles;
  }

  const externalClassnames = defaults(props[propToOverride], defaultProps);


  if (!externalClassnames.innerClasses) {
    return omit(externalClassnames, 'innerClasses');
  }

  const extendedClasses = Object.keys(innerStyles)
    .map(sty => {
      const currExternalClassnames = externalClassnames[sty];

      let addClass = '';
      if (!!currExternalClassnames) {
        if (isObject(currExternalClassnames)) {
          addClass = ` ${currExternalClassnames.className}`;
        } else {
          addClass = ` ${currExternalClassnames}`;
        }
      }

      let internalClass = `${innerStyles[sty]}`;
      if (
        isObject(currExternalClassnames) &&
        !currExternalClassnames.innerClasses
      ) {
        internalClass = '';
        addClass = addClass.substring(1);
      }

      return { [sty]: `${internalClass}${addClass}` };
    })
    .reduce((carrier, sty) => {
      return {
        ...carrier,
        ...sty
      };
    }, {});
  return extendedClasses;
};

export default overrider();

export const klazsFactory = overrider;
