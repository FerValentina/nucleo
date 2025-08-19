// src/AlphaView.jsx
import React, { Component } from 'react';
import StateDetail from './StateDetail';

class AlphaView extends Component {
  handleCheck = (stateOrder, checklistOrder) => {
    const { alpha, onUpdate } = this.props;
    const updatedStates = alpha.states.map(state => {
      if (state.order === stateOrder) {
        const updatedChecklists = state.checklists.map(cl => {
          if (cl.order === checklistOrder) {
            return { ...cl, checked: !cl.checked };
          }
          return cl;
        });
        const complete = updatedChecklists.every(cl => cl.checked);
        return { ...state, checklists: updatedChecklists, complete };
      }
      return state;
    });

    let currentIndex = 0;
    for (let i = 0; i < updatedStates.length; i++) {
      if (updatedStates[i].complete) {
        currentIndex = i + 1;
      } else {
        break;
      }
    }

    onUpdate({ ...alpha, states: updatedStates, currentStateIndex: Math.min(currentIndex, updatedStates.length - 1) });
  };

  render() {
    const { alpha } = this.props;
    if (!alpha) return <div style={{ padding: '10px'}}>Selecciona un Alfa</div>;

    return (
      <div style={{ padding: '20px', flex: 1 }}>
        <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '15px',}}>{alpha.name}</h2>
        <p style={{ marginBottom: '20px', color:'#051580', }}>Estado Actual: {alpha.states[alpha.currentStateIndex]?.name || 'Completo'}</p>
        {alpha.states.map((state, index) => (
          <StateDetail
            key={state.order}
            stateItem={state}
            isCurrent={index === alpha.currentStateIndex}
            isComplete={state.complete}
            onCheck={this.handleCheck}
          />
        ))}
      </div>
    );
  }
}

export default AlphaView;