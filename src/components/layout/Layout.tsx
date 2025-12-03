import { AnimatePresence } from "motion/react"
import { Hero, LatestNews, Mission, MobileApp, Revolution, Stats, TrustedTeam } from "../pages"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"
import { motion } from 'framer-motion';
import { useEffect, useState } from "react";
import logoNew from '../../../public/logoNewTree.png'
import { SmoothScroll } from "../animations";

export const Layout = () => {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const timer = setTimeout(() => setLoading(false), 1100);
        return () => clearTimeout(timer);
    }, []);
    return (
        <div>
            <SmoothScroll />
            <AnimatePresence mode="wait">
                {loading && (
                    <motion.div
                        initial={{ opacity: 1, scale: 0.8 }}
                        exit={{ opacity: 0, scale: 1.8 }}

                        className="fixed overflow-hidden inset-0 z-1001 flex items-center justify-center bg-white"
                    >
                        <div className="relative flex items-center justify-center">
                            <img src={logoNew} width={100} alt="" />
                            <motion.div
                                className="absolute inset-0 border-4 border-transparent border-t-[#3AA458] rounded-full"
                                animate={{ rotate: 360 }}
                                transition={{
                                    duration: 1,
                                    repeat: Infinity,
                                    ease: "linear"
                                }}
                            />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            {!loading && (
                <div className="overflow-x-hidden m-auto">
                    <div className="max-w-[1600px] m-auto">
                        <Navbar />
                    </div>
                    <Hero />
                    <Stats />
                    <Mission />
                    <Revolution />
                    <MobileApp />
                    <TrustedTeam />
                    <LatestNews />
                    <Footer />
                </div>
            )}
        </div>
    )
}