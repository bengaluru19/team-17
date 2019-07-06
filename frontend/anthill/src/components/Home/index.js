import React,{Component} from 'react';

import { withAuthorization } from '../Session';

class HomePage extends Component{
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email :'',
      phone: '',
      budget: '',
      location:'',
      organization:'',
      area:'',
      specialreq:'',
      snake:'',
    }
    this.sendData = this.sendData.bind(this);
    this.changeHandler = this.changeHandler.bind(this)
  }

  changeHandler(e){
    switch(e.target.id){
      case 'name' : this.setState({name:e.target.value});
                    break;
      case 'email': this.setState({email:e.target.value});
                    break;
    }
  }

  sendData(){
    console.log(this.state);
    (async () => {
  const rawResponse = await fetch('api affress', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(this.state)
  });
  const content = await rawResponse.json();

  console.log(content);
})();
  }


  render() {
    return (<div>
      <form>
        name: <input type="text" onChange={this.changeHandler}  value={this.state.name} id="name" name="name" /><br/>
        email_id: <input tyoe="text" onChange={this.changeHandler} value={this.state.email} id="email" name="email_id" /><br/>
        phone: <input type="text" onChange={this.changeHandler} value={this.state.phone} id="phone" name="phone"/><br/>
        budget: <input type="number" onChange={this.changeHandler} value={this.state.budget}id="budget" name="budget"/><br/>
        location: <input type="text" onChange={this.changeHandler} value={this.state.location}id="location" name="location"/><br/>
        organization:<input type="text"onChange={this.changeHandler} value={this.state.organization} id="organization" name="organization"/><br/>
        area: <input type="number"onChange={this.changeHandler} value={this.state.area} id="area" name="area"/><br/>
        specialreq:<input type="text"onChange={this.changeHandler} value={this.state.specialreq} id="specialreq" name="specialreq"/><br/>
        snake: <input type="text"onChange={this.changeHandler} value={this.state.snake} id="snake" name="snake"/><br/>
        <button  onClick={this.sendData} >Submit</button>



        </form>
      </div>)
  }
}

const condition = authUser => !!authUser;

export default withAuthorization(condition)(HomePage);
