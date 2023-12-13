import PageLayout from "../components/layout/PageLayout";
import PageBanner from "../components/layout/PageBanner";

import Welcome from "../components/Welcome";
import Quote from "../components/Quote";
import ServicesSummary from "../components/ServicesSummary";
import WhyUs from "../components/WhyUs";
import WorksImagesSlider from '../components/WorksImagesSlider'
import GetInTouchSummary from "../components/GetInTouchSummary";

// import AboutUs from "../components/AboutUs";
// import CoreValues from "../components/CoreValues";
//image
// import image from "../public/statics/images/hr-process.png";
// import image from "../public/statics/images/many_pipes.jpg";
import image from "../public/statics/images/pipings_and_house_plan.jpg";

export default function Home() {
  return (
    <PageLayout
      pageTitle="Plumbing, construction and mechanical engineering services in kenya | Runjat"
      pageDescription="Plumbing, construction and mechanical engineering services in kenya | Runjat Builders and mechanical engineers"
    >
      <PageBanner
        objectFit="cover"
        image={{ src: image, title: "pipes with bends" }}
      >
        <Welcome />
      </PageBanner>
      <Quote />
      <WhyUs />
      <ServicesSummary />
      
      <WorksImagesSlider />
      <GetInTouchSummary /> 

      {/* <AboutUs />
      <CoreValues />
      */}
    </PageLayout>
  );
}
