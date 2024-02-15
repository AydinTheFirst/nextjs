"use client";

import { Showcase } from "@/components";
import { Button, Card, CardBody, CardHeader, Code } from "@nextui-org/react";
import React from "react";
import Nav from "./components/Nav";
import {
  FaArrowRight,
  FaBolt,
  FaGithub,
  FaGoogle,
  FaServer,
  FaUserSecret,
} from "react-icons/fa";
import { Footer } from "./components/Footer";
import { SparklesCore } from "@/components/Sparkles/Sparkles";
import { Meteors } from "@/components/Meteors/Meteors";
import { TextGenerateEffect } from "@/components/TextGenerate/TextGenerate";

const text =
  "We are dedicated to creating stunning, accessible, fast, and secure websites that perform seamlessly across all browsers and ensure an exceptional experience for everyone.";
const Home = () => {
  return (
    <>
      <Nav />

      <SparklesCore
        id="tsparticlesfullpage"
        background="transparent"
        minSize={0.6}
        maxSize={1.4}
        particleDensity={100}
        className="absolute end-0 top-0 h-full  w-full"
        particleColor="#FFFFFF"
      />

      <div className="container md:mt-10">
        <div
          className="row g-3"
          style={{
            height: "100vh",
          }}
        >
          <div className="col-md-6">
            <div className="flex flex-col justify-center">
              <br />
              <Showcase />
              <br />
              <h3 className="text-lg font-bold text-gray-700 dark:text-gray-400">
                <TextGenerateEffect words={text} />
              </h3>
              <br />
              <div className="flex flex-wrap  gap-3">
                <Button
                  color="primary"
                  variant="shadow"
                  endContent={<FaArrowRight />}
                  className="font-bold"
                >
                  Meet the Team
                </Button>
                <Button
                  variant="ghost"
                  startContent={<FaGithub className="text-xl" />}
                  className="font-bold"
                >
                  View Projects on Github
                </Button>
              </div>
            </div>
          </div>

          <div className="col-md-6 z-20 hidden md:block">
            <div className="flex items-center justify-center">
              <video
                autoPlay
                loop
                muted
                playsInline
                width={400}
                height={400}
                poster="/cube-fallback.jpg"
                src="/cube.mp4"
                style={{
                  mixBlendMode: "plus-lighter",
                }}
              />
            </div>
          </div>

          <div className="col-12">
            <div className="text-center">
              <Code className="text-lg font-bold">
                Expreince the Extraordinary
              </Code>
            </div>
          </div>
        </div>
      </div>

      <Cards />
      <br />

      <Footer />
    </>
  );
};

export default Home;

const Cards = () => {
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
  return (
    <>
      <div className="container">
        <div className="row g-3">
          <div className="col-12">
            <h1 className="text-3xl font-bold">What we provide?</h1>
          </div>
          {cards.map((card, index) => (
            <div key={index} className="col-lg-4 col-md-6 ">
              <Card
                className="relative overflow-hidden dark:backdrop-blur-3xl"
                style={{
                  backgroundColor: "rgba(24, 24, 27, 0.4)",
                }}
              >
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
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
