
const GridItem = ({ children, gridSize, className }) => {
  return (
    <div style={{
      gridColumn: `span ${gridSize}`
    }}
      className={className}
    >
      {children}
    </div>
  )
}

export default GridItem