import "./cardComponent.css"

export const cardComponent = () => {
	const card = document.createElement("article")
    card.classList.add("card")
	card.innerText = "hello from component card !"
	return card
}