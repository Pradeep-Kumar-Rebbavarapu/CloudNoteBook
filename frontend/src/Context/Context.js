import { useState } from "react";
import { createContext } from "react";
import { useNavigate, Navigate } from "react-router-dom";
const Context = createContext()
export default Context

export const ContextProvider = ({ children }) => {
    let navigate = useNavigate()

    let [alert, setalert] = useState({ class: "hidden", message: "hello" })

    let [query,setquery] = useState("")

    let [loading, setloading] = useState(false)

    let [authtoken, setauthtoken] = useState(localStorage.getItem('authtoken') ? JSON.parse(localStorage.getItem('authtoken')) : null)

    let [AllNotes, setAllNotes] = useState([])


    let [UserData, setUserData] = useState(localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null)

    let [value,setvalue] = useState("")

    let [progress,setprogress] = useState(0)

    let [nexturl,setnexturl] = useState(`http://127.0.0.1:8000/api/v1/GetUserNotes/`)

    let [querynexturl,setquerynexturl] = useState(`http://127.0.0.1:8000/api/v1/GetUserNotes/` )

    let [querynotes,setquerynotes] = useState([])
    let Signup = async (e) => {
        setloading(true)
        e.preventDefault()
        console.log(e.target);
        let response = await fetch('http://127.0.0.1:8000/api/v1/signup/' +  `?search=${query}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: (
                JSON.stringify({
                    username: e.target.username.value,
                    email: e.target.email.value,
                    first_name: e.target.first_name.value,
                    last_name: e.target.last_name.value,
                    password: e.target.password.value,
                    confirm_password: e.target.confirm_password.value
                })

            )
        })
        let data = await response.json()
        console.log(data)
        console.log(response);
        if (response.status === 200) {
            // navigate('/')
            setalert({ class: 'bg-green-500 bg-opacity-70', message: "Signed Up Succesfully" })
        }
        else {
            // 
            if (data.password) {
                setalert({ class: 'bg-rose-500 bg-opacity-70', message: `password:${data.password}` })
            }
            else if (data.username) {
                setalert({ class: 'bg-rose-500 bg-opacity-70', message: `Username:${data.username}` })
            }
            else if (data.errors) {
                setalert({ class: 'bg-rose-500 bg-opacity-70', message: data.errors })
            }
            else if (data.email) {
                setalert({ class: 'bg-rose-500 bg-opacity-70', message: data.email })
            }
            else {
                setalert({ class: 'bg-rose-500 bg-opacity-70', message: 'Signup Unsuccesful Check Your Fields' })
            }

        }
        setloading(false)
    }


    let login = async (e) => {
        setloading(true)
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/v1/Login/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: (JSON.stringify({
                username: e.target.username.value,
                email: e.target.email.value,
                password: e.target.password.value
            }))
        })
        let data = await response.json()
        console.log(data);
        console.log(response);
        if (response.status === 200) {
            setauthtoken(data)
            localStorage.setItem('authtoken', JSON.stringify(data))
            navigate('/')
            setalert({ class: 'bg-green-500 bg-opacity-70', message: data.message })
        }
        else {
            if (data.error) {
                setalert({ class: 'bg-rose-500 bg-opacity-70', message: data.error })
            }
            else {
                setalert({ class: 'bg-rose-500 bg-opacity-70', message: 'Login Unsuccesfully Please Check Your Credentials' })
            }
        }
        setloading(false)

    }
    const logout = (e) => {
        setloading(true)
        e.preventDefault()
        setauthtoken(null)
        setUserData(null)
        localStorage.clear()
        navigate('/login')
        setloading(false)
    }




    const GetAllNotes = async () => {
        let response = await fetch(nexturl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authtoken.access
            }
        })
        let data = await response.json()
        console.log(data)
        setnexturl(data.next )
        setAllNotes(AllNotes.concat(data.results))
    }
    const GetqueryNotes = async (e) => {
        e.preventDefault()
        let response = await fetch(querynexturl, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authtoken.access
            }
        })
        let data = await response.json()
        if(response.status===200){
            console.log(data)
            setquerynotes(querynotes.concat(data.results))
            setquerynexturl(data.next)
            
            navigate('/query')
            
        }
        else{
            console.log(data)
        }
        

        
    }
    const getUser = async () => {
        let response = await fetch('http://127.0.0.1:8000/api/v1/getUser/', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authtoken.access
            }
        })
        let data = await response.json()
        console.log(data);
        setUserData(data)
        localStorage.setItem('userData', JSON.stringify(data))
    }


    const AddNote = async (e) => {
        setloading(true)
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/v1/AddNote/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + authtoken.access
            },
            body: (JSON.stringify({
                title:e.target.title.value,
                desc: e.target.desc.value,
                tag:e.target.tag.value,
                user:UserData.payload.id
            }))
        })
        let data = await response.json()
        setAllNotes(AllNotes.concat(data))
        setloading(false)
    }

    const DeleteNote = async (e,noteid) =>{
        setloading(true)
        let response = await fetch(`http://127.0.0.1:8000/api/v1/DeleteNote/${noteid}/`,{
            method:'DELETE',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + authtoken.access
            }
        })
        let data = await response.json()
        console.log(data);
        window.location.reload()
        setloading(false)
    }


    const UpdateNote = async (e,noteid) =>{
        setloading(true)
        let response = await fetch(`http://127.0.0.1:8000/api/v1/UpdateNote/${value}/`,{
            method:'PATCH',
            headers:{
                'Content-Type':'application/json',
                'Authorization':'Bearer ' + authtoken.access
            },
            body:(JSON.stringify({
                title:e.target.title.value,
                desc:e.target.desc.value,  
                tag:e.target.tag.value
            }))
        })
        let data = await response.json()
        console.log(data);
        window.location.reload()
        setloading(false)
    }
    let ContextData = {
        "home": "pradeep",
        Signup: Signup,
        alert: alert,
        setalert: setalert,
        login: login,
        authtoken: authtoken,
        setauthtoken: setauthtoken,
        logout: logout,
        GetAllNotes: GetAllNotes,
        AllNotes: AllNotes,
        getUser: getUser,
        UserData: UserData,
        AddNote:AddNote,
        DeleteNote:DeleteNote,
        UpdateNote:UpdateNote,
        value:value,
        setvalue:setvalue,
        nexturl:nexturl,
        progress:progress,
        setprogress:setprogress,
        loading:loading,
        setquery:setquery,
        GetqueryNotes:GetqueryNotes,
        querynotes:querynotes,
        querynexturl:querynexturl,
        navigate:navigate,
    }



    return (
        <Context.Provider value={ContextData}>
            {children}
        </Context.Provider>
    )
}
