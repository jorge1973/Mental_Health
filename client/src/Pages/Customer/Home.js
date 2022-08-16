import React from "react";
import styled from "styled-components";

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
	background: linear-gradient(to right, #fffffd, #fffffa);
`;
const Image = styled.div`
	display: flex;
	justify-content: center;
`;
