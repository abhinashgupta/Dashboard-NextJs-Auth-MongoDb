import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

const UpperCard = ({ title, num, need, color, textColor }: any) => {
  const cardStyle = {
    backgroundColor: color,
    // Add more styling here if necessary
  };
  const textColorStyle = {
    color: textColor,
  };


  return (
    <div
      className={`sm:w-[204px] sm:h-[136px] w-full h-full rounded-xl`}
      style={cardStyle}
    >
      <Card
        style={cardStyle}
        x-chunk="dashboard-05-chunk-1 "
        className="rounded-2xl"
      >
        <CardHeader className="pb-2" style={{ marginBottom: 0 }}>
          <CardDescription>{title}</CardDescription>
          <CardTitle className="text-4xl">{num}</CardTitle>
        </CardHeader>
        <CardContent style={{ paddingTop: 0 }}>
          <div style={textColorStyle} className="text-xs text-muted-foreground">
            {need}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default UpperCard;
