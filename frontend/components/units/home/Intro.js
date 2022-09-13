import { Heading } from "~/components/atoms/Headings";
import { LogoBase } from "~/components/graphical/Logo";
import Link from "next/link";

export function Intro(props) {
  return (
    <div className='frame'>
      <div className='pt-[200px]  flex flex-col items-start max-w-[500px] lg:max-w-[620px] text-white'>
        {/* logo */}
        <LogoBase />
        <div className='mt-[50px]'>
          <Heading
            text='Recurrent Reminders'
            id='bananas'
          />
        </div>
        {/* copy */}
        
        <p className='mt-[20px]  text-lg opacity-50  max-w-[480px]'>
          <span>A simple way to be reminded of your recurrent tasks.</span>
          <span className='pl-[5px] md:pl-0 md:block'>
            One configuration, recurrent notifications.
          </span>
        </p>

        {/* actions */}
        <div className='mt-[30px] flex items-center justify-between font-medium text-sm'>
          <Link href='/singup'>
            <a
              href=''
              className='py-2 px-6 rounded-xl text-white bg-gradient-to-tr from-indigo-600 to-emerald-700  ring-1 ring-slate-600/80'
            >
              Sing Up
            </a>
          </Link>

          <Link href='/singin'>
            <a className='ml-[20px] py-2 px-6 rounded-xl border border-slate-600/80 bg-[#2b2c40]'>
              Sing In
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}

function onSingupClick() {
  console.log("singup hit");
}
