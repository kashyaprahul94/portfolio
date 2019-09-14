import { IExperience, IProject, IExperienceRole } from "./types";

const projectHybrisLoyaltyOnYaaS: IProject = {
  title: "SAP Hybris Loyalty on YaaS Cloud Platform",
  description: [
    "The solution was a cloud offering by SAP which helped customers to identify Loyal customers to the business, connect & benefit them from Loyalty program, retain them into business & convert them into Brand Advocate. It helped them to increase the engagement and retention of their end consumers by treating them special, give them rewards and exclusive benefits, etc.",
    "SAP Hybris Loyalty as a Cloud Product was built using next generation cloud technologies, designed with Microservice Architecture in mind, deployed on Hybris as a Service (YaaS) cloud platform, leveraging CloudFoundry.",
  ],
  link: "http://bit.ly/2LahFnw",
};

const projectHybrisCustomerJourneyOnYaaS: IProject = {
  title: "SAP Hybris Customer Journey on YaaS Cloud Platform",
  description: [
    "The solution was built to fill an important piece into the puzzle of Marketing, to be specific, the ideation phase of any marketing activity. Marketeer could write notes, draw some annotations, add images, group activities, just to name a few of the features of the product. It helped them to visualize the whole story of the Product starting from idea till the execution.",
  ],
  link: "http://bit.ly/2HBVPHo",
};

const projectHybrisLoyaltyIoTMobileApp: IProject = {
  title: "SAP Hybris Loyalty IoT Mobile App",
  description: [
    "SAP Hybris Loyalty being a Cloud solution was very easy to integrate with edge devices, such as POS devices, Mobile, etc. It offered various public APIs for different business objects. GeoMarketing was one of the eye candy feature the product had. It abstracted all the convoluted processes into simple Microservices such as Offers, iBeacon, Geofences, to name a few.",
    "The business use case was to demonstrate an end to end story where, a Marketer would setup some iBeacon & Geofence related Master Data, create some offers & attach those iBeacons and/or iBeacons to it. Then on the end user side, there would be a mobile application, which would be polling one of the Microservice to get the offers based on the current geo vicinity, the person in. That would contain current lat & long of the location, iBeacons in range. The API would return all the offers relevant to those inputs.",
  ],
  link: "http://bit.ly/32hpZaD",
};

const projectSAPMarketingMobileChannel: IProject = {
  title: "SAP Marketing - Mobile Channel",
  description: [
    "SAP Marketing solution was available as Cloud & On-Premise full suite built for end to end marketing applications. For example, Mass Campaigns, Consumer Profile, Segmentation, Offers, Lead Nurture Stream etc.",
    "There are many businesses which incumbent on such products to run their business. Very classical example was, use of Campaigns, to reach out to customers, let's say send emails to end customers regarding something. That's said, Email is not just one channel, a business would try to target their end customers, but many of them, Mobile for example.",
    "That was the foundation of this product, to enable customers to integrate their mobile applications with some sort of SDKs which could enable them to interact with SAP Marketing system, and allow them to reach out to their end consumers via Push Notifications. Those SDKs were available for both iOS & Android.",
  ],
  link: "http://bit.ly/2UlVjCE",
};

const projectSAPLoyaltyMarketingOnSCP: IProject = {
  title: "SAP Loyalty Marketing on SAP Cloud Platform",
  description: [
    "The solution was a cloud offering by SAP which helped customers to identify Loyal customers to the business, connect & benefit them from Loyalty program, retain them into business & convert them into Brand Advocate. It helped them to increase the engagement and retention of their end consumers by treating them special, give them rewards and exclusive benefits, etc.",
    "SAP Loyalty Marketing as a Cloud Product was built using next generation cloud technologies, designed with Microservice Architecture in mind, deployed on SAP Cloud Platform leveraging CloudFoundry. Infrastructure wise, it was partnered with Google, Azure, & AWS for their respective cloud hosting.",
  ],
  link: "http://bit.ly/32kgxn3",
};

const projectSAPLoyaltyMarketingDemoStoreFront: IProject = {
  title: "SAP Loyalty Marketing Demo Storefront",
  description: [
    "The storefront was designed to demonstrate the SAP Loyalty Marketing capabilities by consuming its RESTful Microservices. This provided a web shop end user experience where a full blown customer Loyalty profile is visible to the user, orders can be placed, points can be redeemed etc.",
  ],
  link: "http://bit.ly/2HCZg0x",
};

const projectWunderflats: IProject = {
  title: "Wunderflats",
  description: [
    "Wunderflats is a Housing as a Service cloud platform which offers furnished apartments for stays of 1 month or longer. It serves for both B2C & B2B scenarios.",
    "The product is built using next-gen technologies, surrounded with JavaScript at some point. It has various Frontend applications catering different requirements to the End Users (Main Website), Landlords (Landlord Dashboard), Internal Business People (CRM). I am working as a Senior Software Engineer in an Agile team, responsible for Product Development, Developer Productivity, Mentorship to Junior colleagues, etc.",
  ],
  link: "http://bit.ly/2zB18Cq",
};

//
//

const roleSAPFullStackEngineer: IExperienceRole = {
  title: "Full Stack Engineer",
  projects: [
    projectHybrisLoyaltyOnYaaS,
    projectHybrisCustomerJourneyOnYaaS,
    projectSAPLoyaltyMarketingDemoStoreFront,
  ],
};

const roleSAPMobileDeveloper: IExperienceRole = {
  title: "Mobile Developer",
  projects: [
    projectHybrisLoyaltyIoTMobileApp,
    projectSAPMarketingMobileChannel,
  ],
};

const roleSAPArchitectAndDevOpsEngineer: IExperienceRole = {
  title: "Architect & DevOps Engineer",
  projects: [projectSAPLoyaltyMarketingOnSCP],
};

//

const roleWunderflats: IExperienceRole = {
  title: "Senior Software Engineer",
  projects: [projectWunderflats],
};

//
//

const experienceSAPLabsIndia: IExperience = {
  company: "SAP Labs India",
  from: "Aug 2014",
  to: "Jan 2019",
  city: "Bangalore",
  country: "India",
  logo: "static/images/logo-sap.png",
  description:
    "Joined after graduation and pursued a Master's alongside. Journey was challenging, mostly required self learning. Played different roles such as Cloud Architect, DevOps Engineer, Full Stack Engineer, & Mobile Developer.",
  roles: [
    roleSAPFullStackEngineer,
    roleSAPMobileDeveloper,
    roleSAPArchitectAndDevOpsEngineer,
  ],
};

const experienceWunderflats: IExperience = {
  company: "Wunderflats GmbH",
  from: "Feb 2019",
  city: "Berlin",
  country: "Germany",
  logo: "static/images/logo-wf.png",
  description:
    "Currently working as a Senior Software Engineer on the core product, in Agile environment complemented with bit of extreme programming.",
  roles: [roleWunderflats],
};

//
//

const experienceInfo: IExperience[] = [
  experienceSAPLabsIndia,
  experienceWunderflats,
]
  .map((experienceItem: IExperience) => ({
    ...experienceItem,
    roles: experienceItem.roles
      .map((roleItem: IExperienceRole) => ({
        ...roleItem,
        projects: roleItem.projects
          .map((projectItem: IProject) => projectItem)
          .reverse(),
      }))
      .reverse(),
  }))
  .reverse();

//
//

export { experienceInfo };
export default experienceInfo;
