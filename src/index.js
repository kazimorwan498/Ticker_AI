const htmlTag = document.getElementById("html-tag"),
    modeSwitch = document.getElementById("mode-switch");

modeSwitch.addEventListener("click", function () {
    htmlTag.classList.toggle("dark");
});
