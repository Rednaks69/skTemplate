import { useNavigate } from "react-router"

function Card({item}) {

    const navigate = useNavigate()
    const handleClick = () => {
        navigate(`/api/v1/cards/${item.id}`)
    }
  return (
    <div>
        <div className="card" onClick={( )=> handleClick() }>
            {/* <img src={item.image} alt={item.title} className="w-full h-48 object-cover rounded-t-lg" /> */}
            <h2 className="text-xl font-bold mt-2">{item.title}</h2>
            <p className="text-gray-700">{item.description}</p>
            {/* <button className="bg-blue-500 text-white px-4 py-2 rounded mt-4">Action</button> */}
        </div>
    </div>
  )
}

export default Card