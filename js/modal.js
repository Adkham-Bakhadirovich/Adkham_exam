const openModal=(url)=>{
  $(".modal-dialog img").attr("src", url)
  $("#exampleModal").modal("show")
}
const closeModal=()=>{
  $("#exampleModal").modal("hide")
}

const getPhoto=(photo)=>{
$(".photo").html("") 
data.map((item, key)=>{
  $('.photo').append(` <tr>
  <td>${key+1}</td>
  <td><div class="text_box">${item.title}</div></td>
<td>
  <div class="image_box">
  <img onClick="openModal('${item.url}')" src="${item.thumbnailUrl}"/>
  </div>
</td>
</tr>`)
})
}