import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GlowingImage from '../components/basic/GlowingImage';
import '../App.css';
import DialogBox from '../components/advanced/DialogBox';
import MaraudersMap from './MaraudersMap';

import { useState } from 'react';
import PopupLayout from '../components/layouts/layout';

const GodricHollow: React.FC = () => {
    
    const [openDialogBox, setDialogBoxOpen] = useState(false);
    const [openPopupLayout, setPopupLayoutOpen] = useState(false);

    const handleDialogBoxOpen = () => {
        setDialogBoxOpen(true);
    }
    
    const handleDialogBoxClose = () => {
        setDialogBoxOpen(false);
    }

    const handleMaraudersMapOpen = () => {
        setPopupLayoutOpen(true);
    }

    const handleMaraudersMapClose = () => {
        setPopupLayoutOpen(false);
    }

    const handleLetterOpen = () => {
        
    }
    const homeBackgroundImage = {
        backgroundImage: "url('/images/godricHollow/homeBackgroundImage.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'white',
    };
    const title = "Dumbledore's Wisdom";

    const dialogData = [
        {
            title,
            content: "Are you a true Wizard?\n Hogwards Explress is waiting for you at the 9 3/4 platform."

        },
        {
            title,
            content: "Are you a muggle born??, don't worry! The 'PortKey' tranpotation is servicing at marauder's map",
        }
    ];
    
    return (
        
        <Box sx={{

            position: "relative",
            overflow: "hidden",
            top: 0,
            left: 0,
            backgroundImage: "url('/images/godricHollow/homeBackgroundImage.jpg')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '100vh',
            width: '100vw',
        }}>
            
            <DialogBox open={openDialogBox} onClose={handleDialogBoxClose} dialogData={dialogData} backgroundPostion="center" />
            <PopupLayout open={openPopupLayout} onClose={handleMaraudersMapClose}/>
        
            <Grid container direction="column" >
                <Grid alignItems="center"
                    size={2}
                    justifyContent={"center"}
                    textAlign={"center"}
                    sx={{
                        width: '100vw',
                        paddingTop: 10

                    }}>
                    <Typography variant="h2" sx={{ fontFamily: "Legendary-Runes"}}>Welcome to the Wizard World </Typography> 
                </Grid>
                <Grid size={ 12} sx={{height: '5vh'}} />
                <Grid alignItems="center" marginBottom={"10vh"} size={2} justifyContent={"center"} textAlign={"center"} sx={{ width: '100%' }}>
                    <Typography
                        variant="h4"
                        sx={{
                            fontFamily: "Norse-Bold" 
                        }}>
                        Explore the Magic behind the Code
                    </Typography>
                </Grid>
                
                <Grid container direction="row" size={12}>
                        <Grid size={1}/>
                        <Grid size={2} justifyContent="left">
                        <GlowingImage src="/images/godricHollow/dumbledore.png" onClick={handleDialogBoxOpen}/>
                        </Grid>
                        <Grid size={3} height={"100vh"} justifyContent="center" alignContent="center">
                        <Typography variant="h4"
                            sx={{
                                fontFamily: "Norse-Bold",
                            }}>Let's Start the Journey</Typography>
                        </Grid>
                        <Grid size={3}>
                            <Box
                                component="img"
                                src="/images/godricHollow/Untitled.png"
                                alt="Entrance"
                                sx={{
                                    height: "50vh",
                                    perspective: 800,
                                    transform: "rotateX(35deg) rotateY(35deg)", 
                                    transformStyle: "preserve-3d",
                                }} />
                        
                            
                           
                        </Grid>
                        <Grid size={3}>
                        <Grid container direction="column" justifyContent="center" alignContent="space-around">
                             <Grid size={4} alignContent="center">
                                <GlowingImage src="images/godricHollow/letter.png" onClick={handleLetterOpen}
                                alt="letter" height="10vh"/>
                            </Grid>
                            <Grid size={2} height="10vh"/>
                                <Grid size={6} alignContent="center">
                                <GlowingImage src="/images/godricHollow/maraudersMap.png" onClick={handleMaraudersMapOpen}
                                    alt="marauder's map" height="10vh"/>
                                
                                </Grid>
                               
                            </Grid>
                        </Grid>            
                    
                    
                </Grid>    
            </Grid>
            
        </Box>
  ); 
};
export default GodricHollow;