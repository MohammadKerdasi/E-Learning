
export default function IconBoxNM({ src }: { src: string }) {
    return (
        <div className="border-[1px] border-White/95 rounded-lg bg-White/97
            w-11 h-11 desktop:w-13 desktop:h-13 flex items-center 
            justify-center">
            <img src={src} alt="icon" />
        </div>
    )
}
