import React, { useContext, useState } from "react";
import SearchContext from "../../Context/SearchContext";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import gif from "./gif/opener-loading.gif";
const UpdateProf = () => {
	const { getProf } = useContext(SearchContext);

	const navigate = useNavigate();
	const handleUpdatePro = (url) => {
		navigate(url);
	};

	if (!getProf)
		return (
			<div>
				<img src={gif} />{" "}
			</div>
		);
	return (
		<>
			<Wrapper>
				<H1>Update Professionals</H1>
				<H5>Select professional to modify . . .</H5>
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
								<Tr
									onClick={() => {
										handleUpdatePro(`/ModifyProf/${prof._id}`);
									}}
								>
									<Td>{prof.fullname}</Td>
									<Td>{prof.email}</Td>
									<Td>{prof.country}</Td>
									<Td>{prof.phone}</Td>
								</Tr>
							</table>
						);
					})}
				</div>
			</Wrapper>
		</>
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
	:hover {
		color: yellow;
		cursor: pointer;
		transition: 0.2s;
		transform: rotateY(10deg) scale(1.05);
	}
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

export default UpdateProf;
