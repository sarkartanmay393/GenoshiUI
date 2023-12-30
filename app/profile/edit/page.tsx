'use client';

import { useRouter } from 'next/navigation';
import useProfile from '../useProfile';

export default function ProfileEditPage() {
  const router = useRouter();
  const { data, setData, handleFormChange } = useProfile();
  const values = [
    { name: 'name', label: 'Name', value: data.name, textarea: false },
    { name: 'bio', label: 'Bio', value: data.bio, textarea: true },
    { name: 'work', label: 'Work', value: data.work, textarea: false }
  ];

  return (
    <div className="space-y-4 py-4 w-full h-full flex flex-col items-center text-black">
      <h3 className="text-3xl font-bold text-white">Edit Profile</h3>
      <div className="w-full h-full flex items-center justify-center">
        <div className="w-full md:w-1/3 flex flex-col rounded-lg p-6 gap-6">
          <div className="flex flex-col gap-2">
            {values.map((d, i) => (
              <div key={i} className="flex flex-col gap-2">
                <label
                  htmlFor={d.name}
                  className="text-sm font-semibold text-white"
                >
                  {d.label}
                </label>
                {d.textarea ? (
                  <textarea
                    id={d.name}
                    name={d.name}
                    value={d.value}
                    onChange={(e) => {
                      const { name, value } = e.target;
                      setData((p) => ({
                        ...p,
                        [name]: value
                      }));
                    }}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                ) : (
                  <input
                    type="text"
                    id={d.name}
                    name={d.name}
                    value={d.value}
                    onChange={handleFormChange}
                    className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-end">
            <button
              onClick={() => router.back()}
              className="cursor-pointer bg-blue-500 text-white py-1 px-4 rounded hover:bg-blue-400"
            >
              Save & back
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
