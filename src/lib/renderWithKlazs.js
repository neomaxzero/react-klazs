import { Component } from 'react';
import { klazsFactory } from './klazs';

export default class RenderWithKlazs extends Component {
    render() {
        const { styles, overrideClasses } = this.props;
        
        const renderPropKlazs = klazsFactory({ allPropsComponent: false });
        const myKlazs = renderPropKlazs(styles, overrideClasses); 
        
        return this.props.render(myKlazs);    
    }
}
