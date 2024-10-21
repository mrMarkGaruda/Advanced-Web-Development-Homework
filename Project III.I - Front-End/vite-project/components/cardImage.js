export const cardImage = () => {
    const cardDiv = document.createElement("div")
    cardDiv.classList.add("card-image")

    const img = new Image()
    img.src = "https://imgs.search.brave.com/oB7Ak67etRi_Ly1NApIiKr4VjhVC2ZehmrdxW0JsKo0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTEz/MTE2NDU0OC92ZWN0/b3IvYXZhdGFyLTUu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PUNLNDlTaExKd0R4/RTRraXJvQ1I0Mmtp/bVR1dWh2dW8yRkg1/eV82YVNnRW89"
    img.setAttribute("alt", "avatar image")

    cardDiv.appendChild(img)

    return cardDiv
}