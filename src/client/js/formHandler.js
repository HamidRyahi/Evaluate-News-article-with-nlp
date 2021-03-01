function handleSubmit(event) {
    event.preventDefault()
    let formText = document.getElementById('link').value;
    let feedback = document.querySelector('.feedback');
    if (Client.validateUrl(formText)) {
        // console.log("Successful link is submitted, Please wait for the results!");
        feedback.textContent = "Successful link is submitted, please wait for the results!";
        fetch('http://localhost:8081/article', {
            method: "POST",
            headers: {
                "Content-Type": "application/JSON"
            },
            body: JSON.stringify({articleUrl: formText})
        })
        .then(res => res.json())
        .then(function(res) {
            
            console.log("Response", res);
            document.getElementById('polarity').innerText = "Polarity: " + polarity(res.score_tag)
            document.getElementById('agreement').innerText = "Agreement: " + res.agreement
            document.getElementById('subjectivity').innerText = "Subjectivity: " + res.subjectivity
            document.getElementById('confidence').innerText = "Confidence: " + res.confidence + "%"
            document.getElementById('irony').innerText = "Irony: " + res.irony
            feedback.textContent = "";
        })
    }
}

function polarity(scoreTag) {
    if (scoreTag === "P") {
        scoreTag = "POSITIVE"
        return scoreTag;
    } else if (scoreTag === "P+") {
        scoreTag = "STRONG POSITIVE"
        return scoreTag;
    } else if (scoreTag === "NEU") {
        scoreTag = "NEUTRAL"
        return scoreTag;
    } else if (scoreTag === "N") {
        scoreTag = "NEGATIVE"
        return scoreTag;
    } else if (scoreTag === "N+") {
        scoreTag = "STRONG NEGATIVE"
        return scoreTag;
    } else if (scoreTag === "NONE") {
        scoreTag = "WITHOUT SENTIMENT"
        return scoreTag;
    }
}
export { handleSubmit }
export { polarity }
