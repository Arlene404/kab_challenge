function readFormData(){
    var formData ={};
    formData["Name"]= document.getElementById("Name").value;
    formData["Name2"]= document.getElementById("Name").value;
    formData["Name3"]= document.getElementById("Name").value;
  return formData;
   sum1 = 0,sum2 =0;
    var sortedByValueMap;
  Map.item =
  {
    'Bike':100, 
    'TV':200,
    'Album':10,
    'Book':5, 
    'Phone':500, 
    'Computer':1000
  };
  item.forEach((key, value) => list.add(Product(key, value)));
  return(' Product:$list');
  sortedByValueMap=Map.fromEntries(item.entries.toList().sort((e1,e2)=> e1.value.compareTo(e2.value)));
  return("Sort item:$sortedByValueMap");
  sortedByValueMap.forEach((key,value)=>List2.add(value));
  return('the product cheap is :${sortedByValueMap.keys.toList().first}');
  return('the Expensive product  is :${sortedByValueMap.keys.toList().last}');
 
  return('Sum of total price of product is:$sum1');
  for( let i in Name3){
    sum2 +=j;
  };
  return('The total price of product after removing the ones less than 10 :$sum2');
  }