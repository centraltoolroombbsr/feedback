
    const scriptURL = 'https://script.google.com/macros/s/AKfycbz6b7szeTMrjaFj4lIbW_sRZxc40ieu9xv1oVGv0RbNwjIxOoOfTNhD_tiJcZynsbbskg/exec'
            const form = document.forms['google-sheet']
          
            form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                confirm("Are you sure !!");
                location.reload();

            })
    function hideButton(x){
        x.style.display = 'index.html';
        return false;
    }
    function myFunc(){
        form.addEventListener('submit', e => {
              e.preventDefault()
              fetch(scriptURL, { method: 'POST', body: new FormData(form)})
                confirm("Are you sure !!");
                location.reload();
    }
`use strict`;
function refreshTime() {
  const timeDisplay = document.getElementById("time");
  const dateString = new Date().toLocaleString();
  const formattedString = dateString.replace(", ", " - ");
  timeDisplay.textContent = formattedString;
}
  setInterval(refreshTime, 1000);


      const btn = document.querySelector("button");
      const post = document.querySelector(".post");
      const widget = document.querySelector(".star-widget");
      const editBtn = document.querySelector(".edit");
      btn.onclick = ()=>{
        widget.style.display = "none";
        post.style.display = "block";
        editBtn.onclick = ()=>{
          widget.style.display = "block";
          post.style.display = "none";
        }
        return false;
      }
