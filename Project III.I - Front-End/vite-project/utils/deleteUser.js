// utils/deleteUser.js
export async function deleteUser(userId) {
    try {
        const url = `http://localhost:3000/api/users/${userId}`;
        const options = {
            method: "DELETE",
            headers: {
                "x-api-key": import.meta.env.VITE_REST,
                "Content-Type": "application/json",
            },
        };
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Error deleting user");
        return true; // Success
    } catch (error) {
        console.error(error);
        return false; // Failure
    }
}
