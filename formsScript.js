function changeColorTitle() {
    let colours = ["red", "blue", "yellow", "green", "black", "pink", "green", "purple"];
    let index = parseInt(Math.random() * 8);
    document.getElementById("Title").style.color = colours[index];
}

function hide() {
    document.getElementById("botonHidden").style.visibility = "hidden";
}

function editTitle() {
    document.getElementById("Title").style.fontFamily = document.getElementById("Font").value;
    document.getElementById("Title").style.fontSize = (document.getElementById("Size").value + "px");
    document.getElementById("Title").style.color = document.getElementById("Color").value;
    document.getElementById("Title").style.backgroundColor = document.getElementById("Background").value;

    document.getElementById("SubTitle").style.fontFamily = document.getElementById("Font").value;
    document.getElementById("SubTitle").style.fontSize = (document.getElementById("Size").value + "px");
    document.getElementById("SubTitle").style.color = document.getElementById("Color").value;
    document.getElementById("SubTitle").style.backgroundColor = document.getElementById("Background").value;
}

function editBack() {
    document.getElementById("Title").style.backgroundColor = document.getElementById("Background").value;
    document.getElementById("Nav").style.backgroundColor = document.getElementById("Background").value;
    document.getElementById("Aside").style.backgroundColor = document.getElementById("Background").value;
    document.getElementById("Section").style.backgroundColor = document.getElementById("Background").value;
    document.getElementById("TextArea").style.backgroundColor = document.getElementById("Background").value;
}

function editAside() {
    document.getElementById("Aside").style.fontFamily = document.getElementById("Font").value;
    document.getElementById("Aside").style.fontSize = (document.getElementById("Size").value + "px");
    document.getElementById("Aside").style.color = document.getElementById("Color").value;
    document.getElementById("Aside").style.backgroundColor = document.getElementById("Background").value;

    document.getElementsByClassName("Label").style.fontFamily = document.getElementById("Font").value;
    document.getElementsByClassName("Label").style.fontSize = (document.getElementById("Size").value + "px");
    document.getElementsByClassName("Label").style.color = document.getElementById("Color").value;
    document.getElementsByClassName("Label").style.backgroundColor = document.getElementById("Background").value;
}

function editBody() {
    document.getElementById("Section").style.fontFamily = document.getElementById("Font").value;
    document.getElementById("Section").style.fontSize = (document.getElementById("Size").value + "px");
    document.getElementById("Section").style.color = document.getElementById("Color").value;
    document.getElementById("Section").style.backgroundColor = document.getElementById("Background").value;

    document.getElementById("TextArea").style.fontFamily = document.getElementById("Font").value;
    document.getElementById("TextArea").style.fontSize = (document.getElementById("Size").value + "px");
    document.getElementById("TextArea").style.color = document.getElementById("Color").value;
    document.getElementById("TextArea").style.backgroundColor = document.getElementById("Background").value;
}

