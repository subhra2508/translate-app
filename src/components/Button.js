import React from 'react';
import LanguageContexts from '../contexts/LanguageContexts';
import ColorContext from '../contexts/ColorContext';

class Button extends React.Component{

    static contextType = LanguageContexts;
    

    render(){
        const text = this.context === 'english'?'submit':'voorleggen';
        return (
        <ColorContext.Consumer>
        {(color)=>
        <button className={`ui button ${color}`}>
        {text}
        </button>
        }
        
        </ColorContext.Consumer>
        )
        
    }
}

export default Button;