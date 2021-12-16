// Add your code here


function submitData (name, email) {
    let formData = {
        name: name,
        email: email
      };
      let configObj = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      };
      
      return fetch("http://localhost:3000/users", configObj)
        .then(function(response) {
          return response.json();
        })
        .then(function(object) {
          addIdToDOM(object);
        })
        .catch(function(error) {
            let h3 = document.createElement('h3');
            h3.innerHTML = error.message;
            document.body.appendChild(h3);
            console.log(error.message);
        });
}

function addIdToDOM(obj) {
    const body = document.querySelector("body")
    const h2 = document.createElement('h2');
    h2.innerHTML = "id: " + obj.id;
    body.appendChild(h2);
}


// submitData ("John", "test@email.com")

