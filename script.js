// loading animation
$(document).ready(function(){
    //change height
    var num = 0;
    $('.loading').css('height', () => { return $(window).height(); });
    $(document).scroll(function(){
        $('.loading').css('top',function(){
            return $(window).scrollTop();
        });
    });

    function timer(){
        $('.loading h3').text(`${num}%`);
        num++;
        if(num == 100){
            $('.loading').fadeOut(500);
        }else{
            if(document.title == "index"){
                if(speed > 100){
                    speed = 10;
                }else{
                    speed += 2;
                }
            }
            setTimeout(timer, speed);
        }
        return num;
    }

    var speed = 0;

    if(document.title == "index"){
        speed = 10;
    }else{
        speed = 1;
    }
    setTimeout(timer, speed);
});

// initiallize
window.addEventListener('load', function(){
    //fixed menu
    // window.addEventListener('scroll', fixed, false);
    fixed();
    $(window).scroll(fixed);
    //nav mouseover
    nav();
    $(window).resize(nav);

    //plus js
    switch(document.title){
        case "index":
            indexKnowSlider();
            fixSlider();
            filter();
            break;
        case "黑熊來歷":
            bearStoryOneIntroSlider();
            jumpinfo();
            break;
        case "黑熊生活":
            explain();
            break;
        case "黑熊特徵":
            cross();
            break;
        case "黑熊地理":
            cross();
            break;
        case "黑熊習性":
            cross();
            break;
        case "黑熊危機":
            cross();
            break;
        case "最新消息":
            filter();
            break;
        case "黑熊頻道":
            bearMovie();
            bearMovieSlide();
            break;
        case "線上捐款":
            fillmoney();
            moneyShortcut()
            dataCheck();
            moneySubmit();
            break;
        case "物資捐贈":
            scrollTo('bear-support-list-join', 'bear-support-form-wrap');
            packageAmount();
            packageCheck();
            packageSubmit();
            break;
        case "募資計畫":
            picChange();
            break;
        case "關於我們":
            scrollTo('bear-about-me', 'bear-about-git');
            addLink("github-1", "https://github.com/tadashi0430/TaiwanBlackBearStoryHouse");
            break;
    }
}, false);

// scroll
function fixed(){
    var title = document.getElementById('title');
    var scrollH = document.documentElement.scrollTop;
    title.style.top = `${scrollH}px`;
    title.style.left = `0px`;
}

//nav mouseover
function nav(){
    if(document.documentElement.clientWidth > 844){
        $('.main-title-group').mouseover(function(){
            $(this).find('.sub-title').css('display', 'inline-block');
            $(this).mouseout(function(){
                $(this).find('.sub-title').css('display', 'none');
            });
        });
    }
}

// index know slider
function indexKnowSlider(){
    var arrowL = document.querySelector('.bear-know-slide-arrow-left');
    var arrowR = document.querySelector('.bear-know-slide-arrow-right');
    var slideLong = document.querySelector('.bear-know-slide-long');
    var arrowLAmount = 0;
    var arrowRAmount = 3;
    var slideLongAmount = 0;
    arrowR.addEventListener('click', function(){
        if(arrowRAmount > 0){
            slideLongAmount += 100 ;
            slideLong.style.right = `${slideLongAmount}%`;
            arrowRAmount--;
            arrowLAmount++;
            console.log(`${slideLongAmount}%`);
        }
    }, false);
    arrowL.addEventListener('click', function(){
        if(arrowLAmount > 0){
            slideLongAmount -= 100 ;
            slideLong.style.right = `${slideLongAmount}%`;
            arrowRAmount++;
            arrowLAmount--;
            console.log(`${slideLongAmount}%`);
        }
    }, false);
}

function fixSlider(){
    window.addEventListener('resize', function(){
        document.querySelector('.bear-know-slide-long').style.right = 0;
    }, false);
}

function filter(){
    $('.bear-search-tag').click(function(){
        $('.bear-news-slide div').css('display', 'block');
        let name = "para-" + $(this).attr("id");
        console.log(name);
        if(name === "para-all"){
            $('.bear-news-slide div').fadeIn(500);
        }else{
            $('.bear-news-slide' + ` h3:not(.${name})`).parent().parent().fadeOut(500);
        }
    });
}

