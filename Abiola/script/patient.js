const name_el=document.querySelector("#name_el");
const patientIdentifier_el=document.querySelector("#patientIdentifier_el");
const address_el=document.querySelector("#address_el");
const li_name_el=document.getElementById("li_name_el")
const li_pho_el=document.getElementById("li_pho_el")
const li_ad_el=document.getElementById("li_ad_el");
const dateOfBirth_li =document.getElementById("dateOfBirth_li")
const btn_all=document.getElementById("btn_all")
const delete_all_btn=document.getElementById("delete_all_btn")
const dateOfBirth_el = document.querySelector("#dateOfBirth_el")
const bloodType_el = document.getElementById("bloodType_el")
const gender_el = document.querySelector("#gender_el")


let patientIdentifierStore=[]
let nameStore=[]
let preferNameStore=[]
let dateOfBirthStore=[]
let bloodTypeStore=[]
let genderStore=[]


const localGenderStore = JSON.parse(localStorage.getItem("genderStore"))
if (localGenderStore) {
    genderStore = localGenderStore
    renderName()
}
const localBloodTypeStorage = JSON.parse(localStorage.getItem("bloodTypeStore"))
if (localBloodTypeStorage) {
    bloodTypeStore =localBloodTypeStorage
    renderName()
}

const localNameStorage = JSON.parse(localStorage.getItem("nameStore"))
if(localNameStorage){
    nameStore=localNameStorage
    renderName()
}
const localPreferNameStorage=JSON.parse(localStorage.getItem("preferNameStore"))
if(localPreferNameStorage){
    preferNameStore= localPreferNameStorage
    renderName()
}
const localPhoneStorage=JSON.parse(localStorage.getItem("patientIdentifierStore"))
if(localPhoneStorage){
    patientIdentifierStore=localPhoneStorage
    renderName()
}
const locDateOfBirthStorage=JSON.parse(localStorage.getItem("dateOfBirthStore"))
if (locDateOfBirthStorage) {
    dateOfBirthStore=locDateOfBirthStorage
    renderName()
}
const btn_addInformation=document.getElementById("btn_addInformation")
const btn_delete =document.getElementById("btn_delete")
 const btn_save=document.getElementById("btn_save")
 
 const unorderlist_information = document.querySelector("#unorderlist_information") 
 
btn_addInformation.addEventListener("click", function () {
    triggerAddInformation()
})

function triggerAddInformation() {
    nameStore.push(name_el.value)
    renderName()
    
    preferNameStore.push(address_el.value)
    // renderPreferName()
    
    patientIdentifierStore.push(patientIdentifier_el.value)
    // rendPatientIdentifier()
    

    dateOfBirthStore.push(dateOfBirth_el.value)
    // renderdateOfBirth()
    
    bloodTypeStore.push(bloodType_el.value)
    

    genderStore.push(gender_el.value)
    
}
const error_message = document.querySelector("#error_message")
function renderName() {
    let nameList=""
    for(let i=0; i<nameStore.length, 
        i<preferNameStore.length, 
        i<patientIdentifierStore.length,
        i<bloodTypeStore.length,
        i<genderStore.length,
        i<dateOfBirthStore.length; i++){
        nameList+= "<li>"+"<span class='list_info'>Full Name :</span> "+" "+nameStore[i]+
        "<br> <span class='list_info'>Prefer Name : </span>" +preferNameStore[i]+
        "<br><span class='list_info'>Patient Identifier : </span>"+patientIdentifierStore[i]+
        "<br><span class='list_info'> D.O.B : </span>"+dateOfBirthStore[i]+
        "<br><span class='list_info'>Blood type : </span>"+bloodTypeStore[i]+
        "<br><span class='list_info'>Gender : </span>"+genderStore[i]+  "</li>"
    }
    
        li_name_el.innerHTML= nameList    
}
// function renderPreferName() {
//     let preferName=""
//  for(let k=0; k<preferNameStore.length; k++){
//      preferName+="<li>"+"<b>Prefer Name : </b>"+preferNameStore[k]+"</li>"
//     }
//     li_ad_el.innerHTML=preferName
// }
// function rendPatientIdentifier() {
//     let patientIdentifierList=""
//  for(let k=0; k<patientIdentifierStore.length; k++){
//      patientIdentifierList+="<li>" +"<b>Patient Identifier : <b>"+patientIdentifierStore[k]+"</li>"
//     }
//     li_pho_el.innerHTML=patientIdentifierList
// }
// function renderdateOfBirth() {
//     let dateOfBirthList = ""
//     for(let k=0; k<dateOfBirthStore.length; k++){
//         dateOfBirthList+="<li>" +"<b>D.O.B : <b>"+dateOfBirthStore[k]+"</li>"
//        }
//        dateOfBirth_li.innerHTML=dateOfBirthList
// }
btn_delete.addEventListener("dblclick", function () {
    patientIdentifierStore.pop()
    nameStore.pop()
    preferNameStore.pop()
    dateOfBirthStore.pop()
    bloodTypeStore.pop()
    genderStore.pop()
    renderName()   
})

delete_all_btn.addEventListener("dblclick",function () {
    localStorage.clear()
    patientIdentifierStore=[]
    nameStore=[]
    preferNameStore=[]
    rendPatientIdentifier()
    renderPreferName()
    renderName()
        console.log("double clicked")
    })

    btn_save.addEventListener("dblclick", function () {
        localStorage.setItem("nameStore",JSON.stringify(nameStore))
        localStorage.setItem("preferNameStore",JSON.stringify(preferNameStore))
        localStorage.setItem("patientIdentifierStore",JSON.stringify(patientIdentifierStore))
        localStorage.setItem("dateOfBirthStore",JSON.stringify(dateOfBirthStore))
        localStorage.setItem("bloodTypeStore", JSON.stringify(bloodTypeStore))
        localStorage.setItem("genderStore", JSON.stringify(genderStore))
    })



