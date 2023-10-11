/* gnb 부분 */
$(function() {
    $('.gnb').on('mouseover focusin', function() {
        $('.sub').stop().fadeIn(300);
    });
        //마우스가 벗어나면 자식요소가 사라짐.
    $('.gnb').on('mouseleave', function() {
        $('.sub').stop().fadeOut(300);
    });
   //마우스가 올라가면 bg_gnb 나타남.
    $('.gnb').on('mouseover focusin', function() {
        $('.bgGnb').stop().fadeIn(300);
    });
   //마우스가 올라가면 bg_gnb 사라짐.
    $('.gnb').on('mouseleave', function() {
        $('.bgGnb').stop().fadeOut(300);
    });
});

/* 헤드고정 */
$(document).ready(function(){
    $(window).scroll(function(){
        let scroll = $(window).scrollTop();
        if (scroll > 0) {
            $("header").addClass('on');
        }
        else{
            $("header").removeClass('on')
        }
    });
})

/* 모바일 gnb */
$(function(){
    $('header .btnArea .menu').on(' click', function() {
        //$('tablet .header2 > .gnb02 ').slideToggle(300);
        $(".tablet").css({display: "block"})
    });
    $('.tablet .close').on(' click', function() {        
        $('.tablet').css({display: "none"})
    });
});

/* siteBtn  */
const open = document.querySelector('.open');
const close = document.querySelector('.close');
const sideBtn = document.querySelector('.sideBtn');

function btnshow () {
    sideBtn.style.display = 'block'
}

function btnclose () {
    sideBtn.style.display = 'none'
}




$(function(){
    let tab = $('.tab_nav button');

    tab.on('click',function(){
        let depth2 = $(this).next();
        let idx = $(this).parent().index();

        $(this).parent().addClass('on')
        $(this).parent().siblings().removeClass('on');

        if (depth2.hasClass('tab_nav') || $(this).parent().parent().parent().hasClass('tab')){
            let $this = $(this).parents('.tab_group').children('.tab_content').eq(idx);
            $this.addClass('on').siblings().removeClass('on');
        } else {
            let parentIdx = $(this).parent().parent().parent('li').index();
            let $this = $(this).parents('.tab_group').children('.tab_content').eq(parentIdx).children().eq(idx)

            $this.addClass('on').siblings().removeClass('on')
        }
    });
});

/* 회사소개 */
$(function(){
    let tab = $('.tab li');
    
    tab.on('click', function(){
        let idx = $(this).index();
        let tab_cont = $(this).parents('.tab').siblings('.tab_content').eq(idx);
        $(this).addClass('on');
        
        $(this).siblings().removeClass('on')
        tab_cont.addClass('on');
        tab_cont.siblings().removeClass('on')
    })
});

/* 서브5 -문의하기 */

function submit_check() {
      
    let un = document.getElementById ("userName")
    let em = document.getElementById ("email")
    let nb = document.getElementById ("Number")
    let tit = document.getElementById ("title")
    let txt = document.getElementById ("txtBox")


    if (un.value == ""){
      alert("이름을 입력해 주세요.");
      un.focus();
      return false;
    } else if (em.value == "") {
      alert("이메일을 입력해 주세요.");
      em.focus();
      return false;
    } else if (nb.value == ""){
      alert("연락처를 입력해 주세요.");
      nb.focus();
      return false;
    } else if (tit.value == ""){
      alert("제목을 입력해 주세요.");
      tit.focus();
      return false;
    } else if (txt.value == ""){
        alert("내용을 입력해 주세요.");
        txt.focus();
    return false;
    } else {
      alert("빠른 시일 내에 답변드리겠습니다.");
      submit();
    }

  };
