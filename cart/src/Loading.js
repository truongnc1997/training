import React, { Component } from "react";
import loading from "./picture/loading.png";

class Loading extends Component {
  render() {
    return (
      <div>
        <img src={loading} style={{ height: `150px`, width: `150px` }} alt="" />
      </div>
    );
  }
}

export default Loading;
