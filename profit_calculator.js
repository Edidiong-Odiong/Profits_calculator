function gain(a,b,c){
    var capital = parseFloat(a);
    var duration = parseFloat(b);
    var rate = parseFloat(c);
    var cycle=0;
    while(cycle<duration){
        var profit= capital +((rate/100) * capital);
        var capital =profit;
        var cycle = cycle + 1;
    };
    var capital = capital.toFixed(10)
    document.getElementById("show").innerHTML = `<h2 class="screen" id="show">After ${duration} years, you will get $${capital}</h2><br><button class="show_button" id="refresh" onclick="window.location.reload()">Calculate again</button>`;
}
// hmm