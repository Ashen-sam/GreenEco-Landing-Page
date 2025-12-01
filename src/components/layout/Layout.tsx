import { Hero, LatestNews, Mission, Revolution, Stats, TrustedTeam } from "../pages"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout = () => {
    return (
        <div>
            <div className="  overflow-x-hidden   m-auto">
                <div className="max-w-7xl m-auto">
                    <Navbar />
                </div>
                <Hero />
                <Stats />
                <Mission />
                <Revolution />
                <TrustedTeam />
                <LatestNews />
                <Footer />
            </div>
        </div>
    )
}