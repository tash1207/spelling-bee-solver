const List = ({ solutions }) => {
  return (
    <div className='listContainer'>
      <div className='list'>
        Solutions:
        {solutions.map((solution, index) => (
          <div className={`${solution.pangram ? 'pangram' : ''}`} key={index}>
            {solution.word}
          </div>
        ))}
      </div>
    </div>
  )
}

export default List;
