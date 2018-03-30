import klazs, { klazsFactory } from '../lib';

describe('React Klazs', () => {
  const currentClasses = {
    textPrimary: 'textPrimary_hashyBoy',
    otroGato: 'anotherCat'
  };
  // beforeEach(() => {
  //   const currentClasses = {
  //     textPrimary: "textPrimary"
  //   };
  // });
  it('override classes', () => {
    const myProps = {
      name: 'klazs',
      overrideClasses: {
        textPrimary: 'myNewPrimaryText'
      }
    };
    const klazsOutput = {
      textPrimary: 'textPrimary_hashyBoy myNewPrimaryText',
      otroGato: 'anotherCat'
    };
    expect(klazs(currentClasses, myProps)).toEqual(klazsOutput);
  });
  it('return current classes in case no valid options provided', () => {
    const myProps = {
      name: 'klazs',
      overrideClasses: {
        banana: 'myNewPrimaryText'
      }
    };
    const klazsOutput = {
      textPrimary: 'textPrimary_hashyBoy',
      otroGato: 'anotherCat'
    };
    expect(klazs(currentClasses, myProps)).toEqual(klazsOutput);
  });
  it('return current classes if no overridClasses provided', () => {
    const myProps = {
      name: 'klazs',
    };
    const klazsOutput = {
      textPrimary: 'textPrimary_hashyBoy',
      otroGato: 'anotherCat'
    };
    expect(klazs(currentClasses, myProps)).toEqual(klazsOutput);
  });
  it('return current classes if empty override options', () => {
    const myProps = {
      name: 'klazs',
      overrideClasses: {
      }
    };
    const klazsOutput = {
      textPrimary: 'textPrimary_hashyBoy',
      otroGato: 'anotherCat'
    };
    expect(klazs(currentClasses, myProps)).toEqual(klazsOutput);
  });
  it('return current options if no classes to override', () => {
    const myProps = {
      name: 'klazs',
    };
    const klazsOutput = {
      textPrimary: 'textPrimary_hashyBoy',
      otroGato: 'anotherCat'
    };
    expect(klazs(currentClasses, myProps)).toEqual(klazsOutput);
  });
  it('only external classes if no internal classes desired', () => {
    const myProps = {
      name: 'klazs',
      overrideClasses: {
        textPrimary: 'myNewPrimaryText',
        innerClasses: false,
      }
    };
    const klazsOutput = {
      textPrimary: 'myNewPrimaryText',
    };
    expect(klazs(currentClasses, myProps)).toEqual(klazsOutput);
  });
  it('only external classes in specific item', () => {
    const myProps = {
      name: 'klazs',
      overrideClasses: {
        textPrimary: { className:'myNewPrimaryText' , innerClasses: false },
      }
    };
    const klazsOutput = {
      textPrimary: 'myNewPrimaryText',
      otroGato: 'anotherCat'
    };
    expect(klazs(currentClasses, myProps)).toEqual(klazsOutput);
  });
});

describe('React Klazs Factory', () => {
  describe('allPropsComponent', () => {
    it('only use styles and dont dive in object', () => {
      const klazsCustom = klazsFactory({ allPropsComponent: false });
      const currentClasses = {
        textPrimary: 'textPrimary_hashyBoy',
        otroGato: 'anotherCat'
      }; 
      const myProps = {
        textPrimary: 'myNewPrimaryText',
      };
      const klazsOutput = {
        textPrimary: 'textPrimary_hashyBoy myNewPrimaryText',
        otroGato: 'anotherCat'
      };
      expect(klazsCustom(currentClasses, myProps)).toEqual(klazsOutput);
    })
  });
});