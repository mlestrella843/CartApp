import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Haven Chaise | The Ultimate Reading Sofa</title>
        <meta
          name="description"
          content="Transform any corner into a reading sanctuary with the Haven Chaise — soft, elegant, and built for quiet moments."
        />
        <meta property="og:title" content="Haven Chaise | The Ultimate Reading Sofa" />
        <meta
          property="og:description"
          content="A chaise lounge designed for deep comfort and deeper books."
        />
        <meta property="og:image" content="/images/haven_chaise.jpg" />
      </Helmet>

      <div className="h-screen flex items-center justify-center bg-white px-4">
          <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="absolute top-10 text-center w-full px-4"
            >
              <h2 className="text-2xl md:text-4xl font-extrabold tracking-tight">
                <span className="text-gray-900">Welcome to </span>
                <span className="text-yellow-500">My Store</span>
              </h2>
              <p className="mt-2 text-base md:text-lg text-gray-600 font-medium">
                Your cozy furniture destination.
              </p>
          </motion.div>
        <div className="w-full max-w-6xl bg-white rounded-2xl shadow-lg flex flex-col-reverse md:flex-row items-center justify-between px-6 md:px-12 py-12 gap-8">
          {/* Text Section with animations */}
          <motion.div
            className="text-center md:text-left md:w-1/2 space-y-4"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
              Haven <span className="text-yellow-500">Chaise</span>
            </h1>
            <p className="text-gray-600 text-base md:text-lg font-medium">
              The perfect companion for rainy days, warm blankets, and long novels.
            </p>
            <p className="text-gray-800 font-semibold text-sm md:text-base">
              <span className="text-yellow-600 font-bold">Soft linen.</span>{" "}
              Deep cushion. Instant escape.
            </p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="pt-4"
            >
              <Link
                to="/home"
                className="inline-block bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-6 rounded-full transition shadow"
              >
                Enter the Store
              </Link>
            </motion.div>
          </motion.div>

          {/* Image Section */}
          <motion.div
            className="md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <img
              src="/images/havenchaise.jpg"
              alt="Haven Chaise"
              className="w-full h-auto rounded-xl shadow-md hover:scale-105 transition-transform duration-500"
            />
          </motion.div>
        </div>
      </div>
    </>
  );
}
