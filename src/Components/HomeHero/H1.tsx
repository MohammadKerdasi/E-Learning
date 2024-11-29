
export default function H1({ text }: { text: string }) {
    return (
        <h1 className="text-center text-2xl lg:text-28 desktop:text-38 
        font-medium leading-9 lg:leading-42 desktop:leading-[57px]">
            {text}
        </h1>
    )
}
