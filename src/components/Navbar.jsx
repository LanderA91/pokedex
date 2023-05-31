import { NavLink } from "react-router-dom"

const Navbar = () => {
    return (
        <div className="d-flex align-items-center justify-content-between bg-dark w-100 p-4">
            <img src="https://upload.wikimedia.org/wikipedia/commons/9/98/International_Pokémon_logo.svg" alt="" />
            <div className="d-flex align-items-center gap-3 justify-content-center">
                <NavLink className="text-decoration-none text-light" to={"/"}>Inicio</NavLink>
                <NavLink className="text-decoration-none text-light" to={"Select"}>Pokemones</NavLink>
            </div>
            
        </div>
    )
}

export default Navbar