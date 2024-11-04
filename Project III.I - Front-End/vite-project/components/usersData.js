// components/usersData.js
export const usersData = (firstName, lastName) => {
	const dataContainer = document.createElement("div");
	dataContainer.classList.add("data-container");

	const ul = document.createElement("ul");
	const firstNameLi = document.createElement("li");
	firstNameLi.innerText = `First Name: ${firstName}`;
	const lastNameLi = document.createElement("li");
	lastNameLi.innerText = `Last Name: ${lastName}`;

	ul.append(firstNameLi, lastNameLi);
	dataContainer.appendChild(ul);

	return dataContainer;
};
