
function ready() {
    let apiEndpoint = "https://en.wikipedia.org/w/api.php";
    let params = "action=query&list=search&srsearch=";
    let list = document.getElementById('list')

    document.getElementById('buttonSearch').addEventListener('click',request);

    function url(){
        return apiEndpoint + "?" + params + search.value.replace(/ /g,"%20") + "&format=json&origin=*"
    }

    function request(){
        fetch(url())
        .then(function(response){return response.json();})
        .then(function(response) {
            list.innerHTML = ''
            response.query.search.forEach(element => {
                    let block = document.createElement("li");
                    block.classList.add('block')
                    block.innerHTML = `<a href='https://en.wikipedia.org/?curid=${element.pageid}' target='_blank'> 
                                            <h3>${element.title}</h3>
                                            <p>${element.snippet}</p></a>`
                    list.appendChild(block)
                }
            );
        });
    }
}

document.addEventListener("DOMContentLoaded", ready);