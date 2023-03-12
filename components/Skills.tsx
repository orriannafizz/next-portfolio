import React from "react";
import _CPP from "./Skill/_CPP";
import _GIT from "./Skill/_GIT";
import _HTML from "./Skill/_HTML";
import _JS from "./Skill/_JS";
import _LINUX from "./Skill/_LINUX";
import _NEXT from "./Skill/_NEXT";
import _NODE from "./Skill/_NODE";
import _PYTHO from "./Skill/_PYTHO";
import _REACT from "./Skill/_REACT";
import _TAILWINDCSS from "./Skill/_TAILWINDCSS";
import _TS from "./Skill/_TS";
import _VERCEL from "./Skill/_VERCEL";

type Props = {};

const Skills = (props: Props) => {
	return (
		<div
			className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center 
        xl:space-y-0 mx-auto items-center">
			<h3 className=" absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
				skills
			</h3>

			<div className="grid grid-cols-4 gap-5">
				<_TS />
				<_GIT />
				<_VERCEL />
				<_JS />

				<_TAILWINDCSS />
				<_HTML />
				<_NODE />

				<_NEXT />
				<_REACT />
				<_LINUX />

				<_CPP />
				<_PYTHO />
			</div>
		</div>
	);
};

export default Skills;
