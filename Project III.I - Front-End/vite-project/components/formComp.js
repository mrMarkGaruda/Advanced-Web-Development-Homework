// components/formComp.js
import "./formComp.css";
import { inputComp } from "./inputComp";
import { updateUser } from "../utils/updateUser";
import { fetchUsers } from "../utils/fetchData";
import { handleData } from "../utils/handleData";
import { modalComp } from "./modalComp";

export const formComp = (firstName, lastName, userId) => {
	const form = document.createElement("form");
	form.classList.add("form");

	form.appendChild(inputComp("text", "firstName", "First Name", firstName));
	form.appendChild(inputComp("text", "lastName", "Last Name", lastName));

	const submitBtn = document.createElement("button");
	submitBtn.setAttribute("type", "submit");
	submitBtn.innerText = "Submit";

	form.addEventListener("submit", async (e) => {
		e.preventDefault();
		const updatedFirstName = document.getElementById("firstName").value;
		const updatedLastName = document.getElementById("lastName").value;
		const response = await updateUser(updatedFirstName, updatedLastName, userId);
		document.querySelector(".modal-overlay").classList.toggle("show");

		if (response.msg === "User updated") {
			const usersArray = await fetchUsers();
			if (usersArray && usersArray.length) handleData(usersArray);
		}
	});

	form.appendChild(submitBtn);
	return form;
};
