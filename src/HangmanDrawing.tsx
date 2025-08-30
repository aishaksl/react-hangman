const Head = (
    <div className="absolute h-[50px] w-[50px] border-[5px] rounded-full top-[48px] right-[-20px]" />
)

const Body = (
    <div className="absolute h-[100px] w-[5px] top-[95px] right-0 bg-black" />
)

const RightArm = (
    <div className="absolute h-[5px] w-[100px] top-[150px] right-[-100px] bg-black -rotate-30 origin-bottom-left" />
)

const LeftArm = (
    <div className="absolute h-[5px] w-[100px] top-[150px] right-[5px] bg-black rotate-30 origin-bottom-right" />
)

const RightLeg = (
    <div className="absolute h-[5px] w-[100px] top-[185px] right-[-95px] bg-black rotate-60 origin-bottom-left" />
)

const LeftLeg = (
    <div className="absolute h-[5px] w-[100px] top-[185px] right-0 bg-black -rotate-60 origin-bottom-right" />
)

export function HangmanDrawing() {
    return <div className="relative">
        {Head}
        {Body}
        {RightArm}
        {LeftArm}
        {RightLeg}
        {LeftLeg}

        <div className="absolute h-[50px] w-[5px] bg-black top-0 right-0" />
        <div className="h-[5px] w-[200px] bg-black ml-[120px]" />
        <div className="h-[400px] w-[5px] bg-black ml-[120px]" />
        <div className="h-[5px] w-[250px] bg-black" />
    </div>
}
