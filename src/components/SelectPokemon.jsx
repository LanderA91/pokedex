import { useEffect, useState } from "react"
import { useNavigate, useParams } from "react-router-dom"


const SelectPokemon = () => {

    const [datosPoke, SetdatosPoke] = useState([])
    const [loading, setLoading] = useState(true)
    const navigate = useNavigate()

    const params = useParams()
    


    const getData = async () => {
        try{

            const respuesta = await fetch(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
            console.log(respuesta)
            const data = await respuesta.json()
            // Uso de UseState para guardar los datos del JSON
            SetdatosPoke(data)
            console.log(data.sprites.other.dream_world.front_default)


        }catch(error){
            console.log(error)
        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        getData()
        
    }, [])

    if (loading) return <p>Cargando...</p>
    

    return (
        <div className="d-flex flex-column align-items-center">
            <div className="d-flex align-items-center justify-content-center p-5 gap-5">
            <div className="d-flex flex-column align-items-center bg-white rounded-circle p-5">
                <h2>{datosPoke.name.toUpperCase()}</h2>
                
                <img className="pokemon-image" src={datosPoke.sprites.other.dream_world.front_default} alt="" />
            </div>
            {
            <div className="d-flex flex-column align-items-center">
                <ul className="d-flex flex-column align-items-end gap-3">
                    {datosPoke.stats.map((item) => {
                        return <li className="text-decoration-none" key={item.stat.name}><b>{item.stat.name.toUpperCase()}</b>: {item.base_stat} XP</li>
                    })}
                </ul>
            </div>
            }
        </div>
        <button onClick={() => navigate("/Select")} className="btn btn-dark mb-5">Elije otro pokemon</button>
        </div>
        
        
    )
}

export default SelectPokemon