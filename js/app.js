 $(document).ready(()=>{
  getAlbums()
 })
 
 const getAlbums=()=>{
  $.ajax({
    url:`${api}/albums`,
    method:"get",
    success:(res)=>{
      console.log(res)
      getData(res)
    },
    error:(err)=>{
      console.log(err)
    }
  })
 }


 const getData=(data)=>{
  $('.data').html("")
   data.map((item, key)=>{
    $(".data").append(`
    <tr>
    <th scope="row">${key+1}</th>
    <td>${item.title}</td>
    <td><div class="btnBox"><a href="./photos.html" class="btn btn-primary"><i class="fa fa-eye" aria-hidden="true"></i></a></div></td>
  </tr>`)
   })
 }