function bearStoryOneIntroSlider(){
    var arrowL = document.querySelector('.bear-story-intro-arrow-left');
    var arrowR = document.querySelector('.bear-story-intro-arrow-right');
    var slideLong = document.querySelector('.bear-story-intro-row');
    var arrowLAmount = 0;
    var arrowRAmount = 7;
    var slideLongAmount = 0;
    arrowR.addEventListener('click', function(){
        //check stauts
        // if(slideLong.style.width == "800%"){
            // 768
            if(arrowRAmount > 0){
                slideLongAmount += 100;
                slideLong.style.right = `${slideLongAmount}%`;
                arrowRAmount--;
                arrowLAmount++;
                console.log(`${slideLongAmount}%`);
            }
        // }//else{
        //     if(arrowRAmount > 0){
        //         slideLongAmount += 33;
        //         slideLong.style.right = `${slideLongAmount}%`;
        //         arrowRAmount--;
        //         arrowLAmount++;
        //         console.log(`${slideLongAmount}%`);
        //     }
        // }
    }, false);
    arrowL.addEventListener('click', function(){
        if(slideLong == "800%"){
            if(arrowLAmount > 0){
                slideLongAmount -= 100;
                slideLong.style.right = `${slideLongAmount}%`;
                arrowRAmount++;
                arrowLAmount--;
                console.log(`${slideLongAmount}%`);
            }
        }else{
            if(arrowLAmount > 0){
                slideLongAmount -= 33;
                slideLong.style.right = `${slideLongAmount}%`;
                arrowRAmount++;
                arrowLAmount--;
                console.log(`${slideLongAmount}%`);
            }
        }
    }, false);
}

function jumpinfo(){
    var rule = document.querySelectorAll('.bear-story-rule-paper');
    var info = [
    "熊即熊科（學名：Ursidae）<br>動物的通稱",
    "是一種大型哺乳類，屬於食肉目。該科共有六屬八種，廣泛分布於北半球和南半球的一部分地區。",
    "台灣黑熊族群數量稀少，且缺乏持續性的監測資料。至今尚未有台灣黑熊全島野生族群數的精確估算，最多僅為學者主觀的粗略估計。",
    "為保育野生動物，維護物種多樣性，與自然生態之平衡，特制定本法；本法未規定者，適用其他有關法律之規定。<br>修正日期：	民國 102 年 01 月 23 日",
    "《瀕臨絕種野生動植物國際貿易公約》（CITES）是一個在1963年時由「國際自然與天然資源保育聯盟」（現名「國際自然保護聯盟」，縮寫IUCN）的各會員國政府所起草簽署，又常被簡單稱呼為華盛頓公約。",
    "6",
    ]
    var insert = document.querySelector('.bear-story-rule-shell');

    var ruleObject = {
        addContent: function(e){
            var content = 
            `<div class="jumpinfo">
                <h3>${info[e]}<span>返回</span></h3>
            </div>`;
            insert.innerHTML += content;
        }
    }
    for(let i=0; i<rule.length; i++){
        rule[i].addEventListener('click', function(){
            ruleObject.addContent(i);
            document.querySelector('.jumpinfo h3 span').addEventListener('click', function(){
                document.querySelector('.jumpinfo').remove();
                jumpinfo();
                console.log('success');
        }, false);
        });        
    }
}

/*----------------------------認識黑熊 Start--------------------------*/

function cross(){
    var target = document.querySelectorAll('.bear-know-quest-choose-shell > h3');
    for(let i=0; i<target.length; i++){
        function plus(){
            target[i].innerHTML += '<span class="no"></span>';
            target[i].removeEventListener('click', plus, false);
        }
        target[i].addEventListener('click', plus, false);
    }

    var correct = document.querySelectorAll('label > h3');
    for(let i=0; i<correct.length; i++){
        function maru(){
            correct[i].innerHTML += '<span class="yes"></span>';
            correct[i].removeEventListener('click', maru, false);
        }
        correct[i].addEventListener('click', maru, false);
    }

}

/*----------------------------認識黑熊 End--------------------------*/

