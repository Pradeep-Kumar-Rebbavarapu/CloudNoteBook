import React from 'react'
import { useContext } from 'react'
import Spinner from '../components/Spinner'
import Context from '../Context/Context'

export default function AddNotePage(props) {
    let {AddNote,loading} = useContext(Context)
    return (
        <div>
       
            <div className={`container my-3 py-3 ${props.color} rounded-md`}>
            <div className={` m-2 p-2 ${props.color} rounded-md`}>
            <h1 className=" text-center py-3">{props.title}</h1>
            <div>
                <form action=""  onSubmit={props.function}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Title</label>
                        <input type="text" className="form-control focus:ring-[7px] focus:ring-black focus:ring-opacity-50 border-2 border-black" id="exampleFormControlInput1" name="title"/>
                    </div>


                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                        <textarea className="form-control focus:ring-[7px] focus:ring-black focus:ring-opacity-50 border-2 border-black" id="exampleFormControlTextarea1" rows="3" name="desc"></textarea>
                    </div>

                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Tag</label>
                        <input type="text" className="form-control focus:ring-[7px] focus:ring-black focus:ring-opacity-50 border-2 border-black" id="exampleFormControlInput1" name="tag" />
                    </div>

                    <button className={`my-3 border-2 border-white p-2 rounded-md bg-black text-white focus:ring-[7px] focus:ring-black focus:ring-opacity-50 `} type="submit">{props.btnmessage}</button>
                </form>
            </div>
            </div>
        </div>
        
        
        </div>
    )
}
