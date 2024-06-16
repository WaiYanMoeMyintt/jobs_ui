import React from "react";

const Hero = () => {
  return (
    <section className="py-12">
      <h1 className="text-4xl font-extrabold text-center">
        Ready to find your <br /> Dream Job
      </h1>
      <p className="text-center text-gray-700 mt-4 ">
        Join thousands of satisfied users who have successfully found their
        ideal jobs through the Find Jobs Dashboard. Start your job search
        journey with us today and take the first step towards a brighter career
        future.
      </p>
       <form className="flex gap-2 mt-4  max-w-md mx-auto items-center justify-center">
          <input type="text" className="border border-gray-400 w-full py-2 px-3 rounded-md" placeholder="Search jobs..."/>
          <button className="bg-blue-600 text-white py-2 px-4 rounded-md">Search</button>
       </form>
    </section>
  );
};

export default Hero;
