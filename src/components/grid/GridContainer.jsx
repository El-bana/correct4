import React from 'react'

const GridContainer = ({ children, styles, className }) => {
  return (
    <div style={{
      display: 'grid',
      gridAutoFlow: 'column',
      gridAutoColumns: 'minmax(0, 1fr)',
      gridTemplateColumns: 'repeat(12, minmax(0, 1fr))',
      alignItems: 'center',
      justifyItems: 'center',
      ...styles
    }}
      className={className}>
      {children}
    </div>
  )
}

export default GridContainer