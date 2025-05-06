import Card from "./card"

function CardsList({data}) {
  return (
    <div className="flex flex-wrap ">
      {
        data.map((item, index) => (
          <div key={index} className="card bg-white shadow-md rounded-lg p-4 m-2 hover:shadow-lg transition-shadow duration-300 ease-in-out">
            <Card item={item}/>          
          </div>
        ))
      }
    </div>
  )
}

export default CardsList