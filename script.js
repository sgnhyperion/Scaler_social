let postbutton = document.querySelector("#post-button");
let board = document.querySelector(".right-container");
let text = document.querySelector("#text-area");

postbutton.addEventListener("click", function(){
    let post = document.createElement("div");
    post.id = "created-post";
    post.innerHTML = text.value;
    let react = document.createElement("div");
    let like = document.createElement("img");
    like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
    let del = document.createElement("img");
    del.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643";
    let comment = document.createElement("img");
    comment.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619";
    react.appendChild(like);
    react.appendChild(del);
    react.appendChild(comment);
    post.appendChild(react);
    board.appendChild(post);
})
