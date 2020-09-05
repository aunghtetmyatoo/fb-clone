import React from "react";
import "./StoryReel.css";
import Story from "./Story";

function StoryReel() {
	return (
		<div className="storyReel">
			<Story
				image="https://fsb.zobj.net/crop.php?r=980zE1tFlVDn5IYp0MYJz_Sl8Nbbt-0cRN6RcLo1X79jKQ4tZgLYUGnoyKDcj28u_R8uizuAGNRpY7hX07oypdWUIqW4htYkiVT3JtqpylJo60i9h_0R15FOJ-cxbI92LkFk0iflZnnPpv2d"
				profileSrc="https://i.pinimg.com/originals/92/8b/8c/928b8c6fb1ae2c2ffc68ea5a7931abf0.jpg"
				title="Aung Htet Myat Oo"
			/>
			<Story
				image="https://i.pinimg.com/564x/16/0f/07/160f07913ec93c72b477fb655d90245d.jpg"
				profileSrc="https://i.pinimg.com/564x/b5/fb/79/b5fb794842929d0f1e709a1829116d81.jpg"
				title="Myat Su Mon"
			/>
			<Story
				image="https://i.pinimg.com/564x/e3/91/9f/e3919fe8139ddff4365b0fa6d276bb9e.jpg"
				profileSrc="https://i.pinimg.com/564x/fd/f2/8d/fdf28d652bb1da4665b3992c2da5d144.jpg"
				title="Mark Zuckerberg "
			/>
			<Story
				image="https://i.pinimg.com/564x/20/e1/38/20e13894cd2acd12dfdb402b9c3a2248.jpg"
				profileSrc="https://i.pinimg.com/564x/21/2f/da/212fda7a0c2691ec53a48ecefac82092.jpg"
				title="Jeff Bezos"
			/>
			<Story
				image="https://i.pinimg.com/564x/09/04/8a/09048ac31de8abe508ee903e6d7ef5db.jpg"
				profileSrc="https://i.pinimg.com/564x/41/54/4e/41544e8bee7d020f38c644f44a1734c5.jpg"
				title="Bill Gates"
			/>
		</div>
	);
}

export default StoryReel;
