function sendMail(){
    var params = {
        name : document.getElementById("name").value ,  
        mail : document.getElementById("mail").value , 
        msg : document.getElementById("msg").value , 
        
    };
    const serviceID = "service_ld7kdng";
    const templateID = "template_41p2nr6";
    
    emailjs.send(serviceID,templateID,params)
    .then(
        res =>{
            document.getElementById("name").value = "";
            document.getElementById("mail").value = "";
            document.getElementById("msg").value = "";
            console.log(res);
            // alert("Message bien envoyé");
        })
        .catch((err) => console.log(err));
}
