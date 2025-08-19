// src/App.jsx
import React, { Component } from 'react';
import AlphaSelector from './AlphaSelector';
import AlphaView from './AlphaView';
import { fetchData } from './data/data'; // Ruta corregida

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      alphas: {},
      selectedAlpha: null
    };
  }

  async componentDidMount() {
    const alphas = await fetchData();
    Object.keys(alphas).forEach(key => {
      alphas[key].name = key;
    });
    this.setState({ alphas });
  }

  handleSelectAlpha = (alphaName) => {
    this.setState({ selectedAlpha: alphaName });
  };

  handleUpdateAlpha = (updatedAlpha) => {
    const { alphas } = this.state;
    this.setState({
      alphas: {
        ...alphas,
        [updatedAlpha.name]: updatedAlpha
      }
    });
  };

  render() {
    const { alphas, selectedAlpha } = this.state;
    const currentAlpha = selectedAlpha ? alphas[selectedAlpha] : null;

    return (
      <div style={{ display: 'flex', height: '100vh', margin:'0', padding:'0' }}>
        <AlphaSelector alphas={alphas} onSelect={this.handleSelectAlpha} selectedAlpha={selectedAlpha} />
        <AlphaView alpha={currentAlpha} onUpdate={this.handleUpdateAlpha} />
      </div>
    );
  }
}

export default App;


