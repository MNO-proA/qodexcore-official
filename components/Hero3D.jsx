// components/Hero3D.jsx
"use client";
import { Suspense } from "react";
import { styles } from "../styles";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const ComputersCanvas = dynamic(() => import("@/components/canvas/Computers"), {
  ssr: false,
  loading: () => <div className="w-full h-screen flex items-center justify-center text-white">Loading 3D Scene...</div>
});

const Hero3D = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>
        <div>
          <h1 className={`${styles.heroHeadText} text-white fel`}>
            <span ><img src="favicon_qodexcore2.svg" alt="Qodexcore" /></span>
          </h1>
          {/* <p className={`${styles.heroSubText} mt-2 text-white-100`}>
          The Future of Software, Today.
          </p> */}
        </div>
      </div>

      <ComputersCanvas />

      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero3D;