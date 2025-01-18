import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { showSomeCourse } from "../../redux/slice";
import { RootState } from "../../redux/store";
import VideoSection from "../VideoSection/VideoSection";
import HeadlineNM from "../ContactNM/HeadlineNM";
import CardOpenPage from "./CardOpenPage";

export default function OpenPageDetailes() {
  const selectedBlogs = useSelector(
    (state: RootState) => state.courses.customCard
  );
  const params = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(
      showSomeCourse({
        keepKeys: ["coursePageImgs.src1", "description", "title", "id", "coursePageDataUl"],
        id: params.id,
      })
    );
  }, [dispatch]);
  
  return (
    <div>
      {selectedBlogs.map((item, index) => {
        const firstImage =
        typeof item.coursePageImgs === "string"
          ? item.coursePageImgs
          : item.coursePageImgs?.src1 || "default_image_path";
        const data = {
          text: item.title,
          para: item.description,
          classTitle: "",
          classPara: "w-[46.867679197%]",
        };
        return (
          <div key={index}>
            <HeadlineNM data={data} addingData="Course" />
            <div className="px-4 lg:px-20 desktop:px-40">
              <div>
                <VideoSection img={firstImage} alt={item.title} />
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 pt-12.5 md:pt-20 desktop:pt-100">
                {item.coursePageDataUl.map((card, i) => {
                  return <CardOpenPage card={card} key={i} />;
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
