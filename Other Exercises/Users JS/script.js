"use strict";

document.addEventListener("DOMContentLoaded", function () {
    const users = [
        {
            userName: "Alice",
            lastName: "Johnson",
            age: 30,
            address: {
                street: "Oak Avenue",
                number: 45,
                house: true,
            },
            role: "Software Engineer",
            profilePicture: "./assets/01.jpg"
        },
        {
            userName: "Charlie",
            lastName: "Smith",
            age: 27,
            address: {
                street: "Maple Street",
                number: 101,
                house: false,
            },
            role: "Project Manager",
            profilePicture: "./assets/02.jpg"
        },
        {
            userName: "Diana",
            lastName: "Brown",
            age: 35,
            address: {
                street: "Elm Road",
                number: 88,
                house: true,
            },
            role: "UX Designer",
            profilePicture: "./assets/01.jpg"
        },
        {
            userName: "Eve",
            lastName: "Davis",
            age: 21,
            address: {
                street: "Birch Lane",
                number: 7,
                house: false,
            },
            role: "Intern",
            profilePicture: "./assets/02.jpg"
        },
        {
            userName: "Frank",
            lastName: "Miller",
            age: 40,
            address: {
                street: "Pine Street",
                number: 200,
                house: true,
            },
            role: "CTO",
            profilePicture: "./assets/01.jpg"
        },
        {
            userName: "Grace",
            lastName: "Wilson",
            age: 28,
            address: {
                street: "Cedar Avenue",
                number: 99,
                house: false,
            },
            role: "Marketing Specialist",
            profilePicture: "./assets/02.jpg"
        },
        {
            userName: "Henry",
            lastName: "Moore",
            age: 33,
            address: {
                street: "Poplar Road",
                number: 16,
                house: true,
            },
            role: "HR Manager",
            profilePicture: "./assets/01.jpg"
        },
        {
            userName: "Ivy",
            lastName: "Taylor",
            age: 25,
            address: {
                street: "Willow Street",
                number: 52,
                house: false,
            },
            role: "Sales Associate",
            profilePicture: "./assets/02.jpg"
        },
        {
            userName: "Jack",
            lastName: "Anderson",
            age: 29,
            address: {
                street: "Spruce Avenue",
                number: 78,
                house: true,
            },
            role: "DevOps Engineer",
            profilePicture: "./assets/01.jpg"
        },
        {
            userName: "Karen",
            lastName: "Thomas",
            age: 37,
            address: {
                street: "Chestnut Street",
                number: 65,
                house: false,
            },
            role: "Finance Manager",
            profilePicture: "./assets/02.jpg"
        },
        {
            userName: "Leo",
            lastName: "Harris",
            age: 22,
            address: {
                street: "Fir Lane",
                number: 10,
                house: true,
            },
            role: "Data Analyst",
            profilePicture: "./assets/01.jpg"
        },
    ];

    const userContainer = document.getElementById("user-container");

    users.forEach(user => {
        const card = document.createElement("article");
        card.classList.add("card");

        const cardImage = document.createElement("div");
        cardImage.classList.add("card-image");
        const img = document.createElement("img");
        img.src = user.profilePicture;
        img.alt = `${user.userName} ${user.lastName}`;
        const title = document.createElement("span");
        title.classList.add("card-title");
        title.textContent = `${user.userName} ${user.lastName}`;
        cardImage.appendChild(img);
        cardImage.appendChild(title);
        card.appendChild(cardImage);

        const cardContent = document.createElement("div");
        cardContent.classList.add("card-content");
        const ulList = document.createElement("ul");
        ulList.classList.add("list-group");

        const nameLi = document.createElement("li");
        nameLi.classList.add("list-group-item");
        nameLi.innerHTML = `<strong>Name:</strong> ${user.userName} ${user.lastName}`;
        ulList.appendChild(nameLi);

        const ageLi = document.createElement("li");
        ageLi.classList.add("list-group-item");
        ageLi.innerHTML = `<strong>Age:</strong> ${user.age}`;
        ulList.appendChild(ageLi);

        const addressLi = document.createElement("li");
        addressLi.classList.add("list-group-item");
        addressLi.innerHTML = `<strong>Address:</strong> ${user.address.number} ${user.address.street}`;
        const iconImg = new Image();
        iconImg.src = user.address.house ? "./assets/house.svg" : "./assets/apart.svg";
        iconImg.classList.add("list-group-img");
        addressLi.appendChild(iconImg);
        ulList.appendChild(addressLi);

        const roleLi = document.createElement("li");
        roleLi.classList.add("list-group-item");
        roleLi.innerHTML = `<strong>Role:</strong> ${user.role}`;
        ulList.appendChild(roleLi);

        cardContent.appendChild(ulList);
        card.appendChild(cardContent);
        userContainer.appendChild(card);
    });
});
