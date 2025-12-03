import image10 from '../../../../../public/image10.jpg';
import image11 from '../../../../../public/image11.jpg';
import image12 from '../../../../../public/image12.jpg';
import image13 from '../../../../../public/image13.jpg';
import image14 from '../../../../../public/image14.jpg';
import image15 from '../../../../../public/image15.jpg';
import image16 from '../../../../../public/image16.jpg';
import image9 from '../../../../../public/image9.jpg';
import image17 from '../../../../../public/image17.jpg';
import image18 from '../../../../../public/image18.jpg';
import image19 from '../../../../../public/image19.jpg';
import image20 from '../../../../../public/image20.jpg';
import imageLeaves from '../../../../../public/images-removebg-preview.png'
import { motion } from 'framer-motion';

export const TrustedTeam = () => {
    const logos = [
        image9,
        image10,
        image11,
        image12,
        image13,
        image14,
        image15,
        image16,
        image17,
        image18,
        image19,
        image20
    ];
    const hashtags = [
        'ewableEnergy',
        '#ClimateCrisis',
        '#TheAirWeShare',
        '#ClimateChange',
        '#EV',
        '#Decarbonization',
        '#LE'
    ];
    const midPoint = Math.ceil(logos.length / 2);
    const firstRowLogos = logos.slice(0, midPoint);
    const secondRowLogos = logos.slice(midPoint);
    const firstRowDuplicated = [...firstRowLogos, ...firstRowLogos, ...firstRowLogos];
    const secondRowDuplicated = [...secondRowLogos, ...secondRowLogos, ...secondRowLogos];

    return (
        <div className="bg-[#F7F5F2]  pb-18 relative z-1006">
            <div>
                <div className='flex items-center  justify-center border-2 border-x-0 py-6 border-zinc-300 overflow-hidden'>
                    <motion.div
                        className='flex'
                        animate={{
                            x: ['0%', '-100%']
                        }}
                        transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                            repeatType: 'loop'
                        }}
                    >
                        {[...hashtags, ...hashtags].map((tag, index) => (
                            <div key={index} className='text-2xl italic mx-5 whitespace-nowrap'>
                                {tag}
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
            <div className="mx-auto  bodini_font  py-8">
                <div className="text-center mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 110,
                            delay: 0.2
                        }}
                        className="md:text-5xl text-xl leading-18 xs:text-[50px] sm:text-[60px]  ">
                        Meet Our Trusted Team of
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            type: "spring",
                            stiffness: 110,
                            delay: 0.23
                        }} className="text-4xl main_text  md:text-5xl font-semibold  mt-2">
                        Supervisory Authorities
                    </motion.div>
                </div>
                <div className="space-y-8 ">
                    <div className="overflow-hidden relative h-32 md:h-40">
                        <motion.div
                            className="flex absolute gap-8 md:gap-12"
                            animate={{
                                x: [-33.33 + '%', 0]
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                                repeatType: 'loop',
                            }}
                        >
                            {firstRowDuplicated.map((logo, index) => (
                                <div
                                    key={index}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition shrink-0"
                                >
                                    <img
                                        src={logo}
                                        alt={`logo-${index}`}
                                        className="w-20 h-20 object-contain opacity-90"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                    <div className="overflow-hidden relative h-32 md:h-40">
                        <motion.div
                            className="flex absolute gap-8 md:gap-12"
                            animate={{
                                x: [0, -33.33 + '%']
                            }}
                            transition={{
                                duration: 20,
                                repeat: Infinity,
                                ease: 'linear',
                                repeatType: 'loop'
                            }}
                        >
                            {secondRowDuplicated.map((logo, index) => (
                                <div
                                    key={index}
                                    className="w-32 h-32 md:w-40 md:h-40 rounded-full bg-white flex items-center justify-center shadow-sm hover:shadow-md transition shrink-0"
                                >
                                    <img
                                        src={logo}
                                        alt={`logo-${index}`}
                                        className="w-20 h-20 object-contain opacity-90"
                                    />
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
                <img className='absolute top-22 -z-1000 -left-22' width={400} src={imageLeaves} alt="" />
                <img className="absolute top-22 -z-1000 -right-42 " width={400} src={imageLeaves} alt="" />
            </div>
        </div>
    );
};
