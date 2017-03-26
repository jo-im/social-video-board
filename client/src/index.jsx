import React from 'react';
import { render } from 'react-dom';

class App extends React.Component {

  componentDidMount() {
    console.log('Inside onComponentDidMount')
    this.getPosts();
  }

  getPosts() {
    fetch(`http://localhost:3000/api/posts`)
      .then(data => data.json())
      .then(posts => console.log(posts));
  }
  
  render() {
    return <p> Hello React! </p>;
  }
}

render(<App />, document.getElementById('app'));