interface Checkbox {
    label:  React.ReactNode;
  }
  
  export default function CheckboxWithLabelH({ label }: Checkbox) {
    return (
      <div className="flex items-center gap-2  desktop:my-6 my-5">

        <input
          type="checkbox"
          id="custom-checkbox"
          className="w-6 h-6  desktop:rounded-md md:rounded "
        />
        <label htmlFor="custom-checkbox" className="text-Grey/35 md:text-base text-sm  desktop:text-lg font-normal ">
          {label}
        </label>
      </div>
    );
  }
  