
const URL = "http://localhost:5000/amigos"
const img = $('img');


const inputclear = ()=>{
    $('#input').val('');
    $('#inputDelete').val('');
}

img.hide()

const dataload = () => {
    $.get(URL, (data)=>{ 
    img.show()
    let list = $("#lista")
    list.empty();
    data.map((item)=> list.append(`<li>${item.name}</li>`)) 
      
       setTimeout(() => {img.hide()}, 1000);
    })
}
$('#boton').click(() => {
    dataload();
})

$('#search').click(()=> 
{
    const id = $('#input').val();
    $.get(`${URL}/${id}`, (data)=> {$('#amigo').text(data.name)});
    inputclear();
});

$('#delete').click(()=> {
let idDelete = $('#inputDelete').val();
$.ajax({
    url: `${URL}/${idDelete}`,
    type: 'DELETE',
    success: ()=>{$('#success').text('Amigo Borrado con exito!');
    dataload();
}
    
})
})