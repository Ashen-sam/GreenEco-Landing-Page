import { motion } from "framer-motion"
import image1 from '../../../../../public/commitment-third-BBPnolmU-removebg-preview.png'
import image5 from '../../../../../public/image5.jpg'
import image6 from '../../../../../public/image6.jpg'

export const LatestNews = () => {
    const newsItems = [
        {
            id: 1,
            image: image5,
            title: "Introducing Our Newest Climate Neutral Certified Brands",
            description: "This Earth Week, we're delighted to introduce the newest Climate Neutral Certified brands. Each successfully met the leading Standard of climate action and took immediate steps to 'Invest in Our Planet'."
        },
        {
            id: 2,
            image: image6,
            title: "Introducing Our Newest Climate Neutral Certified Brands",
            description: "This Earth Week, we're delighted to introduce the newest Climate Neutral Certified brands. Each successfully met the leading Standard of climate action and took immediate steps to 'Invest in Our Planet'."
        }
    ];

    return (
        <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="bg-[#F7F5F2] border-2 border-zinc-300"
        >
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="shrink-0 lg:border-r-2 border-zinc-300"
                    >
                        <div className="pt-10">
                            <h1 className="text-[42px] md:text-[50px] lg:text-[56px] leading-[1.3] bodini_font text-[#2c2c2c] mb-12 text-center lg:text-left">
                                Keep up with<br />Latest News
                            </h1>
                            <div className="flex justify-center">
                                <img src={image1} alt="" />
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-10">
                            {newsItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: 40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        ease: "easeOut",
                                        delay: index * 0.2
                                    }}
                                    className="flex flex-col"
                                >
                                    <div className="w-full aspect-[1.4/1] rounded-[45%] overflow-hidden mb-4 bg-gray-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-[22px] leading-[1.3] bodini_font text-[#2c2c2c] mb-6 text-center px-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-[15px] plus_jakarta_font text-gray-600 text-center mb-2 leading-[1.6] px-2">
                                        {item.description}
                                    </p>
                                    <div className="text-center mt-auto plus_jakarta_font">
                                        <a
                                            href="#"
                                            className="text-[#52C27D] text-[15px] font-medium inline-block border-b-2 border-[#52C27D] pb-1 hover:opacity-80 transition-opacity"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        <motion.div
                            initial={{ width: "0%" }}
                            whileInView={{ width: "50%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, ease: "easeOut" }}
                            className="relative h-1.5 w-full bg-gray-200 rounded-full mt-14 overflow-hidden"
                        >
                            <div className="absolute top-0 left-0 h-full bg-[#52C27D] rounded-full"></div>
                        </motion.div>
                    </div>

                </div>
            </div>
        </motion.div>
    );
};
