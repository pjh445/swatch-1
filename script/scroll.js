document.addEventListener('DOMContentLoaded', function() {

    // [봄,여름,가을,겨울] 각 섹션
    const sections = Array.from( document.querySelectorAll('main > section') ); //[ 봄,여름,가을,겨울 ]  즉,[0,1,2,3]

    sections.forEach( (i, j) => {
        // 개별적으로 Wheel 이벤트 적용
        i.addEventListener('wheel', e => {

            e.preventDefault(); //기본동작 무력화
            let d = e.deltaY || e.wheelDelta;

            // 스크롤바의 윗쪽 Y위치
            let y = window.scrollY;

            // [0,1,2,3] 봄,여름,가을,겨울 섹션
            let c = sections[j];
            
            // 마우스휠을 위에서 아래로
            if (d > 0) {
                let n = c.nextElementSibling;//다음형제요소
                if (n) {
                    y = n.getBoundingClientRect().top + window.scrollY;
                }
            // 마우스휠을 아래에서 위로
            } else {
                let p = c.previousElementSibling;//이전형제요소
                if (p) {
                    y = p.getBoundingClientRect().top + window.scrollY;
                }
            }
            
            //부드럽게 위치이동_  scrollTo({}); 옵션객체를 사용한 세밀한 조정
            window.scrollTo({
                top: y ,
                behavior: 'smooth'
            });
        });
    });

}); // end
