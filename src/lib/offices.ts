export type Office = {
  id: string;
  label: string;
  lines: readonly string[];
};

export const offices: readonly Office[] = [
  {
    id: "uk",
    label: "United Kingdom",
    lines: [
      "86 Copal House",
      "25 Minnie Baldock Street",
      "London E16 1DT",
      "United Kingdom",
    ],
  },
  {
    id: "in",
    label: "India",
    lines: [
      "14/B",
      "Beside Gachibowli Flyover, near NatSoft IT Solutions",
      "Greenland Colony, Madhava Reddy Colony",
      "Gachibowli, Hyderabad",
      "Telangana 500032",
      "India",
    ],
  },
];
