import { dataConatctBox } from '../../data/dataConatctBoxNM'
import ConatctBoxNM from './ContactBoxNM'
export default function ConatctBoxes() {
  return (
    <div className="w-full lg:w-[32.03125%] 2xl:w-[32.5814536%] 
    p-7.5 xl:p-15 2xl:p-20 bg-White/100">
      <ConatctBoxNM boxes={dataConatctBox} />
    </div>
  )
}
