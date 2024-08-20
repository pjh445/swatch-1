document.addEventListener('DOMContentLoaded', function() {

    // 왼쪽 메뉴 클릭시 활성화된다.
    document.querySelectorAll('a').forEach(function(anchor) {
        anchor.addEventListener('click', function() {
            // 클릭한 a의 부모(li) 인덱스 번호 [0,1,2,3] get
            const n = Array.from(anchor.parentElement.parentElement.children).indexOf(anchor.parentElement);
            // 점검
            console.log(n); // [0,1,2,3]
            // 모든 클래스 삭제
            document.querySelectorAll('a').forEach(a => a.classList.remove('menuOver', ...Array.from(a.classList).filter(cls => cls.startsWith('m'))));
            // 클릭한 메뉴만 클래스 추가
            anchor.classList.add('menuOver', `m${n + 1}`); // 예: class="menuOver m4"
        });
    });

    // 휠(스크롤) 위치에 따라 왼쪽 메뉴 활성화.
    document.addEventListener('scroll', function() {
        // 브라우저 높이
        const h1 = window.innerHeight;
        // 스크롤 내린 높이
        const t1 = document.documentElement.scrollTop || document.body.scrollTop;
        // 계산: 스크롤 높이를 브라우저 높이로 나눈 정수값(floor 소수점 미만 버림)
        const ht = Math.floor(t1 / h1); // 예: "0,1,2,3"
        // 점검
        // console.log(ht);
        // 모든 클래스 삭제
        document.querySelectorAll('a').forEach(a => a.classList.remove('menuOver', ...Array.from(a.classList).filter(cls => cls.startsWith('m'))));
        // 해당 메뉴만 클래스 추가
        const liElements = document.querySelectorAll('li');
        if (liElements[ht]) {
            liElements[ht].querySelector('a').classList.add('menuOver', `m${ht + 1}`);
        }
    });

}); // end
