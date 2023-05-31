import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

const Select = () => {

    const [namePokemones, setNamePokemones] = useState([])
    const navigate = useNavigate()

    const getData = async () => {
        try{

            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/`)
            const data = await respuesta.json()
            setNamePokemones(data.results)


        }catch(error){
            console.log(error)
        }

    }

    useEffect(() => {
        getData()
        
    }, [])

    const mostrarValor = (e) => {
        console.log(e.target.value)
        navigate(`/Selectpokemon/${e.target.value}`)
    }

    return (
        <div className="d-flex align-items-center justify-content-center p-5">
                <select className="form-select w-50" onChange={mostrarValor}>
                    <option value="">Selecciona un pokemon.</option>
                {namePokemones.map((item) => {
                    return <option key={item.name} value={item.name}>{item.name}</option>
                })}
                </select>
        </div>
        
        
    )

    
}

export default Select