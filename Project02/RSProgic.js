$(function () {

    $('#scissors').click(function () {
        let S = Number($('#scissors').val());
        $('#Player').attr('src', '/Test/gawe.png');
        Com(S);
    })
    $('#rock').click(function () {
        let R = Number($('#rock').val());
        $('#Player').attr('src', '/Test/bawe.png');
        Com(R);
    })
    $('#paper').click(function () {
        let P = Number($('#paper').val());
        $('#Player').attr('src', '/Test/bo.png');
        Com(P);
    })

    function Com(Player) {

        let com = Math.floor(Math.random() * 3);
        let comRsp = "";
        switch (com) {
            case 0: {
                comRsp = "가위";
                $('#Com').attr('src', '/Test/gawe.png');
                break;
            }
            case 1: {
                comRsp = "바위";
                $('#Com').attr('src', '/Test/bawe.png');
                break;
            }
            case 2: {
                comRsp = "보";
                $('#Com').attr('src', '/Test/bo.png')
                break;
            }


        }
        let result = Player - com;
        if (result == 0) {
            $('#result').text("Draw")
            console.log('draw');
            $('#comResult').val(comRsp);

        }
        else if (result == 1 || result == -2) {
            $('#result').text('You Win')
            console.log('win');
            $('#comResult').val(comRsp);

        }
        else if (result == -1 || result == 2) {
            $('#result').text('You Lose')
            console.log('lose');
            $('#comResult').val(comRsp);

        }
    }
})
