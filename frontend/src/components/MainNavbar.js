import React from "react";
import {
	Navbar,
	Container,
	Nav,
	NavDropdown,
	Offcanvas,
	Form,
	FormControl,
	Button,
} from "react-bootstrap";
import Fab from "@mui/material/Fab";
import Avatar from "@mui/material/Avatar";
import SearchIcon from "@mui/icons-material/Search";
import { NavLink, Link, useLocation, Navigate, useNavigate } from "react-router-dom";
import DeleteIcon from "@mui/icons-material/Delete";
import SendIcon from "@mui/icons-material/Send";
import NavigationIcon from "@mui/icons-material/Navigation";
import { Input, Paper } from "@mui/material";

import Stack from '@mui/material/Stack';
import { useContext } from "react";
import Context from "../Context/Context";
export default function MainNavbar() {
	let { authtoken,setauthtoken,logout,setquery ,GetAllNotes,GetqueryNotes} = useContext(Context)


	let navigate = useNavigate()


	const handletogglesearchbar2 = () => {
		if (document.getElementById("searchbar2").style.display === "flex") {
			document.getElementById("searchbar2").style.display = "none";
			console.log("hidden");
		} else {
			document.getElementById("searchbar2").style.display = "flex";
			console.log("flex");
		}
	};




	let location = useLocation();
		
	return (
		<div>
			<Navbar
				className="block bg-gradient-to-tr from-gray-600 to-gray-900 navbar-dark"
				bg=""
				expand="lg"
			>
				<Container fluid>
					<Navbar>
						<Container>
							<Navbar.Brand href="#home">
								<Avatar
									alt="Remy Sharp"
									src="img/logo.webp"
									sx={{ width: 24, height: 24 }}
									className="d-inline-block align-top"
								/>{" "}
								CloudNote
							</Navbar.Brand>
						</Container>
					</Navbar>
					<Navbar.Toggle
						className="mx-1 p-0 focus:ring-4 focus:ring-gray-300 focus:ring-opacity-50 focus:transition-all focus:fade-in-out border-none rounded-sm hover:border-2 hover:border-black"
						aria-controls="offcanvasNavbar"
					/>

					<Navbar.Collapse id="responsive-navbar-nav">
						<Nav className="me-auto">
							<Nav.Link className={`rounded-[10px] hover:text-white mx-2 w-fit ${location.pathname === "/"? "rounded-[10px] bg-gray-300 text-black hover:text-black transition-all fade-in-out px-2 ": ""}`} as={Link} to="/">Home</Nav.Link>
							
							<Nav.Link className={`rounded-[10px] hover:text-white mx-2 w-fit ${location.pathname === "/note"? "rounded-[10px] bg-gray-300 text-black hover:text-black transition-all fade-in-out px-2": ""}`} as={Link} 
							to={authtoken?"/note":"/login"}>Notes</Nav.Link>
							{authtoken?(
								null
							):(
								<Nav.Link className={`rounded-[10px] hover:text-white mx-2 w-fit ${location.pathname === "/login"? "rounded-[10px] bg-gray-300 text-black hover:text-black transition-all fade-in-out px-2": ""}`} as={Link} to="/login">Login</Nav.Link>
							)}
							
							
							<Nav.Link className={`rounded-[10px] hover:text-white mx-2 w-fit ${location.pathname === "/signup"? "rounded-[10px] bg-gray-300 text-black hover:text-black transition-all fade-in-out px-2": "/signup"}`} as={Link} to="/signup">SignUp</Nav.Link>
							
							<Nav.Link className="mx-2 hover:text-white">Contact Us</Nav.Link>
							
							<Nav.Link className="ms-2 hover:text-white">About Us</Nav.Link>
							
							{authtoken?(
								<Nav.Link className="rounded-[10px] hover:text-white mx-2 w-fit  bg-gray-300 text-black   px-2 " onClick={logout}>Logout</Nav.Link>
							):(
								null
							)}
							
					</Nav>
					<div className="flex justify-center">
					<Fab
						className=" bg-gray-300 ml-2 "
						aria-label="search"
						onClick={handletogglesearchbar2}
					>
						<SearchIcon fontsize="large" />
					</Fab>
					
					{authtoken?(
						<Avatar
						alt="Remy Sharp"
						src="/static/images/avatar/1.jpg"
						sx={{ width: 56, height: 56 }}
						className="ml-2 "
					  />
					):(
						null
					)}
					
					</div>
				</Navbar.Collapse>
			</Container>
			<Container id="searchbar2" className='hidden justify-center'>
				<input
					type="text"
					className="
                    w-full
                    h-full 
                    hover:bg-white 
                    bg-gray-300 
                    rounded-full 
                    mx-2  
                    active:ring-4 
                    active:ring-white active:ring-opacity-50
                    focus:ring-4 
                    focus:ring-white focus:ring-opacity-50 
                    px-4 
                    py-1
                    my-2
                    font-medium focus:transition-all focus:fade-in-out hover:fade-in-out hover:transition-all active:transition-all active:fade-in-out hover:fade-in-out outline-none border-none focus:bg-white"
				onChange={e=>{
					e.preventDefault()
					setquery(e.target.value)
				}}/>
				<Fab variant="extended" onClick={GetqueryNotes}>
					<SearchIcon className=""  />
					Search
				</Fab>
			</Container>
		</Navbar>
		
		</div >
	);
}
