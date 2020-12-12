import React from 'react';

const ProgressBar = (props) => {
    const {bgcolor, denominator, numerator} = props;

    const containerStyles = {
        height: 20,
        backgroundColor: "#e0e0de",
      }
    
      const fillerStyles = {
        height: '100%',
        width: `${((numerator+1)/denominator)*100}%`,
        backgroundColor: bgcolor,
        borderRadius: 'inherit',
        textAlign: 'right'
      }
    
      const labelStyles = {
        padding: 5,
        color: 'white',
        fontWeight: 'bold'
      }
    
    return (
        <div style={containerStyles}>
            <div style={fillerStyles}>
                <span style={labelStyles}>{numerator+1}/{denominator}</span>
            </div>
        </div>
    );
};

export default ProgressBar;