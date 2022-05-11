import React from "react";
import AccountType from "./AccountType";
import NetworkType from "./NetworkType";

const AccountInfo = () => {
  const account = [
    {
      id: 1,
      name: "Bank",
    },
    {
      id: 2,
      name: "Momo",
    },
  ];

  const network = [
    {
      id: 1,
      name: "MTN_MM",
    },
    {
      id: 2,
      name: "VODA_MM",
    },
    {
      id: 3,
      name: "AIRTELTIGO_MM",
    },
  ];
  return (
    <div>
      <form action="#" method="POST">
        <div className="overflow-hidden sm:rounded-md">
          <div className="px-0 py-5 bg-white sm:p-6">
            <div className="grid grid-cols-6 gap-6">
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="first-name" className="label">
                  Account Type
                </label>
                <AccountType color="sunshine" people={account} />
              </div>

              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="last-name" className="label">
                  Network Type
                </label>
                <NetworkType color="sunshine" people={network} />
              </div>

              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="email-address" className="label">
                  Bank Name
                </label>
                <input
                  type="text"
                  name="bank-name"
                  id="bank-name"
                  autoComplete="bank_name"
                  className="input"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="email-address" className="label">
                  Bank Branch
                </label>
                <input
                  type="text"
                  name="bank-name"
                  id="bank-name"
                  autoComplete="bank_name"
                  className="input"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="email-address" className="label">
                  Bank Number
                </label>
                <input
                  type="text"
                  name="bank-name"
                  id="bank-name"
                  autoComplete="bank_name"
                  className="input"
                />
              </div>
              <div className="col-span-6 sm:col-span-3 space-y-2">
                <label htmlFor="email-address" className="label">
                  Sort Code
                </label>
                <input
                  type="text"
                  name="bank-name"
                  id="bank-name"
                  autoComplete="bank_name"
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

export default AccountInfo;
