import iconPlay from '../../assets/images/home/section2/iconPlay.svg'
export default function IconPlay() {
    return (
        <div className='absolute h-13.8 desktop:h-[72px]
            w-[54px] desktop:w-[72px] flex items-center justify-center 
            top-1/2 left-1/2 transform  -translate-x-1/2 -translate-y-1/2
            border-[6px] border-[#FFFFFF4D] bg-[#FFFFFF33] rounded-full'
        >
            <img src={iconPlay} alt="Icon Play" className='w-[34px] 
            h-[34px] desktop:w-11 desktop:h-11'/>
        </div>
    )
}
