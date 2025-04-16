const { expect } = require('@playwright/test');

exports.HomePage = class HomePage {

    constructor(page) {
        this.page = page;

        this.headerLink = page.locator("div[id='logo'] > a");
        this.homeButton = page.locator("li[id='menu-item-5391'] > a");
        this.newsButton = page.locator("li[id='menu-item-5392'] > a");
        this.meteorsButton = page.locator("li[id='menu-item-5406'] > a");
        this.searchInput = page.locator("input[id='search-input']");

        this.articles = page.locator("article");

        this.fbButton = page.locator("div[id='header-top-right'] > a:nth-child(1)");
        this.twitButton = page.locator("div[id='header-top-right'] > a:nth-child(2)");
        this.xmlMapButton = page.locator("div[id='header-top-right'] > a:nth-child(3)");
        
    }

}

exports.SearchResultsPage = class SearchResultsPage {

    constructor(page) {
        this.page = page
        
    }

}

exports.CalendarPage = class CalendarPage {

    constructor(page) {
        this.page = page
        
    }

}

exports.ArticlePage = class ArticlePage {

    constructor(page) {
        this.page = page
        
    }

}

exports.NewsPage = class NewsPage {

    constructor(page) {
        this.page = page
        
    }

}