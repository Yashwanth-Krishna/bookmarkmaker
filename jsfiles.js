let bookmarks = [{
    bookmarkId: "bookmark1",
    name: "Learning Portal",
    url: "https://learning.ccbp.in/",
}, ];

let formEl = document.getElementById("bookmarkForm");
let siteNameEl = document.getElementById("siteNameInput");
let siteUrlEl = document.getElementById("siteUrlInput");
let buttonEl = document.getElementById("submitBtn");
let siteNameErrMsgEl = document.getElementById("siteNameErrMsg");
let siteUrlErrMsgEl = document.getElementById("siteUrlErrMsg");
let listEl = document.getElementById("bookmarksList");


siteNameEl.addEventListener("change", function(event) {
    if (siteNameEl.value === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
    siteName = event.target.value;
});

siteUrlEl.addEventListener("change", function(event) {
    if (siteUrlEl.value === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
    siteUrl = event.target.value;
});

buttonEl.onclick = function() {

    let siteName = siteNameEl.value;
    let siteUrl = siteUrlEl.value;

    if (siteName && siteUrl !== "") {
        let listItem = document.createElement("li");
        listItem.classList.add("mt-3", "mr-4", "form-cont", "p-3");
        let anchorEl = document.createElement("a");
        anchorEl.textContent = siteName;
        anchorEl.classList.add("list-head");
        anchorEl.target = "_blank";
        anchorEl.href = siteUrl;
        let insideButton = document.createElement("button");
        insideButton.textContent = "Visit";
        insideButton.classList.add("btn", "btn-primary", "visit-button");
        anchorEl.appendChild(insideButton);

        listItem.appendChild(anchorEl);

        listEl.appendChild(listItem);
    }

};

function checkingName() {
    if (siteName === "") {
        siteNameErrMsgEl.textContent = "Required*";
    } else {
        siteNameErrMsgEl.textContent = "";
    }
}

function checkingUrl() {
    if (siteUrl === "") {
        siteUrlErrMsgEl.textContent = "Required*";
    } else {
        siteUrlErrMsgEl.textContent = "";
    }
}

formEl.addEventListener("submit", function() {
    event.preventDefault();
    checkingName();
    checkingUrl();
});
