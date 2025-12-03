import { Shuffle } from 'lucide-react'
import { motion } from 'framer-motion'
import image7 from '../../../../../public/image7.jpeg'
import image8 from '../../../../../public/image8.jpeg'

export const Mission = () => {
    return (
        <div
            className="bg-[#f7f6f2] w-full py-16 px-6 md:px-20 plus_jakarta_font"
        >
            <div className="max-w-[1400px] m-auto">

                <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.23 }}
                    viewport={{ once: true }}
                    className="text-[#121C2D] text-lg font-medium"
                >
                    What do we do
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, x: -26 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.28 }}
                    viewport={{ once: true }}
                    className="text-lg text-[#121C2D] font-medium mt-1 mb-12"
                >
                    Learn About Our Story and Mission
                </motion.div>

                <div className="flex flex-col gap-12 bodini_font py-8">

                    <motion.div
                        initial={{ opacity: 0, y: 25 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.55, delay: 0.1 }}
                        viewport={{ once: true }}
                        className="flex flex-col items-center text-center gap-4 border-b border-black/10 pb-10"
                    >
                        <div className="text-3xl md:text-5xl text-[#121C2D]">
                            We're Growing a
                            <span className="inline-block mx-3 rounded-full overflow-hidden h-10 md:h-22 w-28 md:w-72 align-middle">
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
                        className="flex flex-col items-center text-center gap-4 border-b border-black/10 pb-10"
                    >
                        <div className="text-3xl md:text-5xl text-[#121C2D]">
                            Our Mission to Plant Trees and Reduce
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 35 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.55, delay: 0.2 }}
                        viewport={{ once: true }}
                        className="flex flex-col md:flex-row items-center m-auto gap-6 md:gap-10"
                    >
                        <div className="flex items-center text-3xl md:text-5xl text-[#121C2D] gap-3">
                            <motion.div initial={{ rotate: 0 }}
                                whileInView={{ rotate: 360 }}
                                viewport={{ amount: 0.1, once: false }}
                                transition={{ duration: 0.8 }} className="h-10 w-10 rounded-full bg-black/10 flex items-center justify-center text-xl">
                                <Shuffle size={16} />
                            </motion.div>
                            Carbon Footprint
                        </div>

                        <div className="rounded-full overflow-hidden h-10 md:h-22 w-28 md:w-72">
                            <img src={image8} className="h-full w-full object-cover" />
                        </div>

                        <div className="text-green-600 plus_jakarta_font underline font-medium flex text-2xl items-center gap-1 cursor-pointer">
                            About Us <span>↗</span>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}
