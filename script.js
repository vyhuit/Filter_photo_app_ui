$( document ).ready(function() {
    $("#mainContent").html($("#startPage").children());
    animateHeader();
});


let saveFile = () => {
    alert("Viết hàm lưu file sau khi sửa ở đây! Lưu ý có dùng filter mới cho lưu")
}
let fbShare = () => {
    alert("Share Social Network! Này dùng API! Từ từ viết")
}
let twitterShare = () => {
    alert("Share Social Network! Này dùng API! Từ từ viết")
}
let instaShare = () => {
    alert("Share Social Network! Này dùng API! Từ từ viết")
}

let startAppClick = () => {
    let screen = $("#mainContent");
    let author_div = $("#app-name-author");
    let startBtn = $("#start-btn");
    author_div.animate(
        { 
            left: -530, 
            opacity: 0
        }, 
        {
        duration: 300,
        done: () => {
            startBtn.animate(
                {
                    right: -300, 
                    opacity: 0
                }, 
                {
                    duration: 200,
                    done: () => {
                        screen.animate({opacity: 0}, {
                            duration: 200,
                            done: () => {
                                screen.html($("#program").children());
                                screen.animate({opacity: 1}, {
                                    duration: 100});
                            }
                        })
                }
            })
        }
    });
}

let startPageBack = () => {
    console.log(1);
    // let screen = $("#mainContent");
    // screen.animate({opacity: 0}, {
    //     duration: 200,
    //     done: () => {
    //         console.log($("#startPage").children());
    //         screen.html($("#startPage").children());
    //         screen.animate({opacity: 1}, {
    //             duration: 100})
    //     }
    // })
}; 

let animateHeader = () => {
    let header = $("#app-header");
    window.onscroll = () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20)
            header.css({"background": "white", "box-shadow" :"0 .125rem .25rem rgba(0,0,0,.075)"});
        else header.css({"background": "transparent", "box-shadow" :"unset"});
    };
}

let uploadImg = (input) => {
        var reader = new FileReader();
        reader.onload = function (e) {
            $('#root-img')
                .attr('src', e.target.result);
        };

        reader.readAsDataURL(input.target.files[0]);
}

let aboutClick = () => {
    $("#aboutModal").modal("show");
}