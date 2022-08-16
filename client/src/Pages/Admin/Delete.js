import React, { useContext, useState } from "react";
import SearchContext from "../../Context/SearchContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import gif from "./gif/opener-loading.gif";
import { MdDelete } from "react-icons/md";

const Delete = () => {
	const { getProf } = useContext(SearchContext);
	const navigate = useNavigate();
	const handleDelete = (_id, e) => {
		e.preventDefault();
		console.log(_id);
		fetch(`/admin/deletepro/${_id}`, {
			method: "DELETE",
			headers: { "Content-Type": "application/json" },
		});

		window.alert("Professional Deleted");
		navigate("/AdminPage");
	};

	if (!getProf)
		return (
			<div>
				<img src={gif} />{" "}
			</div>
		);

	return (
		<Wrapper>
			<H1>Delete Professionals</H1>
			<H5>Select professional to Delete . . .</H5>
			<div>
				<Titles>
					<table>
						<tr>
							<th>
								<Span>Full Name</Span>
							</th>
							<th>
								<Span>Email</Span>
							</th>
							<th>
								<Span>Country</Span>
							</th>
							<th>
								<Span>Phone</Span>
							</th>
						</tr>
					</table>
				</Titles>
				{getProf.map((prof) => {
					return (
						<table key={prof._id}>
							<Tr>
								<Td>{prof.fullname}</Td>
								<Td>{prof.email}</Td>
								<Td>{prof.country}</Td>
								<Td>{prof.phone}</Td>
								<Button
									onClick={(e) => {
										handleDelete(prof._id, e);
									}}
								>
									<MdDelete />
								</Button>
							</Tr>
						</table>
					);
				})}
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	gap: 2em;
	background-color: black;
	height: 100vh;
`;

const Titles = styled.div`
	display: flex;
	font-size: 1.3em;
	margin-left: 3em;
`;

const Span = styled.span`
	color: yellow;
	margin-right: 12em;
`;
const Tr = styled.tr`
	display: flex;
	font-size: 1.1em;
	color: white;
	padding: 0.5em;
	margin-left: 2em;
	margin-top: 1em;
`;

const Td = styled.td`
	display: flex;
	width: 18em;
	padding-left: 1em;
`;

const H1 = styled.h1`
	font-size: 2.5em;
	color: white;
	margin-left: 1em;
	margin-top: 1em;
	margin-bottom: 0.5em;
	text-shadow: 0.025em 0.025em yellow;
`;

const H5 = styled.h5`
	color: white;
	margin-left: 3em;
	margin-bottom: 1.5em;
`;

const Button = styled.button`
	border-radius: 1em;
	border: none;
	width: 55px;
	height: 30px;
	background-color: #ffffff;
	font-size: 1.5em;
	color: red;

	:hover {
		transition: 0.3s;
		transform: scale(0.99);
		background-color: red;
		color: white;
		cursor: pointer;
	}
`;

export default Delete;
