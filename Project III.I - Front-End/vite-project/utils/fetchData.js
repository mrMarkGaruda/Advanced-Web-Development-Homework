// utils/fetchData.js
export async function fetchUsers() {
    try {
        const url = "http://localhost:3000/api/users";
        const options = {
            method: "GET",
            headers: {
                "x-api-key": import.meta.env.VITE_REST,
            },
        };
        const res = await fetch(url, options);
        if (!res.ok) throw new Error("Error fetching users");
        return await res.json();
    } catch (error) {
        console.error(error);
    }
}
