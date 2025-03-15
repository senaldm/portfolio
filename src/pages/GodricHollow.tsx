import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import GlowingImage from '../components/basic/GlowingImage';
import '../App.css';
import DialogBox from '../components/advanced/DialogBox'

import { useState } from 'react';

const GodricHollow: React.FC = () => {
    
    const [open, setDialogBoxOpen] = useState(false);

    const handleDialogBoxOpen = () => {
        setDialogBoxOpen(true);
    }
    
    const handleDialogBoxClose = () => {
        setDialogBoxOpen(false);
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
                        <Grid size={3} justifyContent="left">
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
                            }}/>
                            
                           
                        </Grid>
                </Grid>    
            </Grid>
            <DialogBox open={open} onClose={handleDialogBoxClose} title="Dumbledore's Wisdom" content="Welcome to the world of magic!" backgroundPostion="center" />
        </Box>
  ); 
};
export default GodricHollow;