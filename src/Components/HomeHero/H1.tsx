
export default function H1({ text }: { text: string }) {
    return (
        <h1 className="text-center text-2xl lg:text-2.5xl desktop:text-4.5xl 
        font-medium leading-9 lg:leading-42 desktop:leading-[57px] 
        text-Grey/15">
            {text}
        </h1>
    )
}
