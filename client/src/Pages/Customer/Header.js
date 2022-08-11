import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { IoSearch } from "react-icons/io5";
import AdminPage from "../Admin/AdminPage";

export const Header = () => {
	const navigate = useNavigate();
	const handleAdminClick = () => {
		return navigate("/AdminPage");
	};
	return (
		<Wrapper>
			<Title to="/">Mental Health</Title>
			<Search>
				<DivSearch>
					<BtnSearch>
						<IoSearch />
						<Span>Find a Therapist</Span>
					</BtnSearch>
				</DivSearch>
			</Search>
			<Login>
				<Customer>Customer/Login</Customer>
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
	color: white;
	margin-left: 3em;
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
