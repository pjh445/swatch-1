document.addEventListener("DOMContentLoaded" , ()=> {

    //[봄,여름,가을,가을]  ...연산자 (스프레드연산자)는 콜렉션을 배열(Array from())로 전환한다.
    const seasons =  [ ...document.querySelectorAll('main section')];   //HTMLCollection

    seasons.forEach( ( i , j )=>{

        //각각 휠이벤트가 발생
        let yy = false;
        i.addEventListener("wheel", e =>{
            if(yy) return;
            yy = true;
            //기본동작을 무력화 시킴 (한장면씩 보기 해야 함)
            e.preventDefault();

            //휠을 올리거나 내렸을때의 휠Y값 (위로 올리면 마이너스값/ 아래로 내리면 플러스값이 반환됨)
            let d = e.deltaY;           

            //스크롤바의 윗쪽Y값
            const y1 = window.scrollY;  
            let y2 = y1;
         
            //휠을 아래로 내릴때,
            if( d > 0) {
                const n = i.nextElementSibling; //다음형제요소
                if ( n )  {
                    y2 = n.getBoundingClientRect().top + y1;                 
                }
            }

            //휠을 위로 올릴때,
            else if( d < 0) {
                const p = i.previousElementSibling; //이전형제요소
                if ( p ) {
                    y2 = p.getBoundingClientRect().top + y1;                    
                }
            }           

            //부드럽게 위치이동
            window.scrollTo({
                top: y2 ,
                behavior : "smooth"
            });

            yy = false;
        });
    });


});//end....................
