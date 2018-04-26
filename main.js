var allButtons = $('#buttons>span')
for(let i = 0; i < allButtons.length; i++){
    $(allButtons[i]).on('click',function(x){
        let index = $(x.currentTarget).index()
        var px = index * (-400)
        n = index
        $('.imgs').css({
            transform:'translate('+ px +'px)'
        })
        activeButton(allButtons.eq(n))
    })
}

var n = 0
var size = allButtons.length
var timeId = setTimer()
$('.window').on('mouseenter',function(){
    window.clearInterval(timeId)
})
$('.window').on('mouseleave',function(){
    timeId = setTimer()
})

function setTimer(){
    return setInterval(()=>{
        n += 1
        allButtons.eq(n%size).trigger('click')
    },1000)
}
function activeButton($Button){
    $Button
        .addClass('red')
        .siblings('.red').removeClass('red')
}
