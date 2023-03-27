$(function () {

    let lottoArr = [7];
    function createNum() {
        console.log('create');
            for (let i = 0; i < 7; i++) {
                lottoArr[i] = (Math.floor(Math.random() * 45) + 1);
                for (let j = 0; j < i; j++) {
                    if (lottoArr[i] == lottoArr[j]) {
                        i--;
                    }
                }
            }
    }


    $('#showBtn').click(function () {
        createNum();
        console.log('start');
        // for (const key in lottoArr) {
        //     $('#num'+key).text(Number(lottoArr[key]))
        // }
        for (let i = 1; i <= 7; i++) {
            $("#num" + i).text(Number(lottoArr[i - 1]));
        }
    })



})