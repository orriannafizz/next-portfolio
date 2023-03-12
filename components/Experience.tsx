import React from "react";
import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";
import HSNU from "./HSNU";
import NSYSU from "./NSYSU";
import NYCU from "./NYCU";
type Props = {};

const Experience = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center">
			<h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				Experience
			</h3>

			<div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
				<NYCU />
				<NSYSU />
				<HSNU />
			</div>
		</motion.div>
	);
};

export default Experience;
