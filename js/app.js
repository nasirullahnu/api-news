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
    allNews.forEach(news => {
        console.log(news)
    })

}

newsCatagories();