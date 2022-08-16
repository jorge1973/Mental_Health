import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gif from "./gif/opener-loading.gif";
import styled from "styled-components";

const ModifyProf = () => {
	const [getpromod, setProMod] = useState(null);
	const [fullname, setFullName] = useState("");
	const pro_id = useParams().id;
	const [isDisabled, setIsDisabled] = useState(false);
	useEffect(() => {
		fetch(`/pro/listpro/${pro_id}`)
			.then((res) => res.json())
			.then((data) => {
				setProMod(data.data);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	const handleOnChange = (e) => {
		const { name, value } = e.target;
		setFullName(e.target.value);
		// setProMod({ ...getpromod, [name]: value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		// const newData = { ...getpromod };

		// const fetching = await fetch(`/admin/updatepro/${pro_id}`, {
		// 	method: "PATCH",
		// 	headers: { "Content-Type": "application/json" },

		// 	body: JSON.stringify(newData),
		// });

		// window.alert("Data modified");
		// navigate("/AdminPage");
	};

	if (!getpromod)
		return (
			<div>
				<img src={gif} alt="loading" />{" "}
			</div>
		);
	console.log(fullname);
	return (
		<Wrapper>
			<Title>Select the field to Modify</Title>

			<WrapForm>
				<Form id="form">
					<Input
						type="text"
						id="fullName"
						name="fullname"
						placeholder={getpromod.fullname}
						onChange={(e) => handleOnChange(e)}
						value={fullname}
						required
					/>
					<Input
						type="text"
						id="address"
						name="address"
						placeholder="Enter Address"
						onChange={(e) => handleOnChange(e)}
						value={getpromod.address}
						required
					/>
					<Input
						type="text"
						id="city"
						name="city"
						placeholder="City"
						onChange={(e) => handleOnChange(e)}
						value={getpromod.city}
						required
					/>
					<Input
						type="text"
						id="province"
						name="province"
						placeholder="Province"
						onChange={(e) => handleOnChange(e)}
						value={getpromod.state}
						required
					/>
					<Input
						type="text"
						id="country"
						name="country"
						placeholder="Country"
						onChange={(e) => handleOnChange(e)}
						value={getpromod.country}
						required
					/>
					<Input
						type="email"
						id="email"
						name="email"
						placeholder="Enter email"
						onChange={(e) => handleOnChange(e)}
						value={getpromod.email}
						required
					/>
					<Input
						type="email"
						id="phone"
						name="phone"
						placeholder="Phone number"
						onChange={(e) => handleOnChange(e)}
						value={getpromod.phone}
						required
					/>
					<Input
						type="text"
						id="title"
						name="title"
						placeholder="Enter Title"
						onChange={(e) => handleOnChange(e)}
						value={getpromod.title}
						required
					/>
					<Textarea
						id="desc"
						name="desc"
						placeholder="Description"
						onChange={(e) => handleOnChange(e)}
						value={getpromod.desc}
						required
					/>
					{/* //add calendar here */}
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
	);
};

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
const Title = styled.div`
	font-size: 2.5em;
	margin-top: 1em;
	margin-bottom: 1em;
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
`;

const Form = styled.div`
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	padding: 1em;
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
const WrapForm = styled.div`
	display: flex;
	flex-direction: column;
`;

const Textarea = styled.textarea`
	width: 32em;
	height: 15em;
	margin-bottom: 0.5em;
	border-radius: 0.8em;
	color: black;
	font-weight: bold;
	::placeholder {
		color: black;
	}
`;
export default ModifyProf;
