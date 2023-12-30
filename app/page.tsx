import { redirect } from 'next/navigation';

export default async function Homepage() {
  return redirect('/profile');
  // return (
  //   <div className="w-full h-full flex flex-col justify-center items-center ">
  //     <a href="/profile">Profile</a>
  //   </div>
  // );
}
