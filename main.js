const wrapper = document.querySelector(".wrapper"),
	button = wrapper.querySelector(".form button"),
	input = wrapper.querySelector(".form input"),
	image = wrapper.querySelector(".qr-code img");

button.addEventListener("click", () => {
	let text = input.value;

	if(!text) return;
	button.innerText = "Generating QR code...";
	image.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${text}`;
	image.addEventListener("load", () =>{
		button.innerText = "Generate QR code";
		wrapper.classList.add("active");
	});
});
