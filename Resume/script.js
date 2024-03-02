// Store the original background color
var originalBackgroundColor = document.body.style.backgroundColor;

function changeBG() {
    var leftContent = document.querySelector('.left-content');
    var rightContent = document.querySelector('.right-content');

    // Toggle background colors for left content
    if (leftContent.style.backgroundColor === "rgb(0, 0, 0)" || leftContent.style.backgroundColor === "#000000") {
        leftContent.style.backgroundColor = "#999999"; // Blue
        leftContent.style.color = "#000000";
    } else {
        leftContent.style.backgroundColor = "#000000";
        leftContent.style.color = "#FFFFFF";
    }

    // Toggle background colors for right content
    if (rightContent.style.backgroundColor === "rgb(0, 0, 0)" || rightContent.style.backgroundColor === "#000000") {
        rightContent.style.backgroundColor = "#999999"; // Pink
        rightContent.style.color = "#000000";
    } else {
        rightContent.style.backgroundColor = "#000000";
        rightContent.style.color = "#FFFFFF";
    }

    // Toggle the background color of the body between gray and the original color
    document.body.style.backgroundColor = document.body.style.backgroundColor === "gray" ? originalBackgroundColor : "gray";
}

function showAlert() {
    alert("Hello! Feel Free to Contact Me!                                                          Email: thethirdofficial@yahoo.com                                                   Phone: +639763212754                                                                 Address: Santa Cruz, Metro Manila");
}
