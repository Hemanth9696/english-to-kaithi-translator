document.getElementById('translateButton').addEventListener('click', async function () {
    let englishText = document.getElementById('englishText').value.trim();

    if (englishText === "") {
        document.getElementById('kaithiText').innerText = "Please enter text to translate.";
        return;
    }

    try {
        const response = await fetch("http://127.0.0.1:5000/translate", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ text: englishText })
        });

        const data = await response.json();
        if (data.translation) {
            document.getElementById('kaithiText').innerText = data.translation;
        } else {
            document.getElementById('kaithiText').innerText = "Translation failed.";
        }
    } catch (error) {
        document.getElementById('kaithiText').innerText = "Error connecting to server.";
        console.error("Error:", error);
    }
});
