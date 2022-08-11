import React from "react";
import styled from "styled-components";
import image2 from "./images/Mental Health (8).png";
import image3 from "./images/Mental Health (9).png";
export const Articles = () => {
	return (
		<Wrapper>
			<Section>
				<H3>Anxiety</H3>
				<Img src={image2} alt="Anxiety" />
				<A href="https://en.wikipedia.org/wiki/Anxiety" target="_blank">
					<P>
						Anxiety is both a mental and physical state of negative expectation.
						Mentally it is characterized by increased arousal and apprehension
						tortured into distressing worry, and physically by unpleasant
						activation of multiple body systems—all to facilitate response to an
						unknown danger, whether real or imagined. The cognitive feelings of
						dread in anticipation of some bad outcome, and physical sensations
						such as jitteriness and a racing heart are designed for discomfort.
						Anxiety is meant to capture attention and stimulate you to make
						necessary changes to protect what you care about. Occasional bouts
						of anxiety are natural and can even be productive. Anxiety can be
						considered the price we humans pay for having the ability to imagine
						the future.
					</P>
				</A>
			</Section>
			<Section>
				<H3>Bipolar Disorder</H3>

				<Img src={image3} alt="Anxiety" />
				<A
					href="https://en.wikipedia.org/wiki/Bipolar_disorder"
					target="_blank"
				>
					<P>
						Bipolar disorder, also known as manic depression, is a chronically
						recurring condition involving moods that swing between the highs of
						mania and the lows of depression. Depression is by far the most
						pervasive feature of the illness. The manic phase usually involves a
						mix of irritability, anger, and depression, with or without
						euphoria. When euphoria is present, it may manifest as unusual
						energy and overconfidence, playing out in bouts of overspending or
						promiscuity, among other behaviors. The disorder most often starts
						in young adulthood, but can also occur in children and adolescents.
						Misdiagnosis is common; the condition is often confused with
						attention-deficit/hyperactivity disorder, schizophrenia, or
						borderline personality disorder. Biological factors probably create
						vulnerability to the disorder within certain individuals, and
						experiences such as sleep deprivation can kick off manic episodes.
						There are two primary types of bipolar disorder: Bipolar I and
						Bipolar II. A major depressive episode may or may not accompany
						bipolar I, but does accompany bipolar II. People with bipolar I have
						had at least one manic episode, which may be very severe and require
						hospital care. People with bipolar II normally have a major
						depressive episode that lasts at least two weeks along with
						hypomania, a mania that is mild to moderate and does not normally
						require hospital care.
					</P>
				</A>
			</Section>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	display: flex;
	justify-content: space-around;
`;

const A = styled.a`
	text-decoration: none;
`;

const Section = styled.section`
	font-size: 1.1em;
	font-family: var(--font-body);
	width: 30%;
	display: flex;
	flex-direction: column;
	align-items: center;
	:hover {
		transform: scale3d(1em 1em 15em 1em);
		box-shadow: 1em 2em 3em 4em lightgray;
	}
`;
const H3 = styled.h3`
	font-size: 1.4em;
	margin-bottom: 1em;
	margin-top: 0.5em;
	font-weight: bold;
	color: rgb(180, 8, 200);
`;

const P = styled.p`
	text-align: justify;
	margin-bottom: 1em;
	text-indent: 1.5em;
	padding: 1em;
	text-rendering: auto;
	line-height: 1.8em;
	color: black;
`;

const Img = styled.img`
	width: 60%;
	border-radius: 1em;
`;
