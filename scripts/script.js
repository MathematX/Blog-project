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

  let title = document.getElementById("txt-title");
  let content = document.getElementById("content");
  
  if (title.value !== "" && content.value !== "") {
    let post = `<li style="list-style: none">
                  <div class="post">
                    <h1>${title.value}</h1>
                  
                    <p>
                      ${content.value}
                    </p>
                  </div>
                </li>`;

    document.getElementById("add-post-here").insertAdjacentHTML("afterbegin", post);
    title.value = "";
    content.value = "";
  }
});