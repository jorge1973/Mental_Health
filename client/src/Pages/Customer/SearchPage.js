import React, { useContext, useState } from "react";
import { Header } from "./Header";
import styled from "styled-components";
import image4 from "./images/Mental Health (4).png";
import gif from "./gif/opener-loading.gif";
import SearchContext from "../../Context/SearchContext";
import { useNavigate } from "react-router-dom";
import {
	IoLocationOutline,
	IoMailUnreadOutline,
	IoPhonePortraitOutline,
} from "react-icons/io5";

const SearchPage = () => {
	const { getProf } = useContext(SearchContext);
	const [selcity, setSelCity] = useState(null);
	let selectedCity = [];
	const navigate = useNavigate();

	const handleSelect = (e) => {
		setSelCity(e.target.value);
	};

	const handleProDetails = (url) => {
		navigate(url);
	};

	selectedCity = getProf?.filter((prof) => {
		return selcity === prof.city;
	});

	if (!getProf)
		return (
			<div>
				<img src={gif} alt="loading" />{" "}
			</div>
		);

	return (
		<Wrapper>
			<Header />
			<Image>
				<Img src={image4} alt="main_image" />
				<SubTitle>Search a Therapist by City</SubTitle>

				<Form>
					<Select
						name="cities"
						id="cities"
						onChange={(e) => {
							handleSelect(e);
						}}
					>
						<option value={"none"}>Select a City</option>
						{getProf.map((pro) => {
							return (
								<option value={pro.city} key={pro._id}>
									{pro.city}
								</option>
							);
						})}
					</Select>
				</Form>
			</Image>

			<Data>
				{selectedCity.map((profes) => {
					return (
						<Card
							key={profes._id}
							onClick={() => {
								handleProDetails(`/proDetails/${profes._id}`);
							}}
						>
							<Avatar>
								<Foto src={profes.avatar} />
							</Avatar>
							<Name>{profes.fullname}</Name>
							<Title>{profes.title}</Title>
							<Div>
								<Addr>
									<IoLocationOutline /> <span>{profes.address}</span>
								</Addr>
								<Addr>
									<IoMailUnreadOutline />
									<span>{profes.email}</span>
								</Addr>
								<Addr>
									<IoPhonePortraitOutline />
									<span>{profes.phone}</span>
								</Addr>
							</Div>
						</Card>
					);
				})}
			</Data>
			<div></div>
		</Wrapper>
	);
};

export default SearchPage;
const Wrapper = styled.div`
	height: 100vh;
	background: linear-gradient(to right, #fffffd, #fffffa);
`;
const Img = styled.img`
	width: 30%;
`;
const Image = styled.div`
	display: flex;
	justify-content: center;
	flex-direction: column;
	align-items: center;
`;

const SubTitle = styled.div`
	position: absolute;
	display: flex;
	align-items: center;
	font-size: 2em;
	top: 5.5em;
	font-weight: bold;
	text-shadow: 0.02em 0.02em lightskyblue;
`;

const Form = styled.form`
	display: flex;
	position: absolute;
	top: 15em;
`;

const Select = styled.select`
	width: 25em;
	height: 2em;
	border: none;
	border-radius: 0.5em;
	font-size: 1.1em;
	font-family: var(--font-body);
	opacity: 0.8;
`;

const Card = styled.div`
	display: flex;
	border: 0.1em lightgray;
	border-radius: 1.8em 1.8em 1.8em 1.8em;
	margin-bottom: 2em;
	width: 30%;
	height: 25em;
	flex-direction: column;
	background-color: #ffce45;
	box-shadow: 0.5em 0.2em 1em 0em #f1e3d3;
	margin-right: 2em;

	:hover {
		background-color: #ffce48;
		cursor: pointer;
		transition: 3s;
		transform: scale(1);
		border-radius: 10.5em 10em 80em 8em;
		font-weight: bold;
	}
`;
const Data = styled.div`
	display: flex;
	justify-content: center;
`;
const Name = styled.div`
	font-size: 2.5em;
	background-color: #4d4c7d;
	color: white;
	text-align: center;
`;

const Avatar = styled.div`
	display: flex;
	justify-content: center;
	background-color: #ffce45;
	border-radius: 1.5em 1.5em 0em 0em;
`;

const Foto = styled.img`
	width: 40%;
	border-radius: 8em;
`;

const Title = styled.div`
	text-align: center;
	font-size: 1.5em;
	color: black;
	margin-bottom: 1em;
`;

const Addr = styled.div`
	font-size: 1.1em;
	color: black;
	margin-left: 1em;
	display: flex;
	gap: 0.8em;
	margin-bottom: 0.2em;
`;

const Div = styled.div`
	display: flex;
	justify-content: space-between;
	flex-direction: column;
	align-content: center;
	gap: 0.3em;
	margin-bottom: 0.5em;
	padding-left: 1em;
`;
