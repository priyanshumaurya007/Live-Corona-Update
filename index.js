function updateMap()
{
    fetch("./data.json")
    .then(response => response.json())
    .then(rsp => {

        rsp.data.forEach(element => {
            latitude = element.latitude;
            longitude = element.longitude;

            cases = element.infected;

            if(cases>255)
            {
                color ="rgb(255,0,0";
            }
            else if(cases<5){
                color = "rgb(124, 245, 124)"
            }
            else{
                color = "rgb(241, 114, 114)";
            }

           // Mark on the map

           new mapboxgl.Marker({
               color: color
           })
           .setLngLat([longitude,latitude])
           .addTo(map);

        })
    })
    
}

let interval=2000;

setInterval(updateMap,interval);