function explain(){
    var explainH = document.querySelector('.bear-story-context-text h4');
    var explainP = document.querySelector('.bear-story-context-text p');
    var pers = document.querySelector('.bear-story-pers');
    const persOriNum = "200px";
    const persNum = "500px";
    const file = [
        ["台灣黑熊", "台灣黑熊正在找食物，不要靠太近阿"],
        ["香楠", "常見黑熊取食的樟科果實"]
    ];
    var ori = explainP.innerText;
    var fileA = document.querySelector('.bear-story-obj-bear');
    function originA(){
        explainH.innerText = "";
        explainP.innerText = ori;
        pers.style.perspective = persOriNum;
        fileA.removeEventListener('click', originA, false);
        fileA.addEventListener('click', buttonA, false);
    }
    function buttonA(){
        explainH.innerText = file[0][0];
        explainP.innerText = file[0][1];
        pers.style.perspective = persNum;
        fileA.removeEventListener('click', buttonA, false);
        fileA.addEventListener('click', originA, false);
    }
    fileA.addEventListener('click', buttonA, false);
    var fileB = document.querySelector('.bear-story-obj-plant-1');
    function originB(){
        explainH.innerText = "";
        explainP.innerText = ori;
        pers.style.perspective = persOriNum;
        fileB.removeEventListener('click', originB, false);
        fileB.addEventListener('click', buttonB, false);
    }
    function buttonB(){
        explainH.innerText = file[1][0];
        explainP.innerText = file[1][1];
        pers.style.perspective = persNum;
        fileB.removeEventListener('click', buttonB, false);
        fileB.addEventListener('click', originB, false);
    }
    fileB.addEventListener('click', buttonB, false);

}




