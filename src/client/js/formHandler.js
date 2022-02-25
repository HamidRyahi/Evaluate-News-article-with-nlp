export function handleSubmit(event) {
    event.preventDefault();
    let formText = document.getElementById('name').value;
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
            Client.updateUI(data);
            return data;
        } catch (error) {
            console.log("error", error);
        }
    }
    if (Client.validateUrl(formText)) {
        postMC('/article', { articleUrl: formText });
    }
}
