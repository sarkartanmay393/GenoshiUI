'use client';

import { ChangeEventHandler, useState } from 'react';
import Input from '../Input';
import EditIcon from '../icons/Edit';
import EditModal from './EditModal';

const ProfileDetails = () => {
  const [form, setForm] = useState({
    name: 'Tanmay Sarkar',
    work: 'Senior Software Engineer @AWS',
    bio: 'Aspiring to be a world known engineer. Being a computer science student, I want to contribute to the projects that will shape upcoming generations.'
  });

  return (
    <div className="md:w-[60%] rounded-md flex gap-8 bg-gray-500 p-6 ">
      <div className="flex flex-col items-center justify-center">
        <img
          width={128}
          height={128}
          className="rounded-md w-fit h-fit"
          src={profile.img}
          alt="profile_img"
        />
      </div>
      <div className="flex flex-col gap-1">
        <Input value={form.name} label="Name" valueProps="text-xl font-[400]" />
        <Input
          label="Email"
          value={profile.email}
          valueProps="text-xl font-[400]"
        />
        <Input label="Bio" value={form.bio} valueProps="text-md font-[400]" />
        <Input label="Work" value={form.work} valueProps="text-md font-[400]" />
      </div>
      <EditModal form={form} setForm={setForm} />
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
