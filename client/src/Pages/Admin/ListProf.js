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
					<Span>Full Name</Span>
					<Span>Email</Span>
					<Span>Country</Span>
					<Span>Phone</Span>
				</Titles>
				{getProf.map((prof) => {
					return (
						<Ul key={prof._id}>
							<li>{prof.fullname}</li>
							<li>{prof.email}</li>
							<li>{prof.country}</li>
							<li>{prof.phone}</li>
						</Ul>
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
const Ul = styled.ul`
	display: flex;
	text-decoration: none;
	color: white;
	font-size: 1.1em;
	padding: 1em;
	justify-content: space-between;
	align-items: baseline;
	align-content: flex-start;
`;

const Span = styled.span`
	color: yellow;
	margin-right: 2em;
`;
const Titles = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: baseline;
	align-content: flex-start;
	font-size: 1.3em;
	margin-left: 1em;
`;

const Loading = styled.div`
	display: flex;
	align-content: center;
`;
export default ListProf;
