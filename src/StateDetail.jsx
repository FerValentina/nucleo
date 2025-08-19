// src/StateDetail.jsx
import React, { Component } from 'react';
import ChecklistItem from './ChecklistItem';

class StateDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: false
    };
  }

  toggleExpand = () => {
    this.setState({ expanded: !this.state.expanded });
  };

  handleCheck = (checklistOrder) => {
    const { stateItem, onCheck } = this.props;
    onCheck(stateItem.order, checklistOrder);
  };

  render() {
    const { stateItem, isCurrent, isComplete } = this.props;
    const { expanded } = this.state;
    const statusColor = isComplete ? 'green' : (isCurrent ? 'darkorange' : 'gray');

    return (
      <div style={{
        marginBottom: '15px',
        
        borderRadius: '15px',
        width: '65vh',
        boxShadow: '0 1px 5px rgba(0, 0, 0, 0.2)',
        
      }}>
<div style={{ backgroundColor: statusColor, padding: '15px', color: 'white' , borderRadius:'15px 15px 0 0 '}}>
  <h4
    onClick={this.toggleExpand}
    style={{
      cursor: 'pointer',
      fontWeight: '500',
      fontSize: '18px',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}
  >
    {stateItem.name}
    <span
      onClick={this.toggleExpand}
      style={{
        cursor: 'pointer',
        marginLeft: '8px',
        fontSize: '16px'
      }}
    >
      {this.state.expanded ? '▲' : '▼'}
    </span>
  </h4>
</div>
{expanded && (
  <div>
    <div style={{ padding: '20px', backgroundColor:'white'}}>
    {stateItem.checklists.map(checklist => (
      <ChecklistItem
        key={checklist.order}
        checklist={checklist}
        onCheck={() => this.handleCheck(checklist.order)}
      />
    ))}</div>
    <div style={{ padding: '7px', display: 'flex', justifyContent: 'right', alignItems: 'center', backgroundColor: '#F0F0F0', borderRadius:'0 0 15px 15px' }}>
      
      <span style={{ fontWeight: 'thin', padding:'10px', color: statusColor, fontSize:'14px'}}>
        {isComplete ? 'Completo' : 'Incompleto'}
      </span>
      <span style={{ fontWeight: 'thin', padding:'10px', color: statusColor, fontSize:'14px'}}>
        {stateItem.checklists.filter(cl => cl.checked).length} / {stateItem.checklists.length}
      </span>
    </div>
  </div>
)}
      </div>
    );
  }
}

export default StateDetail;