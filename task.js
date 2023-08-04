const pollTitle = document.getElementById('poll__title')
const pollAnswers = document.getElementById('poll__answers')

let xhr = new XMLHttpRequest()

xhr.addEventListener('load', () => {
    if (xhr.readyState === xhr.DONE) {
        let answer = xhr.response['data']['title']
        let answers = Array.from(xhr.response['data']['answers'])
        pollTitle.insertAdjacentHTML('beforebegin',`${answer}`)

        for (let i = 0; i < answers.length; i ++) {
            pollAnswers.insertAdjacentHTML('beforebegin',
            `<button class="poll__answer">
                ${answers[i]}
            </button>
            `
        )}

        let buttonOk = document.querySelectorAll('.poll__answer')
        buttonOk.forEach((but) => {
            but.addEventListener('click', (event) => {
                event.preventDefault()
                alert('Спасибо, ваш голос засчитан!')
                window.location.reload()
            })
        })   
    }
})
xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll')
xhr.responseType = 'json'
xhr.send()