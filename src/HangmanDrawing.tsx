const head = (
    <div className="absolute h-[50px] w-[50px] border-[5px] rounded-full top-[48px] right-[-20px]" />
)

const body = (
    <div className="absolute h-[100px] w-[5px] top-[95px] right-0 bg-black" />
)

const rightArm = (
    <div className="absolute h-[5px] w-[100px] top-[150px] right-[-100px] bg-black -rotate-30 origin-bottom-left" />
)

const leftArm = (
    <div className="absolute h-[5px] w-[100px] top-[150px] right-[5px] bg-black rotate-30 origin-bottom-right" />
)

const rightLeg = (
    <div className="absolute h-[5px] w-[100px] top-[185px] right-[-95px] bg-black rotate-60 origin-bottom-left" />
)

const leftLeg = (
    <div className="absolute h-[5px] w-[100px] top-[185px] right-0 bg-black -rotate-60 origin-bottom-right" />
)

const BodyParts = [head, body, rightArm, leftArm, rightLeg, leftLeg]

type HangmanDrawingProps = {
    numberOfGuesses: number
}

export function HangmanDrawing({ numberOfGuesses }: HangmanDrawingProps) {
    return <div className="relative">
        {BodyParts.slice(0, numberOfGuesses)}

        <div className="absolute h-[50px] w-[5px] bg-black top-0 right-0" />
        <div className="h-[5px] w-[200px] bg-black ml-[120px]" />
        <div className="h-[400px] w-[5px] bg-black ml-[120px]" />
        <div className="h-[5px] w-[250px] bg-black" />
    </div>
}
