$(document).ready(
    ()=>{
        //App.nav.orientation()
    }
);

const nav = {
    orientation:()=>{
        $("#mainArticle").html(contents.orientation);
    },
    day01:()=>{
        $("#mainArticle").html(contents.day01);
        funcs.imageWithSub(
            "img1",
            "center",
            "./img/day01/example.png",
            500,
            350,
            "Home NetWork"
        );
        funcs.imageWithSub(
            "img2",
            "center",
            "./img/day01/soho.png",
            500,
            350,
            "example of SOHO"
        );
    },
    day02:()=>{
        $("#mainArticle").html(contents.day02);
        funcs.imageWithSub(
            "img1",
            "left",
            "./img/day02/ping.png",
            300,
            250,
            "ping in use"
        );
        funcs.imageWithSub(
            "img2",
            "left",
            "./img/day02/tracert.png",
            400,
            300,
            "tracert in use"
        );
    },
    day03:()=>{
        $("#mainArticle").html(contents.day03);
    },
    day04:()=>{
        $("#mainArticle").html(contents.day04);
    },
    day05:()=>{
        $("#mainArticle").html(contents.day05);
    },
    day06:()=>{
        $("#mainArticle").html(contents.day06);
    },
    day07:()=>{
        $("#mainArticle").html(contents.day07);
    },
    day08:()=>{
        $("#mainArticle").html(contents.day08);
        funcs.imageWithSub(
            "img1",
            "left",
            "./img/day08/hostComm.png",
            500,350,
            "Host Communication");
        funcs.imageWithSub(
            "img2",
            "left",
            "./img/day08/peerTopeer.png",
            500,350,
            "Peer To Peer Layer Communication");
        funcs.imageWithSub(
            "img3",
            "center",
            "./img/day08/dataEncap.png",
            550,350,
            "Data Encapsulation");
        funcs.imageWithSub(
            "img4",
            "center",
            "./img/day08/dataDeEncap.png",
            550,350,
            "Data Deencapsulation");
    },
    day09:()=>{
        let album =[
            "./img/day09/photo1.png",
            "./img/day09/photo2.png",
            "./img/day09/photo3.png"
        ];
        let text = [
            "Data Link To Network",
            "Network to Transport",
            "Transport to Application"
        ];
        $("#mainArticle").html(contents.day09);  
        funcs.imageWithSub(
            "img1",
            "center",
            "./img/day09/tcpip.png",
            500,400,
            "OSI model and its variations"
        ); 
        funcs.photoAlbum(
            "imgs",
            "album",
            "center",
            album,
            600,400,
            text,3
        );
    },
    day10:()=>{
        $("#mainArticle").html(contents.day10);
        funcs.imageWithSub(
            "img1",
            "center",
            "./img/day10/ipv4Example.png",
            500,200,
            "Binary Example"
        );
        funcs.imageWithSub(
            "img2",
            "center",
            "./img/day10/bindecTable.png",
            500,200,
            "Just in case.."
        );   
    },
    day11:()=>{
        let binaryNum;
        let binaryLine="";
        let decimalNum;
        $("#mainArticle").html(contents.day11);
        funcs.button(
            "refreshBtn1",
            "Btn1",
            "Re",
            ()=>{
                for (i = 0;i < 8;i++){
                    binaryNum = Math.floor(Math.random()*2);
                    binaryLine += binaryNum.toString(); 
                }
                $("#binary1").val(binaryLine);
            }
        );
        funcs.button(
            "refreshBtn2",
            "Btn2",
            "Re",
            ()=>{
                decimalNum = Math.floor(Math.random()*256)+1;
                $("#decimal2").val(decimalNum);
            }
        );
        funcs.button(
            "checkBtn1",
            "Btn3",
            "Check",
            ()=>{
                let answer = parseInt($("#decimal1").val().toString());
                let stringAnswer="";
                while (answer !== 0){
                    if (answer % 2 == 0)
                        stringAnswer += "0";
                    else
                        stringAnswer += "1";
                    answer /= 2;
                }
                if (stringAnswer === binaryLine)
                    $("#answer1").val("Correct");
                else
                    $("#answer1").val("Wrong");
            }
        );
        funcs.button(
            "checkBtn2",
            "Btn4",
            "Check",
            ()=>{
                let correctAnswer = parseInt($("#decimal2").val().toString());
                let answer = $("#binary2").val;
                let decimalToBinary = "";
                while (correctAnswer !== 0){
                    if (correctAnswer % 2 == 0)
                        decimalToBinary += "0";
                    else
                        decimalToBinary += "1";
                    correctAnswer /= 2;
                }
                if (answer === decimalToBinary)
                    $("#answer2").val("Correct");
                else
                    $("#answer2").val("Wrong");
            }
        );
        for (i = 0;i < 8;i++){
            binaryNum = Math.random();
            binaryLine += binaryNum.toString(); 
        }
        decimalNum = Math.floor(Math.random()*256)+1;
        $("#binary1").val(binaryLine);
        $("#decimal2").val(decimalNum);
    },
    day12:()=>{
        $("#mainArticle").html(contents.day12);   
    },
    day13:()=>{
        $("#mainArticle").html(contents.day13);   
    },
    day14:()=>{
        $("#mainArticle").html(contents.day14);   
    },
    day15:()=>{
        $("#mainArticle").html(contents.day15);   
        funcs.imageWithSub(
            "img1",
            "center",
            "./img/day15/classA.png",
            700,300,
            "Class A"
        );
        funcs.imageWithSub(
            "img2",
            "center",
            "./img/day15/classB.png",
            700,300,
            "Class B"
        );
        funcs.imageWithSub(
            "img3",
            "center",
            "./img/day15/classC.png",
            700,300,
            "Class C"
        );
    },
    day16:()=>{
        $("#mainArticle").html(contents.day16); 
        funcs.imageWithSub(
            "img1",
            "center",
            "./img/day16/directedbrAddr.png",
            700,300,
            "Direct Broadcast Address"
        );
    },
    day17:()=>{
        $("#mainArticle").html(contents.day17);   
    },
    day18:()=>{
        $("#mainArticle").html(contents.day18);   
        funcs.imageWithSub(
            "img1",
            "center",
            "./img/day18/cidrNotation.png",
            700,300,
            "CIDR notation"
        );
    },
    day19:()=>{
        $("#mainArticle").html(contents.day19);   
    },
    day20:()=>{
        $("#mainArticle").html(contents.day20);   
    },
    day21:()=>{
        $("#mainArticle").html(contents.day21);   
    },
    day22:()=>{
        $("#mainArticle").html(contents.day22);   
    },
    day23:()=>{
        $("#mainArticle").html(contents.day22);   
    }
}

