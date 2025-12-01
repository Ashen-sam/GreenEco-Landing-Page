export const Mission = () => {
    return (
        <div className="bg-[#f7f6f2] w-full py-16  px-6 md:px-20 plus_jakarta_font">
            <div className="max-w-7xl m-auto">
                <div className="text-sm text-black/70">What do we do</div>
                <div className="text-lg font-medium mt-1 mb-12">Learn About Our Story and Mission</div>
                <div className="flex flex-col gap-12">
                    <div className="flex flex-col items-center text-center gap-4 border-b border-black/10 pb-10">
                        <h1 className="text-3xl md:text-5xl font-serif">We're Growing a
                            <span className="inline-block mx-3 rounded-full overflow-hidden h-10 md:h-14 w-28 md:w-40 align-middle">
                                <img src="https://picsum.photos/300/200?random=1" className="h-full w-full object-cover" />
                            </span>
                            Greener Future
                        </h1>
                    </div>
                    <div className="flex flex-col items-center text-center gap-4 border-b border-black/10 pb-10">
                        <h1 className="text-3xl md:text-5xl font-serif">Our Mission to Plant Trees and Reduce</h1>
                    </div>
                    <div className="flex flex-col md:flex-row items-center m-auto gap-6 md:gap-10">
                        <div className="flex items-center text-3xl md:text-5xl font-serif gap-3">
                            <div className="h-10 w-10 rounded-full bg-black/10 flex items-center justify-center text-xl">⇄</div>
                            Carbon Footprint
                        </div>

                        <div className="rounded-full overflow-hidden h-10 md:h-14 w-32 md:w-48">
                            <img src="https://picsum.photos/300/200?random=2" className="h-full w-full object-cover" />
                        </div>

                        <div className="text-green-600 font-medium flex items-center gap-1 cursor-pointer">
                            About Us <span>↗</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}