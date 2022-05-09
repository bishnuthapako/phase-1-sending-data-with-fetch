// Add your code here


function submitData(name, email){
    let inputField = {
        name: name,
        email: email,
    }

    let configurationData = {
        method: "POST",
        headers:{
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(inputField)
    }

    const response = fetch(`http://localhost:3000/users`, configurationData)
    .then(response => response.json())
    .then((object) => {
        let h2 = document.createElement('h2');
        h2.innerHTML = object.id;
        document.body.appendChild(h2);
        console.log(object);
    })
    .catch(error=> {alert(error.message)          
        document.body.append(error.message)});
    return response

}