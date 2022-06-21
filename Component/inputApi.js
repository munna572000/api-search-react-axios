import axios from 'axios'
import React, { useEffect, useState } from 'react'

const PostGetData = () => {
    const [user , setUser]=useState([]);
    const [name , setName]=useState('')

    useEffect(()=>{
        const bodyFormData = new FormData();
        bodyFormData.append("page",0)
        bodyFormData.append("flavour",name)
        bodyFormData.append("vendor_slug","")

        axios.post(`https://www.eliquidremix.com/panel/api/search-flavours`,bodyFormData).then((res)=>{
            console.log(res)
            setUser(res?.data?.data)
        })
    },[name])
    console.log(name)
   
   
  return (
    <>
    <div className='container'>
        <div className='row'>
            <div className="col">
            <input type="search" className='form-control' value={name} onChange={(e) => {
                    setName(e.target.value) 
                }} />
            {/* <button className='btn btn-primary'  onClick={Api}  > click</button> */}

            </div>

        </div>

    </div>
    <div className='container'>
        <div className='row'>
            {
                user.map((values , index)=>{
                    return(
                        <>
                        <div key={index}>
                            <div className='card'>
                                <div className='card-body'>
                                    <img className="card-img-right"
                                    src={values.img}  alt="..."
                                    />
                                     <div className='card-title'>
                                      
                                        <p>Recipes {values.used_count}</p>

                                    </div>

                                    <div className='card-title'>
                                        <h1>{values.flavour_name}</h1>
                                        <p>by {values.vendor_name}<span>  ( {values.tag_name} )</span></p>

                                    </div>

                                </div>

                            </div>

                        </div>
                        </>
                    )
                })
            }

        </div>


    </div>
    </>
  )
}

export default PostGetData