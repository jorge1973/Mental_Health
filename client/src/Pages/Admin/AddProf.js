import React from "react";
import styled from "styled-components";
import { faker } from "@faker-js/faker";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AddProf = () => {
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
		});
	};
	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFormdata({ ...formdata, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		const newData = { ...formdata };

		const fetching = await fetch("/admin/addpro", {
			method: "POST",
			headers: { "Content-Type": "application/json" },

			body: JSON.stringify(newData),
		});
		const data = await fetching.json();
		window.alert("Professional added");
		navigate("/AdminPage");
	};

	return (
		<>
			<Wrapper>
				<Title>Add a New Professional</Title>
				<WrapForm>
					<Button onClick={GenerateData}>Generate Data</Button>
					<Form id="form">
						<label>Full Name:</label>
						<Input
							type="text"
							id="fullName"
							name="fullname"
							placeholder="Enter full name"
							onChange={(e) => handleOnChange(e)}
							value={formdata.fullname}
							required
						/>
						<label>Address:</label>
						<Input
							type="text"
							id="address"
							name="address"
							placeholder="Enter Address"
							onChange={(e) => handleOnChange(e)}
							value={formdata.address}
							required
						/>
						<label>City:</label>
						<Input
							type="text"
							id="city"
							name="city"
							placeholder="City"
							onChange={(e) => handleOnChange(e)}
							value={formdata.city}
							required
						/>
						<label>Province:</label>
						<Input
							type="text"
							id="province"
							name="province"
							placeholder="Province"
							onChange={(e) => handleOnChange(e)}
							value={formdata.state}
							required
						/>
						<label>Country:</label>
						<Input
							type="text"
							id="country"
							name="country"
							placeholder="country"
							onChange={(e) => handleOnChange(e)}
							value={formdata.country}
							required
						/>
						<label>Email:</label>
						<Input
							type="email"
							id="email"
							name="email"
							placeholder="Enter email"
							onChange={(e) => handleOnChange(e)}
							value={formdata.email}
							required
						/>
						<label>Phone:</label>
						<Input
							type="email"
							id="phone"
							name="phone"
							placeholder="Phone number"
							onChange={(e) => handleOnChange(e)}
							value={formdata.phone}
							required
						/>
						<label>Permit No.:</label>
						<Input
							type="text"
							id="permit"
							name="permit"
							placeholder="Permit Number"
							onChange={(e) => handleOnChange(e)}
							value={formdata.permit}
							required
						/>
						<label>Title:</label>
						<Input
							type="text"
							id="title"
							name="title"
							placeholder="Enter Title"
							onChange={(e) => handleOnChange(e)}
							value={formdata.title}
							required
						/>
						<label>Description:</label>
						<Textarea
							id="desc"
							name="desc"
							placeholder="Description"
							onChange={(e) => handleOnChange(e)}
							value={formdata.desc}
							required
						/>
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
	height: 2em;
	border-radius: 0.5em;
	border: none;
	font-size: 1em;
	color: #fffefd;
	background-color: #0971c9;
	margin-left: 10em;
	:hover {
		font-weight: bold;
		transition: 0.5s;
		transform: scale(0.95);
		cursor: pointer;
		color: white;
		background-color: #fd2350;
	}
	:disabled {
		background-color: gray;
	}
`;

const Input = styled.input`
	width: 32em;
	height: 2em;
	border-radius: 0.5em;
	margin-bottom: 0.5em;
`;

const Textarea = styled.textarea`
	width: 32em;
	height: 15em;
	margin-bottom: 0.5em;
`;
