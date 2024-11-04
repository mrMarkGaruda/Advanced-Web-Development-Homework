// utils/updateUser.js
export async function updateUser(firstName, lastName, userId) {
    try {
        const url = `http://localhost:3000/api/users/${userId}`;
        const options = {
            method: "PUT",
            headers: {
                "x-api-key": import.meta.env.VITE_REST,
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ firstName, lastName }),
        };
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Error updating user");
        return await res.json(); // Return updated user data
    } catch (error) {
        console.error(error);
    }
}
