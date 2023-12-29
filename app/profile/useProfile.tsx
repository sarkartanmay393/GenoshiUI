import { ChangeEventHandler, useState } from 'react';

export default function useProfile() {
  const [data, setData] = useState({
    name: 'Tanmay Sarkar',
    work: 'Senior Software Engineer @AWS',
    bio: 'Aspiring to be a world known engineer. Being a computer science student, I want to contribute to the projects that will shape upcoming generations.'
  });

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    // setIsLoading(true);
    setData((p) => ({
      ...p,
      [name]: value
    }));
    // setIsLoading(false);
  };

  return { data, setData, handleFormChange };
}
