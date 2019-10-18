import React, { Component } from "react";

class Counter extends Component {
  /*state = {
    value: this.props.counter.value,
    tags: []
  };
  //state是react组件中特殊的属性实际上它包含了
  //组件里需要用到的数据

  constructor() {
    super();
    this.handleIncrement = this.handleIncrement.bind(this);
    这样在调用这个实例的时候，this将永久绑定Counter
  }
  handleIncrement = product => {
    this.setState({ value: this.state.value + 1 });
    console.log(product);
    //this.setState()告诉react需要更新什么

    //console.log("Button clicked", this);
    //因为在下面并非是通过obj.method调用的，而是通过function调用的
    //所以this并没有绑定Counter,这时候可以用箭头函数来绑定
    //line16是另一种方法
  };
  
  renderTags() {
    return (
      <ul>
        {this.state.tags.map(tag => (
          <li key={tag}> {tag} </li>
          //key在这里是因为后台要求独一无二的id以明白什么发生了改变
        ))}
      </ul>
    );
  }
  */

  styles = {
    fontSize: 25,
    fontWeight: "bold"
  };
  render() {
    console.log(this.props);
    return (
      <div>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>

        <button
          onClick={() => {
            this.props.onIncrement(this.props.counter);
          }}
          className="btn btn-secondary btn-sm"
        >
          Increment
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          Delete
        </button>
      </div>
    );

    //<span>{}</span>中的大括号里可以使用任何
    //js变量
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    let { value } = this.props.counter;
    return value === 0 ? "zero" : value;
  }
}

export default Counter;
