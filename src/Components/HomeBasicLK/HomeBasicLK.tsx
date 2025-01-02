import { BasicHome } from "../../interfaces";
import PargraphCommonLK from "../PargraphCommonLK/PargraphCommonLK";
import TitleLK from "../TitleLK/TitleLK";

export default function HomeBasicLK({ text, par, btn, varwidth }: BasicHome) {
  return (
    <div className="flex justify-between items-end flex-wrap gap-y-5">
      <div className={`flex flex-col ${varwidth}`}>
        <TitleLK text={text} />
        <PargraphCommonLK par={par} />
      </div>
      {btn ? (
        <button className="px-4 desktop:px-5 py-3.5 desktop:py-4 text-sm leading-5.6 desktop:text-lg font-medium desktop:leading-6.5 text-neutral-800 rounded-md bg-White/99 border">
          {btn}
        </button>
      ) : (
        ""
      )}
    </div>
  );
}
