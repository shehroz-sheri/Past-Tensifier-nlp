document.querySelector("[name= 'sentence']").addEventListener('keyup', async event => {
    if (!(event.which === 13)) return;

    const request = await fetch(`/past-tense?${new URLSearchParams({
        sentence: event.target.value
    })}`)

    const pastTense = await request.json()

    document.getElementById('output').innerHTML = `
    <h3 class="text-success mt-4">Output:</h3>
        <p class="my-2 container">${pastTense.text}</p>
    `
})