import appleStore from '../../../../../public/Component 2.png'
import playStore from '../../../../../public/playnew.png'

export const MobileApp = () => {
    return (
        <div className="bg_phone_wallpaper bg-[#755858] min-h-[80vh] flex items-center relative overflow-hidden">
            <div className="max-w-[1400px] w-full mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-0">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center text-white">

                    <div className="text-center lg:text-left border-l border-gray-100 order-2 lg:order-1">
                        <div className="text-2xl sm:text-3xl font-semibold border-b border-gray-100 pl-3 sm:pl-4 py-3">
                            1 Million trees worldwide
                        </div>
                        <div className="text-sm sm:text-base leading-relaxed p-3 sm:p-4">
                            Our app has helped plant over 1 million trees worldwide, with the help
                            of our community of dedicated tree planters. Join us in our mission
                            to create a greener future by downloading the app today!
                        </div>
                    </div>

                    <div className="order-1 lg:order-2 border">
                        <div className="text-sm sm:text-base leading-relaxed mb-6 sm:mb-8 px-4">
                            Join the tree planting movement from anywhere, at any time.
                            Download our app and start making a difference today!
                        </div>

                        <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 px-4">
                            <img src={appleStore} className="h-10 sm:h-12 mx-auto sm:mx-0" alt="Download on App Store" />
                            <img src={playStore} className="h-10 sm:h-12 mx-auto sm:mx-0" alt="Get it on Google Play" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};