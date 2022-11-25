function data() {
  var data = document.getElementById("text").value;
  console.log(data);
  if (data == "india" || data == "INDIA" || data == "India") {
    window.location.href = "/components/map.html";
  } else {
    alert("sorry we dont have any data");
  }
}
