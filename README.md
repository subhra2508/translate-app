### React context system

- create a context system : here look at the contexts folder we are creating an context object
- next use contextType to mentioned it in the class to use it's value and update it's value
- boom context is working 

- inorder to change the value in the context object we use the provider component


``js

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

- 