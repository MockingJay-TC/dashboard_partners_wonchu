import React from "react";

const BusinessInfo = () => {
  return (
    <div>
      {" "}
      <form action="#" method="POST">
        <div className="overflow-hidden sm:rounded-md">
          <div className="px-0 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="first-name" className="label">
                  Business Name
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
                  Business Location
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
                  Certificate of Incoporation No
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
                  Company Tin
                </label>
                <input
                  type="text"
                  name="phone-number"
                  id="phone-number"
                  autoComplete="phone"
                  className="input"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="phone-number" className="label">
                  Ghana Card
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
            <button className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm hover:shadow-md text-sm font-medium rounded-2xl text-sunshine bg-white/90 hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 focus:ring-transparent">
              Cancel
            </button>
            <button
              type="submit"
              className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-2xl text-white bg-sunshine/90 hover:bg-sunshine focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default BusinessInfo;
