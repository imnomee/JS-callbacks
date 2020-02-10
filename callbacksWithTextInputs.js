element.addEventListener(eventType, callback);
/*
eventType could be a keyboard key press or a mouse event—like a mouse click.
'focus' is the event when the cursor appears in a text input or text area,
and when the form control loses 'focus', the 'blur' event is triggered.

An event callback looks like this:
*/

// function (event) {
//   // Do something
// }

// event => {
//   // Do something
// }
/*
The event object has a type property for the type of event that triggered the callback
and a target property for the element from the event object.*/

const nameInput = document.getElementById("name");
const messageTextArea = document.getElementById("message");

//Click listener is only applied if you click on field. ifyou use tab it wont work
//nameInput.addEventListener('click', event => {
//  event.target.className = 'highlight';
//});

const focusHandler = event => (event.target.className = "highlight");
const blurHander = event => (event.target.className = "");

nameInput.addEventListener("focus", focusHandler);

nameInput.addEventListener("blur", blurHander);

messageTextArea.addEventListener("focus", focusHandler);

messageTextArea.addEventListener("blur", blurHander);

///Practice session
const btn1 = document.getElementById("button1");
const btn2 = document.getElementById("button2");
const btn3 = document.getElementById("button3");

function spinElement(event) {
    //Applies spinning animation to button element
    event.target.className = "spin";
}

btn1.addEventListener("click", spinElement);
btn2.addEventListener("click", spinElement);
btn3.addEventListener("click", spinElement);
