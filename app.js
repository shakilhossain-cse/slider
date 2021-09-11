const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById('searchBtn')
const card = document.getElementById("card");

searchBtn.addEventListener("click", () => {
    card.textContent = '';
  const query = searchInput.value;
  const API_URL = `https://pixabay.com/api/?key=23335201-2d2cf8ddd979f5a8bd62aa3ba&q=${query}&image_type=photo&pretty=true`

  fetch(API_URL)
    .then((res) => res.json())
    .then((data) => showData(data));
});

const showData = (data) => {
    if (data.hits.length  > 1) {       
        data.hits.forEach(imageData => {

            const col = document.createElement("div");
            col.classList.add("col");
            col.innerHTML = `
              <div class="card">
                <img src="${imageData.largeImageURL}" class="card-img-top" alt="...">
              </div>
            `;
            card.appendChild(col)
        });
   
    }
};
