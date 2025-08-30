export function HangmanWord() {

    const word = "test"
    const guessedLetters: string[] = ["a"]

    return <div className="flex text-7xl gap-4 uppercase ">
        {word.split("").map((letter, index) => (
            <span className="border-b-4">
                <span className={guessedLetters.includes(letter) ? "visible text-green-500" : "invisible"}>
                    {letter}
                </span>
            </span>
        ))}
    </div>

}