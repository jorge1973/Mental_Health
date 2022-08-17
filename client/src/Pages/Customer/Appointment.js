import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
const Appointment = (props) => {
	const navigate = useNavigate();
	const handleClick = () => {
		navigate("/");
	};
	console.log();
	const appFecha = JSON.stringify(props.fecha);
	console.log(appFecha);
	const fecha = appFecha.slice(1, 11);
	const hora = appFecha.slice(12, 17);
	return (
		<Wrapper>
			<Title>Reservation/Appointment added</Title>
			<Div>
				The appointment is on: {fecha} at {hora} hours
			</Div>
			<Button onClick={handleClick}>Close</Button>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	width: 43em;
	height: 35em;
	background-color: #ffd60a;
	border: 1px solid red;
	border-radius: 1.5em;
	position: absolute;
	top: 15em;
	left: 37em;
`;

const Title = styled.div`
	font-size: 2em;
	font-weight: bold;
	display: flex;
	justify-content: center;
	margin-bottom: 2em;
	text-shadow: 0.03em 0.05em white;
	margin-top: 1em;
`;

const Div = styled.div`
	font-size: 1.5em;
	display: flex;
	justify-content: center;
	margin-top: 2.5em;
`;

const Button = styled.button`
	border-radius: 10px;
	width: 40%;
	height: 2em;
	font-size: 1.2em;
	position: absolute;
	bottom: 2em;
	left: 10em;
	color: white;
	background-color: black;
	:hover {
		transition: 1s;
		background-color: white;
		color: black;
		transform: scale(0.98);
		cursor: pointer;
	}
`;

export default Appointment;
