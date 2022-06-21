
import React,{useEffect, useState} from 'react'
import axios from 'axios'

function App() {
  const [user , setUser]=useState([])
const [test , setTest] = useState();

  useEffect(()=>{
    const bodyFormData = new FormData();
    bodyFormData.append("user_identity",null)
   

    axios.post(`https://www.eliquidremix.com/panel/api/home-page`,bodyFormData).then((res)=>{
        setTest(res?.data?.data?.services_data[2].heading)
        setUser(res?.data?.data?.links_data)
    })
},[])


  return (
    <>
    <div className='container'>
      <div className='row'>
        <div className='col-4'>
             <h1>{test}</h1>   
          {           
          
            user.map((values, index)=>{
              return(
                <>              
                
              <div className='container' key={index}>
           {
            values.link ?  
               <div className='card'>
            <div className='card-body'>                  
            <a
              href={values.link}
              className="card-link"
            >
              {values.type}
            </a>
            <div className='card-title'>            
            </div>
              </div>
            </div>
            : null
           }
            

                </div>
                </>


              
              )

            })
          }
        

        </div>

      </div>

    </div>
    </>
  )
}

export default App;