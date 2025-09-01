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
    disabled: boolean
    activeLetter: string[]
    inactiveLetters: string[]
    addGuessedLetter: (letter: string) => void
}
// Check if the current key is in the list of correctly active-iaktive letters

export function Keyboard({ disabled = false, activeLetter, inactiveLetters, addGuessedLetter }: KeyboardProps) {
    return <div className="grid grid-cols-10 gap-1 mx-4 md:mx-12">{keys.map((key: string) => {

        const isActive = activeLetter.includes(key)
        const isInactive = inactiveLetters.includes(key)

        return <button key={key} onClick={() => addGuessedLetter(key)} className={`border-2 py-2 uppercase cursor-pointer
              hover:bg-blue-400 focus:bg-blue-400
              ${isActive ? "bg-blue-400 text-white" : ""}
              ${isInactive ? "bg-gray-400 text-white cursor-not-allowed" : ""}`}
            disabled={isActive || isInactive || disabled}
        >
            {key}</button>
    })}</div>
}