function editRandom() {
    let number = parseInt((Math.random() * 4) + 1);
    let fontRnd = parseInt(Math.random() * 5);
    let sizeRnd = parseInt(Math.random() * 6);
    let colorRnd = parseInt(Math.random() * 8);
    let backRnd = parseInt(Math.random() * 8);
    let colours = ["red", "blue", "yellow", "green", "black", "pink", "green", "purple"];
    let fonts = ["Courier", "Lucida", "Times", "Arial", "Verdana"];
    let sizes = [12, 18, 24, 32, 48, 72];

    if (number == 1) {
        document.getElementById("Title").style.fontFamily = fonts[fontRnd];
        document.getElementById("Title").style.fontSize = sizes[sizeRnd] + "px";
        document.getElementById("Title").style.color = colours[colorRnd];
        document.getElementById("Title").style.backgroundColor = colours[backRnd];
        document.getElementById("SubTitle").style.fontFamily = fonts[fontRnd];
        document.getElementById("SubTitle").style.fontSize = sizes[sizeRnd] + "px";
        document.getElementById("SubTitle").style.color = colours[colorRnd];
        document.getElementById("SubTitle").style.backgroundColor = colours[backRnd];
    } else if (number == 2) {
        document.getElementById("Aside").style.fontFamily = fonts[fontRnd];
        document.getElementById("Aside").style.fontSize = sizes[sizeRnd] + "px";
        document.getElementById("Aside").style.color = colours[colorRnd];
        document.getElementById("Aside").style.backgroundColor = colours[backRnd];
        document.getElementById("Label").style.fontFamily = fonts[fontRnd];
        document.getElementById("Label").style.fontSize = sizes[sizeRnd] + "px";
        document.getElementById("Label").style.color = colours[colorRnd];
        document.getElementById("Label").style.backgroundColor = colours[backRnd];
    } else if (number == 3) {
        document.getElementById("Section").style.fontFamily = fonts[fontRnd];
        document.getElementById("Section").style.fontSize = sizes[sizeRnd] + "px";
        document.getElementById("Section").style.color = colours[colorRnd];
        document.getElementById("Section").style.backgroundColor = colours[backRnd];
        document.getElementById("TextArea").style.fontFamily = fonts[fontRnd];
        document.getElementById("TextArea").style.fontSize = sizes[sizeRnd] + "px";
        document.getElementById("TextArea").style.color = colours[colorRnd];
        document.getElementById("TextArea").style.backgroundColor = colours[backRnd];
    } else if (number == 4) {
        document.getElementsByClassName("Label").style.backgroundColor = colours[random];
        document.getElementById("TextArea").style.backgroundColor = colours[random];
        document.getElementById("SubTitle").style.backgroundColor = colours[random];
        document.getElementById("Section").style.backgroundColor = colours[random];
        document.getElementById("Title").style.backgroundColor = colours[random];
        document.getElementById("Aside").style.backgroundColor = colours[random];
        document.getElementById("Nav").style.backgroundColor = colours[random];
    }
}

function sendText() {
    document.getElementById("TextArea").innerHTML += document.getElementById("InputText").value + "\n";
}

function showText() {
    var text = "Hello World." + 
        "\nThis is a test text for you to practice. " + 
        "\nYou can write your own text by first erasing it by clicking on the button that says: \"Clear the text\"." + 
        "\nThen write your own text in the indicated bar, and press \"send the text\" to pass it to this box. " + 
        "\nEach new text will be entered on a new line. \nTry the style controls and play freely with the message.\n";
    document.getElementById("TextArea").innerHTML = text;
}


function editText() {


    document.getElementById("TextArea").style.fontFamily = document.getElementById("FontTextArea").value;
    document.getElementById("TextArea").style.fontSize = (document.getElementById("SizeTextArea").value + "px");
    document.getElementById("TextArea").style.color = document.getElementById("ColorTextArea").value;

    if (document.getElementById('NormalCheck').checked) {

        document.getElementById('StrongCheck').checked = 0;
        document.getElementById("TextArea").style.fontWeight = "normal";

        document.getElementById('ItalicCheck').checked = 0;
        document.getElementById("TextArea").style.fontStyle = "normal";

        document.getElementById('UnderlineCheck').checked = 0;
        document.getElementById("TextArea").style.textDecoration = "none";

    } else {
        if (document.getElementById('StrongCheck').checked) {
            document.getElementById("TextArea").style.fontWeight = "bold";
        } else {
            document.getElementById("TextArea").style.fontWeight = "normal";
        }
        if (document.getElementById('ItalicCheck').checked) {
            document.getElementById("TextArea").style.fontStyle = "italic";
        } else {
            document.getElementById("TextArea").style.fontStyle = "normal";
        }
        if (document.getElementById('UnderlineCheck').checked) {
            document.getElementById("TextArea").style.textDecoration = "underline";
        } else {
            document.getElementById("TextArea").style.textDecoration = "none";
        }
    }
}

function clearText() {
    document.getElementById("TextArea").innerHTML = "";
}

function resetPage() {
    location.reload();
}