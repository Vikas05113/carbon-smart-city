function calculate(){
    console.log("Button clicked");

    const vehicle = document.getElementById("vehicle").value;
    const electricity = document.getElementById("electricity").value;

    fetch("http://localhost:3000/calculate",{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            vehicle,
            electricity
        })
    })
    .then(res=>res.json())
    .then(data=>{
        console.log(data);
        document.getElementById("result").innerHTML =
        "Carbon Emission: " + data.carbon + " kg CO2 🌍";
    })
    .catch(err=>{
        console.log(err);
    });
}