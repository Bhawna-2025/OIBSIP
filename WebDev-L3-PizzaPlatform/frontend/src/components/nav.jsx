import { Link } from "react-router"


const nav = () => {
    return (
        <>
            <div className="h-10 flex justify-between items-center gap-10 my-5 px-20">
                <div className="flex items-center gap-5">
                    <img src="src/assets/logo.png" alt="" className="bg-[#7F1D2D] p-2 h-10 rounded-full" />
                    <p className="text-xl font-bold text-[#7F1D2D]">Forno Rosso</p>
                </div>
                <div className="flex items-center gap-5">
                    <Link to="/">Home</Link>
                    <Link to="/menu">Menu</Link>
                    <Link to="/build">Build Your Pizza</Link>
                    <Link to="/orders">My Orders</Link>
                    <Link to="/profile">Profile</Link>
                </div>
                <div>
                    <i className="ri-shopping-cart-2-line text-2xl p-3 shadow-lg rounded-xl"></i>
                </div>
            </div>
        </>
    )
}

export default nav
