//alert(1);

////



$(document).ready(function () {

    let messages = [
        "あなたは「さい」です",
        "あなたは「いるか」です",
        "あなたは「かもしか」です",
        "あなたは「かに」です",
        "おまえは「肉うどん」です",
        "あなたは「にわ」です",
        "おまえは「ワゴンR」です",
        "おまえは「ワゴンR」です",
        "更新してやりなおす"];

    let clickCount = 0;

    let afterNiwa = false;



    $("#changeButton").click(function () {

        if (clickCount < 5) {

            if (clickCount === 4) {
                

                let randomIndex = Math.random() < 0.5 ? 4 : 5; // 4（肉うどん）または 5（にわ）

                $("#myText").text(messages[randomIndex]);

                afterNiwa = messages[randomIndex] === "あなたは「にわ」です";

            } else {
                
                $("#myText").text(messages[clickCount]);

            }

        } else {

            if (afterNiwa) {

                let randomIndex = Math.random() < 0.5 ? 6 : 7; // 6（わに）または 7（ワゴンR）
                
                $("#myText").text(messages[randomIndex]);

            } else {
                
                $("#myText").text(messages[8]); // "更新してやりなおす"

            }

        }

        if (clickCount === 8) {
            
        }

        clickCount++;

    });

});