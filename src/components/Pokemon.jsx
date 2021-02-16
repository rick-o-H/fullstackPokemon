import React, { Component } from "react";

// Fix this file. Not all mistakes are explicitly labeled with FIX_ME

class Pokemon extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false,
    }
  }

  render() {
    return(
    <tr onClick={/*  FIX_ME ----> I should control the visibility of details */}>
      <td className="pokemon-name">
        {/* FIX_ME */}
      </td>
      <td>
        {/* FIX_ME  ----> I should display an image somehow */}
      </td>
      {this.state.showDetails ?
      <td>
        {`level: ${this.props.pokemon.level} \ntype: ${this.props.pokemon.type}`}
      </td>
      : null}
    </tr>
    )
  }
}

