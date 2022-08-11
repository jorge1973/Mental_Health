import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRegAddressCard } from "react-icons/fa";
import { MdSystemUpdateAlt, MdDeleteOutline, MdListAlt } from "react-icons/md";
import { AddProf } from "./AddProf";

const AdminPage = () => {
	const navigate = useNavigate();
	const handleClickAdd = () => {
		return navigate("/AddProf");
	};
	return (
		<Wrapper>
			<Title>Dashboard</Title>
			<Options onClick={handleClickAdd}>
				<FaRegAddressCard />
				<span> Add Professional</span>
			</Options>
			<Options>
				<MdListAlt />
				<span> List Professionals</span>
			</Options>
			<Options>
				<MdSystemUpdateAlt />
				<span> Update Professionals</span>
			</Options>
			<Options>
				<MdDeleteOutline />
				<span> Delete Professionals</span>
			</Options>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	margin: 0em;
	background-color: black;
	color: white;
	width: 100%;
	height: 60em;
	padding-left: 4em;
`;

const Options = styled.div`
	font-size: 2.2em;
	display: flex;
	gap: 1em;
	margin-bottom: 1em;
	:hover {
		color: yellow;
		transition: 0.7s;
		transform: scale(0.99);
		cursor: pointer;
	}
`;

const Title = styled.div`
	font-size: 3.5em;
	margin-bottom: 1.5em;
	margin-top: 1em;
`;

export default AdminPage;
