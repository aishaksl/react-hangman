type HangmanWordProps = {
    guessedLetters: string[]
    wordToGuess: string
    reveal?: boolean
}

export function HangmanWord({ guessedLetters, wordToGuess, reveal = false }: HangmanWordProps) {


    return <div className="flex text-7xl gap-4 uppercase">
        {wordToGuess.split("").map((letter, index) => (
            <span className="border-b-4">
                <span className={`${guessedLetters.includes(letter) ? "text-black" : reveal ? "text-red-500" : "text-transparent"}`}>
                    {letter}
                </span>            </span>
        ))}
    </div>

}