let count= 0

function increment(){
    count= count + 1
    document.getElementById('count').innerText= count
}

function decrement(){
    if(count==0){
       alert("Count is zero..!");
    }else{
        count = count - 1
        document.getElementById('count').innerText= count;
    }
}

function save(){
    saveEl = document.getElementById('save-el');

    let today = new Date();
    let date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();;
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    let dateTime = date+' '+time;
    
    if(count==0){
        alert("Count is zero..!");
     }else{
            saveEl.innerHTML+="<br>"+dateTime+" - "+ count;
     }
        
}

function zero(){
    count=0;
    document.getElementById('count').innerText= count;
}