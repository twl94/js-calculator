const isSystemDarkMode = localStorage.getItem("isSystemDarkMode") === "true";
const bodyElements = document.querySelector('body');

if (isSystemDarkMode) {
    bodyElements.classList.add('dark');
} else {
    bodyElements.classList.remove('dark');
}

if (localStorage.getItem("isSystemDarkMode") === null) {
    localStorage.setItem("isSystemDarkMode", "false");
}

function toggleDarkMode() {
    let isSystemDarkMode = localStorage.getItem("isSystemDarkMode") === "true"; // 최신 값 가져오기
    isSystemDarkMode = !isSystemDarkMode;

    localStorage.setItem("isSystemDarkMode", isSystemDarkMode.toString()); // 새로운 값 저장

    document.body.classList.toggle('dark', isSystemDarkMode);
}

document.addEventListener("DOMContentLoaded", () => {
    const isSystemDarkMode = localStorage.getItem("isSystemDarkMode") === "true";
    document.body.classList.toggle('dark', isSystemDarkMode);
});
