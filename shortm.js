function fileupload1() {
  let data = document.getElementById("ahref9").files[0];
  let entry = document.getElementById("ahref9").files[0];
  console.log("doupload/", entry, data);
  fetch("uploads/" + encodeURLComponent(entry.name), {
    method: "put",
    body: data,
  });
  alert("Your file hasbeen uploaded");
  location.reload();
}
