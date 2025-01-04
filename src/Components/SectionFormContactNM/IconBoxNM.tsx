
export default function IconBoxNM({ src }: { src: string }) {
    return (
        <div className="border-[1px] border-White/95 rounded-lg bg-White/97
            w-11 h-11 desktop:w-[52px] desktop:h-[52px] flex items-center 
            justify-center">
            <img src={src} alt="icon" />
        </div>
    )
}
