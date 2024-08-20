document.addEventListener('DOMContentLoaded', function() {

    // [봄,여름,가을,겨울] 각 섹션
    const sections = Array.from(document.querySelectorAll('main > section'));

    sections.forEach(function(section, index) {
        // 개별적으로 Wheel 이벤트 적용
        section.addEventListener('wheel', function(e) {
            e.preventDefault(); // 데스크탑 브라우저에서 에러 없애기
            let delta = e.deltaY || e.wheelDelta || (e.detail * -1);

            // 스크롤바의 윗쪽 Y위치
            let moveTop = window.scrollY;

            // [0,1,2,3] 봄,여름,가을,겨울 섹션
            let currentSection = sections[index];
            
            // 마우스휠을 위에서 아래로
            if (delta > 0) {
                let nextSection = currentSection.nextElementSibling;
                if (nextSection) {
                    moveTop = nextSection.getBoundingClientRect().top + window.scrollY;
                }
            // 마우스휠을 아래에서 위로
            } else {
                let prevSection = currentSection.previousElementSibling;
                if (prevSection) {
                    moveTop = prevSection.getBoundingClientRect().top + window.scrollY;
                }
            }
            
            // 화면 이동 0.2초(200ms)
            window.scrollTo({
                top: moveTop,
                behavior: 'smooth'
            });
        });
    });

}); // end
