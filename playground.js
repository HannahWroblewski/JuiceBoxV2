$('body').css({
    'font-family': 'sans-serif',
    'background-color':'#777'
})

$('section').css('display','flex')

$('.card.white').css({
    'border': '10px',
    'background-color': 'white',
    'padding': '10px',
    'margin': '10px',
    'flex': '1',
})

$('.card.red').css({
    'border': '10px',
    'background-color': 'red',
    'padding': '10px',
    'margin': '10px',
    'color': 'white',
    'flex': '1',
})

$('.card.blue').css({
    'border': '10px',
    'background-color': 'blue',
    'padding': '10px',
    'margin': '10px',
    'color': 'white',
    'flex': '1',
})

$('code').css('font-size', '1.7em')

$('.first.lead-cards p').css('font-family','cursive')

$( "section:nth-of-type(2)" ).css({
    'transform': 'rotate(30deg) scale(.5)',
    'transition': 'transform 3s ease',
})

$('.deprecated').remove()