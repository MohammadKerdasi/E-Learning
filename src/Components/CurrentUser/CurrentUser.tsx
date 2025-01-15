import { useSelector } from "react-redux";
import { data1, data2 } from "../../data/dataNavButtonHH";
import Button from "../HomeHero/Button";
import { RootState } from "../../redux/store"; 

export default function CurrentUser() {
    const { isAuthenticated, currentUser } = useSelector((state: RootState) => state.auth);

  return (
    <>
    {isAuthenticated ? (
        <div className="flex items-center gap-3">
            <span className="text-sm desktop:text-lg font-medium">
                {currentUser?.name}
            </span>
        </div>
        ) : (
        <>
        <Button data={data2} />
        <Button data={data1} />
        </>
        )}
    </>
  )
}
