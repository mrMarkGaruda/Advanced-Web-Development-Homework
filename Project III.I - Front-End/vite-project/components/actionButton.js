import "./actionButton.css"

/**
 * @param {string} icon - a URL for the button's image
 * @param {string} className - additional class for button styling
 * @param {function} onClick - callback function for button click event
 * @returns {HTMLButtonElement}
 */
export const actionButton = (icon, className, onClick) => {
    const buttonElement = document.createElement("button");
    buttonElement.classList.add("btn", className);

    const img = new Image();
    img.src = icon;
    img.alt = "action icon";
    buttonElement.appendChild(img);

    buttonElement.addEventListener("click", () => {
        onClick();
    });

    return buttonElement;
};
