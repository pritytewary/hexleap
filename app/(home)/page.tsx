import Sports from "@/components/sports";
import Spotlight from "@/components/spotlight";

export default function Home() {
  return (
    <div className="space-y-16 py-16">
      <Sports
        title="Sports"
        actionButton={{
          href: "/sports",
          title: "See more",
        }}
        items={[
          {
            id: "1",
            type: "card",
            imageUri: "/images/river-cats.jpeg",
            title: "Sacramento River Cats",
            features: [
              {
                label: "Total Events",
                value: "48 Events",
              },
              {
                label: "Sport",
                value: "Baseball",
              },
            ],
            href: "/sports/sacramento-river-cats",
          },
          {
            id: "2",
            type: "card",
            imageUri: "/images/las-vegas-aviators.jpeg",
            title: "Las Vegas Aviators",
            features: [
              {
                label: "Total Events",
                value: "28 Events",
              },
              {
                label: "Sport",
                value: "Baseball",
              },
            ],
            href: "/sports/las-vegas-aviators",
          },
          {
            id: "3",
            type: "card",
            imageUri: "/images/new-jersey-devils.jpeg",
            title: "New Jersey Devils",
            features: [
              {
                label: "Total Events",
                value: "15 Events",
              },
              {
                label: "Sport",
                value: "Ice Hockey",
              },
            ],
            href: "/sports/new-jersey-devils",
          },
          {
            id: "4",
            type: "card",
            imageUri: "/images/las-vegas-aviators.jpeg",
            title: "Las Vegas Aviators",
            features: [
              {
                label: "Total Events",
                value: "28 Events",
              },
              {
                label: "Sport",
                value: "Baseball",
              },
            ],
            href: "/sports/las-vegas-aviators",
          },
          {
            id: "ad_1",
            type: "ad",
            imageUri: "/images/ad.jpeg",
            title: "Ad Title",
            description:
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            href: "/sports/ad",
          },
        ]}
      />

      <Spotlight
        title="Collection Spotlight"
        description="Discover extraordinary moments with our Spotlight Collection metatickets—exclusive access to premium events for an unforgettable experience. Grab yours today!"
        items={[
          {
            id: "1",
            title: "Las Vegas Aviators",
            place: "Las Vegas Ballpark, Las Vegas, Nevada",
            dateTime: new Date("2023-06-01T19:00:00"),
            imageUri: "/images/ticket-mockup-1.jpeg",
            cta: {
              label: "Take Flight Collection",
              uri: "/tick",
            },
          },
          {
            id: "2",
            title: "Sacramento River Cats",
            place: "Sutter Health Park, Sacramento, California",
            dateTime: new Date("2023-06-01T19:00:00"),
            imageUri: "/images/ticket-mockup-2.jpeg",
            cta: {
              label: "Orange Collection",
              uri: "/tick",
            },
          },
          {
            id: "3",
            title: "Las Vegas Aviators",
            place: "Las Vegas Ballpark, Las Vegas, Nevada",
            dateTime: new Date("2023-06-01T19:00:00"),
            imageUri: "/images/ticket-mockup-1.jpeg",
            cta: {
              label: "Take Flight Collection",
              uri: "/tick",
            },
          },
        ]}
      />
    </div>
  );
}
