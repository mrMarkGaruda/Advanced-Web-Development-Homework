import "./css/bootstrap.min.css";
import "./js/bootstrap.bundle.min";

const container = document.getElementById('container');
const dynamicDataDiv = document.querySelector('.dynamic_data');
const spinnerContainer = document.querySelector('.spinner-container');
const noResultsAlert = document.querySelector('.alert');

const fetchData = async (query) => {
    const url = `https://steam2.p.rapidapi.com/search/${query}/page/1`;
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': import.meta.env.VITE_RAPIDAPI_KEY,
            'x-rapidapi-host': 'steam2.p.rapidapi.com'
        }
    };

    spinnerContainer.classList.remove('d-none');
    noResultsAlert.classList.add('d-none');
    dynamicDataDiv.innerHTML = '';

    try {
        const response = await fetch(url, options);
        console.log('Response Status:', response.status);
        const result = await response.json();
        console.log('Response Body:', result);

        spinnerContainer.classList.add('d-none');

        if (!response.ok) {
            if (container) {
                container.textContent = "No user found with this data";
            }
            return;
        }

        if (result.length === 0) {
            noResultsAlert.classList.remove('d-none');
        } else {
            handleData(result);
        }
    } catch (error) {
        console.error('Fetch Error:', error);
        if (container) {
            container.textContent = "An error occurred while fetching data.";
        }
    }
};

function handleData(data) {
    data.forEach(user => {
        const userCard = `
            <div class="col">
                <article class="card">
                    <div class="card-body">
                        <p>${user.name}</p>
                        <p>${user.email}</p>
                    </div>
                </article>
            </div>
        `;
        dynamicDataDiv.innerHTML += userCard;
    });
}

document.getElementById('searchButton').addEventListener('click', () => {
    const query = document.getElementById('searchInput').value;
    fetchData(query);
});
