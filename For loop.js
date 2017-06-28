var Cars= ["2015 NISSAN GTR", "2015 SUBARU STi", "2017 BMW i3", "2016 CORVETTE Z06", "2015 BUGATTI Veyron 16.4","2015 SUBARU WRX", "2015 FERRARI 458 Spider", "2002 TOYOTA Supra A80", "2013 DODGE Challenger SRT8", "2016 CHEVROLET Camaro SS", "2016 CHEVROLET Mustang", "2012 Aston Martin DBS", "2017 PORSCHE 911 Turbo S", "2016 JAGUAR F-Type", "2016 MCLAREN 570s", "2017 ACURA NSX", "2016 SPYKER C8 Aileron", "KOENIGSEGG Regera"];

var CarsH= ["Horsepower: 545 to 600 hp","Horsepower: 305 hp","Horsepower: 170 hp","Horsepower: 650 hp", "Horsepower: 1000","Horsepower: 268 to 305 hp", "Horsepower: 570 hp", "Horsepower: 220 to 320 hp", "Horsepower: 470 hp", "Horsepower: 455 hp", "Horsepower: 300 to 435 hp", "Horsepower: 510 hp", "Horsepower: 370 to 580 hp", "Horsepower:	580 hp", "Horsepower: 562 hp", "Horsepower: 573 hp", "Horsepower: N/A", "Horsepower: 700 hp", "Horsepower: 1500 hp"]

var CarsCW=["Curb Weight: 3,827 to 3,844 lbs","Curb Weight: 3,386 lbs","Curb Weight: 2,799 lbs","Curb Weight: 3,524 to 3,582 lbs","Curb Weight: 4300 lbs", "Curb Weight: 3,267 to 3,450 lbs", "Curb Weight: 3,384 lbs", "Curb Weight: 3218 to 3485 lbs", "Curb Weight: 4,170 lbs", "Curb Weight: 3760 lbs", "Curb weight: 3,469 to 3,825 lbs", "Curb Weight: 3,737 to 4,078 lbs", "Curb Weight: 3,153 to 3,682 lbs", "Curb weight: 3,527 to 3,682 lbs", "Curb Weight: 3,186 lbs", "Curb weight: 3,803 lbs", "Curb Weight: N/A", "Churb Weight: 1,590 kg"]

var CarsE=["Engine: 3.8 L V6","Engine: 2.5 L 4-cylinder","Engine: Electric","Engine: 6.2 L V8","Engine:8.0 L W16", "Engine: 2/2.5 L 4-cylinder", "Engine: 4.5 L V8i" , "Engine: 3.0 L 2JZ-GE/GTE I6", "Engine: 6.4 L V8", "Engine: 6.2 L V8", "Engine: 3.7 L V6", "Engine: 6.0 L V12", "Engine: 3.8 L 6-cylinder", "Engine: 3.0 L V6", "Engine: 3.8 L V8", "Engine: 3.5 L V6", "Engine: 4.2 L 90° V8", "Engine: 5.0 L V8" ]

var CarsM=["MPG: 16 city / 23 highway","MPG: 17 city / 23 highway","MPG: 137 city / 111 highway","MPG: Up to 15 city / 22 highway","MPG: 7 city / 10 highway", "MPG: 21 city / 28 highway", "MPG: 13 city / 17 highway", "MPG: N/A", "MPG: 14 city / 23 highway", "MPG: 16 city / 26 highway", "MPG: 22 city / 31 highway","MPG: 12 city / 18 highway", "MPG: 22 city / 30 highway", "MPG: 19 city / 24 highway", "MPG: 16 city / 23 highway", "MPG: 21 city / 22 highway", "MPG: N/A", "MPG: N/A"]

for (i=0; i<Cars.length; i++){
	document.write("<center>"+"<p id=text>"+i+"." +Cars[i]+"<br>"+CarsH[i]+"<br>"+CarsCW[i]+"<br>"+CarsE[i]+"<br>"+CarsM[i]+"<br>"+"<img src= EPICCARS/img/" +i+ ".jpg width=400px >" +"<br>"+"</p>"+"</center>");
	

	
}

