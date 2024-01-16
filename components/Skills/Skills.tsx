import React, {useState, useEffect} from 'react';

interface Logo {
    src: string;
    description: string;
    isHovered?: boolean;
    style?: React.CSSProperties;
}

interface LogoAnimationProps {
    logos: Logo[];
}

const Skills: React.FC<LogoAnimationProps> = ({logos}) => {
    const [logoElements, setLogoElements] = useState<Logo[]>([]);

    useEffect(() => {
        // Function to randomly move logos
        const moveLogo = (logo: Logo) => {
            if (!logo.isHovered) {
                const newX = Math.random() * 100;
                const newY = Math.random() * 100;
                logo.style = {
                    transform: `translate(${newX}vw, ${newY}vh)`
                };
            }
        };

        // Initialize logos with their positions and hover states
        const initialLogos = logos.map(logo => ({
            ...logo,
            isHovered: false,
            style: {}
        }));
        setLogoElements(initialLogos);

        // Set interval to move logos
        const intervalId = setInterval(() => {
            setLogoElements(currentLogos =>
                currentLogos.map(logo => {
                    moveLogo(logo);
                    return {...logo};
                })
            );
        }, 5000);

        return () => clearInterval(intervalId);
    }, [logos]);

    // Event handlers
    const handleMouseOver = (index: number) => {
        setLogoElements(currentLogos =>
            currentLogos.map((logo, i) =>
                i === index ? {...logo, isHovered: true} : logo
            )
        );
    };

    const handleMouseOut = (index: number) => {
        setLogoElements(currentLogos =>
            currentLogos.map((logo, i) =>
                i === index ? {...logo, isHovered: false} : logo
            )
        );
    };

    return (
        <div id="logoContainer" className="relative h-[400px]">
            {logoElements.map((logo, index) => (
                <div
                    key={index}
                    className="logo w-20 h-20"
                    onMouseOver={() => handleMouseOver(index)}
                    onMouseOut={() => handleMouseOut(index)}
                    style={logo.style}
                >
                    <img
                        src={logo.src}
                        alt={`Logo ${index + 1}`}
                        className="w-full h-full object-contain"
                    />
                </div>
            ))}
        </div>
    );
};

export default Skills;
