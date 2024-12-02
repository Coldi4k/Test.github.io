function sendContent() {
    const content = document.getElementById('content').value;
    const responseDiv = document.getElementById('response');

    if (!content) {
        responseDiv.innerText = 'Please enter content to send.';
        return;
    }

    const payload = {
        content: content
    };

    fetch('https://discord.com/api/webhooks/1313276312785387630/mEg3aAlhf1T_jYIWVcukXUP68k_f5JkbrV_VHCqfB8R8IwOn3pQ2G2QQui3d_xgumMzt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
    .then(response => response.json())
    .then(data => {
        if (data.status === "success") {
            responseDiv.innerText = 'Content sent successfully!';
        } else {
            responseDiv.innerText = 'Failed to send content: ' + data.reason;
        }
    })
    .catch(error => {
        responseDiv.innerText = 'Error: ' + error.message;
    });
}
