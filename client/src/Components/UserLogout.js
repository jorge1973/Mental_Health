import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import styled from "styled-components";

export const UserLogout = () => {
	const { logout } = useAuth0();
	return (
		<Button onClick={() => logout({ returnTo: "http://localhost:3000" })}>
			Logout
		</Button>
	);
};

const Button = styled.button`
	border-radius: 1em;
	width: 7em;
	height: 2em;
	background-color: white;
	color: black;
	position: absolute;
	top: 2.9vh;
	right: 0.6em;
	:hover {
		background-color: yellow;
		cursor: pointer;
		transition: 0.5s;
		font-weight: bold;
		transform: scale(0.99);
	}
`;
