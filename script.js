let postbutton = document.querySelector("#post-button");
let board = document.querySelector(".right-container");
let text = document.querySelector("#text-area");

postbutton.addEventListener("click", function(){
    let post = document.createElement("div");
    post.id = "created-post";
    post.innerHTML = text.value;
    text.value = "";
    let react = document.createElement("div");
    react.id = "react";
    let like = document.createElement("img");
    like.id = "like";
    like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/029/original/heart.png?1706888679";
    let del = document.createElement("img");
    del.id = "del";
    del.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/027/original/delete.png?1706888643";
    let comment = document.createElement("img");
    comment.id = "comment";
    comment.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/026/original/comment.png?1706888619";
    react.appendChild(like);
    react.appendChild(del);
    react.appendChild(comment);
    post.appendChild(react);
    board.appendChild(post);
    
    like.addEventListener("click", function(){
        like.src = "https://d2beiqkhq929f0.cloudfront.net/public_assets/assets/000/064/025/original/state_clicked.png?1706888455";
    });
    del.addEventListener("click", function(){
        post.remove();
    });
    comment.addEventListener("click", function(){
        let commentbox = document.createElement("input");
        commentbox.id = "comment-box";
        commentbox.type = "text";
        commentbox.placeholder = "Comment here";
        post.appendChild(commentbox);
        let commentbutton = document.createElement("button");
        commentbutton.id = "comment-button";
        commentbutton.innerHTML = "Comment";
        post.appendChild(commentbutton);
        commentbutton.addEventListener("click", function(){
            let comment = document.createElement("div");
            comment.id = "comment";
            comment.innerHTML = commentbox.value;
            commentbox.value = "";
            post.appendChild(comment);
        });
    });
});

