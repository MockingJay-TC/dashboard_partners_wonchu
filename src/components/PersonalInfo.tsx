import React from "react";

const PersonalInfo = () => {
  return (
    <>
      {" "}
      <form action="#" method="POST">
        <div className="overflow-hidden sm:rounded-md">
          <div className="px-0 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="first-name" className="label">
                  First name
                </label>
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autoComplete="given-name"
                  className="input"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="last-name" className="label">
                  Last name
                </label>
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autoComplete="family-name"
                  className="input"
                />
              </div>

              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="email-address" className="label">
                  Email address
                </label>
                <input
                  type="text"
                  name="email-address"
                  id="email-address"
                  autoComplete="email"
                  className="input"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="phone-number" className="label">
                  Phone Number
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="phone"
                  className="input"
                />
              </div>
            </div>
          </div>
          <div className="px-4 py-6 space-x-4 text-right sm:px-6">
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm hover:shadow-md text-sm font-medium rounded-md text-sunshine bg-white/90 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-transparent">
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sunshine/90 hover:bg-sunshine focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
      <form action="#" method="POST">
        <div className="overflow-hidden sm:rounded-md">
          <div className="px-0 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              {/* Horizontal Line */}
              <div className="col-span-6" aria-hidden="true">
                <div className="py-5">
                  <div className="border-t border-gray-00" />
                </div>
              </div>
            </div>
            <h2 className="text-gray-500 text-lg font-semibold mt-2">
              Change Password
            </h2>

            <div className="space-y-4 my-4">
              <div className="space-y-2 w-full lg:w-1/2">
                <label htmlFor="phone-number" className="label">
                  Old Password
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="phone"
                  className="input"
                />
              </div>
              <div className="space-y-2 w-full lg:w-1/2">
                <label htmlFor="phone-number" className="label">
                  New Password
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="phone"
                  className="input"
                />
              </div>
            </div>
            <div className="px-4 py-6 space-x-4 text-right sm:px-6">
              <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm hover:shadow-md text-sm font-medium rounded-md text-sunshine bg-white/90 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-transparent">
                Cancel
              </button>
              <button
                type="submit"
                className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-sunshine/90 hover:bg-sunshine focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default PersonalInfo;
