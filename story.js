let apple = new Apple(10);
let adam = new Human('Adam','male',55);
let eva = new Human('Eva','female',45);

adam.say("Hi, I'm Adam :> My gender is "+adam.getGender());
eva.say("Hi, I'm Eva :> My gender is "+eva.getGender());

document.write("Apple weight is: "+apple.getWeight()+"kg.<br><br>");
while(!apple.isEmpty()){
    document.write("Adam eat!<br>");
    adam.eat(apple);
    document.write("Adam weight: "+adam.getWeight()+"<br>");
    document.write("Apple weight is: "+apple.getWeight()+"kg.<br><br>");
    document.write("Eva eat!<br>");
    eva.eat(apple);
    document.write("Eva weight: "+eva.getWeight()+"<br>");
    document.write("Apple weight is: "+apple.getWeight()+"kg.<br><br>");
}