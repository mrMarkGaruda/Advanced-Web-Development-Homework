// handleData.js
import { cardComponent } from "../components/cardComponent";
import { cardImage } from "../components/cardImage";
import { usersData } from "../components/usersData";
import { usersActions } from "../components/userActions";

export function handleData(usersArray) {
	const app = document.getElementById("app");
	app.innerText = "";  // Clear previous content

	usersArray.forEach((user) => {
		const cardArticle = cardComponent();
		cardArticle.setAttribute("userId", user.id);
		cardArticle.appendChild(cardImage(user.profileImg));
		cardArticle.appendChild(usersData(user.firstName, user.lastName));
		cardArticle.appendChild(usersActions(user.id));

		app.appendChild(cardArticle);
	});
}
