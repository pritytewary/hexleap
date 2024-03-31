"use client";

import Link from "next/link";
import { CardWrapper, SportsAd, SportsCard } from "./card";

export interface ISportsCard {
  id: string;
  type: "card";
  imageUri: string;
  title: string;
  features: {
    label: string;
    value: string;
  }[];
  href: string;
}

export interface ISportsAd {
  id: string;
  type: "ad";
  imageUri: string;
  title: string;
  description: string;
  href: string;
}

export interface ISportsProps {
  title: string;
  items: (ISportsCard | ISportsAd)[];
  actionButton: {
    title: string;
    href: string;
  };
}

export default function Sports({ items, title, actionButton }: ISportsProps) {
  return (
    <div className="container px-4 md:px-8">
      <h2 className="text-3xl font-bold mb-8 border-b-2 border-blue-600 w-max pb-2">
        {title}
      </h2>

      <CardWrapper>
        {items.map((item) =>
          item.type == "card" ? (
            <SportsCard key={item.id} {...item} />
          ) : (
            <SportsAd key={item.id} {...item} />
          )
        )}
      </CardWrapper>

      <div className="flex justify-center">
        <Link
          className="mt-8 bg-blue-600 text-white py-2 px-4 rounded-md"
          href={actionButton.href}
        >
          {actionButton.title}
        </Link>
      </div>
    </div>
  );
}
