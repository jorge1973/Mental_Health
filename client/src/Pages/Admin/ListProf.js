import React, { useEffect, useState } from "react";
import styled from "styled-components";
import gif from "./gif/opener-loading.gif";
const ListProf = () => {
	const [getProf, setGetPro] = useState(null);

	useEffect(() => {
		fetch("/admin/listofpro")
			.then((res) => {
				if (res.ok) {
					return res.json();
				}
			})
			.then((data) => {
				setGetPro(data.data);
			})
			.catch((e) => {
				console.log(e);
			});
	}, []);
	if (!getProf)
		return (
			<Loading>
				<img src={gif} />{" "}
			</Loading>
		);
	return (
		<Wrapper>
			<H1>List of Professionals</H1>
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
const H1 = styled.h1`
	font-size: 2.5em;
	color: white;
	margin-left: 1em;
	margin-top: 1em;
	margin-bottom: 0.5em;
`;

const Span = styled.span`
	color: yellow;
	margin-right: 12em;
`;
const Titles = styled.div`
	display: flex;
	font-size: 1.3em;
	margin-left: 3em;
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

const Loading = styled.div`
	display: flex;
	align-content: center;
`;
export default ListProf;
