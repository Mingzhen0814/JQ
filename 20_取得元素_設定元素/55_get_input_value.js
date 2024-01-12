// 10. 如果是這樣寫的話，有錯誤訊息，為什麼？
// a. 在元素誕生(line12)之前就想要存取元素(line7)
// b. script 應該要放在</body>之前
// c. 放在head不對
// d.應該要放在document.ready之後做
// ->程式在line88



// btnGet.onclick = function(){
//     console.log("OK");
// }











































































// 11. 畫面準備好以後才開始執行
$(function () {
    btnGet.onclick = function () {
        
        // 20. 取得 姓名欄位 (使用 JavaScript 的方式)
        // 21. 取得 姓名欄位 (使用 jQuery 的方式)
        var jsName1 = document.getElementById('userName').value;
        var jsName2 = userName.value;
        var jqName1 = $('#userName').prop('value');
        var jqName2 = $('#userName').val();
        console.log(jsName1);
        console.log(jsName2);
        console.log(jqName1);
        console.log(jqName2);
        // 30. 取得 地址欄位 (使用 JavaScript 的方式)
        // 31. 取得 地址欄位 (使用 jQuery 的方式)
        var jsAdd = document.getElementById('address').value;
        var jqAdd = $('#address').val()
        console.log(jsAdd);
        console.log(jqAdd);

        // 40. 取得 年紀欄位 (使用 JavaScript 的方式)
        var jsAge = document.getElementsByName('age');
        console.log(jsAge); // NodeList(4) [input, input, input, input]
        for (var i = 0; i < jsAge.length; i++) {
            if (jsAge[i].checked == true) {
                console.log(jsAge[i].value);
            }
        }
        
        
        // console.log(jsAge[i]); // 元素 <input>
        // console.log(jsAge[i].checked); // boolean: true / false



        // 41. 取得 年紀欄位 (使用 jQuery 的方式)
        var jqAge = $('input[name="age"]:checked').val();
        console.log(jqAge);

    }
})



