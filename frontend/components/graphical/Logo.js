import { RectangleStackIcon } from "@heroicons/react/24/outline";

// basic
export function LogoBase(props) {
  return (
    <div className='w-[60px] h-[60px] rounded-full bg-gradient-to-tr from-indigo-500  to-emerald-500  flex items-center justify-center shadow-md shadow-[hsl(309,6%,23%)]'>
      <RectangleStackIcon className='text-white w-[34px] h-[34px]' />
    </div>
  );
}
