import React, { useEffect } from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Addnew from "./images/undraw_writer_q06d.png";

export const AddProf = () => {
	const [startDate, setStartDate] = useState();
	const [appointment, setAppointment] = useState([]);

	const [formdata, setFormdata] = useState({
		fullname: "",
		address: "",
		city: "",
		state: "",
		country: "",
		email: "",
		phone: "",
		permit: "",
		title: "",
		desc: "",
		avatar: "",
	});
	const navigate = useNavigate();

	const GenerateData = () => {
		const fullname = faker.name.fullName();
		const address = faker.address.streetAddress();
		const city = faker.address.cityName();
		const state = faker.address.state();
		const country = faker.address.country();
		const email = faker.internet.email();
		const phone = faker.phone.number("514-###-####");
		const permit = Math.floor(Math.random() * 100000);
		const title = "Psychologist";
		const desc = faker.lorem.paragraph();
		const avatar = faker.image.avatar();
		const issues = [
			"Addiction",
			"ADHD",
			"Anxiety",
			"Autism",
			"Bipolar Disorder",
			"Depression",
			"Shyness",
			"Personality",
			"Sex",
			"Relationships",
		];
		const appointment = [{ available: true, fecha: startDate }];

		setFormdata({
			...formdata,
			fullname,
			address,
			city,
			state,
			country,
			email,
			phone,
			permit,
			title,
			desc,
			avatar,
			issues,
			appointment,
		});
	};
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormdata({ ...formdata, [name]: value });
	};

	// const handleClickAdd = (startDate) => {
	// 	// setAppointment([...appointment]);
	// };

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newData = { ...formdata };

		const fetching = await fetch("/admin/addpro", {
			method: "POST",
			headers: { "Content-Type": "application/json" },

			body: JSON.stringify(newData),
		});

		window.alert("Professional added");
		navigate("/AdminPage");
	};

	return (
		<>
			<Wrapper>
				<Title>Add a New Professional</Title>
				<Imagen>
					<Img src={Addnew} alt="" />
				</Imagen>
				<WrapForm>
					<Button onClick={GenerateData}>Generate Data</Button>
					<Form id="form">
						<Input
							type="text"
							id="fullName"
							name="fullname"
							placeholder="Enter full name"
							onChange={(e) => handleOnChange(e)}
							value={formdata.fullname}
							required
						/>

						<Input
							type="text"
							id="address"
							name="address"
							placeholder="Enter Address"
							onChange={(e) => handleOnChange(e)}
							value={formdata.address}
							required
						/>

						<Input
							type="text"
							id="city"
							name="city"
							placeholder="City"
							onChange={(e) => handleOnChange(e)}
							value={formdata.city}
							required
						/>

						<Input
							type="text"
							id="province"
							name="province"
							placeholder="Province"
							onChange={(e) => handleOnChange(e)}
							value={formdata.state}
							required
						/>

						<Input
							type="text"
							id="country"
							name="country"
							placeholder="Country"
							onChange={(e) => handleOnChange(e)}
							value={formdata.country}
							required
						/>

						<Input
							type="email"
							id="email"
							name="email"
							placeholder="Enter email"
							onChange={(e) => handleOnChange(e)}
							value={formdata.email}
							required
						/>

						<Input
							type="email"
							id="phone"
							name="phone"
							placeholder="Phone number"
							onChange={(e) => handleOnChange(e)}
							value={formdata.phone}
							required
						/>

						<Input
							type="text"
							id="permit"
							name="permit"
							placeholder="Permit Number"
							onChange={(e) => handleOnChange(e)}
							value={formdata.permit}
							required
						/>

						<Input
							type="text"
							id="title"
							name="title"
							placeholder="Enter Title"
							onChange={(e) => handleOnChange(e)}
							value={formdata.title}
							required
						/>

						<Textarea
							id="desc"
							name="desc"
							placeholder="Description"
							onChange={(e) => handleOnChange(e)}
							value={formdata.desc}
							required
						/>
						<StyleDatePicker
							selected={startDate}
							onChange={(date) => {
								setStartDate(date);
							}}
							isClearable
							placeholderText="Select a date"
							dateFormat="dd-MM-yyyy"
							minDate={new Date()}
							filterDate={(date) => date.getDay() !== 6 && date.getDate() !== 0}
							showTimeSelect
							timeFormat="HH:mm"
							timeIntervals={60}
							popperClassName="some-custom-class"
							popperPlacement="top-end"
						/>
						{/* <Button onClick={handleClickAdd(startDate)}> */}
						{/* Add another date
						</Button> */}
						<Button
							id="boton"
							onClick={(e) => {
								handleSubmit(e);
							}}
						>
							Submit
						</Button>
					</Form>
				</WrapForm>
			</Wrapper>
		</>
	);
};

const Title = styled.div`
	font-size: 2.5em;
	margin-top: 1em;
	margin-bottom: 1em;
`;
const Imagen = styled.div`
	opacity: 0.3;
	position: absolute;
	right: 40em;
	top: 18em;
	width: 30%;
	display: flex;
	justify-content: center;
`;
const Img = styled.img`
	width: 60%;
`;

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin: 0em;
	background-color: black;
	color: white;
	width: 100%;
	height: 60em;
	padding-left: 4em;
`;
const WrapForm = styled.div`
	display: flex;
	flex-direction: column;
`;

const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1em;
`;

const Button = styled.button`
	width: 8em;
	height: 2.2em;
	border-radius: 0.5em;
	border: none;
	font-size: 1em;
	color: #fffefd;
	background-color: #0971c9;
	margin-left: 10em;
	margin-top: 1em;
	:hover {
		font-weight: bold;
		transition: 0.5s;
		transform: scale(0.95);
		cursor: pointer;
		color: white;
		background-color: #fd2350;
	}
`;

const Input = styled.input`
	width: 32em;
	height: 2em;
	border-radius: 0.5em;
	margin-bottom: 0.5em;
	background-color: lightgray;
	color: black;
	font-weight: bold;
	::placeholder {
		color: black;
	}
`;

const StyleDatePicker = styled(DatePicker)`
	width: 32em;
	border-radius: 0.5em;
	height: 2em;
	margin-bottom: 0.5em;
	::placeholder {
		color: black;
	}
`;

const Textarea = styled.textarea`
	width: 32em;
	height: 15em;
	margin-bottom: 0.5em;
	border-radius: 0.8em;
	font-weight: bold;
	::placeholder {
		color: black;
	}
`;
