import AccountDetails from './components/AccountDetails';
import ActivityFeed from './components/ActivityFeed';
import ProfileDetails from './components/ProfileDetails';
import UsageMetrics from './components/UsageMetrics';

export default async function ProfilePage() {
  return (
    <div className="space-y-4 py-4 w-full flex flex-col items-center text-black pb-8">
      <h3 className="text-3xl font-bold text-white mb-4">Profile Dashboard</h3>
      <ProfileDetails />
      <AccountDetails />
      <UsageMetrics />
      <ActivityFeed />
      <div className="flex text-gray-200 justify-centet text-xl mt-4">-X-</div>
    </div>
  );
}
