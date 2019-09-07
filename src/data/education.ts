import { IEducation } from "./types";

const bachelor: IEducation = {
  title: "Bachelor of Computer Applications",
  institute: "Guru Gobind Singh Indraprastha University",
  city: "Delhi",
  country: "India",
  from: 2011,
  to: 2014,
  score: "95.56% Score",
  achievements: ["University Gold Medalist"],
};

const master: IEducation = {
  title: "Master of Technology",
  institute: "Birla Institute of Technology & Science",
  city: "Bangalore",
  country: "India",
  from: 2014,
  to: 2018,
  score: "9.23 / 10 CGPA",
};

const educationInfo = [bachelor, master];

export { educationInfo };
