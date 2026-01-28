const buttons = document.querySelectorAll('.button');
const body = document.querySelector("body")
buttons.forEach(function(button) {
    console.log(button); //loop for document selector for q page (html page)

    button.addEventListener('click', function(e) {
            console.log(e.target);
            if (e.target.id == 'grey') {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id == 'white') {
                body.style.backgroundColor = e.target.id;
            }
            if (e.target.id == 'blue') {
                body.style.backgroundColor = e.target.id;
            }

            if (e.target.id == 'yellow') {
                body.style.backgroundColor = e.target.id;
            }


        })
        //PROJECT 1--->THEORY add method of event listeners where it will automatically invoke the method associated with click event 
        //click event-->behind the scene performe the required changes Like switch the color
        //html page is ccreated and all the tags and cclasses is mentioned and respective styling is also there and with. javascript add the FUNCTIONALITY 
})