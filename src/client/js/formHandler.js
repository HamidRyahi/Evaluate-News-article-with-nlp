const feedback = document.querySelector('.feedback');

function handleSubmit(event) {
    event.preventDefault()
    const formText = document.getElementById('link').value;
    if (Client.validateUrl(formText)) {
        feedback.textContent = "Successful link is submitted, please wait for the results!";
        postMC('http://localhost:8081/article', { articleUrl: formText })
    }
}

const postMC = async (url = '', data = {}) => {
    const response = await fetch(url, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    try {
        const data = await response.json();
        console.log(data);
        updateUI(data)
        return data;
    } catch (error) {
        console.log("error", error);
        // appropriately handle the error
    }
}

const updateUI = (dt) => {
    feedback.textContent = "";
    document.getElementById('results').style.display = 'flex';
    document.getElementById('polarity').innerText = polarity(dt.score_tag)
    document.getElementById('agreement').innerText = dt.agreement
    document.getElementById('subjectivity').innerText = dt.subjectivity
    document.getElementById('confidence').innerText = dt.confidence + "%"
    document.getElementById('irony').innerText = dt.irony
}

function polarity(scoreTag) {
    switch (scoreTag) {
        case "P":
            scoreTag = "POSITIVE";
            break;
        case "P+":
            scoreTag = "STRONG POSITIVE";
            break;
        case "NEU":
            scoreTag = "NEUTRAL";
            break;
        case "N":
            scoreTag = "NEGATIVE";
            break;
        case "N+":
            scoreTag = "STRONG NEGATIVE";
            break;
        case "NONE":
            scoreTag = "WITHOUT SENTIMENT";
            break;
    }
    return scoreTag;
}

export { handleSubmit, polarity }