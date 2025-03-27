import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';

export default function Landing() {
  return (
    <>
      <Helmet>
        <title>Haven Chaise | The Ultimate Reading Sofa</title>
        <meta name="description" content="Transform any corner into a reading sanctuary with the Haven Chaise — soft, elegant, and built for quiet moments." />
        <meta property="og:title" content="Haven Chaise | The Ultimate Reading Sofa" />
        <meta property="og:description" content="A chaise lounge designed for deep comfort and deeper books." />
        <meta property="og:image" content="/assets/haven_chaise.jpg" />
      </Helmet>

      {/* HERO SECTION */}
      <section className="relative h-screen bg-gradient-to-br from-yellow-50 via-white to-gray-100 flex items-center justify-center px-4 md:px-8 overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/80 backdrop-blur-md border border-yellow-100 rounded-3xl shadow-2xl overflow-hidden w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 h-[90%] md:h-[80%]"
        >
          {/* LEFT: Text */}
          <div className="p-6 md:p-12 flex flex-col justify-center">
            <motion.p
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="text-yellow-600 text-lg font-semibold mb-3 tracking-tight"
            >
              Don’t miss this great opportunity
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-5xl font-bold text-gray-800 mb-5 leading-tight tracking-tight"
            >
              Haven Chaise
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-gray-600 text-lg leading-relaxed mb-8 max-w-md"
            >
              The perfect companion for rainy days, warm blankets, and long novels.
              <span className="block font-medium text-gray-700 mt-2">
                Soft linen. Deep cushion. Instant escape.
              </span>
            </motion.p>

            <motion.button
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-8 rounded-full shadow-lg transition w-max hover:scale-105"
            >
              Buy Now – $499
            </motion.button>
          </div>

          {/* RIGHT: Image with hover zoom */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="w-full h-full overflow-hidden"
          >
            <img
              src="/public/images/haven_chaise.jpg"
              alt="Haven Chaise Sofa"
              className="w-full h-full object-cover transform transition-transform duration-700 hover:scale-110 rounded-bl-3xl md:rounded-bl-none md:rounded-tr-3xl"
            />
          </motion.div>
        </motion.div>
      </section>
    </>
  );
}
