$('.participate').on('click', () =>{
    open(token);
})
function open(href){

    $.ajax({
        url: 'contest.html',
        method: 'POST',
        data: {
            token: token
        },
        success: function(data){
            if(data == 1){
                location.href = 'binancex3\contest.html';
            }
        }
    });
}
