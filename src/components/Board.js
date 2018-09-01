import React from "react";
import { Square } from "./Square";

export class Board extends React.Component {
  renderSquare(i) {
    return (
      <Square
        value={this.props.squares[i]}
        onClick={() => this.props.onClick(i)}
      />
    );
  }

  // onChange(e) {
  //   console.log(e.target.value);
  // }
  render() {
    return (
      <div>
        <div className="board-row">
          {this.renderSquare(0)}
          {this.renderSquare(1)}
          {this.renderSquare(2)}
        </div>
        <div className="board-row">
          {this.renderSquare(3)}
          {this.renderSquare(4)}
          {this.renderSquare(5)}
        </div>
        <div className="board-row">
          {this.renderSquare(6)}
          {this.renderSquare(7)}
          {this.renderSquare(8)}
        </div>

        <form onSubmit={this.props.onSubmit}>
          <input
            type="text"
            placeholder="Type your name here"
            value={this.props.value}
            onChange={this.props.onChange.bind(this)}
          />
          <button>Submit!</button>
        </form>
      </div>
    );
  }
}
