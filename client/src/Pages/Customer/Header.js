import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import { useAuth0 } from "@auth0/auth0-react";
import { UserLogout } from "../../Components/UserLogout";

export const Header = () => {
	const navigate = useNavigate();
	const { loginWithRedirect } = useAuth0();
	const { user, isAuthenticated, isLoading } = useAuth0();
	console.log(isAuthenticated, user);
	const handleAdminClick = () => {
		loginWithRedirect({ redirectUri: "http://localhost:3000/AdminPage" });
	};
	const handleCustomerClick = () => {
		loginWithRedirect({ redirectUri: "http://localhost:3000/" });
	};
	const handleSearchClick = () => {
		return navigate("/Search");
	};
	const [clientData, setClientData] = useState({
		email: "",
		appointment: "",
	});

	console.log(clientData);
	useEffect(() => {
		if (isAuthenticated) {
			setClientData({ email: user.email });
			console.log(clientData);
			fetch("/client/addclient", {
				method: "POST",
				headers: { "Content-Type": "application/json" },

				body: JSON.stringify(clientData),
			});
		}
	}, []);

	return (
		<Wrapper>
			<Title to="/">Mental Health</Title>
			<Search>
				<DivSearch onClick={handleSearchClick}>
					<BtnSearch>
						<IoSearch />
						<Span>Find a Therapist</Span>
					</BtnSearch>
				</DivSearch>
			</Search>
			<Login>
				{isAuthenticated ? (
					<UserLogout />
				) : (
					<Customer onClick={handleCustomerClick}>Customer/Login</Customer>
				)}

				<Admin onClick={handleAdminClick}>Admin/Login</Admin>
			</Login>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
	height: 5em;
	font-family: var(--font-heading);
	background: rgb(86, 116, 245);
	color: white;
`;

const Title = styled(NavLink)`
	font-size: 3em;
	font-weight: bold;
	text-decoration: none;
	text-shadow: 2.2px 2.2px black;
	color: white;
	margin-left: 3em;
	:hover {
		color: lightgray;
		transition: 0.5s;
		transform: scale(1);
	}
`;
const Customer = styled.button`
	border-radius: 1em;
	border: none;
	width: 10em;
	background-color: lightpink;
	color: black;
	margin-right: 1em;
	height: 2em;
	font-weight: bold;
	:hover {
		cursor: pointer;
		transform: scale(1.1);
		background-color: #d0d00d;
		transition: 0.2s;
	}
`;

const Admin = styled.button`
	border-radius: 1em;
	border: none;
	background-color: white;
	color: blue;
	width: 10em;
	height: 2em;
	font-weight: bold;
	:hover {
		cursor: pointer;
		transform: scale(1.1);
		background-color: #d0d00d;
		transition: 0.2s;
	}
`;

const Login = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: justify;
	width: 10%;
	margin-right: 3em;
`;

const BtnSearch = styled.button`
	font-size: 1.3em;
	border: none;
	border-radius: 2em;
	background-color: rgb(86, 116, 245);
	width: 100%;
	height: 1.2em;
	text-align: center;
	color: white;
	display: flex;
	align-items: center;
	:hover {
		cursor: pointer;
		transition: 0.5s ease-in-out;
		transform: scale(1.05);
		color: yellow;
	}
`;

const Search = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin-right: 10em;
`;

const DivSearch = styled.div`
	font-family: var(--font-heading);
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100%;
`;

const Span = styled.span`
	font-size: 0.8em;
	margin-left: 1em;
`;
