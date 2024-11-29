import './BrandLogoSlider.css';

const LogoSlider = ({ logos }: { logos: string[] }) => {
    return (
        <div className="overflow-hidden w-full mx-auto border border-1 
            border-White/95 rounded-xl px-2.5 py-[9px] lg:px-6 lg:py-[23px] 
            desktop:px-30 desktop:py-[29px] bg-White/99 
            ml-[1px] desktop:ml-[3px] desktop:mr-0.5">
            <div
                className="flex animate-scroll w-full"
                style={{
                    whiteSpace: 'nowrap',
                }}
            >
                {[...logos, ...logos].map((logo, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 flex items-center 
                        justify-center h-16 lg:h-[68px] 
                        desktop:h-[94px] xl:w-[14.286%] sm:w-[20%] w-[33.4%]
                        border-r-[1px] border-White/95"
                    >
                        <img
                            src={logo}
                            alt={`Logo ${index}`}
                            className="object-contain h-6 lg:h-[34px]"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;

