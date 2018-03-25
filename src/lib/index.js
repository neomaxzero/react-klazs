const defaultOptions = {
  propToOverride: "overrideClasses"
};

const overrider = (options = defaultOptions) => (styles, props) => {
  const { propToOverride } = options;
  if (!props[propToOverride]) {
    console.info("No classes to override");
    return styles;
  }

  const extendedClasses = Object.keys(styles)
    .map(sty => {
      const addClass = !!props[propToOverride][sty]
        ? ` ${props[propToOverride][sty]}`
        : "";
      return { [sty]: `${styles[sty]}${addClass}` };
    })
    .reduce((carrier, sty) => {
      return {
        ...carrier,
        ...sty
      };
    }, {});
  console.log(extendedClasses);
  return extendedClasses;
};

export default overrider();

export const klassFactory = overrider;
