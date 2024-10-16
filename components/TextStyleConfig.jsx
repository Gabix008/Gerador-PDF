import React from 'react'

function TextStyleConfig({fontSize, setFontSize, fontColor, setFontColor, isBold, setIsBold}) {
  return (
    <div className='TextStyleConfig'>
        <label htmlFor="" className="configLabel">
            Font size: 
            <input type="text" className='input'  value={fontSize} onChange={(e) => setFontSize(e.target.value)}/>
        </label>

        <label htmlFor="" >
            Font color: 
            <input type="color" className="colorPicker" value={fontColor} onChange={(e) => setFontColor(e.target.value)}/>
        </label>

        <label htmlFor="" className="configLabel">
            Bold: 
            <input type="checkbox" className='input' value={isBold} onChange={(e) => setIsBold(e.target.value)}/>
        </label>
    </div>
  )
}

export default TextStyleConfig