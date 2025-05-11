const addBtn = document.getElementById("addBtn")
const removeBtn = document.getElementById("removeBtn")
const container = document.querySelector(".container")
const list = document.querySelector('.patients-list')
let pacients = []
let count = 0

// Precisa colocar os números e atualizar eles ( 1º, 2º, etc)

function createLabel(parent, htmlFor, textContent){
    const label = document.createElement("label")
    label.htmlFor = htmlFor
    label.textContent = textContent
    parent.appendChild(label)
    return label
}

function createInput(parent, type, id, name){
    const input = document.createElement("input")
    input.type = type
    input.id = id
    input.name = name
    parent.appendChild(input)
    return input
}

function createButton(parent,type, id,textContent){
    const button = document.createElement("button")
    button.type = type
    button.id = id
    button.textContent = textContent
    parent.appendChild(button)
    return button
}

function createLi(parent, textContent){
    const li = document.createElement('li')
    li.textContent = `${count}º ${textContent}`
    parent.appendChild(li)
    return li
}

function addPacients(){
    const name = document.getElementById(`id-${count}`).value
    pacients.push(name)
    createLi(list, name)
}
function removePacients(){
    list.removeChild(list.children[0]) 
    pacients.shift()
}

addBtn.addEventListener("click", (ev)=>{
    ev.preventDefault()
    count++
    const id = `id-${count}`
    const label = createLabel(container,id,"Digite o Nome do Paciente")
    const input = createInput(container, "text", id, id)
    const btn = createButton(container, "button", `add-${count}`, "Adicionar")

    btn.addEventListener("click", (ev)=>{
        ev.preventDefault()
        addPacients()
        container.removeChild(label)
        container.removeChild(input)
        container.removeChild(btn)
    })
})

removeBtn.addEventListener("click", removePacients)