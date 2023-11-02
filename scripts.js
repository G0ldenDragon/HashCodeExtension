document.addEventListener('DOMContentLoaded', function() 
{
    const textarea = document.getElementById('textArea');

    // Écoutez les modifications de la textarea
    var btn = document.getElementById('button');
    btn.addEventListener('click', function()
    {
        const originalText = textarea.value;
        hashString(originalText).then(hash => textarea.value = hash);
    });
});

async function hashString(str) 
{
    const encoder = new TextEncoder();
    const data = encoder.encode(str);

    const hashBuffer = await crypto.subtle.digest('SHA-256', data);

    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const hashHex = hashArray.map(byte => byte.toString(16).padStart(2, '0')).join('');

    return hashHex;
}
