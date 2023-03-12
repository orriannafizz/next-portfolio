"use client";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";
type Props = {};

const Hero = (props: Props) => {
	const [text, count] = useTypewriter({
		words: ["My name is Hao en Chuang", "Hiiiiiiiii", "NYCU student"],
		loop: true,
		delaySpeed: 2000,
	});
	return (
		<div
			className=" h-screen flex flex-col items-center justify-center space-y-8 
        text-center overflow-hidden">
			<BackgroundCircles />
			<Image
				className=" relative rounded-full h-32 w-32 mx-auto"
				src="/me.jpg"
				alt="me"
				width={128}
				height={128}
			/>
			<div className="z-20">
				<h2 className="text-sm text-gray-500 uppercase pb-2 tracking-[15px]">
					Student
				</h2>
				<h1 className="text-5xl lg:text:6xl font-semibold scroll-px-10">
					<span className="mr-3">{text}</span>
					<Cursor cursorColor="#F7AB0A" />
				</h1>
			</div>
		</div>
	);
};

export default Hero;

// 1:06
