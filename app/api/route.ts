// import fetch from 'node-fetch';

export default async (req, res) => {
    const response = await fetch('https://raw.githubusercontent.com/AWKohler/test-resources/main/embedai.js');
    const scriptContent = await response.text();

    res.setHeader('Content-Type', 'application/javascript');
    res.send(scriptContent);
};