import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom"
import { showSomeCourse } from "../../redux/slice";
import { RootState } from "../../redux/store";


export default function OpenPageDetailes() {
    const selectedBlogs = useSelector(
        (state: RootState) => state.courses.customCard
      );
    const params = useParams();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(showSomeCourse({ keepKeys:
             [
               'image',
               'description',
               'category', 
               'name', 
               'title', 
               'btn', 
               'id', 
               'coursePageData',
               'videosLK',
            ],
            id: params.id
         }));
    }, [dispatch]);

    return (
        <div>
            {
                selectedBlogs.map((i:any)=>{
                    return(
                        <img src={i.image}/>
                    )
                })
            }
        </div>
    )
}
