import React from 'react';
import UserCreate from './UserCreate';
import LanguageContexts from '../contexts/LanguageContexts';
import ColorContext from '../contexts/ColorContext';



class App extends React.Component{
    state = {language : 'english'}

    onLanguageChange = language => {
        this.setState({language})
    }


   render(){
       return (
       <div className="ui container">
           <div>
               Select a language:
               <i className="flag us" onClick={()=>this.onLanguageChange('english')}/>
               <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
           </div>
           <ColorContext.Provider value="primary">
           <LanguageContexts.Provider value={this.state.language}>
            <UserCreate/>
            </LanguageContexts.Provider>

            </ColorContext.Provider>
        </div>
        )
   } 
}


export default App;