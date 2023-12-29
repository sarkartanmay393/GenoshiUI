import React, { ChangeEventHandler, useState } from 'react';
import EditIcon from '../icons/Edit';
import CircularProgress from '../CircularProgress';

const EditModal = ({
  form,
  setForm
}: {
  form: {
    name: string;
    bio: string;
    work: string;
  };
  setForm: React.Dispatch<
    React.SetStateAction<{
      name: string;
      bio: string;
      work: string;
    }>
  >;
}) => {
  const [showEditModal, setShowEditModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleFormChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    const { name, value } = e.target;
    setIsLoading(true);
    setForm((p) => ({
      ...p,
      [name]: value
    }));
    setIsLoading(false);
  };

  const handleModalToggle = () => {
    setShowEditModal((prevShowEditModal) => !prevShowEditModal);
  };

  const inputs = [
    { name: 'name', label: 'Name', value: form.name, textarea: false },
    { name: 'bio', label: 'Bio', value: form.bio, textarea: true },
    { name: 'work', label: 'Work', value: form.work, textarea: false }
  ];

  return (
    <div className="relative">
      <button
        onClick={handleModalToggle}
        className="bg-blue-500 text-white p-1 px-2 rounded hover:bg-blue-600"
      >
        <EditIcon props="w-[16px] text-white" />
      </button>
      {showEditModal && (
        <div className="z-50 fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-white flex flex-col rounded-lg p-6 gap-4">
            <div className="flex flex-col gap-2">
              {inputs.map((d, i) => (
                <div key={i} className="flex flex-col gap-2">
                  <label htmlFor={d.name} className="text-sm font-semibold">
                    {d.label}
                  </label>
                  {d.textarea ? (
                    <textarea
                      id={d.name}
                      name={d.name}
                      value={d.value}
                      onChange={(e) => {
                        const { name, value } = e.target;
                        setForm((p) => ({
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
                onClick={handleModalToggle}
                className="bg-gray-400 text-white py-1 px-4 rounded hover:bg-gray-300"
              >
                {isLoading ? (
                  <CircularProgress radius={12} strokeWidth={24} />
                ) : (
                  'Save'
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default EditModal;
