import { Globe } from 'lucide-react'
import { motion } from 'framer-motion'
import handTree from '../../../../../public/6769485-removebg-preview.png'

export const Hero = () => {
    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
                type: "spring",
                stiffness: 120,
                damping: 12,
                mass: 1,
                delay: 0.18
            }}
            className="hero_wall min-h-screen flex items-center justify-center p-4 sm:p-6 md:p-8 lg:p-12 relative overflow-hidden"
        >
            <div className="absolute inset-0 w-full h-full"></div>

            <div className="w-full max-w-[1400px] relative z-10">
                <div className="relative flex flex-col gap-8 sm:gap-10 md:gap-12 lg:gap-16">

                    <motion.div
                        initial={{ x: -35, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                            mass: 1,
                            delay: 0.2
                        }}
                        className="text-[40px] xs:text-[50px] sm:text-[60px] md:text-[80px] lg:text-[100px] xl:text-[130px] font-serif leading-[1.05] text-stone-800"
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 lg:gap-12">
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4">
                                <motion.div
                                    initial={{ x: -35, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.35, type: "spring", stiffness: 120,

                                    }}
                                >Planting</motion.div>
                                <motion.div
                                    initial={{ x: -45, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.38, type: "spring", stiffness: 120,

                                    }}>for better</motion.div>
                            </div>
                            <div className="flex flex-col gap-2 sm:gap-3 md:gap-4 md:text-right md:items-end">
                                <motion.div
                                    initial={{ x: 40, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.4, type: "spring", stiffness: 120,

                                    }}>trees</motion.div>
                                <motion.div
                                    initial={{ x: 30, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1 }}
                                    transition={{
                                        delay: 0.45, type: "spring", stiffness: 110,

                                    }}>future</motion.div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            type: "spring",
                            stiffness: 120,
                            damping: 12,
                            mass: 1,
                            delay: 0.5
                        }}
                        className="flex flex-col lg:flex-row justify-between items-start gap-6 sm:gap-8 md:gap-10 lg:gap-12 mt-4 sm:mt-6 md:mt-8"
                    >
                        <div className="w-full lg:w-auto lg:max-w-[400px] xl:max-w-[450px] flex flex-col gap-4 sm:gap-5">
                            <Globe className="text-stone-600 w-7 h-7 sm:w-8 sm:h-8" />
                            <div className="text-sm sm:text-base md:text-[15px] text-stone-700 leading-relaxed max-w-[500px]">
                                Did you know that deforestation contributes to over 15% of global greenhouse gas emissions? Join us in our mission to create a healthier planet for all.
                            </div>
                            <button className="bg-[#3aa456] hover:bg-[#329947] text-white px-8 py-3.5 sm:py-4 rounded-md font-medium transition-colors text-sm sm:text-base w-full sm:w-auto max-w-[200px]">
                                Contribute Now
                            </button>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{
                                type: "spring",
                                stiffness: 120,
                                damping: 12,
                                mass: 1,
                                delay: 1.2
                            }}
                            className="w-full lg:w-auto lg:max-w-[380px] xl:max-w-[470px] bg-white p-5 sm:p-6 md:p-7 rounded-2xl shadow-xl"
                        >
                            <div className="flex items-start gap-4 sm:gap-5">
                                <div className="rounded-full flex items-center justify-center shrink-0 overflow-hidden">
                                    <img src={handTree} width={150} alt="handTree" className=" " />
                                </div>

                                <div className="flex-1 min-w-0">
                                    <div className="font-semibold text-stone-800 mb-2 text-base sm:text-lg">
                                        Ready to make a difference?
                                    </div>
                                    <div className="text-sm sm:text-[15px] text-stone-600 mb-3 sm:mb-4 leading-relaxed">
                                        You can choose how to contribute to tree planting today!
                                    </div>
                                    <button className="text-sm sm:text-[15px] font-semibold text-stone-800 border-b-2 border-stone-800 hover:text-emerald-700 hover:border-emerald-700 transition-colors pb-0.5">
                                        Take Action
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </motion.div>
    )
}
