export default [
  {
    name: "Blue",
    colors: [
      "#f0fbff",
      "#e0f7ff",
      "#b8eaff",
      "#89d1f5",
      "#5db5e8",
      "#3498db",
      "#2276b5",
      "#14558f",
      "#093969",
      "#032042",
    ],
  },
  {
    name: "Green",
    colors: [
      "#f0fff4",
      "#deffe7",
      "#acf2c2",
      "#7ee6a2",
      "#55d987",
      "#2ecc71",
      "#1ea65b",
      "#118046",
      "#075932",
      "#02331d",
    ],
  },
  {
    name: "Yellow",
    colors: [
      "#fffee6",
      "#fffab3",
      "#fff38a",
      "#ffea61",
      "#ffde38",
      "#f1c40f",
      "#cc9d02",
      "#a67a00",
      "#805900",
      "#593b00",
    ],
  },
  {
    name: "Red",
    colors: [
      "#fff4f0",
      "#ffebe6",
      "#ffcabd",
      "#ffa694",
      "#f57a67",
      "#e74c3c",
      "#c23329",
      "#9c1d19",
      "#750d0d",
      "#4f0507",
    ],
  },
] as Array<Colors>;

type Colors = {
  name: string;
  colors: string[];
};
