
function messageName() {
    let name = prompt("What's Your Name ?")
    document.getElementById("name").innerHTML = name;
}

    document.getElementById('changeName');
    changeName.addEventListener("click", function() {
        messageName()
    })

    let nameInput = document.getElementById('button').addEventListener("click", function(){
        const name = nameInput.value

        if(name == "") {
            document.getElementById('error-name').innerHTML = "Name's Required"
        }

        document.getElementById('name').innerHTML = name;
    })



