export function updateUI(dt) {
    document.querySelector('.results-section').style.display = 'block';
    document.getElementById('link-section').style.display = 'block';
    document.getElementById('link').href = document.getElementById('name').value;
    document.getElementById('link').innerText = document.getElementById('name').value;
    document.getElementById('score_tag').innerText = Client.polarity(dt.score_tag);
    document.getElementById('agreement').innerText = dt.agreement;
    document.getElementById('subjectivity').innerText = dt.subjectivity;
    document.getElementById('confidence').innerText = dt.confidence;
    document.getElementById('irony').innerText = dt.irony;
}
