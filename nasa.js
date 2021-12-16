function busca() {

    const searchDay = $("#date").val();
    const api_key = "NvVKeekowXa5fEaKCb5vfjBeMWHs8FCFRNy4um7Q";
    const url = `https://api.nasa.gov/planetary/apod?api_key=${api_key}&date=${searchDay}`;

    $.ajax({
        type:'GET',
        url: url, 
        success: function(response){
            $('#inicio').text(response.title);
            $('#img').attr('src', response.url)
            $('#text').text(response.explanation)
        }
    })
}