//bear movie
function bearMovie(){
    // hot
    //[主題, 影片名字, 影片長度, 介紹文, 網址]
    var movieList = [
        ["深入了解", "你所不知道的台灣黑熊現況威脅全面解析｜黑熊媽媽黃美秀專訪", "7:40","對於臺灣黑熊而言，最大的生存威脅是什麼？為什麼現在熊剩這麼少？禁止狩獵能夠解決問題嗎？還是積極地圈養繁殖呢？政府的問題是什麼？我們又該怎麼做才好？", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/INHOYIDRjB8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["黑熊世界", "地球的孤兒系列/台灣黑熊生存保衛戰", "49:24", "台灣黑熊超過半數斷掌斷趾！黑熊媽媽黃美秀教授，二十年前深入中央山脈研究黑熊，意外發現深山裡，長年封鎖的秘密。非法狩獵讓台灣的山林，變成黑熊的煉獄。儘管黑熊媽媽大聲疾呼，警示黑熊瀕危的生態浩劫，但社會大眾對保育黑熊，多半冷漠無感。直到一頭在南安瀑布和媽媽走失的小黑熊，才重新喚醒國人，對台灣特有物種的保育責任。製作團隊歷時兩年密集追蹤拍攝，突破萬難，深入大雪山、玉山，以及烏石坑特生中心，參與極少曝光的黑熊捕捉繫放研究，以及南安小熊的野訓野放過程。透過節目的完整紀錄，觀眾有機會目睹「神隱」森林的台灣黑熊，最真實樣貌。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/MLnq12avSr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["保育紀錄", "我們的島 小熊回家記", "32:15", "2018年7月10日一隻和媽媽走失的小黑熊，在花蓮南安瀑布附近被遊客發現，花蓮林管處人員在現場佈置了簡易圍籬，希望熊媽媽能回來把小熊帶走，但可能太多人為干擾，等了兩個星期，熊媽媽始終沒有出現...", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/Khc_DwcYRvY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["黑熊世界", "這是個「真心祝福野放的台灣黑熊回家順利」的時代！", "4:40", "與媽媽走散、暫時由人類照護實行野訓計畫的台灣小黑熊「南安妹仔」九個多月後，終於回歸山林了。小黑熊野放的時間地點一直被視為最高機密，但昨天卻傳出，有媒體搭上直升機、拍攝小熊回家的畫面。瞬間引爆了關心黑熊的捧油們心中的怒火......", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/x4rtJmlM5Vg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["黑熊世界", "又見台灣黑熊闖山屋！翻箱倒櫃覓食還留「記號」", "1:40", "玉山又有黑熊闖山屋！這次地點在玉山南二段，有山友拍到，疑似因為其他登山客在山屋裡炊煮東西，之後沒把食物或廚餘收好，食物的氣味吸引黑熊闖進去找吃的。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/fceGNgwnvxA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
    ];
    var catchList = {
        tag: (e) => document.querySelectorAll('.bear-news-video-row .video-tag')[e],
        name: (e) => document.querySelectorAll('.bear-news-video-row .video-name')[e],
        time: (e) => document.querySelectorAll('.bear-news-video-row .video-time')[e],
        intro: (e) => document.querySelectorAll('.bear-news-video-row .video-intro')[e]
    }
    for(var i=0; i<movieList.length; i++){
        catchList.tag(i).innerText = movieList[i][0];
        catchList.name(i).innerText = movieList[i][1];
        catchList.time(i).innerText = movieList[i][2];
        catchList.intro(i).innerText = movieList[i][3];
    }



    // inside
    var insideList = [
        ["深入了解", "你所不知道的台灣黑熊現況威脅全面解析｜黑熊媽媽黃美秀專訪", "7:40","對於臺灣黑熊而言，最大的生存威脅是什麼？為什麼現在熊剩這麼少？禁止狩獵能夠解決問題嗎？還是積極地圈養繁殖呢？政府的問題是什麼？我們又該怎麼做才好？", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/INHOYIDRjB8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["深入了解", "CNN報導台灣黑熊瀕臨絕種困境 「比貓熊更珍貴」", "1:59", "台灣黑熊被列為瀕臨絕種的動物，美國美國有線電視新聞網CNN也在官方網站，報導了關於台灣黑熊面臨瀕臨絕種的困境，當中訪問屏科大副教授黃美秀，黃美秀直言台灣黑熊因為非法狩獵，和土地開發，造成滅絕危機，希望當局必須加強取締盜獵，一般消費者也要有保育意識。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/7z3aahHedWk" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["深入了解", "波比又闖禍!動物園台灣黑熊 爬出2米5高柵欄", "1:46", "還記得這隻曾經因為站起來而聲名大噪的台灣黑熊「波比」嗎？牠又再度闖禍了，這次牠爬出2米5高的柵欄，跑到兩個柵欄間的安全區域，工作人員花了一個小時，才將牠麻醉帶回，幸好沒有造成人員受傷，現在動物園決定先暫停展出園內的兩隻黑熊，等到重新審視過環境安全並改善後，才會再度開放。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/dnc-qxK6gcs" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["深入了解", "台灣黑熊悲歌 修路工攀岩送食物 黑熊含淚點頭", "1:30", "花蓮卓溪鄉山區，在一個月內，被發現有兩隻台灣黑熊死亡。一隻斷掌橫死河床，還有一隻老年母熊死在玉山國家公園。母熊在死前幾天，還有修路的工人，特地用繩索，垂下蜂蜜罐子給牠吃，工人還說當時看到這隻黑熊眼角含著淚，讓他一度覺得，黑熊就好像，在跟他說謝謝。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/KowqUt-AH6s" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["深入了解", "「有熊的森林才有靈魂」　黑熊媽媽深山做研究先寫遺囑 ", "13:00", "黃美秀1998年進入玉山國家公園東境大分山區調查台灣黑熊，為博論蒐集資料，3年間她捕捉繫放15隻黑熊，其中8隻有斷掌或斷趾，「就像1個黑盒子被打開了」。2001年她回到明尼蘇達大學寫博士論文，2003年回台任教，至今接觸過的野外33隻黑熊中，以拉庫拉庫溪這1隻最慘，斷掌又斷趾，「不要再叫我黑熊媽媽，我不配」,痛到她向天嘶喊。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/VdQ6Ql1N3U8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
    ];

    var catchInsideList = {
        tag: (e) => document.querySelectorAll('#theme1 .video-tag')[e],
        name: (e) => document.querySelectorAll('#theme1 .video-name')[e],
        time: (e) => document.querySelectorAll('#theme1 .video-time')[e],
        intro: (e) => document.querySelectorAll('#theme1 .video-intro')[e]
    }
    for(var i=0; i<insideList.length; i++){
        catchInsideList.tag(i).innerText = insideList[i][0];
        catchInsideList.name(i).innerText = insideList[i][1];
        catchInsideList.time(i).innerText = insideList[i][2];
        catchInsideList.intro(i).innerText = insideList[i][3];
    }

    // world
    var worldList = [
        ["黑熊世界", "地球的孤兒系列/台灣黑熊生存保衛戰", "49:24", "台灣黑熊超過半數斷掌斷趾！黑熊媽媽黃美秀教授，二十年前深入中央山脈研究黑熊，意外發現深山裡，長年封鎖的秘密。非法狩獵讓台灣的山林，變成黑熊的煉獄。儘管黑熊媽媽大聲疾呼，警示黑熊瀕危的生態浩劫，但社會大眾對保育黑熊，多半冷漠無感。直到一頭在南安瀑布和媽媽走失的小黑熊，才重新喚醒國人，對台灣特有物種的保育責任。製作團隊歷時兩年密集追蹤拍攝，突破萬難，深入大雪山、玉山，以及烏石坑特生中心，參與極少曝光的黑熊捕捉繫放研究，以及南安小熊的野訓野放過程。透過節目的完整紀錄，觀眾有機會目睹「神隱」森林的台灣黑熊，最真實樣貌。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/MLnq12avSr8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["黑熊世界", "這是個「真心祝福野放的台灣黑熊回家順利」的時代！", "4:40", "與媽媽走散、暫時由人類照護實行野訓計畫的台灣小黑熊「南安妹仔」九個多月後，終於回歸山林了。小黑熊野放的時間地點一直被視為最高機密，但昨天卻傳出，有媒體搭上直升機、拍攝小熊回家的畫面。瞬間引爆了關心黑熊的捧油們心中的怒火......", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/x4rtJmlM5Vg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["黑熊世界", "又見台灣黑熊闖山屋！翻箱倒櫃覓食還留「記號」", "1:40", "玉山又有黑熊闖山屋！這次地點在玉山南二段，有山友拍到，疑似因為其他登山客在山屋裡炊煮東西，之後沒把食物或廚餘收好，食物的氣味吸引黑熊闖進去找吃的。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/fceGNgwnvxA" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["黑熊世界", "狗.熊分不清花蓮嬤養V字台灣黑熊", "1:31", "家裡養了一隻很兇猛的狗，竟然是台灣黑熊!花蓮一名老婦人，向「花蓮縣牛犁社區交流協會」記錄員分享老照片時，意外發現，當年養的大狗，其實是根本是一隻台灣黑熊，老婦人這才恍然大悟，難怪那隻狗，看來特別兇。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/q7xKwUHkWIM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["黑熊世界", "台灣黑熊出現大武山區　破壞蜂箱吃蜂蜜", "2:00", "台灣黑熊出現大武山區　破壞蜂箱吃蜂蜜", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/T67rAWg_ps4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
    ];

    var catchWorldList = {
        tag: (e) => document.querySelectorAll('#theme2 .video-tag')[e],
        name: (e) => document.querySelectorAll('#theme2 .video-name')[e],
        time: (e) => document.querySelectorAll('#theme2 .video-time')[e],
        intro: (e) => document.querySelectorAll('#theme2 .video-intro')[e]
    }
    for(var i=0; i<worldList.length; i++){
        catchWorldList.tag(i).innerText = worldList[i][0];
        catchWorldList.name(i).innerText = worldList[i][1];
        catchWorldList.time(i).innerText = worldList[i][2];
        catchWorldList.intro(i).innerText = worldList[i][3];
    }

    // record
    var recordList = [
        ["保育紀錄", "我們的島 小熊回家記", "32:15", "2018年7月10日一隻和媽媽走失的小黑熊，在花蓮南安瀑布附近被遊客發現，花蓮林管處人員在現場佈置了簡易圍籬，希望熊媽媽能回來把小熊帶走，但可能太多人為干擾，等了兩個星期，熊媽媽始終沒有出現...", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/Khc_DwcYRvY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["保育紀錄", "台灣黑熊保育紀實", "16:50", '台灣黑熊保育協會" 向 "世台聯合基金會" 申請贊助、情商麥覺明常務理事友情導演的《台灣黑熊保育紀實》15分鐘教育短片，堪稱協會本年度重大製作、亦屬國內首部黑熊棲地實際拍攝的非商業紀錄片。', '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/xNP2Dfuxa4k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["保育紀錄", "「黑熊爸爸」李藤正離世 家屬盼捐贈3黑熊", "1:53", "以人工繁殖台灣黑熊而聞名的屏東「黑熊爸爸」李藤正，8月22日因病過世，遺留下來登記有案的3隻黑熊，家屬表示沒有能力飼養，有意打算將黑熊捐贈出去，不過，飼養黑熊每年至少得花費100萬元，但目前各收容中心預算吃緊，有困難，黑熊該何去何從，成為關注焦點。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/nRMtjzXnA-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["保育紀錄", "獨立特派員 第547集", "18:08", "說起台灣黑熊，大家第一個聯想到的可能是牠胸前的白色V領。不過，亞洲黑熊也有這樣的特徵，光從外觀是難以辨認的。大家在動物園所看到的，其實並不是真的台灣黑熊。全台灣收容的黑熊，經過血統檢定後，確認是台灣黑熊的只有四隻，都在特有生物研究保育中心的低海拔試驗站。牠們因為受傷等因素來到這裡，被人類長期飼養。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/03_Qv3BFcIY" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'],
        ["保育紀錄", "我們的島 第24集 發現台灣黑熊(上)", "54:43", "台灣濃密的深林裡，有一種體型龐大讓人驚怕的動物。牠是台灣陸地上最大的哺乳動物，一九三○年代日本人對這種動物進行過短暫的研究，而如今台灣學術界對牠也展開了生物學的探索之旅。", '<iframe class="videoCss" width="560" height="315" src="https://www.youtube.com/embed/qiJutVpCQl4" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>']
    ];

    var catchRecordList = {
        tag: (e) => document.querySelectorAll('#theme3 .video-tag')[e],
        name: (e) => document.querySelectorAll('#theme3 .video-name')[e],
        time: (e) => document.querySelectorAll('#theme3 .video-time')[e],
        intro: (e) => document.querySelectorAll('#theme3 .video-intro')[e]
    }
    for(var i=0; i<recordList.length; i++){
        catchRecordList.tag(i).innerText = recordList[i][0];
        catchRecordList.name(i).innerText = recordList[i][1];
        catchRecordList.time(i).innerText = recordList[i][2];
        catchRecordList.intro(i).innerText = recordList[i][3];
    }

        // click then push up
        var playList = {
            tag: () => document.querySelector('.video-play-tag'),
            name: () => document.querySelector('.video-play-name'),
            time: () => document.querySelector('.video-play-time'),
            intro: () => document.querySelector('.video-play-intro'),
            src: () => document.getElementById('playNow')
        }

        var videoHot = document.querySelectorAll('.videoHot');
        for(let i=0; i<videoHot.length; i++){
            videoHot[i].addEventListener('click', function(){
                playList.tag().innerText = catchList.tag(i).innerText;
                playList.name().innerText = catchList.name(i).innerText;
                playList.time().innerText = catchList.time(i).innerText;
                playList.intro().innerText = catchList.intro(i).innerText;
                playList.src().innerHTML = movieList[i][4];
            }, false);
        }

        var videoInside = document.querySelectorAll('.videoInside');
        for(let i=0; i<videoInside.length; i++){
            videoInside[i].addEventListener('click', function(){
                playList.tag().innerText = catchInsideList.tag(i).innerText;
                playList.name().innerText = catchInsideList.name(i).innerText;
                playList.time().innerText = catchInsideList.time(i).innerText;
                playList.intro().innerText = catchInsideList.intro(i).innerText;
                playList.src().innerHTML = insideList[i][4];
            }, false);
        }

        var videoWorld = document.querySelectorAll('.videoWorld');
        for(let i=0; i<videoWorld.length; i++){
            videoWorld[i].addEventListener('click', function(){
                playList.tag().innerText = catchWorldList.tag(i).innerText;
                playList.name().innerText = catchWorldList.name(i).innerText;
                playList.time().innerText = catchWorldList.time(i).innerText;
                playList.intro().innerText = catchWorldList.intro(i).innerText;
                playList.src().innerHTML = worldList[i][4];
            }, false);
        }

        var videoRecord = document.querySelectorAll('.videoRecord');
        for(let i=0; i<videoRecord.length; i++){
            videoRecord[i].addEventListener('click', function(){
                playList.tag().innerText = catchRecordList.tag(i).innerText;
                playList.name().innerText = catchRecordList.name(i).innerText;
                playList.time().innerText = catchRecordList.time(i).innerText;
                playList.intro().innerText = catchRecordList.intro(i).innerText;
                playList.src().innerHTML = recordList[i][4];
            }, false);
        }
}

function bearMovieSlide(){
    $('.bear-news-video-row-shell .video').click(function(){
        $('html,body').animate({scrollTop: '600px'}, 800);
    });

}

function fillmoney(){
    console.log('fill');
    var moneyArr = [100, 200, 500, 1000, 1500, 2000];
    var insert = document.querySelectorAll('.check-money li');
    for(var i=0; i<insert.length; i++){
        insert[i].innerText = `$${moneyArr[i]}`;
    }
}

function moneyShortcut(){
    var insert = document.querySelectorAll('.check-money li');
    for(let i=0; i<insert.length; i++){
        insert[i].addEventListener('click', function(){
            var founderMoney = document.getElementById('founder-money');
            founderMoney.value = insert[i].innerText.slice(1, insert[i].innerText.length);
            var founderMoney = document.getElementById('founder-money');
            founderMoney.style.backgroundColor = "lightgreen";
            var moneyFinal = document.getElementById('money-final');
            moneyFinal.innerText = founderMoney.value;
        }, false);
    }
}

function dataCheck(){
    var phoneData = document.getElementById('founder-phone');
    phoneData.addEventListener('blur', function(){
        var phonePattern = /[0-9]{10}/;
        if(phonePattern.test(phoneData.value) == false){
            phoneData.style.backgroundColor = "red";
        }else{
            phoneData.style.backgroundColor = "lightgreen";
        }
    }, false);

    var emailData = document.getElementById('founder-email');
    emailData.addEventListener('blur', function(){
        var phonePattern = /@{1}/;
        if(phonePattern.test(emailData.value) == false){
            emailData.style.backgroundColor = "red";
        }else{
            emailData.style.backgroundColor = "lightgreen";
        }
        console.log('checkend');
    }, false);

    var cityData = document.getElementById('founder-city');
    cityData.addEventListener('change', function(){
        if(cityData.value == 0){
            cityData.style.backgroundColor = "red";
        }else{
            cityData.style.backgroundColor = "lightgreen";
        }
    }, false);

    var founderTown = document.getElementById('founder-town');
    founderTown.addEventListener('change', function(){
        if(founderTown.value == 0){
            founderTown.style.backgroundColor = "red";
        }else{
            founderTown.style.backgroundColor = "lightgreen";
        }
    }, false);

    var founderMoney = document.getElementById('founder-money');
    founderMoney.addEventListener('blur', function(){
        var moneyPattern = /[^0-9]/;
        if(founderMoney.value == 0 || moneyPattern.test(founderMoney.value) == true){
            founderMoney.style.backgroundColor = "red";
        }else{
            founderMoney.style.backgroundColor = "lightgreen";
            var moneyFinal = document.getElementById('money-final');
            moneyFinal.innerText = founderMoney.value;
        }
    }, false);
}

function moneySubmit(){
    var checkList = {
        phoneData: () => document.getElementById('founder-phone'),
        emailData: () => document.getElementById('founder-email'),
        cityData: () => document.getElementById('founder-city'),
        founderTown: () => document.getElementById('founder-town'),
        founderMoney: () => document.getElementById('founder-money')
    }
    var checkSubmit = document.getElementById('check-submit');
    checkSubmit.addEventListener('click', function(){
        if(checkList.phoneData().style.backgroundColor != "lightgreen" ||
        checkList.emailData().style.backgroundColor != "lightgreen" ||
        checkList.cityData().style.backgroundColor != "lightgreen" ||
        checkList.founderTown().style.backgroundColor != "lightgreen" ||
        checkList.founderMoney().style.backgroundColor != "lightgreen"){
         alert('尚有錯誤請修正');
        }else{
            alert('謝謝您的支持！');
            checkSubmit.type = 'submit';
        }
    }, false);
}

//

function packageAmount(){
    var package = [
        ["攝影機", 5],
        ["果實", 50],
        ["雨衣", 30],
        ["醫療器具", 6],
        ["便當", 12],
        ["愛心", 100]
    ];

    //push
    var itemListName = document.querySelectorAll('.bear-support-list-item-name');
    var itemListAmount = document.querySelectorAll('.bear-support-list-item-amount');
    for(var i=0; i<itemListName.length; i++){
        itemListName[i].innerText = package[i][0];
        itemListAmount[i].innerText = `件數: ${package[i][1]}`;
    }
    

    var amountValue = document.querySelectorAll('.bear-support-package-button-amount');
    for(var i=0; i<amountValue.length; i++){
        amountValue[i].innerText = 0;
    }
    var amountValueMinus = document.querySelectorAll('.bear-support-package-button-minus');
    var amountValuePlus = document.querySelectorAll('.bear-support-package-button-plus');
    var select = document.getElementById('item-final');
    for(let i=0; i<package.length; i++){
        amountValueMinus[i].addEventListener('click', () => {
            if(amountValue[i].innerText >= 0){
                amountValue[i].innerText--;
                if(amountValue[i].innerText == 0){
                    // select.innerText = select.innerText.replace(`${package[i][0]}${amountValue[i].innerText+1}件`, "");
                }else{
                    select.innerText += select.innerText.replace(`${package[i][0]}${amountValue[i].innerText+1}件`, `${package[i][0]}${amountValue[i].innerText}件`);
                }
            }
        }, false);
        amountValuePlus[i].addEventListener('click', () => {
            if(amountValue[i].innerText < package[i][1]){
                amountValue[i].innerText++;
                if( select.innerText.indexOf(package[i][0]) == -1){
                    select.innerText += `${package[i][0]}${amountValue[i].innerText}件`;
                }else{
                    select.innerText = select.innerText.replace(`${package[i][0]}${amountValue[i].innerText-1}件`, `${package[i][0]}${amountValue[i].innerText}件`);
                }
            }
        }, false);
    }
}

function packageCheck(){
    var phoneData = document.getElementById('founder-phone');
    phoneData.addEventListener('blur', function(){
        var phonePattern = /[0-9]{10}/;
        if(phonePattern.test(phoneData.value) == false){
            phoneData.style.backgroundColor = "red";
        }else{
            phoneData.style.backgroundColor = "lightgreen";
        }
    }, false);

    var emailData = document.getElementById('founder-email');
    emailData.addEventListener('blur', function(){
        var phonePattern = /@{1}/;
        if(phonePattern.test(emailData.value) == false){
            emailData.style.backgroundColor = "red";
        }else{
            emailData.style.backgroundColor = "lightgreen";
        }
        console.log('checkend');
    }, false);

    var cityData = document.getElementById('founder-city');
    cityData.addEventListener('change', function(){
        if(cityData.value == 0){
            cityData.style.backgroundColor = "red";
        }else{
            cityData.style.backgroundColor = "lightgreen";
        }
    }, false);

    var founderTown = document.getElementById('founder-town');
    founderTown.addEventListener('change', function(){
        if(founderTown.value == 0){
            founderTown.style.backgroundColor = "red";
        }else{
            founderTown.style.backgroundColor = "lightgreen";
        }
    }, false);
}

function packageSubmit(){
    var checkList = {
        phoneData: () => document.getElementById('founder-phone'),
        emailData: () => document.getElementById('founder-email'),
        cityData: () => document.getElementById('founder-city'),
        founderTown: () => document.getElementById('founder-town'),
        select: () => document.getElementById('item-final')
    }
    var checkSubmit = document.getElementById('check-submit');
    checkSubmit.addEventListener('click', function(){
        if(checkList.phoneData().style.backgroundColor != "lightgreen" ||
        checkList.emailData().style.backgroundColor != "lightgreen" ||
        checkList.cityData().style.backgroundColor != "lightgreen" ||
        checkList.founderTown().style.backgroundColor != "lightgreen" ||
        checkList.select().innerText == ""){
         alert('尚有錯誤請修正');
        }else{
            alert('謝謝您的支持！');
            checkSubmit.type = 'submit';
        }
    }, false);
}

//

function picChange(){
    var button = document.querySelectorAll('.bear-support-pic-shell');
    var pic = document.querySelectorAll('.bear-support-pic');
    var target = document.querySelector('.bear-support-list-insideshell .bear-founder-pic');
    var picArr = [
        "url(./img/bear-support-A-pic.jpg)",
        "url(./img/bear-story-3-pic4.jpg)",
        "url(./img/bear-story-intro-pic.jpg)",
        "url(./img/bear-story-banner.jpg)",
        "url(./img/bear-support-A-pic4.jpg)"
    ];

    // push
    target.style.backgroundImage = picArr[0];
    for(let i=1; i<picArr.length; i++){
        pic[i-1].style.backgroundImage = picArr[i];
    button[i-1].addEventListener('click', function(){
        console.log('success');
        var tempA = target.style.backgroundImage;
        var tempB = pic[i-1].style.backgroundImage;
        target.style.backgroundImage = tempB;
        pic[i-1].style.backgroundImage = tempA;        
    }, false);
    }
}

// bear-about

function scrollTo(id, target){
    $(`#${id}`).click(function(){
        console.log('start');
        $('html, body').animate({
            scrollTop: $(`#${target}`).offset().top - 60,
        });
    });
}

function addLink(id, href){
    let target = document.getElementById(id);
    target.url = href;
    target.addEventListener('click', function(url){
        window.open(this.url);
    }, false);
}
