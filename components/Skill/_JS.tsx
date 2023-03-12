import React from "react";
import { motion } from "framer-motion";
type Props = {
	directoinLeft?: boolean;
};

function _JS({ directoinLeft }: Props) {
	return (
		<div className=" group relative flex cursor-pointer">
			<motion.img
				initial={{
					x: directoinLeft ? -200 : 200,
					opacity: 0,
				}}
				transition={{ duration: 1 }}
				whileInView={{ opacity: 1, x: 0 }}
				viewport={{ once: true }}
				src="/JS.png"
				className="rounded-full border border-gray-500 object-cover w-24 h-24 
                xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 "
			/>
		</div>
	);
}

export default _JS;
