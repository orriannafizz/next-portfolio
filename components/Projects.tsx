import React from "react";
import { motion } from "framer-motion";
import _ML from "./Project/_ML";
import _PTT from "./Project/_PTT";
import _FTP from "./Project/_FTP";
import _RESEARCH from "./Project/_RESEARCH";

type Props = {};

function Projects({}: Props) {
	const projects = [1, 2, 3, 4, 5];
	return (
		<div className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Projects
			</h3>
			<h4 className="absolute top-36 uppercase tracking-[10px] text-gray-500 text-base">
				Please scroll left to see more content.
			</h4>
			<div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20">
				<_RESEARCH />
				<_FTP />
				<_PTT />
				<_ML />
			</div>
			<div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12" />
		</div>
	);
}

export default Projects;
