import { motion } from "framer-motion"

export const Stats = () => {
    const stats = [
        { value: "977 million", label: "Trees produced, planted, and protected" },
        { value: "280", label: "Project sites in 10 countries" },
        { value: "14,800", label: "Projects Active" }
    ]
    return (
        <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, type: "spring", stiffness: 110 }}
            viewport={{ once: true, amount: 0.3 }}
            className="w-full bg-[#0d1b2a] min-h-[300px] stats_wall text-white py-12 flex flex-col stats_font md:flex-row items-center justify-center gap-12 md:gap-24"
        >
            {stats.map((item, index) => (
                <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, type: "spring", delay: index * 0.2, stiffness: 110 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-12 md:gap-24"
                >
                    <div className="flex flex-col items-center text-center gap-2 px-2">
                        <div className="text-3xl flex items-center gap-2 md:text-5xl font-semibold tracking-[1.1px]">
                            {item.value == "280" ? item.value : (
                                <div className="flex items-center justify-center gap-2">
                                    <div className="font-normal">
                                        {item.value}
                                    </div>
                                    <motion.div
                                        className="font-bold"
                                        initial={{ opacity: 0, rotate: 0 }}
                                        whileInView={{ opacity: 1, rotate: 360 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
                                    >
                                        +
                                    </motion.div>
                                </div>
                            )}
                        </div>
                        <div className="text-md opacity-80 plus_jakarta_font">{item.label}</div>
                    </div>
                    {index !== stats.length - 1 && (
                        <div className="h-24 w-px bg-white/20 hidden md:block" />
                    )}
                </motion.div>
            ))}
        </motion.div>
    )
}
