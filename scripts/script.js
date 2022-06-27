function card(name,description,image){
    this.name =name;
    this.description = description;
    this.image = image;
}

var deck =[
    new card('Colgado', 'Simboliza el retorno, estar en suspenso, estancamiento, parálisis, abandono, postergación de planes o el sacrificio por algo. También representa el altruismo, la abnegación y el desinterés por las cosas mundanas. Es señal de pasividad y de dejar las cosas quietas, así como están', 'colgado'), 
    new card('Diablo','Representa al ser humano que está atado a los deseos materiales, los vicios y la materia. Suele representar el materialismo, la lujuria, la degradación y los excesos.','diablo'),
    new card('El Carro','es la fuerza, la valentía y el empuje bien aspectados. Lleva implícita la energía de la victoria','el-carro'),
    new card('EL LOCO','es quien va perdido y sin rumbo; se trata de una criatura que parece no vivir en la realidad; una criatura a quien nadie toma en serio y que vaga de un lado a otro, aparentemente sin saber qué busca ni adónde quiere llegar','EL-LOCO'),
    new card('El mundo',' representa el esfuerzo, la experiencia, la constancia y el sentido práctico, que culminan en un reconocimiento social. También puede significar lentitud o hacer referencia a la etapa de la vejez','elmundo'),
    new card('Emperador','Representa el control autoritario mediante la inteligencia. Poder mundano, capacidad, confianza, riqueza, estabilidad, autoridad, espirita indomable, padre, hermano, esposo, influencia masculina, presión directa, comunicación, convicción, fuerza, consecución de metas','emperador'),
    new card('Ermitaño','representa la introspección, la meditación en solitario, la necesidad de autoconocimiento, de retiro del mundo para entender mejor lo aprendido y asimilarlo','ermitano'),
    new card('Estrella','juventud, fuerza mental, claridad en las ideas, suerte, similitud en las ideas, resplandor, comunicación, conexión intelectual o mental, valores sentimentales o prioridades afectivas','estrella'),
    new card('Fuerza',' representa la resistencia o, más bien, la resiliencia, el impulso o voluntad de sobrevivir, el deseo en sí mismo de vivir. La capacidad para vencer obstáculos. El poder de la mente sobre la materia, de la inteligencia sobre la fuerza bruta','fuerza'),
    new card('Juicio','nos está llamando y reclamando que es el momento de trascender y pasar al siguiente nivel y para ello antes debemos abandonar totalmente todo lo que no sirve. Es como la alegoría del juicio final que viene representada en la carta','juicio'),
    new card('Justicia','se refiere a la justicia, a la imparcialidad, a la lógica, al equilibrio en la relación con los demás. En una lectura, esta Carta es bastante positiva cuando se direcciona a los negocios, sociedades y sociedades','justicia'),
    new card('LA EMPERATRIZ','representa a la gran creadora, a la madre. Es símbolo de inteligencia y sabiduría, de fertilidad y seguridad material, pero, sobre todo, de inteligencia emocional. Y, en especial, del amor incondicional','LA-EMPERATRIZ'),
    new card('La torre','la aparición de cambios arrasadores, implica ir hacia adelante y hacia la verdad sin miramientos ni contemplaciones. Es un rayo del cielo, un incendio, terremoto o grietas','la-torre'),
    new card('los enamorados','indica nacimientos o casamientos, el amor de pareja y la llegada de relaciones afectivas, sin embargo, también simboliza el vernos contrariados a tomar una decisión crucial en nuestra vida, que será elegida desde la emotividad','los-enamorados'),
    new card('luna','está asociada con la entidad atómica desconocida, la seguridad en la oscuridad y con el asiento del alma y con la eternidad. Lo que ocultas o te ocultan, son nuestros dolores que a pesar de que duelen, brillas, pero siguen ahí','luna'),
    new card('mago','epresenta a una persona hábil, trabajadora, confiable, honesta y segura de sus capacidades. Hace referencia a una etapa de vida con cambios favorables, nuevos comienzos y acciones que pueden llevar a logros fundamentales','mago'),
    new card('muerte',' representa literalmente la muerte física y no necesariamente es un vaticinio negativo. La Muerte presenta el cambio (de acuerdo con A.E. Waite y Eden Gray), el fin de un ciclo y el resurgimiento de otro. Por ende, la muerte no debe ser temida','muerte'),
    new card('papa','representa el conocimiento y la educación. Cuando esta Carta sale en una lectura del Tarot, da la indicación de que los valores tradicionales son adecuados para cualquier tipo de acción, pero también indica que la persona debe escuchar lo que le dice su "Yo" interior.','papa'),
    new card('rueda fortuna',' generalmente representa el vaivén de la vida, el Destino y el Karma.','ruedafortuna'),
    new card('sol','implica brillo, luz, calor, centro de vida, poder de dar vida y energía positiva','sol'),
    new card('templanza','Representa la concordia, la espiritualidad y la mentalidad positiva; además de los valores más elevados que lo material. Implica también elevación y captación del bien','templanza'),


];
function getRandom(num){
    var randomNumber = Math.floor(Math.random() * num);
    return randomNumber;
}
document.getElementById("draw").onclick = function(){
    var index = getRandom(20);
    var currentCard = deck[index];
    document.getElementById("display").innerHTML = '<img src="/images/'+ currentCard.image + '.jpg"><h3>'+ currentCard.name + '</h3><p>' + currentCard.description + '</p>';
}