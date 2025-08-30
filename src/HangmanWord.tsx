type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
}

export function HangmanWord({ guessedLetters, wordToGuess }: HangmanWordProps) {


    return <div className="flex text-7xl gap-4 uppercase">
        {wordToGuess.split("").map((letter, index) => (
            <span className="border-b-4">
                <span className={guessedLetters.includes(letter) ? "visible text-green-500" : "invisible"}>
                    {letter}
                </span>
            </span>
        ))}
    </div>

}