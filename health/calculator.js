

function impl(pdescr,pminval,pmaxval)
{
	this.descr=pdescr;
	this.minval=pminval;
	this.maxval=pmaxval;
}

function custLog(x,base) {
	// Created 1997 by Brian Risk.  http://members.aol.com/brianrisk
	return (Math.log(x))/(Math.log(base));
}

function bodyfatanalyzer() {

//	alert("fat");
	//FOR MAN
	var h=document.getElementsByName("height")[0].value;
	var w=document.getElementsByName("waist")[0].value;
	var n=document.getElementsByName("neck")[0].value;
	var hips=document.getElementsByName("hips")[0].value;
	var bbbodyfat=0.0;
	var implicationsmen = new Array();
	implicationsmen.push(new impl("%, el cual indica que est�s dentro del rango aceptable; sin embargo, todav�a tienes que perder un exceso de grasa para poder alcanzar tu �ptima condici�n f�sica o un nivel mejor. Por ejemplo, si actualmente pesas 90.7 kilos con un 20% de grasa, entonces tienes 18.1 kilos de grasa en tu cuerpo. Para alcanzar el punto donde puedas ver claramente tus m�sculos abdominales y tener un cuerpo definido, es muy probable que tengas que bajar tu porcentaje de grasa corporal a alrededor de un 10%. Es decir, deber�as de perder 9 kilos. En lugar de solo enfocarte en bajar de peso, la manera m�s r�pida y m�s permanente para lograr esto ser�a utilizar las t�cnicas del Incinerador de Grasa para agregar 4.5 � m�s kilos de m�sculo delgado a tu cuerpo, lo cual provocar�a que perdieras 4.5 � m�s kilos de grasa. Ahora potencialmente podr�as pesar lo mismo, pero tu cuerpo estar�a compuesto por solo 4.5 kilos de grasa y de manera efectiva habr�as �reducido por la mitad tu porcentaje de grasa!",18,24)); //between 18 and 24 insert message here
    implicationsmen.push(new impl("%, el cual indica que est�s en el rango de obesidad y debes de comenzar a reducir tu grasa corporal tan pronto como sea posible (no solo por cuestiones de apariencia f�sica, sino por tu salud, que es lo m�s importante). Por ejemplo, si actualmente pesas 113.4 kilos con un 28% de grasa corporal, tienes alrededor de 31.7 kilos de grasa en tu cuerpo. Para alcanzar el punto donde puedas ver claramente tus m�sculos abdominales y tener un cuerpo definido, es muy probable que tengas que bajar tu porcentaje de grasa corporal a alrededor de un 10%. Esto implicar�a una p�rdida de grasa de 20.4 kilos. En lugar de solo enfocarte en bajar de peso, la manera m�s r�pida y m�s permanente para lograr esto ser�a utilizar las t�cnicas del Incinerador de Grasa para agregar 6.8 � m�s kilos de m�sculo delgado a tu cuerpo, lo cual provocar�a que perdieras 13.6 � m�s kilos de grasa. Ahora potencialmente podr�as pesar 6.8 kilos menos, pero tu cuerpo estar�a compuesto por solo 11.3 kilos de grasa y de manera efectiva �habr�as disminuido tu grasa corporal casi un 18%!",25,null));
    implicationsmen.push(new impl("%, el cual indica que por lo menos est�s en el rango de buena o mejor condici�n f�sica. Sin embargo, al igual que pasa con todos los m�todos para medir la grasa corporal, existe la probabilidad de que hay un peque�o porcentaje de error en cualquier direcci�n. Esto es importante porque implica que aunque tengas un buen nivel de condici�n f�sica o una lectura mejor con este analizador, a�n as� har�as bien en disminuir tu grasa corporal para tener una m�xima salud y esa apariencia delgada y en forma.",null,18));

    var implicationswomen = new Array();
    implicationswomen.push(new impl("%, el cual indica que por lo menos est�s en el rango de buena o mejor condici�n f�sica. Sin embargo, al igual que pasa con todos los m�todos para medir la grasa corporal, existe la probabilidad de que hay un peque�o porcentaje de error en cualquier direcci�n. Esto es importante porque implica que aunque tengas un buen nivel de condici�n f�sica o una lectura mejor con este analizador, a�n as� har�as bien en disminuir tu grasa corporal para tener una m�xima salud y esa apariencia delgada y en forma.",null,25));
    implicationswomen.push(new impl("%, el cual indica que est�s dentro del rango aceptable; sin embargo, todav�a tienes que perder un exceso de grasa para poder alcanzar una �ptima condici�n f�sica o un nivel mejor. Por ejemplo, si actualmente pesas 68.0 kilos con un 28% de grasa, entonces tienes 19.0 kilos de grasa en tu cuerpo. Para alcanzar el punto donde puedas ver claramente un abdomen, cadera, muslos duros y una figura definida, es muy probable que tengas que bajar tu porcentaje de grasa corporal a alrededor de un 18%. Esto significar�a una p�rdida de grasa de 6.8 kilos. En lugar de solo enfocarte en bajar de peso, la manera m�s r�pida y m�s permanente para lograr esto ser�a utilizar las t�cnicas del Incinerador de Grasa para agregar 2.2 � m�s kilos de m�sculo delgado y sexy a tu cuerpo, lo cual provocar�a que perdieras 4.5 � m�s kilos de grasa. Ahora potencialmente podr�as pesar 4.5 kilos, pero tu cuerpo estar�a compuesto por solo 12.2 kilos de grasa y de manera efectiva habr�as disminuido tremendamente tu porcentaje de grasa!",25,31));
    implicationswomen.push(new impl("%, el cual indica que est�s en el rango de obesidad y debes de comenzar a reducir tu grasa corporal tan pronto como sea posible (no solo por cuestiones de apariencia f�sica, sino por tu salud que es lo m�s importante). Por ejemplo, si actualmente pesas 90.7 kilos con un 35% de grasa corporal, tienes alrededor de 31.7 kilos de grasa en tu cuerpo. Para alcanzar el punto donde puedas ver claramente un abdomen, cadera, muslos duros y una figura definida, es muy probable que tengas que bajar tu porcentaje de grasa corporal a alrededor de un 18%. Esto implicar�a una p�rdida de grasa de 15.4 kilos. En lugar de solo enfocarte en bajar de peso, la manera m�s r�pida y m�s permanente para lograr esto ser�a utilizar las t�cnicas del Incinerador de Grasa para agregar 4.5 � m�s kilos de m�sculo delgado a tu cuerpo, lo cual provocar�a que perdieras 11.3 � m�s kilos de grasa. Ahora potencialmente podr�as pesar solo 9.0 kilos menos, pero tu cuerpo estar�a compuesto por solo 16.3 kilos de grasa y de manera efectiva �habr�as disminuido tu grasa corporal por la mitad!",32,null)); //above 32
	
	var pointertoarray;	
	
	if (document.getElementsByName("genre")[0].checked==true) {
		 bbbodyfat=(495/(1.0324-0.19077*(custLog(w*1.00-n*1.00,10))+0.15456*(custLog(h*1.00,10)))-450);
		pointertoarray = implicationsmen;

	}
	else {
		bbbodyfat=(495/(1.29579-0.35004*(custLog(w*1.00+hips*1.00-n*1.00,10))+0.221*(custLog(h*1.00,10)))-450);
		pointertoarray = implicationswomen;
	}
	
	bbbodyfat = roundNumber(bbbodyfat,2);
	document.getElementsByName("bodyfat")[0].value=bbbodyfat + " %";
	document.getElementsByName("implication")[0].value="";
	for (var ki=0;ki<pointertoarray.length;ki++) {
		if (pointertoarray[ki].minval!=null && pointertoarray[ki].maxval!=null && bbbodyfat >= pointertoarray[ki].minval && bbbodyfat <= pointertoarray[ki].maxval) {
			document.getElementsByName("implication")[0].value="Tu grasa corporal est� entre " + pointertoarray[ki].minval + " and " +  pointertoarray[ki].maxval;
			document.getElementsByName("implication")[0].value+=pointertoarray[ki].descr;
			break;
		}
		else if(pointertoarray[ki].minval==null && bbbodyfat <= pointertoarray[ki].maxval) {
			document.getElementsByName("implication")[0].value="Tu grasa corporal es menor de " + pointertoarray[ki].maxval;
			document.getElementsByName("implication")[0].value+=pointertoarray[ki].descr;
			break;
		}
		else if(pointertoarray[ki].maxval==null && bbbodyfat > pointertoarray[ki].minval){
			document.getElementsByName("implication")[0].value="Tu grasa corporal est� por arriba de " + pointertoarray[ki].minval;
			document.getElementsByName("implication")[0].value+=pointertoarray[ki].descr;
			break;
		}
	}		
}

