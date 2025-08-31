const keys: string[] = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
]

type KeyboardProps = {
    activeLetter: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}

export function Keyboard({ activeLetter, inactiveLetters, addGuessedLetter }: KeyboardProps) {
    return <div className="grid grid-cols-10 gap-1 mx-4 md:mx-12">{keys.map((key: string) => {
        return <button key={key} onClick={() => addGuessedLetter(key)} className="border-2 py-2 uppercase hover:bg-blue-400 focus:bg-blue-400 cursor-pointer">{key}</button>
    })}</div>
}