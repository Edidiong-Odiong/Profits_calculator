function gain(a,b,c){
    var capital = parseInt(a);
    var duration = parseInt(b);
    var rate = parseInt(c);
    var cycle=0;
    while(cycle<duration){
        var profit= capital +((rate/100) * capital);
        var capital =profit;
        var cycle = cycle + 1;
    };
    document.getElementById("show").innerHTML = `<h2 id="show">After ${duration} years, you will get $${capital}</h2><br><button id="refresh" onclick="window.location.reload()">Calculate again</button>`;
}