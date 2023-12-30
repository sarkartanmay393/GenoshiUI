'use client';

import Input from '../../../components/Input';
import EditIcon from '../../../components/icons/Edit';
import Link from 'next/link';
import useProfile from '../useProfile';

const ProfileDetails = () => {
  const { data } = useProfile();

  return (
    <div className="rounded-md flex flex-col md:flex-row gap-8 border-[1px] bg-dark-tremor-background-subtle bg-opacity-0 px-1">
      <div className="flex flex-col items-center justify-center pt-2 sm:pt-0">
        <img
          width={128}
          height={128}
          className="rounded-md w-fit h-fit"
          src={profile.img}
          alt="profile_img"
        />
      </div>
      <div className="flex flex-col gap-1 px-2">
        <Input value={data.name} label="Name" valueProps="text-xl font-[400]" />
        <Input
          label="Email"
          value={profile.email}
          valueProps="text-xl font-[400]"
        />
        <Input label="Bio" value={data.bio} valueProps="text-md font-[400]" />
        <Input label="Work" value={data.work} valueProps="text-md font-[400]" />
      </div>
      <Link className="h-fit w-fit p-2" href="/profile/edit">
        <EditIcon props="w-[18px] text-white" />
      </Link>
    </div>
  );
};

export default ProfileDetails;

const profile = {
  name: 'Tanmay Sarkar',
  email: 'sarkartanmay393@gmail.com',
  bio: 'Aspiring to be a world known engineer. Being a computer science student, I want to contribute to the projects that will shape upcoming generations.',
  img: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais',
  csp: 'Basic Plan',
  status: 'Activated'
};
