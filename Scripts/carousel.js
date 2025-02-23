document.addEventListener("DOMContentLoaded", () => {
	const tracks = document.querySelectorAll(".tech-track");

	tracks.forEach((track) => {
		const content = track.querySelector(".tech-content");
		const direction = track.dataset.direction;

		while (track.scrollWidth < window.innerWidth * 2) {
			const clone = content.cloneNode(true);
			track.appendChild(clone);
		}

		const pixelsPerSecond = 50;
		const duration = track.scrollWidth / pixelsPerSecond;

		track.style.display = "flex";

		if (direction === "right") {
			track.style.animation = `scrollRight ${
				track.scrollWidth / (pixelsPerSecond + 25)
			}s linear infinite`;
			track.style.transform = "translateX(-50%)";
		} else {
			track.style.animation = `scrollLeft ${duration}s linear infinite`;
			track.style.transform = "translateX(0)";
		}

		track.addEventListener("mouseenter", () => {
			track.style.animationPlayState = "paused";
		});
		track.addEventListener("mouseleave", () => {
			track.style.animationPlayState = "running";
		});
	});
});

const style = document.createElement("style");
style.textContent = `
@keyframes scrollLeft {
	0% { transform: translateX(0); }
	100% { transform: translateX(-100%); }
}

@keyframes scrollRight {
	0% { transform: translateX(-50%); }
	100% { transform: translateX(0); }
}
`;
document.head.appendChild(style);
