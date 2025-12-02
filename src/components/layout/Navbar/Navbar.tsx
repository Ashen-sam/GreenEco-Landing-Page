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
        <>
            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="md:flex hidden justify-between items-center p-4 text-sm plus_jakarta_font rounded-sm top-3"
            >
                <div className="flex items-center justify-center">
                    <img src={treeLogo} width={40} alt="TreeLogo" />
                    <div className="lobster_font text-[23px]">GreenEco</div>
                </div>

                <div className="flex items-center justify-center gap-4">
                    {navLinks.map((link) => (
                        <div key={link} className="hover:text-[#3aa456] font-semibold cursor-pointer transition-colors">
                            {link}
                        </div>
                    ))}
                </div>

                <div className="flex items-center justify-center gap-3">
                    <button>Sign in</button>
                    <button className="bg-[#3aa456] text-white py-2 px-4 rounded-md">Make A Difference</button>
                </div>
            </motion.div>

            <button className="absolute right-3 top-2 md:hidden z-50" onClick={handleOpenMenu}>
                {isOpenMenu ? <X size={24} /> : <Menu size={24} />}
            </button>

            <AnimatePresence>
                {isOpenMenu && (
                    <motion.div
                        initial={{ x: -200, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        exit={{ x: -200, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="absolute top-0 left-0 w-full md:hidden bg-white rounded-md z-40"
                    >
                        <div className="flex flex-col justify-start items-start p-4">
                            <div className="flex items-center justify-center">
                                <img src={treeLogo} width={40} alt="TreeLogo" />
                                <div className="lobster_font text-[23px]">GreenEco</div>
                            </div>

                            <div className="flex flex-col w-full gap-4 mt-4">
                                {navLinks.map((link) => (
                                    <div key={link} className="hover:text-[#3aa456] font-semibold cursor-pointer transition-colors">
                                        {link}
                                    </div>
                                ))}
                            </div>

                            <div className="flex gap-3 my-4">
                                <button>Sign in</button>
                            </div>

                            <button className="bg-[#3aa456] text-white py-2 px-4 rounded-md">
                                Make A Difference
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    )
}
