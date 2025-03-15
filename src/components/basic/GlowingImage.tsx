import { Box } from '@mui/material';
import { useState } from 'react';

interface GlowingImageProps{
    src: string;
    alt?: string;
    height?: string | number;
    width?: string | number;
    glowColor?: string;
    animationDuration?: string;
    onClick?: () => void;

};

const GlowingImage: React.FC <GlowingImageProps> = ({
    src = "",
    alt = "Glowing Image",
    height = "50vh",
    width = "auto",
    glowColor = "255, 223, 0",
    animationDuration = "1.5s",
    onClick,
}) => {
    
    const [clicked, setClicked] = useState(false);

    const handleClick = () => {
        // if (!clicked)
        // {
            setClicked(true);
            if (onClick)
                onClick();
        // }
    }
    return (
        <Box
            component={"img"}
            src={src}
            alt={alt}
            height={height}
            width={width}
            onClick={handleClick}
            sx={{
                cursor: "pointer",
                animation: clicked ? "none " : `pulse ${animationDuration} infinite`,
                filter: clicked? "none" : `drop-shadow(0px 0px 5px rgba(${glowColor}))`, // Initial glow
                transition: clicked ? "none" :"transform 50.5s ease-in-out",
                "@keyframes pulse": {
                    "0%": { transform: "scale(1)", filter: `drop-shadow(0px 0px 3px rgba(${glowColor}, 0.8))` },
                    "50%": { transform: "scale(1.05)", filter: `drop-shadow(0px 0px 10px rgba(${glowColor}, 1))` },
                    "100%": { transform: "scale(1)", filter: `drop-shadow(0px 0px 5px rgba(${glowColor}, 0.8))` },
                },
            }} />
    );
}

export default GlowingImage;