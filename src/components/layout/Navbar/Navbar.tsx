import { useState } from "react"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import treeLogo from "../../../../public/hand-up-leaf-logo-design-with-vector_1249511-1344.jpg"


export const Navbar = () => {
    const [isOpenMenu, setIsOpenMenu] = useState(false)

    const navLinks = [
        "Impact",
        "About Us",
        "Contibution",
        "News&Update"
    ]

    const handleOpenMenu = () => {
        setIsOpenMenu(!isOpenMenu)
    }

    return (
        <div className="relative">
            <motion.div
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    type: 'spring', delay: 0.2, stiffness: 110, damping: 12,
                    mass: 1,
                }}
                className="md:flex bg-[#fcfaf8]  z-1000 right-0 left-0  absolute hidden justify-between items-center p-4 text-sm plus_jakarta_font rounded-xl top-0"
            >
                <div className="flex items-center justify-center">
                    <img src={treeLogo} width={40} alt="TreeLogo" />
                    <div className="lobster_font main_text text-[23px]">GreenEco</div>
                </div>

                <div className="flex items-center justify-center gap-8 ">
                    {navLinks.map((link, index) => (
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}

                            transition={{
                                type: 'spring', delay: 0.18 * index, stiffness: 110,
                                mass: 1,
                            }} key={link} className="hover:text-[#3aa456] main_text font-semibold cursor-pointer transition-colors">
                            {link}
                        </motion.div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-3 font-semibold ">
                    <button>Sign in</button>
                    <motion.button
                        initial={false}
                        whileHover={{
                            backgroundColor: "#329947",
                            transition: { duration: 0.35 }
                        }} className="common_button_bg text-white py-2 px-4 rounded-md">Make A Difference</motion.button>
                </div>
            </motion.div>

            <div className="flex absolute bg-white rounded-sm px-4 py-1  right-3 left-2 top-2 md:hidden z-50 justify-between items-center">
                <div className="flex items-center justify-center">
                    <img src={treeLogo} width={40} alt="TreeLogo" />
                    <div className="lobster_font  main_text  text-[23px]">GreenEco</div>
                </div>
                <button className="" onClick={handleOpenMenu}>
                    {isOpenMenu ? <X className="text-gray-600" size={24} /> : <Menu className="text-gray-600" size={24} />}
                </button>
            </div >

            <AnimatePresence >
                {isOpenMenu && (
                    <motion.div
                        initial={{ y: -200, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -200, opacity: 0 }}
                        transition={{ type: 'tween' }}
                        className="  top-0 absolute left-0 w-full md:hidden bg-white shadow-2xl rounded-md z-40"
                    >
                        <div className="flex flex-col justify-start items-start p-4">
                            <motion.div
                                initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}

                                transition={{
                                    type: 'tween', delay: 0.13, stiffness: 110,
                                    mass: 1,
                                }} className="flex items-center justify-center">

                            </motion.div>

                            <div className="flex flex-col w-full gap-4 mt-10">
                                {navLinks.map((link, index) => (
                                    <motion.div
                                        initial={{ opacity: 0, x: -15 }}
                                        animate={{ opacity: 1, x: 0 }}

                                        transition={{
                                            type: 'tween', delay: 0.13 * index, stiffness: 110,

                                        }}
                                        key={link} className="hover:text-[#3aa456] font-semibold cursor-pointer transition-colors">
                                        {link}
                                    </motion.div>
                                ))}
                            </div>

                            <motion.div initial={{ opacity: 0, x: -10 }}
                                animate={{ opacity: 1, x: 0 }}

                                transition={{
                                    type: 'tween', delay: 0.13, stiffness: 110,
                                    mass: 1,
                                }} className="flex gap-3 my-4">
                                <button className="font-semibold ">Sign in</button>
                            </motion.div>

                            <button className="bg-[#3aa456] font-semibold  text-white py-2 px-4 rounded-md">
                                Make A Difference
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div >
    )
}
