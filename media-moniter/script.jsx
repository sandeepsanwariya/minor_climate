function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)

    );
}

const box = document.querySelector('.box');
const message = document.querySelector('#message');
var chartdiv = []



document.body.className = 'article campaign-page media-monitor';
var maincontainer = document.createElement('main');

var article = document.createElement('article');
document.body.appendChild(maincontainer);maincontainer.appendChild(article)
var header = document.createElement('header');
header.className ='entry-header'
header.style = 'background-image: url("media_monitor.jpg")'
article.appendChild(header);

var topbar = document.createElement('topbar');
topbar.className = 'w3-bar w3-top w3-card w3-padding w3-large';
topbar.style = 'transition:.3s ease;background-color:#ffffff;color:#050031;z-index:9999;display:none'

$(topbar).append('<h5>Media Monitor<h5>');
document.body.appendChild(topbar);
var heading = document.createElement('h1');header.appendChild(heading);
heading.append('Media Monitor');
$(header).append('<p>How bias is the news?</p>')

document.addEventListener('scroll', function () {
    const messageText = isInViewport(heading) ?
         topbar.style.display = 'none':
        topbar.style.display = 'inherit';

}, {
    passive: true
});

var  elementrow = document.createElement('div');
elementrow.className = 'w3-row-padding w3-margin-top';
document.body.style = 'background-color:#050031'
article.appendChild(elementrow);
$(elementrow).append('<h2 style="color:#ffffff;text-align:center">Last 7 days Bias Scores For</h2><p style="color:#ffffff;text-align:center"></p>/n')

elementrow.appendChild(document.createElement('br'))

var elementsplace = document.createElement('div')
elementrow.appendChild(elementsplace)
let topics = []
d3.csv("topics.csv", (d) => {
    for (var prop in d) {
        topics.push(d[prop])
    }
});
var dateObj = new Date();
var month = dateObj.getUTCMonth() + 1; //months from 1-12
var day = dateObj.getUTCDate();
var year = dateObj.getUTCFullYear();
if (month < 10) {
    month = '0' + month;
}
if (day < 10) {
    day = '0' + day;
}
var newdate = month + "_" + day + "_" + year;
//var url = 'http://45.63.15.162:8000/news/sites_' + newdate + '.json';
var url = []
for(var i=1;i<9;i++){
                    
                    const today = new Date()
                    const yesterday = new Date(today)
                    yesterday.setDate(yesterday.getDate() - i)
                    
                    var inmonth = yesterday.getUTCMonth() + 1; 
var inday = yesterday.getUTCDate();
var inyear = yesterday.getUTCFullYear();
if (inmonth < 10) {
    inmonth = '0' + inmonth;
}
if (inday < 10) {
    inday = '0' + inday;
}
var yesterdaynewdate = inmonth + "_" + inday + "_" + inyear;
url.push('http://45.63.15.162:8000/news/sites_' + yesterdaynewdate + '.json');
   
                }



var publications = {};
var words = {}
words.Terrible = [];
words.Useless = [];
words.Worst = [];
words.Excellent = [];
words.Brilliant = [];
words.Best = [];
d3.csv("words.csv", (d) => {
    for (var prop in d) {
        words[prop].push(d[prop])
    }
});
var neglectedwords = []
d3.csv("neglectedwords.csv", (d) => {
    for (var prop in d) {
        neglectedwords.push(d[prop])
    }
});
var postivemeg = []
var negativemeg = []
d3.csv("mkulakowski2.csv", (d) => {
    for (var prop in d) {
       
        postivemeg.push(d.positive)
        negativemeg.push(d.negative)
    }
    
});


google.charts.load('current', {packages: ['corechart']});
function createchart(dom,datax){
     
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {
        var data = datax;

        var options = {
            animation: {"startup": true,duration: 1000,
        easing: 'out',},
          title: '',
          curveType: 'function',
          legend: 'none',
            lineWidth: 3,
            colors: ['#050031'],
           hAxis: { textPosition: 'none' },
              axisFontSize : 0,
          
      
        };

        var chart = new google.visualization.LineChart(dom);

        chart.draw(data, options);
      } 
}

