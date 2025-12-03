import { motion } from "framer-motion"
import image1 from '../../../../../public/image1.jpg'
import image2 from '../../../../../public/image2.jpg'
import image3 from '../../../../../public/image3.jpg'
import image4 from '../../../../../public/image4.jpg'

export const Revolution = () => {
    const cards = [
        {
            image: image1,
            title: "Create Your Own Green Haven: Plant a Tree",
            description: "Choose to plant a tree in your own backyard or contribute to a tree planting program in your community."
        },
        {
            image: image2,
            title: "Support Change with Your Donation Today",
            description: "Make a one-time or recurring donation to support tree planting initiatives and help reduce carbon emissions."
        },
        {
            image: image3,
            title: "Join Forces: Volunteer to Plant Trees",
            description: "Sign up to volunteer with local organizations dedicated to tree planting and other environmental initiatives."
        },
        {
            image: image4,
            title: "Donate Tools and Resources to Help",
            description: "Contribute tools and resources, such as shovels or watering cans, to support tree planting efforts in your community."
        }
    ];

    return (
        <div
            className="w-full py-10 bg-[#c8e6d0] revolution_wallpaper bodini_font bg_waves_wallpaper px-4"
        >
            <div className="max-w-[1400px] m-auto">
                <div className="flex flex-col items-center bodini_font text-center gap-3">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 110,
                            delay: 0.2
                        }} className="md:text-5xl text-xl leading-18 xs:text-[50px] sm:text-[60px]   ">Join the Green Revolution</motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 110,
                            delay: 0.2
                        }} className="md:text-4xl text-3xl   ">Choose Your Path to Making a Difference Today!</motion.div>
                </div>

                <div className="grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-10 my-20">
                    {cards.map((card, index) => (
                        <div key={index} className="flex items-center">
                            <motion.div
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.15,
                                    type: "spring",
                                    stiffness: 120,
                                    damping: 12,
                                    mass: 1,
                                }}
                                className="flex flex-col items-center text-center gap-4"
                            >
                                <img
                                    src={card.image}
                                    className="h-36 w-36 rounded-full object-cover shadow-lg"
                                />
                                <div className="text-2xl font-semibold">{card.title}</div>
                                <div className="text-xs plus_jakarta_font px-2 md:min-h-15">
                                    {card.description}
                                </div>
                                <motion.button
                                    initial={false}
                                    whileHover={{
                                        backgroundColor: "#329947",
                                        transition: { duration: 0.35 }
                                    }} className="px-6 plus_jakarta_font py-2.5 rounded-md bg-[#3aa456] text-white text-sm font-medium transition-colors">
                                    Contribute Now
                                </motion.button>
                            </motion.div>

                            {index !== cards.length - 1 && (
                                <motion.div
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        type: "spring",
                                        stiffness: 120,
                                        damping: 12,
                                        mass: 1,
                                    }} className="hidden md:block  h-80 w-px bg-[#a6c5ae] mx-4"></motion.div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </div>
    );
};
