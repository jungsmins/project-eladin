// 회원가입, 로그인 버튼 들어가는 헤더가 포함된 모든페이지 연동
if (
    localStorage.getItem("accessToken") ||
    localStorage.getItem("refreshToken")
) {
    const userData = JSON.parse(localStorage.getItem("userData"));
    let fixHeader = document.querySelector(".header-top-list");

    if (localStorage.getItem("myData") && localStorage.getItem("userData")) {
        const myData = JSON.parse(localStorage.getItem("myData")).data;

        if (myData.userName !== userData.userName) {
            fixHeader.innerHTML = `
        <li class="header-top-item">
            <a class="join"
                >${myData.userName} 님 환영합니다!</a
            >
        </li>
        <li class="header-top-item">
            <a id="logout-button" class="login"
                >로그아웃</a
            >
        </li>
    `;
        }
        fixHeader.innerHTML = `
        <li class="header-top-item">
            <a class="join"
                >${userData.userName} 님 환영합니다!</a
            >
        </li>
        <li class="header-top-item">
            <a id="logout-button" class="login"
                >로그아웃</a
            >
        </li>
    `;
    } else {
        fixHeader.innerHTML = `
        <li class="header-top-item">
            <a class="join"
                >${userData.userName} 님 환영합니다!</a
            >
        </li>
        <li class="header-top-item">
            <a id="logout-button" class="login"
                >로그아웃</a
            >
        </li>
    `;
    }
}