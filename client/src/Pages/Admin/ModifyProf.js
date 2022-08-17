import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import gif from "./gif/opener-loading.gif";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const ModifyProf = () => {
	const navigate = useNavigate();
	const [getpromod, setProMod] = useState(null);
	const [state, setState] = useState({
		fullname: "",
		city: "",
		address: "",
		email: "",
		country: "",
		province: "",
		phone: "",
		title: "",
		desc: "",
	});
	// const [fullname, setFullName] = useState("");
	// const [city, setCity] = useState("");
	// const [address, setAddress] = useState("");
	// const [email, setEmail] = useState("");
	// const [country, setCountry] = useState("");
	// const [province, setProvince] = useState("");
	// const [phone, setPhone] = useState("");
	// const [title, setTitle] = useState("");
	// const [desc, setDesc] = useState("");
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
		setState({ ...state, [name]: value });
	};
	const handleSubmit = async (e) => {
		e.preventDefault();
		const newData = { ...state };
		console.log(pro_id);
		const fetching = await fetch(`/admin/updatepro/${pro_id}`, {
			method: "PATCH",
			headers: { "Content-Type": "application/json" },

			body: JSON.stringify({ formData: newData }),
		});

		window.alert("Data modified");
		navigate("/AdminPage");
	};

	if (!getpromod)
		return (
			<div>
				<img src={gif} alt="loading" />{" "}
			</div>
		);

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
						onChange={handleOnChange}
						value={state.fullname}
						required
					/>
					<Input
						type="text"
						id="address"
						name="address"
						placeholder={getpromod.address}
						onChange={handleOnChange}
						value={state.address}
						required
					/>
					<Input
						type="text"
						id="city"
						name="city"
						placeholder={getpromod.city}
						onChange={handleOnChange}
						value={state.city}
						required
					/>
					<Input
						type="text"
						id="province"
						name="province"
						placeholder={getpromod.state}
						onChange={handleOnChange}
						value={state.province}
						required
					/>
					<Input
						type="text"
						id="country"
						name="country"
						placeholder={getpromod.country}
						onChange={handleOnChange}
						value={state.country}
						required
					/>
					<Input
						type="email"
						id="email"
						name="email"
						placeholder={getpromod.email}
						onChange={handleOnChange}
						value={state.email}
						required
					/>
					<Input
						type="text"
						id="phone"
						name="phone"
						placeholder={getpromod.phone}
						onChange={handleOnChange}
						value={state.phone}
						required
					/>
					<Input
						type="text"
						id="title"
						name="title"
						placeholder={getpromod.title}
						onChange={handleOnChange}
						value={state.title}
						required
					/>
					<Textarea
						id="desc"
						name="desc"
						placeholder={getpromod.desc}
						onChange={handleOnChange}
						value={state.desc}
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
