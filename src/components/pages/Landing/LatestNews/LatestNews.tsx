import { motion } from "framer-motion"
import image1 from '../../../../../public/commitment-third-BBPnolmU-removebg-preview.png'
import image5 from '../../../../../public/image5.jpg'
import image6 from '../../../../../public/image6.jpg'

interface INewsItems {
    id: number;
    image: string;
    title: string;
    description: string;
}
export const LatestNews = () => {
    const newsItems: INewsItems[] = [
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
        <div
            className="bg-[#F7F5F2] border-2 border-zinc-300"
        >
            <div className="max-w-[1550px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-12 items-start">

                    <motion.div
                        initial={{ opacity: 0, y: -50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ type: 'spring', stiffness: 110 }}
                        className="shrink-0 lg:border-r-2 border-zinc-300 w-full lg:w-[350px] flex flex-col items-center lg:items-start"
                    >
                        <div className="pt-10 w-full">
                            <motion.div
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.7 }}
                                className="text-[32px] sm:text-[42px] md:text-[50px] lg:text-[56px] leading-[1.3] bodini_font text-[#2c2c2c] mb-8 text-center lg:text-left"
                            >
                                Keep up with<br />Latest News
                            </motion.div>
                            <div className="flex justify-center lg:justify-start">
                                <img src={image1} alt="" className="w-3/4 sm:w-2/3 lg:w-full" />
                            </div>
                        </div>
                    </motion.div>

                    <div className="flex-1 w-full">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 pt-10">
                            {newsItems.map((item, index) => (
                                <motion.div
                                    key={item.id}
                                    initial={{ opacity: 0, y: -40 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        type: 'spring',
                                        stiffness: 110,
                                        delay: index * 0.2
                                    }}
                                    className="flex flex-col"
                                >
                                    <div className="w-full flex justify-center rounded-full  mb-4 bg-gray-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            width={350}
                                            className="rounded-[120px]"
                                        />
                                    </div>
                                    <motion.div
                                        initial={{ opacity: 0, y: -40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 110,
                                            delay: index * 0.2
                                        }}
                                        className="text-[18px] sm:text-[20px] md:text-[22px] leading-[1.3] bodini_font text-[#2c2c2c] mb-4 sm:mb-2 text-center px-2 sm:px-4"
                                    >
                                        {item.title}
                                    </motion.div>
                                    <motion.div
                                        initial={{ opacity: 0, y: -40 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            type: 'spring',
                                            stiffness: 110,
                                            delay: index * 0.2
                                        }}
                                        className="text-[14px] sm:text-[12px] plus_jakarta_font text-gray-600 text-center mb-2 leading-[1.6] px-2 sm:px-4"
                                    >
                                        {item.description}
                                    </motion.div>
                                    <div className="text-center mt-auto plus_jakarta_font">
                                        <a
                                            href="https://www.linkedin.com/in/ashen-samarasekera-08354a249/"
                                            className="text-[#52C27D] text-[14px] sm:text-[15px] font-medium inline-block border-b-2 border-[#52C27D] pb-1 hover:opacity-80 transition-opacity"
                                        >
                                            Learn More
                                        </a>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                        <div className="relative h-1.5 w-full bg-gray-200 rounded-full mt-10 sm:mt-14 overflow-hidden">
                            <motion.div
                                initial={{ width: "0%" }}
                                whileInView={{ width: "50%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 1, ease: "easeOut" }}
                                className="h-full bg-[#52C27D] rounded-full"
                            />
                        </div>

                    </div>

                </div>
            </div>
        </div>
    );
};
