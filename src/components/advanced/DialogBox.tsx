import { Dialog, DialogActions, DialogTitle, DialogContent, Typography} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { useState } from 'react';

interface DialogBoxProps {
    open: boolean;
    onClose?: () => void;
    onclick?: () => void;
    arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
    backgroundPostion: string;
    dialogData: {title: string, content: string}[];
};

const DialogBox: React.FC<DialogBoxProps> = ({
    open,
    onClose,
    onclick,
    arrowPosition,
    backgroundPostion,
    dialogData,
}) => {

    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        if (currentIndex < dialogData.length - 1)
            setCurrentIndex(currentIndex + 1);

        else if (onClose)
        {
            setCurrentIndex(0);
            onClose();
        }
    };
    
    return (
        <Dialog
            open={open}
            onClose={onClose}
            fullWidth
            maxWidth='xs'

            sx={{
                '& .MuiPaper-root': {
                    position: 'absolute',
                    backgroundImage: `url('/images/godricHollow/dialogBox.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: `${backgroundPostion}`,
                    // minWidth: '500px', // Ensure dialog has enough space
                    // minHeight: '400px',
                    padding: '30px',
                    

                    WebkitMaskImage: `url('/images/godricHollow/file.svg')`,
                    WebkitMaskPosition: 'relative',
                    WebkitMaskSize: 'cover',
                    WebkitMaskRepeat: 'no-repeat',
                    maskImage: `url('/images/godricHollow/file.svg')`,
                    maskPosition: 'relative',
                    maskSize: 'cover',
                    maskRepeat: 'no-repeat'
                },
            }}
        >
            <DialogTitle sx={{textAlign: 'center'}}> {dialogData[currentIndex].title}</DialogTitle>
            <DialogContent sx={{ justifyContent: 'center', alignContent: 'center' }}>
                <Typography sx={{whiteSpace: 'pre-line', justifyContent: 'center'}}>{dialogData[currentIndex].content}</Typography>
            </DialogContent>
            <DialogActions >
                <KeyboardDoubleArrowRightIcon
                    onClick={handleNext}
                    fontSize='small'
                    sx={{
                        position: 'relative',
                        bottom: 20,
                        right: 40,
                        color: 'black',
                        fontSize: 40, 
                        cursor: 'pointer',
                    }} />
            </DialogActions>
        </Dialog>
        
        
    )
}

export default DialogBox;