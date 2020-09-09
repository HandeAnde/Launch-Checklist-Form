function mission(){
   fetch("https://handlers.education.launchcode.org/static/planets.json").then(function(response) {
      console.log(response);
      response.json().then(function(json){
         
         let randomMissionDestination = Math.floor(Math.random()* json.length)
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
   <ol>
      <li>Name: ${json[randomMissionDestination].name}</li>
      <li>Diameter: ${json[randomMissionDestination].diameter}</li>
      <li>Star: ${json[randomMissionDestination].star}</li>
      <li>Distance from Earth: ${json[randomMissionDestination].distance}</li>
      <li>Number of Moons: ${json[randomMissionDestination].moon}</li>
   </ol>
   <img src="${json[randomMissionDestination].image}"></img>`
   event.preventDefault();
      })
       event.preventDefault();
   });
   
   }
   
   window.addEventListener("load", function(){
   
      let form = document.querySelector("form")
   
      let pilotName = document.querySelector("input[name=pilotName]")
      let copilotName =document.querySelector("input[name=copilotName]")
      let fuelLevel = document.querySelector("input[name=fuelLevel]")
      let cargoMass = document.querySelector("input[name=cargoMass]")
   
      let faultyItems = document.getElementById("faultyItems")
      let pilotStatus = document.getElementById("pilotStatus")
      let copilotStatus = document.getElementById("copilotStatus")
      let fuelStatus = document.getElementById("fuelStatus")
      let cargoStatus = document.getElementById("cargoStatus")
      let launchStatus = document.getElementById("launchStatus")
   
      let missionTarget = document.getElementById("missionTarget")
   
     form.addEventListener("submit", function(){
   
      
      
      if(pilotName.value === "" || copilotName.value === "" || fuelLevel.value === "" ||  cargoMass.value === ""){
      alert("All fields are required.")
      event.preventDefault();
      }else if(!isNaN(pilotName.value) || !isNaN(copilotName.value)){
      alert("Enter valid name.")
      event.preventDefault();
      }else if( isNaN(fuelLevel.value) || isNaN(cargoMass.value)){
         alert("Enter valid fuel evel or Cargo mass.")
         event.preventDefault();
      }else if(fuelLevel.value<10000){
         faultyItems.style.visibility = "visible"
         pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`
         copilotStatus.innerHTML =`Co-pilot ${copilotName.value} Ready` 
         fuelStatus.innerHTML = `There is not enough fuel for the journey`
         launchStatus.innerHTML =`<h2>Shuttle not ready for launch</h2>`
         launchStatus.style.color="red"
         
         event.preventDefault();
      }else if ( cargoMass.value > 10000){
         faultyItems.style.visibility = "visible"
         pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`
         copilotStatus.innerHTML =`Co-pilot ${copilotName.value} Ready`
         launchStatus.innerHTML =`<h2>Shuttle not ready for launch</h2>`
         cargoStatus.innerHTML = ` There is too much mass for the shuttle to take off`
         launchStatus.style.color = "red"
         event.preventDefault();
   
      } else { 
      faultyItems.style.visibility = "visible"
      pilotStatus.innerHTML = `Pilot ${pilotName.value} Ready`
      copilotStatus.innerHTML =`Co-pilot ${copilotName.value} Ready`
      launchStatus.innerHTML =`<h2>Shuttle is ready for launch</h2>`
      fuelStatus.innerHTML = `Fuel level high enough for launch`
      cargoStatus.innerHTML = ` Cargo mass low enough for launch`
      launchStatus.style.color="green"
      console.log(mission())
      event.preventDefault();
      }
                
     });
    
   
   
   });