import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { FaRegAddressCard } from "react-icons/fa";
import { MdSystemUpdateAlt, MdDeleteOutline, MdListAlt } from "react-icons/md";
import { AddProf } from "./AddProf";
import { useAuth0 } from "@auth0/auth0-react";
import { UserLogout } from "../../Components/UserLogout";

const AdminPage = () => {
	const navigate = useNavigate();

	const { user, isAuthenticated, isLoading } = useAuth0();
	useEffect(() => {
		if (!isLoading) {
			console.log(user);
		}
	}, [isLoading]);
	const handleClickAdd = () => {
		return navigate("/AddProf");
	};
	const handleClickList = () => {
		return navigate("/ListProf");
	};
	const handleClickUpdate = () => {
		return navigate("/UpdateProf");
	};

	const handleClickDelete = () => {
		return navigate("/DeleteProf");
	};
	return (
		<Wrapper>
			<Title>Dashboard</Title>
			{isAuthenticated && (
				<>
					<User>
						<h3>{user.name} is login</h3>
					</User>
					<UserLogout />
				</>
			)}
			<Options onClick={handleClickAdd}>
				<FaRegAddressCard />
				<span> Add Professional</span>
			</Options>
			<Options onClick={handleClickList}>
				<MdListAlt />
				<span> List Professionals</span>
			</Options>
			<Options onClick={handleClickUpdate}>
				<MdSystemUpdateAlt />
				<span> Update Professionals</span>
			</Options>
			<Options onClick={handleClickDelete}>
				<MdDeleteOutline />
				<span> Delete Professionals</span>
			</Options>
		</Wrapper>
	);
};

const User = styled.div`
	position: absolute;
	right: 1em;
	top: 0.5em;
	color: yellow;
`;

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
	align-items: baseline;
	width: 25%;
	gap: 1em;
	margin-bottom: 1em;

	:hover {
		color: yellow;
		transition: 0.7s;
		transform: scale(0.95);
		cursor: pointer;
	}
`;

const Title = styled.div`
	font-size: 3.5em;
	margin-bottom: 1.5em;
	margin-top: 1em;
`;

export default AdminPage;
