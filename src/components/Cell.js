const Cell = ({ required, letter }) => {
  return (
      <div className={`cell ${required ? 'required' : ''}`}>{letter}</div>
    )
}

export default Cell;