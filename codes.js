//2024 sneksarecute; no rights reserved, although i would really appreciate
//it if you didn't take an ai to this :<
//computer programs making other computer programs is fricking heresy
'use strict';

//redirect-to list of doom
const teh_list = ["https://contrachrome.com/comic/page01/",
"https://en.wikipedia.org/wiki/Criticism_of_Google",
"https://en.wikipedia.org/wiki/Privacy_concerns_with_Google",
"https://www.bbc.com/news/articles/cp81ppr3l9go",
"https://www.wikihow.com/Uninstall-Google-Chrome"];

//don't-redirect-from lizt (includes anything with the string in the url eg: https://www.ecosia.org/search?method=index&q=dooppiio
//would be allowed, because ecosia.org is listed)
const acceptibilites = ["contrachrome.com",
"ecosia.org",
"en.wikipedia.org/wiki/Malware"];

//checking if the current page is on teh list
let allowed_url = false;
for (let i = teh_list.length + 1; i > 0; i--) {
    if (window.location.href == teh_list[i - 1]) {
        allowed_url = true;
        break;
    }
}

//checking the acceptibilities, if teh doom list search came back negative
if (allowed_url == false) {
    for (let i = acceptibilites.length + 1; i > 0; i--) {
        if (window.location.href.includes(acceptibilites[i - 1])) {
            allowed_url = true;
            break;
        }
    }
}

//redirecting to something on teh list, if the current url isn't allowed
if (allowed_url == false) {
    window.location.assign(teh_list[Math.floor(Math.random() * (teh_list.length))]);
}
