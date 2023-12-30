const ActivityFeed = () => {
  const recentActivity = [
    {
      type: 'Graph',
      title: 'Reseach Study',
      timestamp: '2023-12-29T12:00:00Z'
    },
    {
      type: 'Collection',
      title: 'Science Campaigns',
      timestamp: '2023-12-29T10:30:00Z'
    },
    {
      type: 'Query',
      title: 'Customer Segmentation',
      timestamp: '2023-12-29T15:45:00Z'
    }
  ];
  return (
    <div className="w-full rounded-md flex flex-col md:flex-row justify-center gap-4 m-auto border-[0px] p-0">
      <div className="mx-auto my-2">
        <h2 className="text-2xl font-bold mb-4 text-white">
          Recent Activity Feed
        </h2>
        <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {recentActivity.map((activity, index) => (
            <div key={index} className="rounded-lg shadow-md p-4 bg-slate-900">
              <p className="text-gray-600 mb-2">
                {activity.type === 'Graph' && (
                  <span className="text-blue-500 font-bold">Graph:</span>
                )}
                {activity.type === 'Collection' && (
                  <span className="text-green-500 font-bold">Collection:</span>
                )}
                {activity.type === 'Query' && (
                  <span className="text-purple-500 font-bold">Query:</span>
                )}
                <span className="ml-2 text-white">{activity.title}</span>
              </p>
              <p className="text-gray-500 text-sm">
                {new Date(activity.timestamp).toLocaleString()}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ActivityFeed;
