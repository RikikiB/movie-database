import './Quizpage.scss'
function Quizpage() {
  return (
    <div className='Quizpage'>
      <div className='Quizbox'>
        <div className='Question'>
          <p> What is your mood?</p>
        </div>
        <div className='answer-list'>
          <button className='answer'>Answer</button>
          <button className='answer'>Answer</button>
          <button className='answer'>Answer</button>
          <button className='answer'>Answer</button>
        </div>
        <div className='nextbutton'>
          <button className='nextbutton'>Next Question!</button>
        </div>
      </div>
    </div>
  )
}
export default Quizpage
