import error from "./../../assets/images/error/error-404-robot-style-vector-19551458.jpg";

export default function Error() {
  return (
    <div className="px-4 lg:px-20 desktop:px-40 h-full w-full flex flex-col lg:flex-row justify-between items-center gap-7.5 py-10 lg:py-20 desktop:pt-25 desktop:pb-paddingBottom150">
      <img src={error} className="w-full max-w-96 sm:min-w-96  sm:max-w-lg sm:w-[45%] rounded-3xl"/>
      <h2 className="text-xl sm:text-3xl  lg:text-4xl  font-bold 1600:text-6xl desktop:font-extrabold text-Orange/50">
        Oops! that page can't be found.
      </h2>
    </div>
  );
}
