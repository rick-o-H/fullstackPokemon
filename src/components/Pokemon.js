import React, { Component } from "react";

class Pokemon extends Component {
  constructor(props) {
    super(porps);
    this.state = {
      showDetails: false,
      level: 1,
    }
  }

  render() {
    return(
    <tr onClick={() => this.setState({showDetails: !this.state.showDetails})}>
      <td className="pokemon-name">
        {this.props.pokemon.name}
      </td>
      <td>
        <img src={this.props.pokemon.sprites.front_default} />
      </td>
      {this.state.showDetails ?
      <table>
        <tr>
          <td>{`level: ${this.state.level}`}</td>
          <td>{`type: ${this.props.types[0].type.name}`}</td>
        </tr>
      </table> : null}
    </tr>
    )
  }
}

export default Pokemon;