import { CircularProgressbar, buildStyles } from "react-circular-progressbar";

const Home = () => {
  const percentage = 66;

  return (
    <div>
      <main className="my-8 space-y-8 md:space-y-0 md:grid grid-cols-4 gap-4">
        <div className="border rounded-3xl flex justify-between items-center p-5 shadow-md w-full backdrop-blur-md">
          <div className="flex flex-col justify-between items-between">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-500">Sales</h3>
              <p>Total sales today</p>
            </div>
            <div className="text-xl font-bold text-gray-500">$1.000</div>
          </div>

          <CircularProgressbar
            className="!w-24 !h-24 font-semibold shadow-sm rounded-full"
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 0.25,
              pathTransitionDuration: 0.5,
              textColor: "#888e99",
              trailColor: "white",
              pathColor: "#ec3323",
              textSize: "16px",
            })}
          />
        </div>

        <div className="border rounded-3xl flex justify-between items-center p-5 shadow-md w-full">
          <div className="flex flex-col justify-between items-between">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-500">Sales</h3>
              <p>Total sales today</p>
            </div>
            <div className="text-xl font-bold text-gray-500">$1.000</div>
          </div>

          <CircularProgressbar
            className="!w-24 !h-24 font-semibold shadow-sm rounded-full"
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 0.25,
              pathTransitionDuration: 0.5,
              textColor: "#888e99",
              trailColor: "white",
              pathColor: "#008aff",
              textSize: "16px",
            })}
          />
        </div>

        <div className="border rounded-3xl flex justify-between items-center p-5 shadow-md w-full">
          <div className="flex flex-col justify-between items-between">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-500">Sales</h3>
              <p>Total sales today</p>
            </div>
            <div className="text-xl font-bold text-gray-500">$1.000</div>
          </div>

          <CircularProgressbar
            className="!w-24 !h-24 font-semibold shadow-sm rounded-full"
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 0.25,
              pathTransitionDuration: 0.5,
              textColor: "#888e99",
              trailColor: "white",
              pathColor: "#ec3323",
              textSize: "16px",
            })}
          />
        </div>

        <div className="border rounded-3xl flex justify-between items-center p-5 shadow-md w-full">
          <div className="flex flex-col justify-between items-between">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-gray-700">Sales</h3>
              <p>Total sales today</p>
            </div>
            <div className="text-xl font-bold text-gray-500">$1.000</div>
          </div>

          <CircularProgressbar
            className="!w-24 !h-24 font-semibold shadow-sm rounded-full"
            value={percentage}
            text={`${percentage}%`}
            styles={buildStyles({
              rotation: 0.25,
              pathTransitionDuration: 0.5,
              textColor: "#888e99",
              trailColor: "white",
              pathColor: "#008aff",
              textSize: "16px",
            })}
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