$.getJSON(url[0], function (data1) {
    $.getJSON(url[1], function (data2) {
        $.getJSON(url[2], function (data3) {
            $.getJSON(url[3], function (data4) {
                $.getJSON(url[4], function (data5) {
                    $.getJSON(url[5], function (data6) {
                        $.getJSON(url[6], function (data7) {

class Most extends React.Component{
    
    constructor(props){
        super(props);
        
         var selectedTopic = topics[0]
            
            
            
           var chanel = {}
         var wordcountobj = {}
    var datasup = []
    datasup.push(data7);
        datasup.push(data6);
        datasup.push(data5);
        datasup.push(data4);
        datasup.push(data3);
        datasup.push(data2);

        for(var x in data1){
            chanel[x] = {topic_count:0,totalwords:0,negativemeg:0,positivemeg:0,topicwords:[],totalheads:0,sments:{0:{neg:0,pos:0},1:{neg:0,pos:0},2:{neg:0,pos:0},3:{neg:0,pos:0},4:{neg:0,pos:0},5:{neg:0,pos:0},6:{neg:0,pos:0},7:{neg:0,pos:0}}}
            
            for (var p in data1[x]) {
                var flag = false
                chanel[x].totalheads = chanel[x].totalheads + 1
                    let sent = data1[x][p];
                    
                    var letter = sent.split(' ');
                for(var y in letter){
                    
                if(letter[y].toUpperCase() == selectedTopic.toUpperCase()){
                    
                    chanel[x].topic_count = chanel[x].topic_count + 1
                    flag = true
                }
                    
                      
                  
            }
            if(flag == true){
                for(var y in letter){
                  
                    if(negativemeg.includes(letter[y])){
                   chanel[x]['negativemeg'] = chanel[x]['negativemeg'] + 1
                        chanel[x].sments['6'].neg = chanel[x].sments['6'].neg + 1
               }else if(postivemeg.includes(letter[y])){
                    chanel[x]['positivemeg'] = chanel[x]['positivemeg'] + 1
               chanel[x].sments['6'].pos = chanel[x].sments['6'].pos + 1
                 
                }
                    if(wordcountobj.hasOwnProperty(letter[y]) && !neglectedwords.includes(letter[y].toUpperCase())){
                          chanel[x].totalwords = chanel[x].totalwords+1
                   wordcountobj[letter[y]].count = wordcountobj[letter[y]].count +1
               }else if(!neglectedwords.includes(letter[y].toUpperCase())){
                   wordcountobj[letter[y]] = {count:0}
                    chanel[x].topicwords.push(letter[y])
                }
            }
            }
        }
        }
        
        
        for (var entry in datasup){
            
            for(var x in datasup[entry]){
                
                    
            for (var p in datasup[entry][x]) {
                chanel[x].totalheads = chanel[x].totalheads + 1
                var flag = false
                    let sent = datasup[entry][x][p];
                
                    var letter = sent.split(' ');
                for(var y in letter){
                    
                if(letter[y].toUpperCase() == selectedTopic.toUpperCase()){
                    
                    chanel[x].topic_count = chanel[x].topic_count + 1
                    flag = true
                }  
                  
            }
            if(flag == true){
                for(var y in letter){
                     
                        if(negativemeg.includes(letter[y])){
                   chanel[x]['negativemeg'] = chanel[x]['negativemeg'] + 1
                               chanel[x].sments[(parseInt(entry)+1)].neg = chanel[x].sments[(parseInt(entry)+1)].neg + 1
               }else if(postivemeg.includes(letter[y])){
                    chanel[x]['positivemeg'] = chanel[x]['positivemeg'] + 1
        chanel[x].sments[parseInt(entry)+1].pos = chanel[x].sments[parseInt(entry)+1].pos + 1
                 
                }
                    
                    chanel[x].topicwords.push(letter[y])
                    
                     if(wordcountobj.hasOwnProperty(letter[y]) && !neglectedwords.includes(letter[y].toUpperCase())){
                         chanel[x].totalwords = chanel[x].totalwords+1
                   wordcountobj[letter[y]].count = wordcountobj[letter[y]].count +1
               }else if(!neglectedwords.includes(letter[y].toUpperCase())){
                   wordcountobj[letter[y]] = {count:0}
                   
               }
                }
            }
            }
        }
        }
        
    
    for(var each in chanel){
        var smentsarr = []
        for(var entry in chanel[each].sments){
            
           smentsarr.push((chanel[each].sments[entry].pos - chanel[each].sments[entry].neg))
        }
        chanel[each]['smentarr'] = smentsarr
    }    
    
        var maxword = Object.keys(wordcountobj).reduce(function(a, b){ return wordcountobj[a] > wordcountobj[b] ? a : b });
        
        
        var maxKey = Object.keys(chanel).reduce(function(a, b){ return chanel[a].topic_count > chanel[b].topic_count ? a : b });
        var minKey = Object.keys(chanel).reduce(function(a, b){ return chanel[a].topic_count < chanel[b].topic_count ? a : b });
        
          var maxNegKey = Object.keys(chanel).reduce(function(a, b){ return (chanel[a].negativemeg/chanel[a].topicwords.length) > (chanel[b].negativemeg/chanel[b].topicwords.length) ? a : b });
        
        var maxPosKey = Object.keys(chanel).reduce(function(a, b){ return (chanel[a].positivemeg/chanel[a].negativemeg) > (chanel[b].positivemeg/chanel[a].negativemeg) ? a : b });
        
        var neuKey = Object.keys(chanel).reduce(function(a, b){ return (chanel[a].positivemeg/chanel[a].negativemeg) > (chanel[b].positivemeg/chanel[a].negativemeg) ? a : b });
       
        chanel['maxKey'] = maxKey;
        chanel['maxKeyVal'] = chanel[maxKey].topic_count
        chanel['minKey'] = minKey;
        chanel['minKeyVal'] = chanel[minKey].topic_count
        chanel['maxword'] = maxword
        chanel['maxNegKey'] = maxNegKey
        chanel['maxNegKeyVal'] = ((chanel[maxNegKey].negativemeg/chanel[maxNegKey].topicwords.length)*100).toFixed(1)
        chanel['maxPosKey'] = maxPosKey
        chanel['maxPosKeyVal'] = ((chanel[maxPosKey].positivemeg/chanel[maxPosKey].topicwords.length)*100).toFixed(1)
        
        chanel['neuKey'] = neuKey
        chanel['neuKeyVal'] = ((chanel[neuKey].negativemeg/chanel[neuKey].positivemeg)*100).toFixed(1)
        
         this.state= chanel; 
            
        this.topicChange = this.topicChange.bind(this); 
         this.getdata = this.getdata.bind(this); 
    }
    
        topicChange(e){
            
            var selectedTopic = e.target.value
            
            
            
           var chanel = {}
         var wordcountobj = {}
    var datasup = []
    datasup.push(data7);
        datasup.push(data6);
        datasup.push(data5);
        datasup.push(data4);
        datasup.push(data3);
        datasup.push(data2);

        for(var x in data1){
           chanel[x] = {topic_count:0,totalwords:0,negativemeg:0,positivemeg:0,topicwords:[],totalheads:0,sments:{0:{neg:0,pos:0},1:{neg:0,pos:0},2:{neg:0,pos:0},3:{neg:0,pos:0},4:{neg:0,pos:0},5:{neg:0,pos:0},6:{neg:0,pos:0},7:{neg:0,pos:0}}}
            
            for (var p in data1[x]) {
                var flag = false
                chanel[x].totalheads = chanel[x].totalheads + 1
                    let sent = data1[x][p];
                    
                    var letter = sent.split(' ');
                for(var y in letter){
                    
                if(letter[y].toUpperCase() == selectedTopic.toUpperCase()){
                    
                    chanel[x].topic_count = chanel[x].topic_count + 1
                    flag = true
                }
                    
                      
                  
            }
            if(flag == true){
                for(var y in letter){
                  
                    if(negativemeg.includes(letter[y])){
                   chanel[x]['negativemeg'] = chanel[x]['negativemeg'] + 1
                        chanel[x].sments['6'].neg = chanel[x].sments['6'].neg + 1
               }else if(postivemeg.includes(letter[y])){
                    chanel[x]['positivemeg'] = chanel[x]['positivemeg'] + 1
               chanel[x].sments['6'].pos = chanel[x].sments['6'].pos + 1
                 
                }
                    if(wordcountobj.hasOwnProperty(letter[y]) && !neglectedwords.includes(letter[y].toUpperCase())){
                          chanel[x].totalwords = chanel[x].totalwords+1
                   wordcountobj[letter[y]].count = wordcountobj[letter[y]].count +1
               }else if(!neglectedwords.includes(letter[y].toUpperCase())){
                   wordcountobj[letter[y]] = {count:0}
                    chanel[x].topicwords.push(letter[y])
                }
            }
            }
        }
        }
        
        
        for (var entry in datasup){
            
            for(var x in datasup[entry]){
                
                    
            for (var p in datasup[entry][x]) {
                chanel[x].totalheads = chanel[x].totalheads + 1
                var flag = false
                    let sent = datasup[entry][x][p];
                
                    var letter = sent.split(' ');
                for(var y in letter){
                    
                if(letter[y].toUpperCase() == selectedTopic.toUpperCase()){
                    
                    chanel[x].topic_count = chanel[x].topic_count + 1
                    flag = true
                }  
                  
            }
            if(flag == true){
                for(var y in letter){
                     
                          if(negativemeg.includes(letter[y])){
                   chanel[x]['negativemeg'] = chanel[x]['negativemeg'] + 1
                               chanel[x].sments[(parseInt(entry)+1)].neg = chanel[x].sments[(parseInt(entry)+1)].neg + 1
               }else if(postivemeg.includes(letter[y])){
                    chanel[x]['positivemeg'] = chanel[x]['positivemeg'] + 1
        chanel[x].sments[parseInt(entry)+1].pos = chanel[x].sments[parseInt(entry)+1].pos + 1
                 
                }
                    
                    chanel[x].topicwords.push(letter[y])
                    
                     if(wordcountobj.hasOwnProperty(letter[y]) && !neglectedwords.includes(letter[y].toUpperCase())){
                         chanel[x].totalwords = chanel[x].totalwords+1
                   wordcountobj[letter[y]].count = wordcountobj[letter[y]].count +1
               }else if(!neglectedwords.includes(letter[y].toUpperCase())){
                   wordcountobj[letter[y]] = {count:0}
                   
               }
                }
            }
            }
        }
        }
         for(var each in chanel){
        var smentsarr = []
        for(var entry in chanel[each].sments){
          smentsarr.push((chanel[each].sments[entry].pos - chanel[each].sments[entry].neg))
        }
        chanel[each]['smentarr'] = smentsarr
    }    
    
        var maxword = Object.keys(wordcountobj).reduce(function(a, b){ return wordcountobj[a] > wordcountobj[b] ? a : b });
        
        
        var maxKey = Object.keys(chanel).reduce(function(a, b){ return chanel[a].topic_count > chanel[b].topic_count ? a : b });
        var minKey = Object.keys(chanel).reduce(function(a, b){ return chanel[a].topic_count < chanel[b].topic_count ? a : b });
        
          var maxNegKey = Object.keys(chanel).reduce(function(a, b){ return (chanel[a].negativemeg/chanel[a].topicwords.length) > (chanel[b].negativemeg/chanel[b].topicwords.length) ? a : b });
        
        var maxPosKey = Object.keys(chanel).reduce(function(a, b){ return (chanel[a].positivemeg/chanel[a].negativemeg) > (chanel[b].positivemeg/chanel[a].negativemeg) ? a : b });
        
        var neuKey = Object.keys(chanel).reduce(function(a, b){ return (chanel[a].positivemeg/chanel[a].negativemeg) > (chanel[b].positivemeg/chanel[a].negativemeg) ? a : b });
       
        chanel['maxKey'] = maxKey;
        chanel['maxKeyVal'] = chanel[maxKey].topic_count
        chanel['minKey'] = minKey;
        chanel['minKeyVal'] = chanel[minKey].topic_count
        chanel['maxword'] = maxword
        chanel['maxNegKey'] = maxNegKey
        chanel['maxNegKeyVal'] = ((chanel[maxNegKey].negativemeg/chanel[maxNegKey].topicwords.length)*100).toFixed(1)
        chanel['maxPosKey'] = maxPosKey
        chanel['maxPosKeyVal'] = ((chanel[maxPosKey].positivemeg/chanel[maxPosKey].topicwords.length)*100).toFixed(1)
        
        chanel['neuKey'] = neuKey
        chanel['neuKeyVal'] = ((chanel[neuKey].negativemeg/chanel[neuKey].positivemeg)*100).toFixed(1)
        
         this.setState(chanel); 
            
            
        }
      getdata = (x) => {
    return google.visualization.arrayToDataTable([
      ['Day', 'Score'],
      ['1', this.state[x].smentarr[0]],
      ['2', this.state[x].smentarr[1]],
      ['3', this.state[x].smentarr[2]],
      ['4', this.state[x].smentarr[3]],
      ['5', this.state[x].smentarr[4]],
        ['6', this.state[x].smentarr[5]],
        ['7', this.state[x].smentarr[6]],
    ])
  }
    render(){
        
 var newsie = []
 for(var each in data1){
     newsie.push(each)
 }
        
        
        return (<div>
              
                
       <select style={{marginLeft:'45%'}} onChange={this.topicChange}>
           <option>Select a Topic:</option> 
          {topics.map((value, index) => {
        return <option key={index}>{value}</option>
      })}
        </select>
       <br></br>
      
                
                
            <div className='w3-third w3-margin-top'>
            <div className='w3-card'>
                <div className='w3-padding w3-margin' style={{backgroundColor: "white"}}>
            <div >
                Mentioned most by : 
                <h1 >{this.state.maxKey}</h1>{parseInt(this.state.maxKeyVal / 7)} times per day average
            </div>
                
           </div></div> </div>
        
        <div className='w3-third w3-margin-top'>
            <div className='w3-card' >
                <div className='w3-padding w3-margin' style={{backgroundColor: "white"}}>
            
                Most Mentioned Word :
                <h1 >{this.state.maxword} </h1>
                is the most used word
            
                
           </div></div> </div>
                
                <div className='w3-third w3-margin-top'>
            <div className='w3-card'>
                <div className='w3-padding w3-margin' style={{backgroundColor: "white"}}>
            <div >
                Mentioned least by :
                <h1 >{this.state.minKey}</h1>{parseInt(this.state.minKeyVal / 7)} times per day average
            </div>
                
           </div></div> </div>
                
                <div className='w3-third w3-margin-top'>
            <div className='w3-card'>
                <div className='w3-padding w3-margin' style={{backgroundColor: "white"}}>
            <div >
                <h1 >{this.state.maxNegKey}</h1> was most negative ({this.state.maxNegKeyVal}% negative words)
            </div>
                
           </div></div> </div>
                
                <div className='w3-third w3-margin-top'>
            <div className='w3-card'>
                <div className='w3-padding w3-margin' style={{backgroundColor: "white"}}>
            <div >
                <h1 >{this.state.maxPosKey}</h1> was most positive ({this.state.maxPosKeyVal}% positive words)
            </div>
                
           </div></div> </div>
                
                 <div className='w3-third w3-margin-top'>
            <div className='w3-card'>
                <div className='w3-padding w3-margin' style={{backgroundColor: "white"}}>
            <div >
                <h1 >{this.state.neuKey}</h1> was most neutral 
            </div>
                
           </div></div> </div>
                
                <div style={{backgroundColor:'white'}}>
                {newsie.map((value, index) => {
        return (<div className='w3-third w3-margin-top'>
            <div className='w3-card'>
                <div className='w3-padding w3-margin' style={{backgroundColor: "white"}}>
            <div >
                <div className="w3-bar"><h3 key={index}>{value}</h3> </div>
                <div className="w3-row">
                    <div className="w3-third w3-container">Avg Daily Mentions<h6>{parseInt(this.state[value].topic_count/7)}</h6></div>
                    <div className="w3-third w3-container">% Mentions<h6>{((this.state[value].topic_count/this.state[value].totalheads)*100).toFixed(1)}%</h6></div>
                    <div className="w3-third w3-container">Sentiment Scores<h6>{this.state[value].positivemeg-this.state[value].negativemeg}</h6></div>
                
                </div>
                <div id={index}>
                    
                {createchart(document.getElementById(index),this.getdata(value))}
                </div>
            </div>
                
           </div></div> </div>)
      })}
                </div>
        </div>)
    }
}

ReactDOM.render(<Most />, elementsplace);                     
                            });
                        });
                    });
                });
            });
        });
    });

