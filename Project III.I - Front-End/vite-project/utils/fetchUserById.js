// utils/fetchUserById.js
export async function fetchUserById(userId) {
    try {
        const url = `http://localhost:3000/api/users/${userId}`;
        const res = await fetch(url, {
            method: "GET",
            headers: {
                "x-api-key": import.meta.env.VITE_REST,
            },
        });
        if (!res.ok) throw new Error("Error fetching user data");
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}
