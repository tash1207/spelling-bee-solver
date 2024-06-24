import { useRef, useState } from 'react'
import Button from './components/Button'
import Cell from './components/Cell'
import List from './components/List'
import wordList from './wordList.json'

function App() {
  const [solutionsList, _setSolutionsList] = useState([]);

  const solutionsListRef = useRef(solutionsList);
  const setSolutionsList = (data) => {
    solutionsListRef.current = data;
    _setSolutionsList(data);
  }

  const useInput = (required = false) => {
    const [value, setValue] = useState("");
    const input = <input type="text" value={value} maxlength="1"
      className={required ? "required" : ""} onChange={e => setValue(e.target.value)} />;
    return [value, input];
  }

  const [requiredLetter, input0] = useInput(/* required= */ true);
  const [letter1, input1] = useInput();
  const [letter2, input2] = useInput();
  const [letter3, input3] = useInput();
  const [letter4, input4] = useInput();
  const [letter5, input5] = useInput();
  const [letter6, input6] = useInput();

  const solve = () => {
    // Store the required letter and the 6 other letters
    const allLetters =
      [requiredLetter, letter1, letter2, letter3, letter4, letter5, letter6];
    for (const input of allLetters) {
      if (input.length !== 1) {
        const errorMessage = ["Please input 7 letters"];
        setSolutionsList(errorMessage);
        return;
      }
    }
    const validSolutions = [];
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
        validSolutions.push(validWord);
      }
    }
    setSolutionsList(validSolutions);
  }

  return (
    <>
      <header>
        <h1>Spelling Bee Solver</h1>
      </header>
      <div className="cellContainer">
        <Cell inputEl={input0} />
        <Cell inputEl={input1} />
        <Cell inputEl={input2} />
        <Cell inputEl={input3} />
        <Cell inputEl={input4} />
        <Cell inputEl={input5} />
        <Cell inputEl={input6} />
      </div>
      <Button text='Solve' onClick={solve} />
      <List answers={solutionsList} />
    </>
  );
}

export default App;
