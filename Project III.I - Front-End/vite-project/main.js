import { cardComponent } from './components/cardComponent';
import { cardImage } from './components/cardImage';
import { usersData } from './components/usersData';
import { fetchUsers } from './utils/fetchData'; // Ensure this path is correct
import { handleData } from './utils/handleData'; // Imported handleData
import { userActions } from './components/userActions';
import './style.css';

// Renamed local function to avoid conflict
export function renderUserCards(usersArray) {
    const app = document.getElementById("app");
    app.innerHTML = ""; // Clear previous content

    usersArray.forEach(user => {
        const card = cardComponent();
        card.setAttribute("userId", user.id); // Store user ID in the card

        // Create and append components to the card
        card.appendChild(cardImage(user.profileImg)); // Pass user's profile image
        card.appendChild(usersData(user.firstName, user.lastName)); // Pass user's data
        card.appendChild(userActions(user.id)); // Pass user ID to user actions

        // Append the card to the app container
        app.appendChild(card);
    });
}

// Fetch users and render them
fetchUsers().then(usersArray => {
    if (usersArray && usersArray.length) {
        renderUserCards(usersArray); // Call the renamed function
    } else {
        const app = document.getElementById("app");
        app.innerHTML = "<p>No users found.</p>";
    }
});

// Call handleData on initial fetch
fetchUsers().then(handleData);