function metabolic_rate_calculator() {
	var h=document.getElementsByName("height")[0].value;
	var weight=document.getElementsByName("weight")[0].value;
	var age=document.getElementsByName("age")[0].value;
	var activitylevel=document.getElementsByName("activity")[0].value;

	if (document.getElementsByName("genre")[0].checked==true) {
//FOR MEN
		var metabolicrate=activitylevel*(66+(5.00*h)+(13.7*weight)-(6.8*age));
		var bodyfatloss1=metabolicrate-800;
		var bodyfatloss2=metabolicrate-500;
		
	}
	else {
		var metabolicrate=activitylevel*(655+(1.80*h)+(9.60*weight)-(4.7*age));
		var bodyfatloss1=metabolicrate-600;
		var bodyfatloss2=metabolicrate-400;
	}
	metabolicrate = roundNumber(metabolicrate,2);
	bodyfatloss1=roundNumber(bodyfatloss1,2);
	bodyfatloss2=roundNumber(bodyfatloss2,2);
	
	document.getElementsByName("metabolicrate")[0].value=metabolicrate;
	document.getElementsByName("bodyfatone")[0].value=bodyfatloss1;
	document.getElementsByName("bodyfattwo")[0].value=bodyfatloss2;
}

function togglegenre(g) {
	if (g.value=="woman") {
		document.getElementsByName("hips")[0].style.visibility="visible";
	}
	else {
		document.getElementsByName("hips")[0].style.visibility="hidden";
	}
}

function roundNumber(num, dec) {
	var result = Math.round(num*Math.pow(10,dec))/Math.pow(10,dec);
	return result;
}
