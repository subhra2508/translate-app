import React from 'react';
import LanguageContexts from '../contexts/LanguageContexts';

class Button extends React.Component{

    static contextType = LanguageContexts;
    

    render(){
        const text = this.context === 'english'?'submit':'voorleggen';
        return <button className="ui button primary">{text}</button>
    }
}

export default Button;