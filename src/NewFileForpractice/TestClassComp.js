import React from "react";

class Car extends React.Component {
  constructor(props) {
    super(props);
    this.name = props.name;
    this.age = props.age;
    this.onClick = props.onClick;
    this.text = props.text;
  }

  render() {
    return (
      <>
        <h1>
          hello {this.name} Im {this.age} year old
        </h1>
        <button onClick={this.onClick}>{this.text}</button>
      </>
    );
  }
}

export default Car;
