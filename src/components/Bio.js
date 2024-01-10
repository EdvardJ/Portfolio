import React from "react";
import { CodeIcon } from "@heroicons/react/solid";

export default function Bio() {
  return (
    <section id="bio" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <CodeIcon className="mx-auto inline-block w-10 mb-4" />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            My story so far...
          </h1>
          <p className="text-xl py-8 ">Or you can just <a className="text-white" href='./resume2024.pdf' download>Click here to download</a> my resume...</p> 
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
            After working as a professional chef for nearly a decade I've decided its time for some change in the working scenery.
            I recently gratuated from Taitotalo (Finland's leading vocational adult education centre) as
            a software developer and I'm looking to get started on this new career path.
          </p>
        </div>
        </div>
        </section>
  )
};