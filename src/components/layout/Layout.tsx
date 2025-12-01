import { Hero, LatestNews, Mission, Revolution, Stats } from "../pages"
import { Footer } from "./Footer"
import { Navbar } from "./Navbar"

export const Layout = () => {
    return (
        <div>
            <div className="     m-auto">
                <div className="max-w-7xl m-auto">
                    <Navbar />
                </div>
                <Hero />
                <Stats />
                <Mission />
                <Revolution />
                <LatestNews />
                <Footer />
            </div>
        </div>
    )
}