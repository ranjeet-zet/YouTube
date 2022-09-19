let Arr = JSON.parse(localStorage.getItem("play"));

let Id = Arr[0].id;
function playing() {
  let Url = `https://www.youtube.com/embed/${Id}?autoplay=1`;
  document.querySelector("iframe").src = Url;
  console.log(Url);
}
// https://www.youtube.com/embed/oo8HUMq1PCU?autoplay=1
// https://www.youtube.com/embed/4E5pnOdtvGc?autoplay=1
