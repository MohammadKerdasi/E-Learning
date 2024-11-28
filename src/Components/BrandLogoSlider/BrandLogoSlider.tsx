import './BrandLogoSlider.css';

const LogoSlider = ({ logos }: { logos: string[] }) => {
    return (
        <div className="overflow-hidden w-full mx-auto border border-1 
    border-White/95 rounded-xl p-30px bg-White/99 ml-[3px] mr-0.5">
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
                        justify-center h-[92px] w-[14.286%]
                        border-r-[1px] border-White/95"
                    >
                        <img
                            src={logo}
                            alt={`Logo ${index}`}
                            className="object-contain"
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default LogoSlider;
