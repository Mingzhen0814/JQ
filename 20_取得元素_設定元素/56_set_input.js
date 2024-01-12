$(function () {

    // 10. 練習設定初始值
    btnSet.onclick = function () {

        // 設定姓名的初始值
        // 1. 透過prop()設定
        $('#userName').prop('value','皮卡丘');
        
        // 2. 透過val()設定
        // $('#userName').val('胖丁');
        
        
        // 20. 將地址預設為台中
        // 1. 透過prop()設定
        // $('#address').prop('value','Taichung');
        $('#address option[value="Hsinchu"]').prop('selected', true);
        

        // 2. 透過val()設定
        // $('#address').val('Taichung');
        
        // 30. 將職業預設為其他
        $(':radio[name="job"][value="other"]').prop('checked',true);
        // $(':radio[value="teacher"]+[value="other"]').prop('checked',true);
        
        // 40. 將交通工具預設為機車
        $(':checkbox[name="vehicle"][name="motorcycle"]').prop('checked',true);
    }
})
