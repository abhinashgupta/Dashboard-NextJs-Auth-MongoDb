import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
const GraphCards = ({ title, num, men, women, month }: any) => {
  return (
    <div>
      <div className="">
        <Card
          x-chunk="dashboard-05-chunk-1"
          className="flex md:w-[312px] md:h-[210px] w-full"
        >
          <div>
            <CardHeader className="flex flex-col gap-3">
              <CardDescription className="ml-[-12px] text-center w-32 text-neutral-950 font-medium">
                {title}
              </CardDescription>
              <CardTitle className="text-4xl text-neutral-950">{num}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-xs text-muted-foreground flex">
                {men}
              </div>
              <div className="text-xs text-muted-foreground flex mt-1">
                {women}
              </div>
            </CardContent>
          </div>
          <div className=" px-2 flex flex-col justify-center items-center">
            <Image
              src="/Graph1.png"
              width={330}
              height={210}
              alt="Picture of the author"
            />
            <div className="rounded-lg bg-[#FFEFE7] mb-8">
              <p>{month}</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default GraphCards;
