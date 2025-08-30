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

export function Keyboard() {
    return <div className="grid grid-cols-10 gap-1 mx-4 md:mx-12">{keys.map((key: string) => {
        return <button key={key} className="border-2 py-2 uppercase hover:bg-blue-400 focus:bg-blue-400 cursor-pointer">{key}</button>
    })}</div>
}