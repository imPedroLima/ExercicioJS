const addBtn = document.getElementById("addBtn")
const removeBtn = document.getElementById("removeBtn")
const container = document.querySelector(".container")
const list = document.querySelector('.patients-list')
let pacients = []
let count = 0

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
    console.log(pacients)
}

function removePacients(){
    try{
        if(!(pacients.length === 0)){
            for(let i = 0; i < count; i++){
            const children = list.children[i].textContent
            list.children[i].textContent = children.replace(/^\d/, `${i}`)
            }
            const stringFormat = list.children[0].textContent
            alert(`O paciente ${stringFormat.replace(/\d\W/g, '')} foi consultado(a)`)
            list.removeChild(list.children[0]) 
            pacients.shift()
            console.log(pacients)
            count--
        } else {
            throw new Error('Nenhum paciente na Fila!')
        }
    }catch(e){
        alert(e)
    }
    
}

addBtn.addEventListener("click", (ev)=>{
    ev.preventDefault()
        count++
        const id = `id-${count}`
        const label = createLabel(container,id,"Digite o Nome do Paciente")
        const input = createInput(container, "text", id, id)
        input.focus()
        const btn = createButton(container, "button", `add-${count}`, "Adicionar")

        btn.addEventListener("click", (ev)=>{
            try{
                if(!(input.value === '')){
                    ev.preventDefault()
                    addPacients()
                    container.removeChild(label)
                    container.removeChild(input)
                    container.removeChild(btn)
                } else {
                    count--
                    container.removeChild(label)
                    container.removeChild(input)
                    container.removeChild(btn)
                    throw new Error('Você não pode adicionar um paciente sem o nome dele!')
                }
            }catch(e){
                alert(e)
            }
            
        })
    
})

removeBtn.addEventListener("click", removePacients)