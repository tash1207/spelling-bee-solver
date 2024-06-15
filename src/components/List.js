const List = ({ answers }) => {
  return (
    <div className='listContainer'>
      <div className='list'>
        Solutions:
        {answers.map((answer, index) => (
          <div key={index}>{answer}</div>
        ))}
      </div>
    </div>
  )
}

export default List;
