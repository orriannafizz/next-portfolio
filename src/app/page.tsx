"use client";
import { Inter } from "next/font/google";
import { motion } from "framer-motion";
import About from "../../components/About";
import ContactMe from "../../components/ContactMe";
import Experience from "../../components/Experience";
import Header from "../../components/Header";
import Hero from "../../components/Hero";
import Projects from "../../components/Projects";
import Skills from "../../components/Skills";
import Link from "next/link";
export default function Home() {
	return (
		<div
			className="text-white bg-[rgb(36,36,36)] h-screen snap-y snap-mandatory
		overflow-y-scroll overflow-x-hidden z-0 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]">
			<Header />
			<section id="hero" className="snap-start ">
				<Hero />
			</section>

			<section id="about" className="snap-center">
				<About />
			</section>

			<section id="experience" className="snap-center w-screen">
				<Experience />
			</section>

			<section id="skills" className="snap-start">
				<Skills />
			</section>
			<section id="projects" className="snap-start">
				<Projects />
			</section>
			<section id="contact" className="snap-start">
				<ContactMe />
			</section>
		</div>
	);
}
