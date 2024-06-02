import Button from './components/Button'
import Cell from './components/Cell'
import wordList from './wordList.json'

function App() {
  const solve = () => {
    // Store the required letter and the 6 other letters
    const requiredLetter = 'a';
    const allLetters = ['a', 'b', 'r', 'i', 'o', 't', 'v'];
    const solutionsList = [];
    for (const validWord of wordList) {
      // Check that word is at least 4 characters
      if (validWord.length < 4) {
        continue;
      }
      let requiredLetterUsed = false;
      let onlyUsesValidLetters = true;
      for (const character of validWord) {
        // Check that word contains required letter
        if (character === requiredLetter) {
          requiredLetterUsed = true;
        }
        // Check that word only contains given letters
        if (!allLetters.includes(character)) {
          onlyUsesValidLetters = false;
          break;
        }
      }
      if (requiredLetterUsed && onlyUsesValidLetters) {
        solutionsList.push(validWord);
      }
    }
    console.log('Solutions List');
    console.log(solutionsList);
  }

  return (
    <>
      <header>
        <h1>Spelling Bee Solver</h1>
      </header>
      <div className="cellContainer">
        <Cell required={true} letter={'a'} />
        <Cell letter={'b'} />
        <Cell letter={'r'} />
        <Cell letter={'i'} />
        <Cell letter={'o'} />
        <Cell letter={'t'} />
        <Cell letter={'v'} />
      </div>
      <Button text='Solve' onClick={solve} />
    </>
  );
}

export default App;
