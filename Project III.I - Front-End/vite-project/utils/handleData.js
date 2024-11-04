// utils/handleData.js
import { cardComponent } from "../components/cardComponent";
import { userActions } from "../components/userActions";

export function handleData(usersArray) {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Clear previous content
    usersArray.forEach(user => {
        const cardArticle = cardComponent();
        cardArticle.setAttribute("userId", user.id);
        cardArticle.appendChild(userActions(user.id)); // Pass userId to userActions
        app.appendChild(cardArticle);
    });
}
