// Add your code here
function submitData(name, email) {
  const configurationObject = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Accept": "application/json",
    },
    body: JSON.stringify({
      name: name,
      email: email
    })
  };

  return fetch("http://localhost:3000/users", configurationObject)
    .then(response => response.json())
    .then(function(object) {
      const node = document.createElement("li");
      const textnode = document.createTextNode(object.id);
      node.appendChild(textnode);
      document.body.appendChild(node);
    })
    .catch(function(error) {
      const node = document.createElement("li");
      const textnode = document.createTextNode(error);
      node.appendChild(textnode);
      document.body.appendChild(node);
    })
} 