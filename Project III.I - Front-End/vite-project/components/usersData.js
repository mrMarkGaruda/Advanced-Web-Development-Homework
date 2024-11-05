// usersData.js
import "./usersData.css";

export const usersData = (firstName, lastName) => {
	const dataContainer = document.createElement("div");
	dataContainer.classList.add("data-container");

	const ul = document.createElement("ul");
	ul.innerHTML = `
		<li>First Name: ${firstName}</li>
		<li>Last Name: ${lastName}</li>
	`;

	dataContainer.appendChild(ul);
	return dataContainer;
};
