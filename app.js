
function createNode(element) {
    return document.createElement(element); // Create the type of element you pass in the parameters
  }

function append(parent, el) {
  return parent.appendChild(el); // Append the second parameter(element) to the first one
}

const url = `https://content.guardianapis.com/politics/eu-referendum?api-key=${GUARDIAN_API_KEY}`;

  fetch(url)
    .then(function(response) {
      return response.json();
    })
    .then(function(data) {
      console.log(data);
      let articles = data.response.results;
      articles.forEach(function(article) {
        let headline = article.webTitle;
        let artUrl = article.webUrl
        let para = createNode('p');
        para.innerHTML = '<a href="'+ artUrl + '">'+ headline + '</a>';
        append(document.body, para);
      })
    })
    .catch(function(error) {
      console.log(error)
    });
