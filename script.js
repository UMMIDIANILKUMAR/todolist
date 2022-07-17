function getdata() {


  // allset
  var textsave = document.getElementById('textinput').value
  if (textsave.length === 0) {
    var small1 = document.getElementById("small1")
    small1.innerHTML = "this cant be blank"
  }

  else if (textsave.length >= 1) {
    var small1 = document.getElementById("small1")
    small1.innerHTML = ""         
    var addeditems1 = document.getElementById("addeditems");
    var div1main = document.createElement("div")
    div1main.setAttribute("id", "div1main")
    addeditems1.appendChild(div1main)

  }
  //  allset

  if (textsave.length >= 1) {
    var textsave = document.getElementById('textinput').value

    var div1 = document.createElement("div")
    div1.style.width = "100%"
    div1.setAttribute("class", "div11")
    div1.style.border = "1px solid #faebd7"
    
    var created = document.createElement('h1')
    created.innerHTML = textsave
    created.style.color = "#faebd7";

    var btn = document.createElement('button')
    btn.style.width = "20%"
    btn.style.border = "1px solid #faebd7"
    btn.setAttribute("class", "btn")
    btn.addEventListener('click',(evnt)=>{
      var div11111= (evnt.currentTarget.parentElement)
      div11111.remove()
    })
    
    
    btn.innerText = "delete"
   




    var addeditems = document.getElementById("addeditems");
    var div1main = document.getElementById("div1main")
    div1main.appendChild(div1)
    div1.appendChild(created)
    div1.appendChild(btn)

    
  }





}








function removesingle() {



}
















function removeelem() {
  document.getElementById("div1main").remove()

}
