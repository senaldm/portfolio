import GodricHollow from "./pages/GodricHollow"
import AppRoutes from "./routes/Routes";
import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
const App: React.FC = () => {
    return (
        <Router>
           
            {/* <Container maxWidth="sm" sx={{ mt: 4 }}>
                <Typography variant="h4" gutterBottom>
                    WealthFlow
                </Typography> */}
            <AppRoutes /> {/* Use the routes component */}
            {/* </Container> */}
        </Router>
    );
};

export default App;