const funcs = {
    imageWithSub:(id,position,src,width,height,text)=>{
        if (position === "center"){
            $("#"+id).html(
                '<div class="centerItem">\
                    <img\
                        src="'+src+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text
                    +'</sub>\
                </div>'
            );
        }else if (position === "left"){
            $("#"+id).html(
                '<div class="floatL">\
                    <img\
                        src="'+src+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text
                    +'</sub>\
                </div>'
            );
        }else{
            $("#"+id).html(
                '<div class="floatR">\
                    <img\
                        src="'+src+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text
                    +'</sub>\
                </div>'
            );
        }
    },
    photoAlbum:(id,albumID,position,src,width,height,text,size)=>{
        let index = 0;
        if (position === "center"){
            $("#"+id).html(
                '<div class="centerItem">\
                    <img\
                        id="'+albumID+'"\
                        src="'+src[index]+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text[index]
                    +'</sub><br>\
                    <div class="clearB"></div>\
                    <div class="floatL">\
                        <div id="prev"></div>\
                    </div>\
                    <div class="floatL">\
                        <div id="next"></div>\
                    </div>\
                    <div class="clearB"></div>\
                </div>'
            );
        }else if (position === "left"){
            $("#"+id).html(
                '<div class="floatL">\
                    <img\
                        id="'+albumID+'"\
                        src="'+src[index]+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text[index]
                    +'</sub>\
                    <div class="clearB"></div>\
                    <div class="floatL">\
                        <div id="prev"></div>\
                    </div>\
                    <div class="floatL">\
                        <div id="next"></div>\
                    </div>\
                    <div class="clearB"></div>\
                </div>'
            );
        }else{
            $("#"+id).html(
                '<div class="floatR">\
                    <img\
                        id="'+albumID+'"\
                        src="'+src[index]+'"\
                        style="\
                            width:'+width.toString()+'px;\
                            height:'+height.toString()+'px;\
                            border-radius:10px;\
                            "\
                    /><br><sub class="imgSub">'+
                        text[index]
                    +'</sub>\
                    <div class="clearB"></div>\
                    <div class="floatL">\
                        <div id="prev"></div>\
                    </div>\
                    <div class="floatL">\
                        <div id="next"></div>\
                    </div>\
                    <div class="clearB"></div>\
                </div>'
            );
        }
        funcs.button(
            "prev",
            "prevButton",
            "previous",
            ()=>{
                if (index > 0)
                    index--;
                $("#"+albumID).attr("src",src[index]);
            }
        );
        funcs.button(
            "next",
            "nextButton",
            "next",
            ()=>{
                if (index < size-1)
                    index++;
                $("#"+albumID).attr("src",src[index]);
            }
        );
    },
    button:(id,buttonId,text,onClick)=>{
        $("#"+id).html(
            '<button\
                id="'+buttonId+'"\
            >'+
                text+
            '</button>'
        );
        $("#"+buttonId).click(onClick);
    }
}