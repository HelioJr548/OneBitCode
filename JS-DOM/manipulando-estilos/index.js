const useLigthTheme = () => {
	document.body.style.color = "#212529";
	document.body.style.backgroundColor = "#f1f5f9";
};

const useDarkTheme = () => {
	document.body.style.color = "#f1f5f9";
	document.body.style.backgroundColor = "#212529";
};

const switchTheme = () => {
	document.body.classList.toggle("is-light");
	document.body.classList.toggle("is-dark");
};

document.querySelector("#lightBtn").addEventListener("click", useLigthTheme);
document.querySelector("#darkBtn").addEventListener("click", useDarkTheme);
document.querySelector("#switchBtn").addEventListener("click", switchTheme);

