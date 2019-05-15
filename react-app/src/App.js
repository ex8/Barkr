import React from 'react';
import logo from './logo.svg';
import './App.css';



class  App extends React.Component {
  constructor(props){
    super(props);
    this.state ={
      email:  '',
      description: '',
      pictureSrc: '',
    };
    
  }
  
  render() {
    return (
      <div className="App">
  
        <div>
          <input type="submit" value="Submit"></input>
          
        </div>
        
        <div className= "picture" >
            <img src="https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
        </div>
        <div className= "owners-email">
        enter owners-email
          <input type ="text" value={this.state.value} onChange={this.handleChange} />/>
          
        </div>
        <div className= "pets-description">
        enter pets-description
        <textarea rows={4}></textarea>
        </div>
      </div>
  
  
    );
  }
  
}



export default App;
