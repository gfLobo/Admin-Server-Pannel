import {
    BrowserRouter as Router,
    Route,
    Routes
} from "react-router-dom";
import Customers from './Pages/Customers'
import Employees from "./Pages/Employees";
import Products from "./Pages/Products";



export function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route  path="/customers" element= {<Customers/>}/>
                <Route  path="/products" element= {<Products/>}/>
                <Route  path="/employees" element= {<Employees/>}/>
            </Routes>
        </Router>
    )
}