import image1 from '../../../../../public/image1.jpg'
import image2 from '../../../../../public/image2.jpg'
import image3 from '../../../../../public/image3.jpg'
import image4 from '../../../../../public/image4.jpg'



export const Revolution = () => {
    const cards = [
        {
            image: image1,
            title: "Create Your Own Green Haven: Plant a Tree",
            description: "Choose to plant a tree in your own backyard or contribute to a tree planting program in your community."
        },
        {
            image: image2,
            title: "Support Change with Your Donation Today",
            description: "Make a one-time or recurring donation to support tree planting initiatives and help reduce carbon emissions."
        },
        {
            image: image3,
            title: "Join Forces: Volunteer to Plant Trees",
            description: "Sign up to volunteer with local organizations dedicated to tree planting and other environmental initiatives."
        },
        {
            image: image4,
            title: "Donate Tools and Resources to Help",
            description: "Contribute tools and resources, such as shovels or watering cans, to support tree planting efforts in your community."
        }
    ];

    return (
        <div className="w-full py-16 bg-[#c8e6d0] bodini_font bg_waves_wallpaper" >
            <div className="max-w-7xl m-auto">
                <div className="flex flex-col items-center text-center gap-3">
                    <h2 className="text-5xl font-serif text-[#2d4a3e]">Join the Green Revolution</h2>
                    <p className="text-xl text-[#2d4a3e]">Choose Your Path to Making a Difference Today!</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mt-14 px-10">
                    {cards.map((card, index) => (
                        <div key={index} className="flex flex-col items-center text-center gap-4">
                            <img src={card.image} alt="" className="h-36 w-36 rounded-full object-cover shadow-lg" />
                            <h3 className="text-xl font-semibold text-[#2d4a3e]">{card.title}</h3>
                            <p className="text-sm text-[#3d5a4d] plus_jakarta_font">{card.description}</p>
                            <button className="px-6 py-2.5 rounded-md bg-[#3aa456] text-white font-medium transition-colors">
                                Contribute Now
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    );
}