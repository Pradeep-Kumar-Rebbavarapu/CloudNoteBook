import React from 'react'
import { useEffect } from 'react'
import { useContext } from 'react'
import Note from '../components/Note'
import Spinner from '../components/Spinner'
import UpdateModal from '../components/UpdateModal'
import Context from '../Context/Context'
import AddNotePage from './AddNotePage'

export default function Notespage() {
  let {GetAllNotes,AddNote,loading} = useContext(Context)
  // useEffect(()=>{
  //   GetAllNotes()
  // },[])
  return (
    <div>
      
        <>
        <AddNotePage function={AddNote} title={'Add A Note'} color={'bg-gradient-to-tr from-violet-500 to-rose-500 text-white bg-opacity-50'} btnmessage={'Add Your Note'}/>
      
        <Note/>
        </>
      
      
    </div>
  )
}
