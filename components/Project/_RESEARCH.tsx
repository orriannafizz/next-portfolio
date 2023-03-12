import React from "react";
import { motion } from "framer-motion";

type Props = {};

const _RESEARCH = (props: Props) => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1.5 }}
			className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
			<div className="space-y-10 px-0 md:px-10 max-w-6xl">
				<h4 className="underline font-semibold text-center text-3xl">
					<span className="underline decoration-[#F7AB0A]/50 text-xl"></span>{" "}
					Zero-Day Vulnerability Patching Program
				</h4>
				<h5 className="text-gray-500 font-semibold">
					LINUX/Ghidra/strace/ptrace/radare2/LD_PRELOADER
				</h5>

				<p className="text-lg text-center md:text-left">
					• Patching (or debug) the ELF or PE binary porgram when it is running
				</p>
				<p className="text-lg text-center md:text-left">• Still working ...</p>
			</div>
		</motion.div>
	);
};

export default _RESEARCH;
