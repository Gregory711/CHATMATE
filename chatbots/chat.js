const CHATBOTSPORT = 3000;

// Returns mode e.g. { mode: 'openai' }
async function getMode() {
    try {
        const response = await fetch('http://localhost:' + CHATBOTSPORT + '/mode');
        if (response.status === 200) {
            const mode = await response.json();
            return mode;
        }
    } catch (err) {}
    return { mode: 'stub' };
}