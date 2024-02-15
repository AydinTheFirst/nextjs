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
import { BackgroundGradient } from "@/components/BgGradient/BgGradient";
import { Cards } from "./components/Cards";

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

      <div className="container md:my-10">
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
                <div className="relative">
                  <div className="absolute inset-x-20 top-0 h-[2px] w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm" />
                  <div className="absolute inset-x-20 top-0 h-px w-3/4 bg-gradient-to-r from-transparent via-indigo-500 to-transparent" />
                  <div className="absolute inset-x-60 top-0 h-[5px] w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent blur-sm" />
                  <div className="absolute inset-x-60 top-0 h-px w-1/4 bg-gradient-to-r from-transparent via-sky-500 to-transparent" />
                </div>
              </Code>
            </div>
          </div>
        </div>
      </div>

      <div className="container mb-5">
        <Cards />
      </div>

      <Footer />
    </>
  );
};

export default Home;
