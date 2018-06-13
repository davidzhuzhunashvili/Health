import React from 'react'

import '../css/description.css'

const Description = (props) => {
  if (props.item && props.item.item) {
    const nutrients = props.item.item.nutrients
    const name = props.item.item.name
    const amount = parseInt(props.item.amount || 0) / 100

    const [protein, sugars, fibers, sodium] = [
      `${(Math.round(nutrients[203].value * amount * 100) / 100).toFixed(2)}${nutrients[203].unit}`,
      `${(Math.round(nutrients[269].value * amount * 100) / 100).toFixed(2)}${nutrients[269].unit}`,
      `${(Math.round(nutrients[291].value * amount * 100) / 100).toFixed(2)}${nutrients[291].unit}`,
      `${(Math.round(nutrients[307].value * amount * 100) / 100).toFixed(2)}${nutrients[307].unit}`]

    return (
      <div className='description'>
        <div className='description-container'>
          <div className='left'>
            <p className='left-align'>Protein: </p>
            <p className='right-align'>{protein}</p>

            <p className='left-align'>Sugars: </p>
            <p className='right-align'>{sugars}</p>

            <p className='left-align'>Fibers: </p>
            <p className='right-align'>{fibers}</p>

            <p className='left-align'>Sodium: </p>
            <p className='right-align'>{sodium}</p>
          </div>
          <div className='right'>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>

      </div>
    )
  }
}

export default Description