import Link from "next/link";
import { ISpotlightItem } from ".";
import Image from "next/image";
import dayjs from "dayjs";

export function SpotlightCard({
  cta,
  imageUri,
  title,
  dateTime,
  id,
  place,
}: ISpotlightItem) {
  return (
    <div className="rounded-sm shadow-sm flex flex-col h-full relative">
      <div className="flex-1 w-full rounded-xs overflow-hidden p-4 aspect-[10/17] dark:bg-white bg-black bg-opacity-5 dark:bg-opacity-5 shadow-md">
        <Image
          src={imageUri}
          alt={title}
          height={500}
          width={300}
          className="w-full h-full object-cover"
        />
      </div>

      <div className="">
        <div className="absolute rounded-full w-5 h-5 bg-card -mt-2 -left-2"></div>
        <div className="px-6 dark:bg-white bg-black bg-opacity-5 dark:bg-opacity-5">
          <div className="w-full border-b-2 border-dashed bg-transparent border-gray-500" />
        </div>
        <div className="absolute rounded-full w-5 h-5 bg-card -mt-2 -right-2"></div>
      </div>

      <div className="px-4 pb-4 pt-6 dark:bg-white bg-black bg-opacity-5 dark:bg-opacity-5 flex text-center flex-col justify-center items-center gap-2.5">
        <h3 className="font-medium text-lg">{title}</h3>

        <p className="text-sm uppercase font-light">
          {dayjs(dateTime).format("MMM D | ddd | h:mm A")}
        </p>

        <p className="text-sm text-muted-foreground">{place}</p>

        <Link
          className="rounded-sm text-sm w-full bg-black text-white px-4 py-2.5"
          href={cta.uri}
        >
          {cta.label}
        </Link>
      </div>
    </div>
  );
}
