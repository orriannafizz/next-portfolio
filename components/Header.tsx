"use client";
import React from "react";
import { useState, useEffect } from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";
type Props = {};

function Header({}: Props) {
	const [isClient, setIsClient] = useState(false);

	useEffect(() => {
		setIsClient(true);
	}, []);

	function sendEmail() {
		window.location.href = "mailto:orriannafizz@gmail.com";
	}
	return (
		<header className="sticky top-0 p-5 flex items-start max-w-7xl justify-between mx-auto">
			<motion.div
				initial={{
					x: -500,
					y: 0,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className=" flex  flex-row items-center">
				<SocialIcon
					url="https://github.com/orriannafizz"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.facebook.com/profile.php?id=100000495372373"
					fgColor="gray"
					bgColor="transparent"
				/>
				<SocialIcon
					url="https://www.instagram.com/spiderpigouo/"
					fgColor="gray"
					bgColor="transparent"
				/>
			</motion.div>
			<motion.div
				initial={{
					x: 500,
					y: 0,
					opacity: 0,
					scale: 0.5,
				}}
				animate={{
					x: 0,
					opacity: 1,
					scale: 1,
				}}
				transition={{
					duration: 1.5,
				}}
				className="flex flex-row items-center text-gray-300">
				<Link href="#" onClick={sendEmail}>
					{isClient && (
						<SocialIcon
							className="cursor-pointer"
							network="email"
							fgColor="gray"
							bgColor="transparent"
						/>
					)}
					<p className="uppercase hidden md:inline-flex text-sm text-gray-400">
						Get in Toutch
					</p>
				</Link>
			</motion.div>
		</header>
	);
}

export default Header;
