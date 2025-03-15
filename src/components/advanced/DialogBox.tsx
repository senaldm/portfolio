import { Dialog, DialogActions, DialogTitle, DialogContent} from '@mui/material';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

interface DialogBoxProps {
    open: boolean;
    onClose?: () => void;
    onclick?: () => void;
    title?: string;
    content?: string;
    arrowPosition?: 'top' | 'bottom' | 'left' | 'right';
    backgroundPostion: string
};

const DialogBox: React.FC<DialogBoxProps> = ({
    open,
    onClose,
    onclick,
    title,
    content,
    arrowPosition,
    backgroundPostion,
}) => {
    return (
        <Dialog
            open={open}
            onClose={onClose}
            sx={{
                '& .MuiPaper-root': {
                    position: 'relativw',
                    backgroundImage: `url('/images/godricHollow/dialogBox.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: `${backgroundPostion}`,
                    minWidth: '500px', // Ensure dialog has enough space
                    minHeight: '400px',
                    padding: '100px',
                    

                    WebkitMaskImage: `url('/images/godricHollow/dailogBox.svg')`,
                    WebkitMaskPosition: 'center',
                    WebkitMaskSize: 'contain',
                    WebkitMaskRepeat: 'no-repeat',
                    maskImage: `url('/images/godricHollow/dialogBox.svg')`,
                    maskPosition: 'center',
                    maskSize: 'contain',
                    maskRepeat: 'no-repeat'
                },
            }}
        >
            <DialogTitle sx={{textAlign: 'center'}}> {title}</DialogTitle>
            <DialogContent sx={{ justifyContent: 'center', alignContent: 'center' }}> {content}</DialogContent>
            <DialogActions >
                <KeyboardDoubleArrowRightIcon
                    onClick={onclick || onClose}
                    fontSize='small'
                    sx={{
                        position: 'absolute',
                        bottom: 20,
                        right: 20,
                        color: 'white',
                        fontSize: 40, 
                        cursor: 'pointer',
                    }} />
            </DialogActions>
        </Dialog>
        
        
    )
}

export default DialogBox;