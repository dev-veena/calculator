function buttonclick(val){
    document.getElementById("display-box").value+=val
}

function clearDisplay(){
    document.getElementById("display-box").value=" "
}

function equalclick(){
    var text=document.getElementById('display-box').value
    var result=eval(text)
    document.getElementById('display-box').value=result
}