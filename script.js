const adj = document.getElementById("adjective")
const noun = document.getElementById("noun")
const verb = document.getElementById("verb")
const adverb = document.getElementById("adverb")
const sentence = document.getElementById("sentence")

const generate = event => {
    event.preventDefault()
    const arr = [adj.value, noun.value, verb.value, adverb.value]
    sentence.innerHTML = "The" + arr.filter(x => x).join` `
}



adj.addEventListener("input", generate)
noun.addEventListener("input", generate)
adverb.addEventListener("input", generate)
verb.addEventListener("input", generate)