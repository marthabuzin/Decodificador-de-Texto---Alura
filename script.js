
// Mapeamento das substituições para criptografia
const encryptionMap = {
    'e': 'enter',
    'i': 'imes',
    'a': 'ai',
    'o': 'ober',
    'u': 'ufat'
};

// Mapeamento reverso para descriptografia
const decryptionMap = Object.fromEntries(
    Object.entries(encryptionMap).map(([key, value]) => [value, key])
);

// Função para validar o texto
function validateText(text) {
    // Verifica se o texto contém apenas letras minúsculas e espaços
    const validTextPattern = /^[a-z\s]*$/;
    // Verifica se o texto está dentro dos critérios permitidos
    if (!validTextPattern.test(text)) {
        alert("Por favor, insira apenas letras minúsculas sem acentos e sem caracteres especiais.");
        return false;
    }
    return true;
}

// Função para criptografar
function encrypt(text) {
    return text.split('').map(char => encryptionMap[char] || char).join('');
}

// Função para descriptografar
function decrypt(text) {
    let result = text;
    for (const [encrypted, original] of Object.entries(decryptionMap)) {
        result = result.split(encrypted).join(original);
    }
    return result;
}

// Função para converter texto com base na ação
function convertText(action) {
    const text = document.getElementById('inputText').value;
    
    // Validar o texto antes de processar
    if (!validateText(text)) {
        document.getElementById('outputText').value = "";
        return;
    }
    
    const result = action === 'encrypt' ? encrypt(text) : decrypt(text);
    document.getElementById('outputText').value = result;
}