import Announcement from "../announcement/Announcement";
import GraphCards from "../graphCards/GraphCards";
import RecentActivity from "../recentActivity/RecentActivity";
import Schedule from "../schedule/Schedule";
import UpperCard from "../upperCards/UpperCard";

const MainDashboard = () => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-around">
      <div>
        <h1 className="text-2xl font-bold px-8 pt-2">Dashboard</h1>
        <div>
          <div className="flex sm:flex-row flex-col gap-4 justify-center items-center px-8 py-4">
            <UpperCard
              title={"Available Position"}
              num={"24"}
              need={"4 Urgently needed"}
              color={"#ffefe7"}
              textColor={"#ff8381"}
            />
            <UpperCard
              title={"Job Open"}
              num={"10"}
              need={"4 Active hiring"}
              color={"#E8F0FB"}
              textColor={"#69a3f4"}
            />
            <UpperCard
              title={"New Empoyees"}
              num={"24"}
              need={"4 Department"}
              color={"#FDEBF9"}
              textColor={"#f5a5e4"}
            />
          </div>
          <div className="flex sm:flex-row flex-col  p-8 mx-1 gap-4  justify-center items-center">
            <GraphCards
              title={"Total Employees"}
              num={"216"}
              men={"120 Men"}
              women={"96 Women"}
              month={"+2% Past month"}
            />
            <GraphCards
              title={"Talent Request"}
              num={"16"}
              men={"6 Men"}
              women={"10 Women"}
              month={"+5% Past month"}
            />
          </div>
          <div className="flex justify-center items-center px-4">
            <Announcement />
          </div>
        </div>
      </div>
      <div className="flex lg:flex-col sm:flex-row flex-col gap-8 pt-8 px-4">
        <RecentActivity />
        <Schedule />
      </div>
    </div>
  );
};

export default MainDashboard;
