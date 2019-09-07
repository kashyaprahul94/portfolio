import { IPersonalInfo } from "./types";

const common: IPersonalInfo = {
  title: "Cloud Native Engineer",

  firstName: "Rahul",
  lastName: "Kashyap",
  email: "kashyaprahul94@gmail.com",
  mobile: "+91 7503911679",

  country: "India",
  city: "Delhi",

  linkedIn: "linkedin.com/in/rahul-kashyap",
  gitHub: "github.com/kashyaprahul94",
};

const bangaloreInfo: IPersonalInfo = {
  ...common,

  city: "Bangalore",
};

const germanyBerlinInfo: IPersonalInfo = {
  ...common,

  city: "Berlin",
  country: "Germany",
  mobile: "+49 0175 3491806",
};

const personalInfo: IPersonalInfo = { ...germanyBerlinInfo };

export { personalInfo };
export default personalInfo;
