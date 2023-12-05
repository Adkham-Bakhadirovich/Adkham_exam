$(document).ready(()=>{
  getPhotos()
 })
 
 const getPhotos=()=>{
  $.ajax({
    url:`${api}/photos`,
    method:"get",
    success:(res)=>{
      console.log(res)
      getPhoto(res)
    },
    error:(err)=>{
      console.log(err)
    }
  })
 }


 const getPhoto=(photo)=>{
  $('.photo').html("")
   photo.map((item, key)=>{
    $(".photo").append(`
    <tr class="tr">
    <th scope="row">${key+1}</th>
    <td>${item.title}</td>
    <td><a href="${item.url}"><img class="img" src="${item.url}"></a></td>
  </tr>`)
   })
 }
 