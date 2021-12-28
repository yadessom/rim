$(function(){

    $(document).ready(function(){
        $('.visual').slick({
          // autoplay:true,
          fade:true,
          arrows:false
        });
      });

      //모바일 버튼 클릭하면 전체메뉴(All_menu) 보임
      $('.all_menu_btn').click(function(){
        $('.all_menu_wrap').show();
      });
      $('.all_menu_close').click(function(){
        $('.all_menu_wrap').hide();
      });

      //전체메뉴 슬라이드
      $(document).ready(function(){
        $('.all_menu_slide').slick({
          autoplay: true,
          arrows:false,
          dots:true
        });
      });

      sw = true;
      $('.all_menu_slide_pause').click(function(){
        if(sw==true){
          $(this).addClass('on');
          $('all_menu_slide').slick(slickPause);
          sw=false;
        }else{
          $(this).removeClass('on');
          $('all_menu_slide').slick(slickPlay);
          sw=true;
        }
      });

      $('.util_search').click(function(){
        $('.search_form').slideToggle(150);
      });
      $('.search_form').mouseleave(function(){
        $('.search_form').slideUp(150);
      });




      //배열 선언
      let video_tit =['D TOWER','Yi Sun Sin Bridge','Petrochemical Plant'];
      let video_sub =['도시를 개발하다.','세계 6번째 현수교 기술자립국, 세계최고의 기술력, DL이앤씨.','1973년 해외플랜트 수출1호, 기본과 원칙으로 쌓아온 플랜트 노하우 43년.'];
      let video_list = ['https://www.youtube.com/embed/lAJ3SGjbdr4','https://www.youtube.com/embed/x4DWU4HG5dE','https://www.youtube.com/embed/gehtA1gfXPc'];

      $('.video_close').click(function(){
          $('.modal_wrap').fadeOut(300);
          $('.modal_wrap iframe').attr('src','');
      });

      $('.family_btn').click(function(){
        $(this).toggleClass('on');
        $('.family_menu').toggleClass('on');
        $('.work_menu').removeClass('on');
        $('.work_btn').removeClass('on');

      });
      $('.work_btn').click(function(){
        $(this).toggleClass('on');
        $('.work_menu').toggleClass('on');
        $('.family_menu').removeClass('on');
        $('.family_btn').removeClass('on');
      });


      $('.family_tit button').click(function(){
        $('.family_menu').removeClass('on');
        $('.family_btn').removeClass('on');
        $('.work_menu').removeClass('on');
        $('.work_btn').removeClass('on');
      });
      $('.work_tit button').click(function(){
        $('.family_menu').removeClass('on');
        $('.family_btn').removeClass('on');
        $('.work_menu').removeClass('on');
        $('.work_btn').removeClass('on');
      });




      $('.gnb').mouseenter(function(){
        $('.depth2_wrap').stop().slideDown(180);
        $('.depth2').stop().slideDown(200);
      });
      $('.gnb').mouseleave(function(){
        $('.depth2_wrap').stop().slideUp(200);
        $('.depth2').stop().slideUp(180);
      });

      //list li에 mouseenter 하면 slick 슬라이더 배경이미지 변경
      $('.list li').mouseenter(function(){
        let num = $(this).index();
        console.log(num);
        $('.visual').slick('slickGoTo',num);
      });

      //list li를 클릭하면 modal 팝업 띄우기
      $('.list li').click(function(){
        let num = $(this).index();
        console.log(num);
        $('.modal_wrap').fadeIn();

        $('.modal_tit').text(video_tit[num]);
        $('.modal_sub').text(video_sub[num]);
        $('.tit iframe').attr('src',video_list[num]);

        $('.video_next').click(function(){
          if(num==2){
            num=0;
  
          }else{
            num++;
          }
          $('.modal_tit').text(video_tit[num]);
          $('.modal_sub').text(video_sub[num]);
          $('.tit iframe').attr('src',video_list[num]);
        });
        
        $('.video_prev').click(function(){
          if(num==2){
            num=0
          }else{
            num++
          }
          $('.modal_tit').text(video_tit[num]);
          $('.modal_sub').text(video_sub[num]);
          $('.tit iframe').attr('src',video_list[num]);
        });
      });
      
      //유튜브 동영상 다음 버튼 클릭 / 다음, 마지막, 처음 동영상
      //modal_next
      // $('.video_next').click(function(){
      //   if(num==2){
      //     num=0;

      //   }else{
      //     num++;
      //   }
      //   $('.modal_tit').text(video_tit[num]);
      //   $('.modal_sub').text(video_sub[num]);
      //   $('.tit iframe').attr('src',video_list[num]);
      // });













});