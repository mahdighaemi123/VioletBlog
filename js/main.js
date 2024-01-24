function removeLeadingSpaces(inputText) {
    let lines = inputText.split('\n');
    for (let i = 0; i < lines.length; i++) {
        lines[i] = lines[i].replace(/^\s+/, '');
    }
    let resultText = lines.join('\n');
    return resultText;
}