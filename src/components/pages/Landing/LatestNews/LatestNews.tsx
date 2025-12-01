import image1 from '../../../../../public/6769485.jpg'
export const LatestNews = () => {
    const newsItems = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?w=800&q=80",
            title: "Introducing Our Newest Climate Neutral Certified Brands",
            description: "This Earth Week, we're delighted to introduce the newest Climate Neutral Certified brands. Each successfully met the leading Standard of climate action and took immediate steps to 'Invest in Our Planet'."
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?w=800&q=80",
            title: "Introducing Our Newest Climate Neutral Certified Brands",
            description: "This Earth Week, we're delighted to introduce the newest Climate Neutral Certified brands. Each successfully met the leading Standard of climate action and took immediate steps to 'Invest in Our Planet'."
        }
    ];

    return (
        <div className="bg-[#FAF7F2] py-20 px-6">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row gap-12 items-start">

                    <div className="lg:w-[380px] flex-shrink-0">
                        <h1 className="text-[56px] leading-[1.1] font-serif text-[#2c2c2c] mb-12">
                            Keep up with<br />Latest News
                        </h1>
                        <div className="w-full max-w-[320px]">
                            <img src={image1} height={1000} width={600} alt="" />
                        </div>
                    </div>

                    <div className="flex-1">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
                            {newsItems.map((item) => (
                                <div key={item.id} className="flex flex-col">
                                    <div className="w-full aspect-[1.4/1] rounded-[50%] overflow-hidden mb-8 bg-gray-100">
                                        <img
                                            src={item.image}
                                            alt={item.title}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <h3 className="text-[28px] leading-[1.3] font-serif text-[#2c2c2c] mb-6 text-center px-4">
                                        {item.title}
                                    </h3>
                                    <p className="text-[15px] text-gray-600 text-center mb-6 leading-[1.6] px-2">
                                        {item.description}
                                    </p>
                                    <div className="text-center mt-auto">
                                        <a href="#" className="text-[#52C27D] text-[15px] font-medium inline-block border-b-2 border-[#52C27D] pb-1 hover:opacity-80 transition-opacity">
                                            Learn More
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="relative h-1.5 w-full bg-gray-200 rounded-full overflow-hidden">
                            <div className="absolute top-0 left-0 h-full w-1/2 bg-[#52C27D] rounded-full"></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}