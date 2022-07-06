$(document).ready(function () {

    $('#checkResult').css({
        backgroundColor: ' #F08584',
    });
    let n2 = $('#checkResult')
    n2[0].disabled = true;

    // _________________________________

    $('#startGame').click(function () {
        console.log('#startGame');
        $('#checkResult').css({
            backgroundColor: ' #E84542',
        });
        let n2 = $('#checkResult')
        n2[0].disabled = false;

        $('#startGame').css({
            backgroundColor: ' #F08584',
        });
        let n3 = $('#startGame')
        n3[0].disabled = true;
    })

    // ______________________________________________________________________________________

    let n11 = 1;
    let time2 = n11;
    let running2 = 0;

    $('#startGame').click(function () {
        time2 = n11 * 60;
        if (running2 == 0) {
            running2 = 1;
            increment2();
        }
    })

    $('#close2').click(function () {
        pause2();
    })
    $('#close3').click(function () {
        pause2();
    })
    function pause2() {
        running2 = 0;
    }

    $('#newGame').click(function () {

        location.reload();
        $('#startGame').css({
            backgroundColor: '#E84542',
        });
        let n3 = $('#startGame')
        n3[0].disabled = false;
        reset2();
    })
    function reset2() {
        running2 = 0;
        time2 = n11 * 60;
        // document.getElementById("output-2").innerHTML = "00:00";
        $('#time').html("01:00");
        $('#time2').html("01:00");
    }
    function increment2() {

        if (running2 == 1) {
            setTimeout(function () {
                time2--;
                let mins2 = Math.floor(time2 / 60);
                let sec2 = Math.floor(time2 % 60);
                if (mins2 < 10) {
                    mins2 = "0" + mins2;
                }
                if (sec2 < 10) {
                    sec2 = "0" + sec2;
                }
                // document.getElementById("output-2").innerHTML = mins2 + ":" + sec2;

                if (sec2 >= 0) {
                    $('#time').html(`${mins2} : ${sec2}`);
                    $('#time2').html(`${mins2} : ${sec2}`);
                    increment2();
                }
            }, 1000)
        }
    }

    // ________________________________________________________________________________________________

    $('#checkResult').click(function () {
        console.log('checkResult');
        $('.modal-container').css({
            backgroundColor: '#000000c7',
            zIndex: 3,
            opacity: 0.5
        });
        $('.selection-window').css({
            display: 'block'
        });
    })
    // _______________________________________________________________________________________
    $('#close').click(function () {
        console.log('checkResult');
        $('.modal-container').css({
            backgroundColor: ' #fff',
            zIndex: -1
        });
        $('.selection-window').css({
            display: ' none'
        });
    })

    // _________________________________________________________________________________
    $('#close2').click(function () {
        console.log('checkResult');
        $('.modal-container').css({
            backgroundColor: ' #fff',
            zIndex: -1
        });
        $('.selection-window').css({
            display: ' none'
        });
        $('#startGame').css({
            backgroundColor: ' #F08584',
        });
        $('#checkResult').css({
            backgroundColor: ' #F08584',
        });
        let n1 = $('#startGame')
        n1[0].disabled = true;

        let n2 = $('#checkResult')
        n2[0].disabled = true;
    })

    // _______________________________________________________________________________________
    $('#close3').click(function () {
        console.log('checkResult');
        $('.modal-container').css({
            backgroundColor: ' #fff',
            zIndex: -1
        });
        $('.selection-window').css({
            display: ' none'
        });
        $('#startGame').css({
            backgroundColor: ' #F08584',
        });
        $('#checkResult').css({
            backgroundColor: ' #F08584',
        });
        let n1 = $('#startGame')
        n1[0].disabled = true;

        let n2 = $('#checkResult')
        n2[0].disabled = true;
    })
    // _______________________________________________________________________________________

    $('.number-box').sortable({
        connectWith: '#start, #end'
    })
    let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];
    let check = true;

    $('#check').on('click', function () {
        for (let i = 0; i < $('.number').length; i++) {
            if ($('.number').eq(i).text() != numbers[i]) {
                check = false;
                break;
            }
        }
        if (check) {
            // alert('Woohoo,well done, you did it!');
            $('.text').html("Woohoo,well done, you did it!");
            $('#close').css({
                display: 'none'
            });
            $('#check').css({
                display: 'none'
            });
            $('#close3').css({
                display: 'block'
            });
        }
        else {
            // alert("It's a pity, but you lost");
            $('.text').html("It's a pity, but you lost");
            $('#close').css({
                display: 'none'
            });
            $('#check').css({
                display: 'none'
            });
            $('#close2').css({
                display: 'block'
            });
        }
        check = true;
    })

    // _______________________________________________________________________________________


    $('#newGame').click(function () {
        console.log('newGame');
    })
})


$('.number-box div').each(function () {
     $(this).parent()[Math.random() > 0.5 ? 'parent' : 'append']($(this).show()) });

