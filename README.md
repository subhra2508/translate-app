### React context system

- create a context system : here look at the contexts folder we are creating an context object
- next use contextType to mentioned it in the class to use it's value and update it's value
- boom context is working 

- inorder to change the value in the context object we use the provider component


```js

   render(){
       return (
       <div className="ui container">
           <div>
               Select a language:
               <i className="flag us" onClick={()=>this.onLanguageChange('english')}/>
               <i className="flag nl" onClick={() => this.onLanguageChange('dutch')}/>
           </div>
           <LanguageContexts.Provider value={this.state.language}>
            <UserCreate/>
            </LanguageContexts.Provider>
        </div>
        )
   } 
}
```
- here you can see the LanguageContexts.Provider has a value props this is default way to change 
the state in the context object .

### overall process of the application

- Application loads up in the browser
- we create a context object with a default value of 'english'
- App component get rerendered, creates a Provider that wraps UserCreate
- Provider updates the value of the context object to 'this.state.language'
- Button and Field reach into context object,see the value from 'this.state.language'
- Button and Field render appropriate text to the screen 



- Each separate use of LanguageContext Provider creates a new, separate 'pipe' of information!