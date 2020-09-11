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
    "The business use case was to demonstrate an end to end story where, a Marketer would setup some iBeacon & Geofence related Master Data, create some Offers & attach those iBeacons or Geofences to it. Then on the end user side, there would be a mobile application, which would be polling one of the Microservice to get the offers based on the current geo vicinity, the person in. That would contain current lat & long of the location, iBeacons in range. The API would return all the offers relevant to those inputs.",
  ],
  link: "http://bit.ly/32hpZaD",
};

const projectSAPMarketingMobileChannel: IProject = {
  title: "SAP Marketing - Mobile Channel",
  description: [
    "SAP Marketing solution was available as Cloud & On-Premise full suite built for end to end marketing applications. For example, Mass Campaigns, Consumer Profile, Segmentation, Offers, Lead Nurture Stream etc.",
    "There are many businesses which incumbent on such products to run their business. Very classical example could be, use of Marketing Campaigns, in which very first two phases are Identification of the consumers, and then target them with some sort of channel. That's said, those channel could be Emails, Surveys, SMS, etc. However, it was found out that Mobile was one of best channel to reach out to end consumers that too instantly with Push notifications for example.",
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
    "The product is built using next-gen technologies, surrounded with JavaScript at some point. It has various Frontend applications catering different requirements to the End Users (Main Website), Landlords (Landlord Dashboard), Internal Business People (CRM). I am working as a Senior Software Engineer in an Agile team, responsible for Product Development, Developer Productivity, & Mentorship to Junior colleagues.",
  ],
  link: "http://bit.ly/2zB18Cq",
};

const projectJFrogPipelines: IProject = {
  title: "JFrog Pipelines",
  description: [
    "JFrog Pipelines offers JFrog Platform customers three vital capabilities: end-to-end automation (CI/CD), workflow and tool orchestration, and the optimization of the JFrog tooJFrog Pipelines empowers software teams to ship updates faster by automating DevOps processes in a continuously streamlined and secure way across all their teams and tools. Encompassing continuous integration (CI), continuous delivery (CD), infrastructure and more, it automates everything from code to production. Pipelines is natively integrated with the JFrog Platform and is available with both cloud (software-as-a-service) and on-premise subscriptions.",
  ],
  link: "http://bit.ly/2ZVMT7W",
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

const rolesJFrog: IExperienceRole = {
  title: "Senior Software Engineer",
  projects: [projectJFrogPipelines],
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
    "Joined after graduation and pursued Masters alongside. Journey was challenging, mostly required self learning. Played different roles such as Cloud Architect, DevOps Engineer, Full Stack Engineer, & Mobile Developer.",
  roles: [
    roleSAPFullStackEngineer,
    roleSAPMobileDeveloper,
    roleSAPArchitectAndDevOpsEngineer,
  ],
};

const experienceWunderflats: IExperience = {
  company: "Wunderflats GmbH",
  from: "Feb 2019",
  to: "Mar 2020",
  city: "Berlin",
  country: "Germany",
  logo: "static/images/logo-wf.png",
  description:
    "Worked as a Senior Software Engineer in a small autonomous team, responsible for development of different applications, developing tools for developer productivity, mentoring junior colleagues & enhancing core operations of business with technology.",
  roles: [roleWunderflats],
};

const experienceJFrog: IExperience = {
  company: "JFrog India",
  from: "Jul 2020",
  city: "Bangalore",
  country: "India",
  logo: "static/images/logo-jfrog.png",
  description: "Currently working as a Senior Software Engineer in JFrog Pipelines team. Responsible for mostly backend tasks and overall improvements of the product",
  roles: [rolesJFrog],
};

//
//

const experienceInfo: ReadonlyArray<IExperience> = [
  experienceSAPLabsIndia,
  experienceWunderflats,
  experienceJFrog,
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
