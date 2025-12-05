import { CircleArrowOutUpRight, Shuffle } from 'lucide-react'
import { motion } from 'framer-motion'
import image7 from '../../../../../public/image7.jpeg'
import image8 from '../../../../../public/image8.jpeg'

export const Mission = () => {
    return (
        <div
            className="bg-[#f7f6f2] w-full py-12 sm:py-16 px-4 sm:px-6 md:px-12 lg:px-20 plus_jakarta_font"
        >
            <div className="max-w-[1550px] m-auto">
                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.23 }}
                    viewport={{ once: true }}
                    className="text-[#121C2D] text-base sm:text-lg font-medium"
                >
                    What do we do
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, x: -26 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.28 }}
                    viewport={{ once: true }}
                    className="text-base sm:text-lg text-[#121C2D] font-medium mt-1 mb-8 sm:mb-12"
                >
                    Learn About Our Story and Mission
                </motion.div>
                <div className="flex flex-col gap-8 sm:gap-12 bodini_font py-4 sm:py-8">
                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center gap-4 border-b border-black/10 pb-6 sm:pb-10"
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#121C2D] leading-tight">
                            We're Growing a
                            <span className="inline-block mx-2 sm:mx-3 rounded-full overflow-hidden h-8 sm:h-10 md:h-14 lg:h-18 w-20 sm:w-28 md:w-48 lg:w-80 align-middle">
                                <img src={image7} className="h-full w-full object-cover" />
                            </span>
                            Greener Future
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.15 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center gap-4 border-b border-black/10 pb-6 sm:pb-10"
                    >
                        <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#121C2D] leading-tight px-2">
                            Our Mission to Plant Trees and Reduce
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center justify-center m-auto gap-4 sm:gap-6 md:gap-8 lg:gap-10 w-full"
                    >
                        <div className="flex items-center text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-[#121C2D] gap-2 sm:gap-3">
                            <motion.div initial={{ rotate: 0 }}
                                whileInView={{ rotate: 360 }}
                                viewport={{ amount: 0.1, once: false }}
                                transition={{ duration: 0.8 }} className="h-8 w-8 sm:h-10 sm:w-10 rounded-full bg-black/10 flex items-center justify-center text-xl shrink-0">
                                <Shuffle size={14} className="sm:w-4 sm:h-4" />
                            </motion.div>
                            <span className="leading-tight">Carbon Footprint</span>
                        </div>
                        <div className="rounded-full overflow-hidden h-8 sm:h-10 md:h-14 lg:h-18 w-20 sm:w-28 md:w-48 lg:w-80 shrink-0">
                            <img src={image8} className="h-full w-full object-cover" />
                        </div>
                        <div className="text-green-600 plus_jakarta_font underline font-medium flex text-lg sm:text-xl md:text-2xl items-center gap-1 cursor-pointer">
                            <a href="https://www.linkedin.com/in/ashen-samarasekera-08354a249/">About Us </a><motion.span
                                initial={{ rotate: 0 }}
                                whileInView={{ rotate: 360 }}
                                viewport={{ amount: 0.1, once: false }}
                                transition={{ duration: 0.8 }}><CircleArrowOutUpRight className="w-5 h-5 sm:w-6 sm:h-6" /></motion.span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}