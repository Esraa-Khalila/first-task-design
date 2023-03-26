import React from 'react'

export const RadioColor = ({  checked, onChange, uncheckedColor, checkedColor ,value}) => {
    const radioStyle = {
        backgroundColor: checked ? 'checkedColor' : uncheckedColor,
        borderRadius: '50%',
        width: '20px',
        height: '20px',
        display: 'inline-block',
        verticalAlign: 'middle',
        marginRight: '10px',
      };
    
      const labelStyle = {
        display: 'inline-block',
        verticalAlign: 'middle',
      };
    
      return (
        <label style={labelStyle}>
          <input
            type="radio"
            value={value}
            checked={checked}
            onChange={onChange}
            style={{ display: 'none' }}
          />
          <span style={radioStyle}></span>
         
        </label>
      );
}
