import Input from '../Input';

const AccountDetails = () => {
  return (
    <div className="w-full md:w-[60%] rounded-md flex justify-center gap-4 m-auto bg-gray-500 p-6">
      <Input
        label="Current Subscription Plan"
        value={profile.csp}
        labelProps="w-max text-xl"
        valueProps="text-xl font-[600]"
      />
      <div className="flex justify-center items-center">
        <hr className="w-[64px] rotate-90" />
      </div>
      <Input
        label="Status"
        value={profile.status}
        labelProps="w-max text-xl"
        valueProps="text-xl font-[600]"
      />
    </div>
  );
};

export default AccountDetails;

const profile = {
  name: 'Tanmay Sarkar',
  email: 'sarkartanmay393@gmail.com',
  bio: 'Aspiring to be a world known engineer. Being a computer science student, I want to contribute to the projects that will shape upcoming generations.',
  img: 'https://img.freepik.com/free-photo/portrait-man-laughing_23-2148859448.jpg?size=338&ext=jpg&ga=GA1.1.1546980028.1703721600&semt=ais',
  csp: 'Basic Plan',
  status: 'Activated'
};
