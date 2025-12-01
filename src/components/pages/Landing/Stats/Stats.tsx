export const Stats = () => {
    return (
        <div className="w-full bg-[#0d1b2a]  text-white py-12 flex flex-col bodini_font md:flex-row items-center justify-center gap-12 md:gap-24 ">
            <div className="flex flex-col items-center text-center gap-2">
                <div className="text-3xl md:text-4xl font-semibold">977 million+</div>
                <div className="text-sm opacity-80">Trees produced, planted, and protected</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block" />
            <div className="flex flex-col items-center text-center gap-2">
                <div className="text-3xl md:text-4xl font-semibold">280</div>
                <div className="text-sm opacity-80">Project sites in 10 countries</div>
            </div>
            <div className="h-12 w-px bg-white/20 hidden md:block" />
            <div className="flex flex-col items-center text-center gap-2">
                <div className="text-3xl md:text-4xl font-semibold">14,800+</div>
                <div className="text-sm opacity-80">Projects Active</div>
            </div>
        </div>
    )
}