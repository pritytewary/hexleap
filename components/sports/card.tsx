import Link from "next/link";
import { ISportsAd, ISportsCard } from ".";
import Image from "next/image";

export function CardWrapper({ children }: { children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4 justify-items-center">
      {children}
    </div>
  );
}

export function Card({
  children,
  href,
  newTab,
}: {
  children: React.ReactNode;
  href: string;
  newTab: boolean;
}) {
  return (
    <Link
      className="rounded-sm shadow-sm p-4 aspect-[9/16] bg-card flex flex-col space-y-3 h-full"
      href={href}
      target={newTab ? "_blank" : "_self"}
      rel={newTab ? "noopener noreferrer" : undefined}
    >
      {children}
    </Link>
  );
}

export function SportsCard({ imageUri, title, features, href }: ISportsCard) {
  return (
    <Card href={href} newTab={false}>
      <div className="flex-1 w-full rounded-xs overflow-hidden">
        <Image
          src={imageUri}
          alt={title}
          height={500}
          width={300}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold line-clamp-1">{title}</h3>

      <ul className="mt-2 bg-background rounded-xs p-2 flex gap-6 overflow-hidden">
        {features.map((feature) => (
          <li key={feature.label} className="text-sm flex flex-col">
            <span className="font-normal text-muted-foreground text-xs line-clamp-1">
              {feature.label}
            </span>
            <span className="text-base font-semibold line-clamp-1">
              {feature.value}
            </span>
          </li>
        ))}
      </ul>
    </Card>
  );
}

export function SportsAd({ imageUri, title, description, href }: ISportsAd) {
  return (
    <Card href={href} newTab={true}>
      <div className="w-full rounded-xs overflow-hidden aspect-square">
        <Image
          src={imageUri}
          alt={title}
          height={500}
          width={300}
          className="w-full h-full object-cover"
        />
      </div>

      <h3 className="text-lg font-semibold">{title}</h3>

      <p className="text-sm text-muted-foreground font-normal">{description}</p>
    </Card>
  );
}
