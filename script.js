document.addEventListener('DOMContentLoaded', function() {
fetch("header.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".header").innerHTML = data;
});
fetch("head.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".head").innerHTML = data;
});
fetch("footer.html")
  .then(response => {
    return response.text()
  })
  .then(data => {
    document.querySelector(".footer").innerHTML = data;
});
});