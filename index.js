const htmlCode = document.querySelector(".html-editor");
const cssCode = document.querySelector(".css-editor");
const jsCode = document.querySelector(".js-editor");
const output = document.querySelector("#output");

htmlCode.addEventListener("input", function () {
    runCode();
    saveCode();
})

cssCode.addEventListener("input", function () {
    runCode();
    saveCode();
})

jsCode.addEventListener("input", function () {
    runCode();
    saveCode();
})

function runCode() {
    output.contentDocument.body.innerHTML = htmlCode.value + "<style>" + cssCode.value + "</style>";
    output.contentWindow.eval(jsCode.value);
}

// Save Code in local storage
function saveCode() {
    let codeObj = {
        htmlKey: htmlCode.value,
        cssKey: cssCode.value,
        jsKey: jsCode.value
    }

    localStorage.setItem("code", JSON.stringify(codeObj));
}

function fetchCode() {
    let code = JSON.parse(localStorage.getItem("code"));
    if (code !== null) {
        htmlCode.value = code["htmlKey"]
        cssCode.value = code["cssKey"]
        jsCode.value = code["jsKey"]
    }
}

fetchCode();
runCode();

// Delete Code
document.querySelector(".delete-button").addEventListener("click", function () {
    htmlCode.value = "";
    cssCode.value = "";
    jsCode.value = "";
    localStorage.clear();
    output.contentWindow.document.body.innerHTML = "";
})

document.querySelector(".run-button").addEventListener("click", function () {
    runCode();
})

// Responsive Buttons Click

const htmlEditor = document.querySelector(".editor-one");
const cssEditor = document.querySelector(".editor-two");
const jsEditor = document.querySelector(".editor-three");

document.querySelector(".html-btn").addEventListener("click", function () {
    cssEditor.style.display = "none";
    htmlEditor.style.display = "block";
    jsEditor.style.display = "none";
    this.style.backgroundColor = "#E90064";
    document.querySelector(".js-btn").style.backgroundColor = "";
    document.querySelector(".css-btn").style.backgroundColor = "";
});

document.querySelector(".css-btn").addEventListener("click", function () {
    cssEditor.style.display = "block";
    htmlEditor.style.display = "none";
    jsEditor.style.display = "none";
    this.style.backgroundColor = "#E90064";
    document.querySelector(".js-btn").style.backgroundColor = "";
    document.querySelector(".html-btn").style.backgroundColor = "";
});

document.querySelector(".js-btn").addEventListener("click", function () {
    cssEditor.style.display = "none";
    htmlEditor.style.display = "none";
    jsEditor.style.display = "block";
    this.style.backgroundColor = "#E90064";
    document.querySelector(".css-btn").style.backgroundColor = "";
    document.querySelector(".html-btn").style.backgroundColor = "";

    document.querySelector(".top-container").classList.remove("editor-container");
    document.querySelector(".bottom-container").classList.remove("output-console");
});

document.querySelector(".result-btn").addEventListener("click", function () {
    document.querySelector(".top-container").classList.toggle("editor-container");
    document.querySelector(".bottom-container").classList.toggle("output-console");

    document.querySelector(".js-btn").style.backgroundColor = "";
    document.querySelector(".html-btn").style.backgroundColor = "";
    document.querySelector(".css-btn").style.backgroundColor = "";
})