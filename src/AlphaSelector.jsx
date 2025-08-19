// src/AlphaSelector.jsx
import React, { Component } from 'react';
import PropTypes from 'prop-types';

class AlphaSelector extends Component {
  static propTypes = {
    selectedAlpha: PropTypes.string,
  };
  render() {
    const { alphas, onSelect } = this.props;
    return (
      <div style={{
        width: '300px',
        boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
        padding: '20px',
        margin:'10px',
        borderRadius: '20px',
        backgroundColor: '#00597B',
        height: '100vh',
        overflowY: 'auto',
        textAlign:'center', 
        alignItems:'start',       
        fontSize:'18px',
      }}>
        
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', color:'white' }}>Alphas</h3>
        <div style={{paddingTop: '30px'}}>
        <ul style={{ listStyle: 'none', padding: '0' }}>
          {Object.keys(alphas).map(alpha => (
            <li key={alpha} style={{ marginBottom: '10px' }}>
              <button
                onClick={() => onSelect(alpha)}
                style={{
                  width: '100%',
                  textAlign: 'left',
                  padding: '8px',
                  backgroundColor: this.props.selectedAlpha === alpha ? 'darkgrey' : '#fff',
                  border: '0px solid',
                  boxShadow: '0 1px 2px rgba(0, 0, 0, 0.2)',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  transition: 'background-color 0.2s, font-size 0.2s',
                  color:'#003C74',
                  
                }}
                onMouseOver={e => {e.target.style.backgroundColor = '#CCCC';  e.target.style.fontSize = '105%' } }                
                onMouseOut={e => {e.target.style.backgroundColor = this.props.selectedAlpha === alpha ? 'darkgrey' : '#fff';  e.target.style.fontSize = '100%'} }                
              >
                {alpha}
              </button>
            </li>
          ))}
        </ul></div>
      </div>
    );
  }
}

export default AlphaSelector;