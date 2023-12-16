import React, {component} from "react";
import './App.css';

class App extends React.Component{
  constructor(props){
    super(props);
    this.updateSubmit=this.updateSubmit.bind(this);
    this.input=React.createRef();
  }

  updateSubmit(event){
    alert("All the details entered successfully");
    event.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.updateSubmit} className="form">
        <h1>Form Creation</h1>
        <label>FirstName:
          <input type="text" ref={this.input}/>
        </label>
        <br/>
        <br/>
        <label>
          LastName:
          <input type="text" ref={this.input}/>
        </label>
        <br/>
        <br/>
        <label>
          EmailId:
          <input type="text" ref={this.input}/>
        </label>
        <br/>
        <br/>
        <label>
          Phone Number:
          <input type="text" ref={this.input}/>
        </label>
        <br/>
        <br/>
        <label>
          Message:
          <input type="text" ref={this.input}/>
        </label>
        <br/>
        <br/>
        <button type="submit" value="submit" className="button">Submit</button>    
      </form>
    );
  }
}

export default App;
