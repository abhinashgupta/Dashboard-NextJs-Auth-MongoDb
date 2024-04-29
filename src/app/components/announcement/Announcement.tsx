import { CalendarForm } from "../Calender";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { TbPinnedFilled } from "react-icons/tb";
const Announcement = () => {
  return (
    <div>
      <Card
        x-chunk="dashboard-05-chunk-1"
        className="md:w-[640px] lg:h-full p-10 w-full h-full"
      >
        <div className="flex justify-between py-4">
          <CardTitle className="text-2xl">Announcement</CardTitle>
          <div>
            <CalendarForm />
          </div>
        </div>
        <div className="flex flex-col gap-4">
          <Card className="flex justify-between p-2 bg-[#FAFAFA]">
            <div>
              <h1 className="text-xl">Outing schedule for every department</h1>
              <p className="text-xs text-gray-500 mt-2">5 Minutes ago</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div>
                <TbPinnedFilled className="text-md -skew-x-12 text-gray-500" />
              </div>
              <div>...</div>
            </div>
          </Card>
          <Card className="flex justify-between p-2 bg-[#FAFAFA]">
            <div>
              <h1 className="text-xl">Meeting HR Department</h1>
              <p className="text-xs text-gray-500 mt-2">Yesterday, 12.30 PM</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div>
                <TbPinnedFilled className="text-md -skew-x-12 text-gray-500" />
              </div>
              <div>...</div>
            </div>
          </Card>

          <Card className="flex justify-between p-2 bg-[#FAFAFA]">
            <div>
              <h1 className="text-xl">
                IT Department need Two more talents for UX/UI Designer position
              </h1>
              <p className="text-xs text-gray-500 mt-2">Yesterday, 09.15 AM</p>
            </div>
            <div className="flex justify-center items-center gap-4">
              <div>
                <TbPinnedFilled className="text-md -skew-x-12 text-gray-500" />
              </div>
              <div>...</div>
            </div>
          </Card>
        </div>
        <CardFooter className="flex items-center justify-center relative top-[30px] text-red-500 border-t">
          <p>See All Announcement</p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Announcement;
