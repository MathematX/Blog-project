// function postArticle(){
//   title = document.getElementById("txt-title").value;
//   content = document.getElementById("content").value;

//   let post = `<li style="list-style: none">
//                 <div class="post">
//                   <h1>${title}</h1>
                  
//                   <p>
//                     ${content}
//                   </p>
//                 </div>
//               </li>`;

//   if (title !== "" && content !== "") {
//     document.getElementById("add-post-here").insertAdjacentHTML("afterbegin", post);
//   }
// }

let form = document.getElementById("post-form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let title = document.getElementById("txt-title").value;
  let content = document.getElementById("content").value;
  
  if (title !== "" && content !== "") {
    let post = `<li style="list-style: none">
                  <div class="post">
                    <h1>${title}</h1>
                  
                    <p>
                      ${content}
                    </p>
                  </div>
                </li>`;

    document.getElementById("add-post-here").insertAdjacentHTML("afterbegin", post);
    title = "";
    content = "";
  }
});