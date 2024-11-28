
import React from 'react';



function Widget({title = "", width = "", height = "", backgroundColor = ""}) {
  return (
    <div style={{
        width: width? width: "15.7em",
        height: height? height: "9.4em",
        backgroundColor: backgroundColor ? backgroundColor: "#D9D9D9",
        borderRadius: "1em",
        padding: "1.4em",
        color: "#00000080",
        fontSize: "1.5em",
        fontWeight: "500",
        position: "relative",
        
    }}>
        {title}
        <div style={{
            color: "#00000080",
            fontSize: "3em",
            fontWeight: "300",
            position: 'absolute',
            right: "1rem",
            bottom: "0.3rem",
            cursor: 'pointer',
        }}>+</div>
    </div>
  )
}

export default Widget