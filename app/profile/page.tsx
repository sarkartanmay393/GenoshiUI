import AccountDetails from '@/components/profile/AccountDetails';
import ActivityFeed from '@/components/profile/ActivityFeed';
import ProfileDetails from '@/components/profile/ProfileDetails';
import UsageMetrics from '@/components/profile/UsageMetrics';

export default async function ProfilePage() {
  return (
    <div className="space-y-4 py-4 w-full h-full flex flex-col items-center text-black pb-8">
      <h3 className="text-3xl font-bold text-white">Profile Dashboard</h3>
      <ProfileDetails />
      <AccountDetails />
      <UsageMetrics />
      <ActivityFeed />
    </div>
  );
}
