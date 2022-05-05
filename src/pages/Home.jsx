import { Link } from "react-router-dom";
import Category from "../components/Category";
import Promo from "../components/Promo";

const Home = () => {

    return (
        <div>
            <h1>Product</h1>
            <nav>
                <Link className="text-blue-500" to="/products">Product</Link>
            </nav>
        </div>
    );
}
 
export default Home;