import Input from '../../../components/Input';

const AccountDetails = () => {
  return (
    <div className="w-full rounded-md flex justify-center items-center m-auto p-6 my-4 border-[0px] bg-[rgb(127,0,0,0.2)]">
      <Input
        rootProps="w-1/2 justify-end"
        label="Current Subscription Plan"
        value={profile.csp}
        forcedLabelProps="w-fit"
        labelProps="text-xl  mr-4"
        valueProps="text-xl font-[600]"
        forcedValueProps="text-2xl"
      />
      <div className="flex justify-center items-center">
        <hr className="w-[48px] rotate-90" />
      </div>
      <Input
        rootProps="w-1/2 justify-start"
        label="Status"
        value={profile.status}
        forcedLabelProps="w-fit"
        labelProps="text-xl  mr-4"
        valueProps="text-xl font-[600]"
        forcedValueProps="text-2xl"
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
