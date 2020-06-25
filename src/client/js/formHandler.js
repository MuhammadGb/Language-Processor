const firstData = async( url = "") => {
    const response = await fetch("http://localhost:8000/link", {
        method: "POST", 
        mode: "cors",
        credentials: "same-origin",
        headers:{
        "Content-Type": "application/json",
            },
        body: JSON.stringify({"url": url}),
        });
        try{
        const newData = await response.json();
        console.log(newData)
        return newData
        } catch(error) {
        console.log("error", error);
        }
    }

    function handleSubmit(event) {
    event.preventDefault()

    let formUrl = document.getElementById('name').value
    Client.validateUrl(formUrl)
    
    firstData(formUrl)
    .then(res => {
        urlResults(res)
})
}

function urlResults(res) {
   document.getElementById('url_polarity').innerHTML = res.polarity;
   document.getElementById('url_polarity_confidence').innerHTML = res.polarity_confidence;
   document.getElementById('url_subjectivity').innerHTML =  res.subjectivity;
   document.getElementById('url_subjectivity_confidence').innerHTML = res.subjectivity_confidence;
   document.getElementById("url_excerpt").innerHTML = res.text;
}

export { handleSubmit, firstData}
