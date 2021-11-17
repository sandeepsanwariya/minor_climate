
  const firedata=[]  

  fetch('http://45.63.15.162:8000/data/allyears_incidents.json')
  .then(response => response.json())
  .then(data => {
    
     data.map(data=> {
          firedata.push(data)
      });
      var output=document.getElementById('demo')
      output.innerHTML=firedata[0].startedDate
      document.getElementById('firerange').min=0
      document.getElementById('firerange').step=1
      document.getElementById('firerange').max=daysBetween(firedata[0].startedDate,firedata[firedata.length-1].startedDate)
      console.log('j', data.length)
      console.log('j', firedata.length)
      console.log('j', data[data.length-1])
  });
            var tf=[]
            var interval_id=''
            var tileSize = 256;
            
            var map = L.map('map').setView([36.778259,-119.417931], 6);
    
            var mapboxAccessToken = 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg';
    
            var base = L.tileLayer("https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=" + 'pk.eyJ1Ijoic2FuZGVlcHNhbndhcml5YSIsImEiOiJja3A4ZmhvdGIwMTIyMm5zM2RxNWIya3h5In0.yuJS_cus0cl5UdGeQ-E5kg', {
                attribution: 'Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, &copy;<a href="https://www.mapbox.com/map-feedback/">Mapbox</a>',
                id: 'mapbox.streets',
                tileSize: 512,
        zoomOffset: -1,
            }).addTo(map);
            
            var greenIcon = L.icon({
                iconUrl: 'assets/img/fire.png',
                shadowUrl: 'assets/img/smok2.png',
            
                iconSize:     [58, 95], // size of the icon
                shadowSize:   [50, 65], // size of the shadow
                iconAnchor:   [22, 94], // point of the icon which will correspond to marker's location
                shadowAnchor: [4, 62],  // the same for the shadow
                popupAnchor:  [-3, -76] // point from which the popup should open relative to the iconAnchor
            });


 
    console.log('k', firedata[0])
   
    // Date.prototype.addDays = function(days) {
    //     var date = new Date(this.valueOf());
    //     date.setDate(date.getDate() + days);
    //     return date;
    // }
    
    function addDays(date, days) {
        var result = new Date(date);
    
        result.setDate(result.getDate() + days);
    
        var d=result.getUTCDate()
        if(result.getUTCDate()<10){
            d='0'+result.getUTCDate()
        }
        var m=result.getMonth()
        if(result.getMonth()<10){
            m='0'+result.getMonth()
        }
        return result.getFullYear()+'-'+ m+'-'+d;
      }
  
    
    console.log(addDays("2013-08-17",20));
           
 
    function daysBetween(startDate, endDate) {
        var d1 = new Date(startDate);
        var d2 = new Date(endDate);
       

        var millisecondsPerDay = 24 * 60 * 60 * 1000;
        return ((d2) - (d1)) / millisecondsPerDay;
    }
    var output=document.getElementById('demo')
    // output.innerHTML=firedata[0].startedDate
    document.getElementById('firerange').value=0
    var addday=0
    var datanow=''
    var removemarker={}
    var cl =Number(   document.getElementById('firerange').value)

    function firing(){
      
        var marker=''
        var days=daysBetween(firedata[0].startedDate,firedata[firedata.length-1].startedDate)
        if(cl<days){
            cl = cl + (1);
            addday=cl
            datanow = addDays(firedata[0].startedDate,cl)
            var fireicons=firedata.filter(firedata=>firedata.startedDate===datanow)
            console.log('fire', fireicons,datanow,cl)
            fireicons.map(fireicons=>{
                // console.log( 'l',fireicons.length)
                tf.push(fireicons)
                marker=(L.marker([fireicons.latitude,fireicons.longitude], {icon: greenIcon})).addTo(map)
                // console.log('marker',marker._leaflet_id)
                if(removemarker[cl]){
                    removemarker[cl].push(marker)        
                        }else{
                            removemarker[cl]=[marker]
                        }
                
            })
            // console.log('data',cl,fireicons)
            document.getElementById('firerange').value=cl

        }
        else {
            
            clearInterval(interval_id);
            
        }
        // console.log('re',removemarker)
        output.innerHTML =datanow
        for (var [key, value] of  Object.entries(removemarker)) {
            // console.log('val', value.length)
            if(key===String(cl-50)){
                value.map(value =>{
                    map.removeLayer(value)
               
                   
                })
                delete removemarker[key]
                        
            }
        }
        
    };
    var rm=50
    var rm_interval=''
    function cleanfire(){

        var last = Object.keys(removemarker)[Object.keys(removemarker).length-1];
        var lastmarker=removemarker[last]
        lastmarker.map( lastmarker=>{
            map.removeLayer(lastmarker)
       
           
        })
        delete removemarker[last]
        rm=rm-1
        console.log('pk',last,removemarker[last])
        if (Object.keys(removemarker).length===0){
            clearInterval(rm_interval)
            datanow = addDays(firedata[0].startedDate,cl)
            var fireicons=firedata.filter(firedata=>firedata.startedDate===datanow)
            console.log('fire', fireicons,datanow,cl)
           
            fireicons.map(fireicons=>{
                // console.log( 'l',fireicons.length)
                tf.push(fireicons)
                marker=(L.marker([fireicons.latitude,fireicons.longitude], {icon: greenIcon})).addTo(map)
                // console.log('marker',marker._leaflet_id)
                if(removemarker[cl]){
                    removemarker[cl].push(marker)        
                        }else{
                            removemarker[cl]=[marker]
                        }
                
            })
            // console.log('data',cl,fireicons)
            document.getElementById('firerange').value=cl
            output.innerHTML =datanow
           
        }
    }


    var start=document.getElementById('firestart')
    var pause=document.getElementById('firepause')
    start.onclick=function() {
        interval_id = setInterval(firing,50);
      
        this.disabled=true;
        pause.disabled=false;
        
      }
    pause.onclick=function(){
        clearInterval(interval_id)
        this.disabled=true;
        start.disabled=false;
        rm_interval = setInterval(cleanfire,50);
        }

    var slider=document.getElementById('firerange')
    slider.onchange=function(){
        clearInterval(interval_id)
        pause.disabled=true;
        start.disabled=false;
        console.log(this.value)
        cl=Number( this.value)
        datanow = addDays(firedata[0].startedDate,cl)
        for (var [key, value] of  Object.entries(removemarker)) {
            // console.log('val', value.length)
          
                value.map(value =>{
                    map.removeLayer(value)
                   
                })
                delete removemarker[key]        
            
        }
            var fireicons=firedata.filter(firedata=>firedata.startedDate===datanow)
            console.log('fire', fireicons,datanow,cl)
           
            fireicons.map(fireicons=>{
                // console.log( 'l',fireicons.length)
                tf.push(fireicons)
                marker=(L.marker([fireicons.latitude,fireicons.longitude], {icon: greenIcon})).addTo(map)
                // console.log('marker',marker._leaflet_id)
                if(removemarker[cl]){
                    removemarker[cl].push(marker)        
                        }else{
                            removemarker[cl]=[marker]
                        }
                
            })
            // console.log('data',cl,fireicons)
            document.getElementById('firerange').value=cl
            output.innerHTML =datanow
          
            // rm_interval = setInterval(cleanfire,50);
    }