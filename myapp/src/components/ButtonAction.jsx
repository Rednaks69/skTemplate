import { useNavigate } from "react-router"


function ButtonAction({url}) {
  const navigate = useNavigate()
  
  const handelClick = (url) => {
    setTimeout(() => {
      console.log('click');
      if (url === 'api/v1') {
        navigate('/')
      } else {
        navigate(`/${url}`)
      }
    }, 800);

  }
  
  return (
    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" 
    type="button" 
    onClick={() => handelClick(url)}>
      
      {url==='api/v1' ? 'CRM' : url.toString().toUpperCase()}
    </button>
  )
}

export default ButtonAction