
var GAS = [  'Ásta Margrét Guðnadóttir',
 'Dagbjört Hekla Jakobsdóttir',
 'Dagur Þór Kjartansson',
 'Día Rós Óskarsdóttir',
 'Einar Berg Árnason',
 'Emma Ósk Gunnarsdóttir',
 'Enok Ylur Jónasson',
 'Eyþór Máni Elísuson',
 'Gabríel Annas Ágústsson',
 'Halldór Óli Arnarson',
 'Heiða María Hannesdóttir',
 'Helga Katrín Grétarsdóttir',
 'Ísak Andri Tryggvason',
 'Jóhanna Lilja Þórarinsdóttir',
 'Jón Ottó Geirsson',
 'Logi Freyr Gunnlaugsson',
 'Óðinn Andri Andersen',
 'Sara Kristinsdóttir',
 'Skúli Konráðsson',
 'Sóldís Inga Gunnarsdóttir'
];

var IO = [
 'Andrea Arnoddsdóttir',
 'Anton Örn Bjarnason', 
 'Berglind Erla Baldursdóttir', 
 'Bruno Erik Schirmacher Jónsson', 
 'Brynja Lóa Bjarnþórsdóttir', 
 'Eyþór Björn Emilsson', 
 'Gunnar Orri Ingvason', 
 'Hlynur Kristófer Friðriksson', 
 'Jökull Breki Þórhallsson', 
 'Karen Jónsdóttir',
 'Lilja Sól Helgadóttir',
 'Logi Geirsson',
 'Markús Ingi Ingvarsson', 
 'Mikael Rafn Líndal Hjartarson', 
 'Patrekur Goði Ingvason', 
 'Patrik Þór Leifsson', 
 'Stefán Máni Hjartarson',
 'Tanja Rut Sveinbjörnsdóttir',  
 'Tristan Máni Tómasson', 
 'Wiktor Sobczynski',  
 'Þóra María Egilsdóttir'  
];
var EE = [

];
var GG = [

];
var STÆ = [
 'Andrea Arnoddsdóttir' ,
 'Anton Örn Bjarnason'  , 
 'Ásta Margrét Guðnadóttir' ,  
 'Bjarki Már Ágústsson' , 
 'Dagbjört Hekla Jakobsdóttir'  , 
 'Día Rós Óskarsdóttir' ,  
 'Emilía Sara Kristjánsdóttir' , 
 'Enok Ylur Jónasson' , 
 'Eyþór Björn Emilsson' , 
 'Eyþór Máni Elísuson' ,  
 'Helga Katrín Grétarsdóttir',  
 'Karen Dæja Guðbjartsdóttir' , 
 'Kristján Viktor Steinarsson'  ,
 'Logi Freyr Gunnlaugsson' ,  
 'Markús Ingi Ingvarsson' ,  
 'Skúli Konráðsson',  
 'Sóldís Inga Gunnarsdóttir' ,  
 'Stefán Máni Hjartarson'  ,
 'Þorleifur Aron Bjarkason'  
];
var nem;

function newHomework(){
	
	finnaBekk();	
	for(var i=0;i<5;i++){
		for (var j=0;j<25;j++){
			var random = Math.floor(Math.random()*(nem.length));
			if(nem[random] !== 'done'){ 
				document.getElementById('nafnDisplay'+String(i+1)).innerHTML = nem[random];
				nem[random] = 'done';
				break;
			}
		}
	}
}	

function finnaBekk(){
	var bekkur = document.getElementById("Bekkur").value;
	switch(bekkur){
		case "GAS": 
			nem = GAS;
			break;
		case "IO": 
			nem = IO;
			break;
		case "EE": 
			nem = EE;
			break;
		case "GG": 
			nem = GG;
			break;
		case "STÆ": 
			nem = STÆ;
			break;
		default:
			nem = "Hæ";
		
	
	}	
}
