

console.log('Happy Spring!')



const $chirpsData = $('#chirpsData');
let $user = $('#user');
let $text = $('#text');

$.ajax({
    type: "Get",
    url: "/api/chirps",
    success: function (chirps) {
        console.log(chirps);
        const chirpsArr = Array.from(chirps)
        console.log(chirpsArr)

        // $.each(chirpsArr, function(chirp){
        //     $chirpsData.append(`<li> user : ${chirp.user}</li>`)
        //     $chirpsData.append(`<li> text : ${chirp.text}</li>`)
        // })
    }
})

$('#addChirpBtn').on('click', () => {
    let chirp = {
        user: $user.val(),
        text: $text.val()
    };
    console.log(chirp);

    $.ajax({
        type: "Post",
        url: "/api/chirps",
        data: chirp,
        // success : function(newChirp){
        //    $chirpsData.append(`<li> user : ${newchirp.user}</li>`)
        //     $chirpsData.append(`<li> text : ${newchirp.text}</li>`)


        // }
    })


})