'use client';

import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  const underlineCmd =
    pathname === '/' && 'underline underline-offset-4 font-[500]';
  const underlineCmd2 =
    pathname === '/pricing' && 'underline underline-offset-4 font-[500s]';
  const underlineCmd3 =
    pathname === '/profile' && 'underline underline-offset-4 font-[500s]';

  return (
    <div className="w-full h-[64px] flex items-center space-x-4 p-4 sm:px-8 text-xl">
      <h3 className="md:mr-8 font-bold text-2xl">Genoshi</h3>
      <a className={`${underlineCmd}`} href="/">
        Homes
      </a>
      <a className={`${underlineCmd2}`} href="/pricing">
        Pricing
      </a>
      <a className={`${underlineCmd3}`} href="/profile">
        Profile
      </a>
    </div>
  );
}
