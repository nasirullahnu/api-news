const newsCatagories = () => {
  url = `https://openapi.programming-hero.com/api/news/categories`
  fetch(url)
    .then(res => res.json())
    .then(data => displayCatagories(data.data.news_category))
}

const displayCatagories = (catagories) => {
  // console.log(catagories)
  const catagoriesContainer = document.getElementById('news-catagoried');
  catagories.forEach(catagori => {
    console.log(catagori)
    const catagoriDiv = document.createElement('div')
    catagoriDiv.classList.add('catagories')
    catagoriDiv.innerHTML = `
            <p onclick="loadNews(${catagori.category_id})">${catagori.category_name}</p>
        `
    catagoriesContainer.appendChild(catagoriDiv);
  })
}

const loadNews = (newsId) => {
  // console.log(newsId)
  url = `https://openapi.programming-hero.com/api/news/category/0${newsId}`
  fetch(url)
    .then(res => res.json())
    .then(data => loadNewsCards(data.data))
}
const loadNewsCards = (allNews) => {
  // console.log(allNews)
  const newsContainer = document.getElementById('news-container');
  newsContainer.innerHTML = '';
  allNews.forEach(news => {
    console.log(news)
    const newsCard = document.createElement('div');
    newsCard.innerHTML = `
        <div class="row g-2 m-2 bg-light">
              <div class="col-md-4">
                <img src="${news.image_url}" class="img-fluid rounded-start w-100" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${news.title}</h5>
                  <p class="card-text">${news.details.slice(0, 200)}...</p>
                  <div class="row g-2">
                    <div class="col-lg-4 d-flex">
                    <img src="${news.author.img}" class="img-fluid rounded-5" style="width:50px;height:50px;margin:5px;" alt="...">
                      <div>
                        <strong>${news.author.name ? news.author.name : 'No Author Name Found'}</strong>
                        <p>${news.author.published_date}</p>
                      </div>
                    </div>
                    <div class="col-lg-4">
                      <strong>views<br> ${news.total_view ? news.total_view : 'no views yet'}</strong>
                    </div>
                    <div class="col-lg-4"><button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#newsdetails">Details</button></div>
                  </div>
                </div>
              </div>
            </div>
        `
    newsContainer.appendChild(newsCard);
  })

}

newsCatagories();