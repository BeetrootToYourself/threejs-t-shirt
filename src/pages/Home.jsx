import { motion, AnimatePresence } from "framer-motion";
import { useSnapshot } from "valtio";

import state from "../store";
import { CustomButton } from "../components";
import {
  headContainerAnimation,
  headContentAnimation,
  headTextAnimation,
  slideAnimation,
} from "../config/motion";

const Home = () => {
  const snap = useSnapshot(state);

  return (
    <AnimatePresence>
      {snap.intro && (
        <motion.section className="home" {...slideAnimation("left")}>
          <motion.header {...slideAnimation("down")}>
            <img
              src="./tayla-white.svg"
              alt="logo"
              className="w-20 h-20 object-contain"
            />
          </motion.header>

          <motion.div className="home-content" {...headContainerAnimation}>
            <motion.div {...headTextAnimation}>
              <h1 className="head-text">
                LET&apos;S <br className="xl:block hidden" /> DO IT!
              </h1>
            </motion.div>
            <motion.div
              {...headContentAnimation}
              className="flex flex-col gap-5"
            >
              <p className="max-w-md font-normal text-gray-400 text-base">
                Gear up with Tayla Sportswear, Cape Town’s homegrown activewear
                brand! Designed for performance and style, our locally made
                apparel keeps you moving in comfort.
              </p>
              <p className="max-w-md font-normal text-gray-400 text-base">
                Shop now and elevate your game with premium South African
                sportswear.
              </p>

              <CustomButton
                type="filled"
                title="Start Customising"
                handleClick={() => (state.intro = false)}
                customStyles="w-fit bg-red px-4 py-4 font-bold text-sm"
              />
            </motion.div>
          </motion.div>
        </motion.section>
      )}
    </AnimatePresence>
  );
};

export default Home;
