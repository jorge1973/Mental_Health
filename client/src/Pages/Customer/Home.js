import React from "react";
import styled from "styled-components";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Articles } from "./Articles";
import image1 from "./images/MentalHealth.png";

export const Home = () => {
	return (
		<>
			<Wrapper>
				<Header />
				<Image>
					<Img src={image1} alt="main_image" />
				</Image>
				<Articles />
			</Wrapper>
		</>
	);
};

const Img = styled.img`
	width: 60em;
`;
const Wrapper = styled.div`
	background: #56ccf2;
	background: -webkit-linear-gradient(to right, #2f80ed, #56ccf2);
	background: linear-gradient(to right, #0f80ed, #56ccf2);
`;
const Image = styled.div`
	display: flex;
	justify-content: center;
`;
