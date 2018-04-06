import React, { Component } from 'react';
import klazs from './klazs';

const withKlazs 
    = (styles, WrappedComponent) => class withKlazs extends Component {
    render() {
        return <WrappedComponent {...this.props} klazs={klazs(styles, this.props)}/>    
    }
}

export default withKlazs;