"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
const About = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen w-screen flex relative text-center md:text:left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				{" "}
				About
			</h3>
			<motion.img
				initial={{
					opacity: 0,
					x: -200,
				}}
				animate={{
					x: 0,
				}}
				transition={{
					duration: 2,
				}}
				whileInView={{ opacity: 1, x: 0 }}
				src="/me2.jpg"
				className="-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-96 xl:w-[500px] xl:h-[600px]"
			/>
			<div className="space-y-10 px-0 md:px-10">
				<h4 className=" text-4xl font-semibold">
					Here is a{" "}
					<span className="underline decoration-[#F7AB0A]">little</span>{" "}
					backround
				</h4>
				<p className="text-base text-left">
					Hi, I{"'"}m{" "}
					<span className="underline decoration-[#F7AB0A]">Brian</span>,
					currently be a senior in NYCU mechanical engineering. I aspire to be a
					full stack engineer after I graduate. Therefore, I hope to participate
					in an internship of front-end or back-end, so I can apply my knowledge
					and experience to benefit the operations of the organizations that I
					work for.
				</p>
			</div>
		</motion.div>
	);
};

export default About;
