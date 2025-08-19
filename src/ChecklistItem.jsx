// src/ChecklistItem.jsx
import React, { Component } from 'react';

class ChecklistItem extends Component {  
  render() {
    const { checklist, onCheck } = this.props;
    return (
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '8px', }}>
        <input
          type="checkbox"
          checked={checklist.checked}
          onChange={() => onCheck(checklist.order)}
          style={{ width: '20px', height: '20px', marginRight: '8px' }}
        />
        <span style={{ fontSize: '16px' }}>{checklist.name}</span>
      </div>
    );
  }
}

export default ChecklistItem;