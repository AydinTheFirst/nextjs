import { BackgroundGradient } from "@/components/BgGradient/BgGradient";
import { Meteors } from "@/components/Meteors/Meteors";
import { Card, CardHeader, CardBody } from "@nextui-org/react";
import { FaBolt, FaUserSecret, FaServer, FaGoogle } from "react-icons/fa";

const cards = [
  {
    title: "Fast and Optimized",
    icon: FaBolt,
    iconClass: "rounded p-2 text-4xl text-yellow-500 dark:bg-yellow-950",
    description:
      "Enhance website loading speed through caching and Content Delivery Network (CDN) integration, ensuring a smooth user experience.",
  },
  {
    title: "Secure and Reliable",
    icon: FaUserSecret,
    iconClass: "rounded p-2 text-4xl text-blue-500 dark:bg-blue-950",
    description:
      "Protect your website from threats and vulnerabilities with the latest security practices and regular security audits.",
  },
  {
    title: "Scalable and Efficient",
    icon: FaServer,
    iconClass: "rounded p-2 text-4xl text-green-500 dark:bg-green-950",
    description:
      "Build a scalable and efficient website that can handle high traffic and large amounts of data without compromising performance.",
  },
  {
    title: "Custom Solutions",
    icon: FaServer,
    iconClass: "rounded p-2 text-4xl text-cyan-500 dark:bg-cyan-950",
    description: "Create custom solutions tailored to your specific needs.",
  },
  {
    title: "Animations and Interactions",
    icon: FaServer,
    iconClass: "rounded p-2 text-4xl text-indigo-500 dark:bg-indigo-950",
    description:
      "Create stunning animations and interactions that bring your website to life.",
  },
  {
    title: "SEO Friendly",
    icon: FaGoogle,
    iconClass: "rounded p-2 text-4xl text-red-500 dark:bg-red-950",
    description:
      "Optimize your website for search engines to improve visibility and drive more traffic to your site.",
  },
];

export const Cards = () => {
  return (
    <>
      <div className="row g-5">
        <div className="col-12">
          <h1 className="text-3xl font-bold">What we provide?</h1>
        </div>
        {cards.map((card, index) => (
          <div key={index} className="col-lg-4 col-md-6">
            <BackgroundGradient>
              <Card className="relative overflow-hidden dark:backdrop-blur-3xl">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <card.icon className={card.iconClass} />
                    <h3 className="text-xl font-bold">{card.title}</h3>
                  </div>
                </CardHeader>
                <CardBody className="">
                  <p>{card.description}</p>
                </CardBody>
                <Meteors number={10} />
              </Card>
            </BackgroundGradient>
          </div>
        ))}
      </div>
    </>
  );
};
