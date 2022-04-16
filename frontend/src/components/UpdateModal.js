import React from 'react'
import { useContext } from 'react'
import Context from '../Context/Context'
import AddNotePage from '../Pages/AddNotePage'
import Spinner from './Spinner'

export default function UpdateModal() {
  let {UpdateNote,loading} = useContext(Context)
  return (
    <div>
      
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class=" modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Update This Note</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <AddNotePage function={UpdateNote} title={''} btnmessage={'UpdateNote'}/>
            </div>
            <div class="modal-footer">
              <button type="button" class="my-3 border-2 border-white p-2 rounded-md bg-black text-white focus:ring-[7px] focus:ring-black focus:ring-opacity-50" data-bs-dismiss="modal">Close</button>
              
            </div>
          </div>
        </div>
      </div>
    
      
      </div>
  )
}
