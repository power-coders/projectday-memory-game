$(function(){

    open_random_card()

    randomize()

    /*setInterval(function(){
        randomize()
    }, 5000)*/

    $('.card').click(function(){

        var $this = $(this)

        if($this.hasClass('correct')){
            alert('Already correct')
            return
        }

        $this.addClass('clicked')

        if($('.clicked').length === 2){
            check_cards()
        }

    })

})

function check_cards() {
    var card_one = $('.clicked').eq(0),
        card_two = $('.clicked').eq(1);

    setTimeout(function(){
        if(card_one.attr('class') === card_two.attr('class')){
            alert('Correct!')
            card_one.addClass('correct')
            card_two.addClass('correct')
            reset_clicked_card()
            check_if_won()
        } else {
            alert('Wrong ...')
            reset_clicked_card()
        }
    }, 1000)
}

function reset_clicked_card() {
    $('.card').removeClass('clicked')
    card_one = undefined
    card_two = undefined
}

function check_if_won() {
    if($('.card.correct').length === $('.card').length){
        alert('You won :)')
    }
}

function randomize(){
    var memory = $('#memory');
    for (var i = memory.children().length; i >= 0; i--) {
        memory.append(memory.children()[Math.random() * i | 0]);
    }
}

function open_random_card() {
    var rand = Math.round(Math.random() * $('.card').length)
    setTimeout(function(){
        $('.card').eq(rand).addClass('clicked')
        setTimeout(function(){
            $('.card').eq(rand).removeClass('clicked')
            open_random_card()
        }, 3000)
    }, 3000)
}