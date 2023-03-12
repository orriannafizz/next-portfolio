import React from "react";
import { motion } from "framer-motion";
type Props = {};

const NYCU = (props: Props) => {
	return (
		<article
			className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] 
        md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-10 opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden">
			<motion.img
				initial={{
					y: -100,
					opacity: 0,
				}}
				whileInView={{
					opacity: 1,
					y: 0,
				}}
				viewport={{ once: true }}
				className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
				src="/NYCU.jpeg"
				alt="NYCU"
			/>
			<div>
				<h4 className="text-4xl font-light">Student</h4>
				<p className="font-bold text-2xl mt-1">NYCU</p>
				<div className="flex space-x-2 my-2"></div>
				<p className="uppercase py-5 text-gray-300">September 2020 - NOW</p>
			</div>
			<ul className=" list-disc space-y-4 ml-5 text-lg">
				<li>Major in Mechanicall Engineering</li>
				<li>
					Reserch topic: Zero-Day Vulnerability Patching Program. (Computer
					Science)
				</li>
			</ul>
		</article>
	);
};

export default NYCU;
