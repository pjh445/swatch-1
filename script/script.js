document.addEventListener('DOMContentLoaded', ()  => {

    //...스프레드연산자는 Array.from()을 대체한다. 즉, htmlcollection을 배열로 변환한다.
    const $a = [ ...document.getElementsByTagName('a') ];  // [<a> , <a> , <a> ]

    // 왼쪽 메뉴 클릭시 활성화된다.
    $a.forEach( i =>  {
        i.addEventListener('click', () => {

            //클릭한 <a>에서 <ul>을 찾은후 클릭한 <a>의 부모인 <li>의 index 번호를 알아낸다
            // ... 스프레드 연산자는 <li>를 배열로 변환한다. [ <li> ,  <li> ,  <li>]
           const n = [...i.parentElement.parentElement.children].indexOf( i.parentElement );           

            // 점검 (왼쪽 메뉴클릭시  index번호 표시됨)
            // console.log(n); // [0,1,2,3]

            // 메뉴의 모든 클래스 삭제
            $a.forEach( j => [ ...j.classList ].forEach( z => j.classList.remove(z) ) );

            // 클릭한 메뉴만 2개의 클래스를 추가한다.
            i.classList.add('menuOver', `m${n + 1}`); // 예:m${n+1} => m1,m2,m3,m4
        });
    });

    // 휠(스크롤) 위치에 따라 왼쪽 메뉴 활성화.
    document.addEventListener('scroll', () => {

        // 브라우저 높이
        const h1 = window.innerHeight;

        // 스크롤 내린 높이
        const t1 = document.documentElement.scrollTop || document.body.scrollTop;

        // 계산: 스크롤 높이를 브라우저 높이로 나눈 정수값_ 예: 2.3 => 2 , 2.9 => 2
        const h = Math.trunc(t1 / h1);

        // 점검(마우스 휠 사용시 index번호 표시됨)
        console.log(h);

        // 모든 클래스 삭제
        $a.forEach( j => [ ...j.classList ].forEach( z => j.classList.remove(z) ) );

        // 해당 메뉴만 클래스 추가
        const li = document.getElementsByTagName('li');

        if (li[h]) {
            li[h].querySelector('a').classList.add('menuOver', `m${ h + 1 }`);
        }
    });

}); // end.............