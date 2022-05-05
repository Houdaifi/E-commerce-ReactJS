import { Link } from "react-router-dom";

const Product = () => {
    return (
        <div>
            <h1>Home</h1>
            <nav>
                <Link className="text-blue-500" to="/">Home</Link>
            </nav>
        </div>
    );
}
 
export default Product;