import React from 'react'
import './SelectOptions.css'

export default function SelectOptions({arrayItems, selectOption}) {
  return (
    <div>
        <h1 className="so-header">Writing Tool</h1>

        <div className="options-grid">
            {arrayItems.map((item) => {
                return (
                <div className="grid-element" onClick={() => selectOption(item.option)}> 
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                </div>
                );
            })}
        </div>
    </div>
  )
}
