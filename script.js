window.addEventListener('load', function(){
   let form = document.querySelector('form');
   form.addEventListener('submit', function(event){
      let pilotName = document.querySelector("input[name=pilotName]");
      let copilotName = document.querySelector("input[name=copilotName]");
      let fuelLevel = document.querySelector("input[name=fuelLevel]");
      let cargoMass = document.querySelector("input[name=cargoMass]");
      let pilotStatus = document.getElementById('pilotStatus');
      let copilotStatus = document.getElementById('copilotStatus');
      let fuelStatus = document.getElementById('fuelStatus');
      let cargoStatus = document.getElementById('cargopilotStatus');
      let faultyItems = document.getElementById('faultyItems');
      let launchStatus = document.getElementById('launchStatus');

      function noLaunch (){
         faultyItems.style.visibility="visible";
         launchStatus.innerHTML = `Shuttle not ready for launch`;
         launchStatus.style.color = 'red';
      }
      
      if(!pilotName.value || !copilotName.value || !fuelLevel.value || !cargoMass.value){
         alert('All Fields Required.');
      } else {
         if(pilotName.value && copilotName.value){
            pilotStatus.innerHTML = `Pilot ${pilotName.value} is ready for launch`;
            copilotStatus.innerHTML = `Copilot ${copilotName.value} is ready for launch`;
         }
   
         if(fuelLevel.value < 10000){
            fuelStatus.innerHTML = 'Fuel level too low for launch';
            noLaunch();   
         }

         if(cargoMass.value < 10000){
            fuelStatus.innerHTML = 'Fuel level too low for launch';
            noLaunch();   
         }

   
      }


      


      event.preventDefault();
   });
});


/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/
