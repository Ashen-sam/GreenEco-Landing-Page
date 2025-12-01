import { Globe } from 'lucide-react';
import handTree from '../../../../../public/6769485.jpg'

export const Hero = () => {
    return (
        <div className="bg-gradient-to-br from-stone-100 to-stone-200 flex items-center justify-center p-8">
            <div className=" w-full max-w-[1400px] ">


                <div className="relative z-10 h-full flex flex-col justify-between p-12">

                    <div className="max-w-xl">
                        <h1 className="text-7xl font-serif leading-tight text-stone-800 mb-8">
                            Planting trees for better future
                        </h1>
                        <div className='p-2 flex flex-col gap-2'>
                            <Globe className=" text-stone-600 mt-1 flex-shrink-0" />

                            <div className="flex items-start gap-3   rounded-lg max-w-[280px] mb-6">
                                <p className="text-sm  text-stone-700">
                                    Did you know that deforestation contributes to over 15% of global greenhouse gas emissions? Join us in our mission to create a healthier planet for all.
                                </p>
                            </div>
                        </div>

                        <button className="bg-[#3aa456] text-white px-8 py-3 rounded-md font-medium transition-colors">
                            Contribute Now
                        </button>
                    </div>

                    <div className="self-end bg-white p-6 rounded-2xl shadow-xl ">
                        <div className="flex items-start gap-4">
                            <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                                <img src={handTree} width={400} height={200} alt="handTree" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-stone-800 mb-1">Ready to make a difference?</h3>
                                <p className="text-sm text-stone-600 mb-3">You can choose how to contribute to tree planting today!</p>
                                <button className="text-sm font-semibold text-emerald-700 border-b-2 border-emerald-700">
                                    Take Action
                                </button>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}