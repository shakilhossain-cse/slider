const searchInput = document.getElementById('searchInput');
const card = document.getElementById('card');

searchInput.addEventListener('keyup',(e)=>{
    const input = e.target.value;
    const API_URL = `https://pixabay.com/api/?key=23335201-2d2cf8ddd979f5a8bd62aa3ba&q=${input}_type=photo`
   fetch(API_URL)
   .then(res => res.json())
   .then(data => showData(data))
})

const showData = data =>{

}