import HomeBasicLK from "../HomeBasicLK/HomeBasicLK";
import CardLKHH from "./CardLK+HH";

export default function TestimonialsLKHH() {
  return (
    <div className="">
      <HomeBasicLK
        varwidth="w-full md:w-[73%]"
        text="Our Testimonials"
        par="Lorem ipsum dolor sit amet consectetur. Tempus tincidunt etiam eget elit id imperdiet et. Cras eu sit dignissim lorem nibh et. Ac cum eget habitasse in velit fringilla feugiat senectus in."
        btn="View All"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 desktop:gap-7.5 pt-10 lg:pt-[60px] desktop:pt-20">
        <CardLKHH/>
        <CardLKHH/>
        <CardLKHH/>
        <CardLKHH/>


      </div>

    </div>
  );
}
