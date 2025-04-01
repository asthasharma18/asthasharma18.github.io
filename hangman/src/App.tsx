import { useCallback, useEffect, useState } from "react";
import words from "./wordList.json";
import { HangmanDrawing } from "./HangmanDrawing";
import { HangmanWord } from "./HangmanWord";
import { Keyboard } from "./Keyboard";

function App() {
  const getWord = () => {
    return words[Math.round(Math.random() * words.length)];
  };
  const [wordToguess, setWordToGuess] = useState<string>(getWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);
  const incorrectLetters = guessedLetters.filter(
    (guessedLetter) => !wordToguess.includes(guessedLetter)
  );

  const isLoser = incorrectLetters.length >= 6;
  const isWinner = wordToguess
    .split("")
    .every((letter) => guessedLetters.includes(letter));

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (guessedLetters.includes(letter) || isLoser || isLoser) return;
      setGuessedLetters((currentGuessedLetters) => [
        ...currentGuessedLetters,
        letter,
      ]);
    },
    [guessedLetters, isLoser, isWinner]
  );

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (!key.match(/^[a-z]$/)) return;
      e.preventDefault();
      addGuessedLetter(key);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  console.log(wordToguess);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const key = e.key;
      if (key !== "Enter") return;
      setWordToGuess(getWord());

      e.preventDefault();
      setGuessedLetters([]);
    };
    document.addEventListener("keypress", handler);
    return () => {
      document.removeEventListener("keypress", handler);
    };
  }, [guessedLetters, addGuessedLetter]);

  return (
    <div
      style={{
        maxWidth: "800px",
        flexDirection: "column",
        display: "flex",
        gap: "2rem",
        margin: "0 auto",
        alignItems: "center",
        width: "100%",
        height: "100vh",
        overflow: "hidden",
      }}
    >
      <div style={{ fontSize: "2rem", textAlign: "center" }}>
        {isWinner && "WINNER -  Refresh or press ENTER to try again"}
        {isLoser && "LOSER - Refresh or press ENTER to try again"}
      </div>
      <div>
        <HangmanDrawing numberOfGuesses={incorrectLetters.length} />
      </div>
      <div>
        <HangmanWord
          reveal={isLoser}
          wordToGuess={wordToguess}
          guessedLetters={guessedLetters}
        />
      </div>
      <div style={{ alignSelf: "stretch" }}>
        <Keyboard
          disabled={isLoser || isWinner}
          activeLetters={guessedLetters.filter((letter) =>
            wordToguess.includes(letter)
          )}
          inactiveLetters={incorrectLetters}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </div>
  );
}

export default App;
