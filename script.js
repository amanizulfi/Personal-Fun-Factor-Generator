const facts = [
    "I am Amani! 😊",
    "I love exploring new web technologies and building cool projects! 💻",
    "My favorite hobby is Drawing & creative made things. 🌳",
    "I am passionate about learning and improving my skills every day. 📚",
    "I love to travel worldaround. 🌍",
    "I love Nature.",
];

document.getElementById('generate-fact').addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById('fun-fact').innerText = facts[randomIndex];
});

document.getElementById('add-fact').addEventListener('click', () => {
    const customFact = document.getElementById('custom-fact').value;
    if (customFact.trim()) {
        facts.push(customFact);
        document.getElementById('custom-fact').value = '';
        alert('Fun fact added! 🎉');
    } else {
        alert('Please enter a fun fact. 🤔');
    }
});

document.getElementById('clear-facts').addEventListener('click', () => {
    if (confirm('Are you sure you want to clear all facts?')) {
        while (facts.length > 0) facts.pop();
        document.getElementById('fun-fact').innerText = 'All facts cleared!';
    }
});