// components/userActions.js
import editIcon from "../assets/edit.svg";
import trashIcon from "../assets/trash.svg";
import { deleteUser } from "../utils/deleteUser";
import { updateUser } from "../utils/updateUser";
import { fetchUserById } from "../utils/fetchUserById";

export function userActions(userId) {
    const actionContainer = document.createElement("div");
    actionContainer.classList.add("user-actions");

    // Delete Button
    const deleteButton = document.createElement("button");
    deleteButton.innerHTML = `<img src="${trashIcon}" alt="Delete">`;
    deleteButton.addEventListener("click", async () => {
        const confirmed = confirm("Are you sure you want to delete this user?");
        if (confirmed) {
            const success = await deleteUser(userId);
            if (success) {
                alert("User deleted successfully!");
                location.reload(); // Refresh data
            } else {
                alert("Failed to delete user.");
            }
        }
    });
    actionContainer.appendChild(deleteButton);

    // Update Button
    const updateButton = document.createElement("button");
    updateButton.innerHTML = `<img src="${editIcon}" alt="Edit">`;
    updateButton.addEventListener("click", () => {
        openUpdateModal(userId);
    });
    actionContainer.appendChild(updateButton);

    return actionContainer;
}

// Function to open the update modal
async function openUpdateModal(userId) {
    const user = await fetchUserById(userId);
    const modal = document.createElement("div");
    modal.classList.add("modal");
    modal.innerHTML = `
        <form id="updateUserForm">
            <label for="firstName">First Name:</label>
            <input type="text" id="firstName" value="${user.firstName}" required>
            <label for="lastName">Last Name:</label>
            <input type="text" id="lastName" value="${user.lastName}" required>
            <button type="submit">Update User</button>
            <button type="button" id="closeModal">Cancel</button>
        </form>
    `;

    document.body.appendChild(modal);

    document.getElementById("closeModal").addEventListener("click", () => {
        modal.remove();
    });

    document.getElementById("updateUserForm").addEventListener("submit", async (event) => {
        event.preventDefault();
        const firstName = event.target.firstName.value;
        const lastName = event.target.lastName.value;
        const updatedUser = await updateUser(firstName, lastName, userId);
        if (updatedUser) {
            alert("User updated successfully!");
            modal.remove();
            location.reload(); // Refresh data
        } else {
            alert("Failed to update user.");
        }
    });
}
