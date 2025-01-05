import { dataConatctBox } from '../../data/dataConatctBoxNM'
import ConatctBoxNM from './ContactBoxNM'
export default function ConatctBoxes() {
  return (
    <div className="w-full lg:w-[32.5814536%] p-30px lg:p-60 desktop:p-20 
    bg-White/100">
      <ConatctBoxNM boxes={dataConatctBox} />
    </div>
  )
}
