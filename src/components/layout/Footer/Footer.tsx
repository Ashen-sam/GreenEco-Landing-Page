import { Instagram, Linkedin, Twitter } from 'lucide-react';
import treeLogo from "../../../../public/logoNewTree.png";

export const Footer = () => {
    const leftLinks = [
        { name: 'About Us', href: '#' },
        { name: 'Contribution', href: '#' },
        { name: 'FAQ', href: '#' },
        { name: 'Contact', href: '#' }
    ];

    const rightLinks = [
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms & Conditions', href: '#' },
        { name: 'Cookie Policy', href: '#' }
    ];

    const socialIcons = [
        { Icon: Linkedin, href: '#' },
        { Icon: Twitter, href: '#' },
        { Icon: Instagram, href: '#' }
    ];

    return (
        <div className="bg-[#0f1c2e] text-white py-16 px-8">
            <div className="max-w-[1400px] mx-auto">

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">

                    <div className="flex flex-col">
                        <h2 className="text-4xl mb-8 font-serif leading-tight">Connect on Social</h2>
                        <div className="flex gap-3">
                            {socialIcons.map(({ Icon, href }, index) => (
                                <a
                                    key={index}
                                    href={href}
                                    className="w-9 h-9 rounded-full bg-gray-700 flex items-center justify-center hover:bg-gray-600 transition-colors"
                                >
                                    <Icon size={18} />
                                </a>
                            ))}
                        </div>
                    </div>

                    <div className="flex flex-col">
                        {leftLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="block mb-4 text-sm hover:text-gray-300 transition-colors border-b border-green-700 pb-3"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col">
                        {rightLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.href}
                                className="block mb-4 text-sm hover:text-gray-300 transition-colors border-b border-green-700 pb-3"
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>

                    <div className="flex md:justify-start lg:justify-end">
                        <div>
                            <select className="bg-transparent border border-gray-600 rounded px-4 py-2.5 text-sm w-36 cursor-pointer">
                                <option className="bg-[#0f1c2e]">English</option>
                                <option className="bg-[#0f1c2e]">Spanish</option>
                                <option className="bg-[#0f1c2e]">French</option>
                            </select>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-700 pt-4 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-2">
                        <img src={treeLogo} width={40} alt="TreeLogo" />
                        <div className="lobster_font text-[23px]">GreenEco</div>
                    </div>
                    <p className="text-xs text-gray-400 text-center md:text-right">
                        All rights reserved to GreenEco © 2023
                    </p>
                </div>
            </div>
        </div>
    );
};
