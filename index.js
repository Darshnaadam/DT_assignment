fetch("data.json")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("task_title").innerHTML = data.title;

    data.tasks[0].assets.forEach((asset, index) => {
      var assetElementId = "asset" + (index + 1);
      document.getElementById(assetElementId).innerHTML = asset.asset_title;
    });
  })
  .catch((error) => {
    // Handle any errors that occurred during the fetch request
    console.log(error);
  });

document.addEventListener("DOMContentLoaded", function () {
  var myText = document.getElementById("jrn");
  myText.addEventListener("click", function () {
    if (myText.classList.contains("active")) {
      myText.classList.remove("active");
    } else {
      myText.classList.add("active");
    }
  });
});
