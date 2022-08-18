import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { Header } from "./Header";
import { useAuth0 } from "@auth0/auth0-react";
import gif from "./gif/opener-loading.gif";
import {
	IoLocationOutline,
	IoMailUnreadOutline,
	IoPhonePortraitOutline,
} from "react-icons/io5";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Appointment from "./Appointment";

const ProfDetails = () => {
	const { isAuthenticated, isLoading, user } = useAuth0();
	const pro_id = useParams().id;
	const [startDate, setStartDate] = useState(new Date());
	const [getdetail, setGetDetails] = useState(null);
	const [showCalendar, setShowCalendar] = useState(false);
	const [reserve, setReserve] = useState("Reserve");
	const [appointment, setAppointment] = useState(false);
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

	const handleReserve = () => {
		setShowCalendar(!showCalendar);
		if (reserve === "Reserve") {
			setReserve("Appointment");
		} else {
			setAppointment(!appointment);
			setReserve("Reserve");
		}
	};

	if (!getdetail)
		return (
			<div>
				<img src={gif} alt="loading" />{" "}
			</div>
		);

	const app_Date = getdetail?.appointment[0]?.fecha
		.slice(0, 10)
		.replaceAll("-", "/");
	const app_DateTime = getdetail?.appointment[0]?.fecha;

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
					<Per>
						Permit No: <Perm>{getdetail.permit} </Perm>OPQ
					</Per>
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
				<Calendar>
					{showCalendar && (
						<DatePicker
							dateFormat="dd-MM-yyyy h:mm"
							onChange={(date) => setStartDate(date)}
							inline
							minDate={new Date(app_Date)}
							filterDate={(date) => date.getDay() !== 6 && date.getDay() !== 0}
							includeDates={[new Date(app_Date)]}
						/>
					)}
				</Calendar>
			</Data>
			{appointment && (
				<Appointment
					fecha={app_DateTime}
					profData={getdetail}
					email={user.email}
				/>
			)}
			<Button
				onClick={
					isAuthenticated
						? handleReserve
						: window.alert("Please Login to reserve")
				}
				disabled={!app_Date}
			>
				{app_Date ? reserve : "Not Available"}
			</Button>
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

const Calendar = styled.div`
	right: 22em;
	top: 20em;
	position: absolute;
`;

const Button = styled.button`
	background-color: #1b2430;
	width: 10em;
	height: 40px;
	border-radius: 1em;
	color: white;
	font-size: 1.2em;
	margin-left: 43em;
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
	margin-left: 1.5em;
	margin-top: 0.5em;
	color: #000814;
`;

const Perm = styled.span`
	font-weight: bold;
	margin-left: 1.8em;
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
	width: 140px;
	border-radius: 8em;
	position: absolute;
	top: -2em;
	left: -1em;
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
	height: 25em;
	flex-direction: column;
	background-color: #ffd60a;
	box-shadow: 0.5em 0.2em 1em 0em #f1e3d3;
	margin-right: 2em;
	position: relative;
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
	margin-right: 1.5em;
	font-size: 1.1em;
	font-weight: bold;
`;
export default ProfDetails;
