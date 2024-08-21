document.addEventListener("DOMContentLoaded", ()=> {

    //봄/여름/가을/겨울 텍스트가 들어있는 <a>
    const $a =  [ ...document.querySelectorAll('li a') ]; //스프레드연산자는 콜렉션을 배열처리한다.

    //왼쪽 메뉴 클릭시 활성화 되도록 한다.
    $a.forEach( i => {
        i.addEventListener("click" , ()=>{

            //클릭한 <a>에서 <ul>찾아가서, 그 자식중 클릭한 <a>가 있는 <li>의 index번호를 찾아낸다.
            //다시 배열로 만들어야 함.  [0,1,2,3]
            const n = [...i.parentElement.parentElement.children].indexOf(i.parentElement);
           
            //메뉴의 모든 클레스 삭제, 예) class="menuOver m1"          
            $a.forEach( j => j.removeAttribute('class') );

            //클릭한 <a>에 2개의 클래스를 추가
            i.classList.add( "menuOver" ,  `m${n+1}` ); //m1,m2,m3,m4
        });
    });

    let xx = true;
    //휠 동작에 따른 메뉴 <a> 활성화
    document.addEventListener("wheel" , e => {

        e.preventDefault();

        if( xx === false) return; //아래의 구문이 완전히 끝나기 전까지 중복기능 방지.
        xx = false;
        //브라우저 높이 (왜? 화면에 꽉차는 디자인)
        const h1 = window.innerHeight;

        //스크롤을 내린 또는 올린 후의 높이
        const t1 = document.documentElement.scrollTop || document.body.scrollTop;

        //계산_ 스크롤높이를 브라우저높이로 나눈 정수값_ 소수점 무시하는 메소드는 객체.trunch();
        const h = Math.trunc( t1 / h1 );  //0,1,2,3

         //메뉴의 모든 클레스 삭제, 예) class="menuOver m1"
         $a.forEach( j =>  [...j.classList].forEach( z =>   j.classList.remove(z) ) );
      
        if ( $a[h] )   $a[h].classList.add('menuOver' , `m${h+1}`);
        xx = true;
    });

});//end.......
