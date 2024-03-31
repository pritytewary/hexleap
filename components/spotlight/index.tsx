import { ArrowButton } from "./arrow";
import { SpotlightCard } from "./card";

export interface ISpotlightItem {
  id: string;
  imageUri: string;
  title: string;
  dateTime: Date;
  place: string;
  cta: {
    label: string;
    uri: string;
  };
}

export interface ISpotlightProps {
  title: string;
  description: string;
  items: ISpotlightItem[];
}

export default function Spotlight({
  title,
  description,
  items,
}: ISpotlightProps) {
  return (
    <div className="container px-4 md:px-8">
      <div className="bg-card py-12 px-4 md:p-8 xl:p-16 flex flex-col items-center space-y-10">
        <div className="flex flex-col justify-center items-center text-center gap-6 max-w-6xl w-full">
          <h2 className="text-3xl lg:text-5xl font-bold">{title}</h2>

          <p className="text-base">{description}</p>
        </div>

        <div className="flex items-center max-w-6xl w-full">
          <ArrowButton isLeft />

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 justify-items-center md:px-10 xl:px-20">
            {items.map((item) => (
              <SpotlightCard key={item.id} {...item} />
            ))}
          </div>

          <ArrowButton />
        </div>
      </div>
    </div>
  );
}
