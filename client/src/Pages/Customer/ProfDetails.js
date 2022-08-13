import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import gif from "./gif/opener-loading.gif";
import {
	IoLocationOutline,
	IoMailUnreadOutline,
	IoPhonePortraitOutline,
} from "react-icons/io5";
const ProfDetails = () => {
	const pro_id = useParams().id;

	const [getdetail, setGetDetails] = useState(null);
	useEffect(() => {
		fetch(`/pro/listpro/${pro_id}`)
			.then((res) => res.json())
			.then((data) => {
				setGetDetails(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	if (!getdetail)
		return (
			<div>
				<img src={gif} />{" "}
			</div>
		);
	return (
		<Wrapper>
			<Header />
			<H1>Professional Details</H1>

			<Data>
				<Card key={getdetail._id}>
					<Foto src={getdetail.avatar} />

					<Name>{getdetail.fullname}</Name>
					<Title>{getdetail.title}</Title>
					<Descp>{getdetail.desc}</Descp>
					<Special>
						<Span>Specialties:</Span> <span>{getdetail.issues.toString()}</span>
					</Special>
					<Per>Permit No: {getdetail.permit} OPQ</Per>
					<Contact>
						<div>
							<IoLocationOutline />{" "}
							<Spann>
								{getdetail.address}, {getdetail.state},{getdetail.country}
							</Spann>
						</div>
						<div>
							<IoMailUnreadOutline />
							<Spann>{getdetail.email}</Spann>
						</div>
						<div>
							<IoPhonePortraitOutline />
							<Spann>{getdetail.phone}</Spann>
						</div>
					</Contact>
				</Card>
			</Data>

			<Button>Reserve</Button>
		</Wrapper>
	);
};
const Wrapper = styled.div`
	height: 100vh;
	display: flex;
	flex-direction: column;
	align-content: center;
	background: linear-gradient(to right, #fffffd, #fffffa);
`;

const Button = styled.button`
	background-color: #1b2430;
	width: 10em;
	height: 40px;
	border-radius: 1em;
	color: white;
	font-size: 1.2em;
	margin-left: 44em;
	margin-top: 1em;

	:hover {
		background-color: #ffd60a;
		color: #1b2430;
		cursor: pointer;
		transition: 1s;
		font-weight: bold;
		text-shadow: 0.06em 0.05em white;
	}
`;

const H1 = styled.h1`
	font-size: 2.5em;
	text-align: center;
	margin-bottom: 2em;
	margin-top: 1em;
	text-shadow: 0.03em 0.02em darkgray;
`;
const Contact = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 60%;
	height: 20%;
	font-size: 1.1em;
	margin-top: 1.2em;
	margin-left: 1.5em;
	color: #d90429;
`;

const Data = styled.div`
	display: flex;
	justify-content: center;
`;
const Descp = styled.div`
	font-size: 1.1em;
	font-style: italic;
	width: 70%;
	text-align: justify;
	margin-left: 8em;
	margin-bottom: 1em;
	color: #000814;
`;

const Per = styled.div`
	font-size: 1.1em;
	width: 70%;
	text-align: justify;
	margin-left: 1em;
	color: #000814;
`;

const Spann = styled.span`
	margin-left: 1em;
	font-weight: bold;
`;
const Title = styled.div`
	text-align: center;
	font-size: 1.5em;
	color: #000814;
	margin-bottom: 1em;
`;

const Foto = styled.img`
	width: 8%;
	border-radius: 8em;
	position: fixed;
	top: 15em;
	left: 38em;
`;

const Name = styled.div`
	font-size: 2.5em;
	background-color: #1b2430;
	color: white;
	text-align: center;
	border-radius: 1em 1em 0.5em 0.4em;
	margin-bottom: 0.2em;
`;

const Card = styled.div`
	display: flex;
	border: 0.1em lightgray;
	border-radius: 1.8em 1.8em 1.8em 1.8em;
	margin-top: 2em;
	width: 34%;
	height: 20em;
	flex-direction: column;
	background-color: #ffd60a;
	box-shadow: 0.5em 0.2em 1em 0em #f1e3d3;
	margin-right: 2em;
`;

const Special = styled.div`
	font-size: 1.1em;
	margin-left: 1em;
	display: flex;
	width: 90%;
	height: 2.5em;
	color: #000814;
`;

const Span = styled.span`
	margin-right: 0.5em;
	font-size: 1.1em;
	font-weight: bold;
`;
export default ProfDetails;
