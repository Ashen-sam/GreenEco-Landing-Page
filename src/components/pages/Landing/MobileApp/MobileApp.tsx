import { motion } from "framer-motion"
import appleStore from '../../../../../public/Component 2.png'
import playStore from '../../../../../public/playnew.png'

export const MobileApp = () => {
    return (
        <div
            className="bg_phone_wallpaper bg-[#755858] flex items-center overflow-hidden"
        >
            <div className="max-w-[1500px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-0">

                <div className="md:max-w-full max-w-[600px] md:min-h-[1200px] min-h-[800px] m-auto grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-12 items-center relative text-white">

                    <motion.div
                        initial={{ opacity: 0, x: -40 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7, type: "spring",
                            stiffness: 120,
                            damping: 12,
                            mass: 1,
                            delay: 0.35
                        }}
                        className="text-center lg:text-left border-l-2 border-zinc-300"
                    >
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 110,
                                delay: 0.2
                            }} className="text-2xl sm:text-[33px] font-semibold border-b-2 bodini_font border-zinc-300 pl-3 sm:pl-4 py-3">
                            1 Million trees worldwide
                        </motion.div>
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{
                                type: "spring",
                                stiffness: 110,
                                delay: 0.28
                            }} className="text-sm sm:text-base text-slate-200 leading-relaxed p-3 sm:p-4">
                            Our app has helped plant over 1 million trees worldwide, with the help
                            of our community of dedicated tree planters. Join us in our mission
                            to create a greener future by downloading the app today!
                        </motion.div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="min-w-[450px]"
                    />

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            duration: 0.7, delay: 0.4, type: "spring",
                            stiffness: 120,
                            damping: 12,
                            mass: 1,
                        }}
                        className="order-1"
                    >
                        <div className="text-sm sm:text-base md:text-left text-slate-200 p-3 text-center leading-relaxed mb-6 sm:mb-5">
                            Join the tree planting movement from anywhere, at any time.
                            Download our app and start making a difference today!
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                            <motion.div
                                initial={{ opacity: 0, x: 30 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7, type: "spring",
                                    stiffness: 120,
                                    damping: 12,
                                    mass: 1,
                                    delay: 0.35
                                }}>
                                <img
                                    src={playStore}
                                    className="h-10 sm:h-12 mx-auto sm:mx-0"
                                    alt="Get it on Google Play"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, x: 40 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.7, type: "spring",
                                    stiffness: 120,
                                    damping: 12,
                                    mass: 1,
                                    delay: 0.38
                                }}>

                                <img
                                    src={appleStore}
                                    className="h-10 sm:h-12 mx-auto sm:mx-0"
                                    alt="Download on App Store"
                                />

                            </motion.div>

                        </div>
                    </motion.div>

                </div>
            </div>
        </div>
    );
};
