'use strict';
const optArticleSelector = '.post';
const optTitleSelector = '.post-title';
const optTitleListSelector = '.titles';
const optArticleTagsSelector = '.post-tags .list';

  const titleClickHandler = function(event){
    event.preventDefault();
    const clickedElement = this;
    console.log('Link was clicked!');

    /* [DONE] remove class 'active' from all article links  */
    const activeLinks = document.querySelectorAll('.titles a.active');

    for(let activeLink of activeLinks) {
      activeLink.classList.remove('active');
    }
    /* [DONE] add class 'active' to the clicked link */
    clickedElement.classList.add('active');
    console.log(clickedElement);
    /* [DONE] remove class 'active' from all articles */
    const activeArticles = document.querySelectorAll('.posts article.active');

    for(let activeArticle of activeArticles) {
    activeArticle.classList.remove('active');
    }

    /* [DONE] get 'href' attribute from the clicked link */
    const articleSelector = clickedElement.getAttribute('href');
    console.log(articleSelector);

    /* [DONE] find the correct article using the selector (value of 'href' attribute) */
    const targetArticle = document.querySelector(articleSelector);
    console.log(targetArticle);
    /* [DONE] add class 'active' to the correct article */
    targetArticle.classList.add('active');
    console.log('targetArticle (with plus): ' + targetArticle);


    generateTitleLinks();
    console.log(generateTitleLinks);
  }
  function generateTitleLinks(customSelector = ' '){

    /* remove contents of titleList */
    const titleList = document.querySelector(optTitleListSelector);
    titleList.innerHTML = '';
    console.log(titleList);

    /* for each article */
    const articles = document.querySelectorAll(optArticleSelector + customSelector);
    console.log('articles', articles)
    let html = '';
  for(let article of articles){
    console.log();
    /* get the article id */
    const articleId = article.getAttribute('id');
    console.log(articleId);
    /* find the title element */

    /* get the title from the title element */
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    console.log(articleTitle);
    /* create HTML of the link */
    const linkHTML = '<li><a href="#' + articleId + '"><span>' + articleTitle +'</span></a></li>';
    console.log(linkHTML);
    /* insert link into titleList */
    /*titleList.innerHTML = titleList.innerHTML + linkHTML;
    titleList.insertAdjacentHTML('beforeend', linkHTML);*/
    html = html + linkHTML;
    console.log(html);
  }
  titleList.innerHTML = html;
  const links = document.querySelectorAll('.titles a');
  console.log(links);

  for(let link of links){
  link.addEventListener('click', titleClickHandler);
  }
}
generateTitleLinks()