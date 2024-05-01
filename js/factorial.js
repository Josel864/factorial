document.write("<h1>FACTORIAL APROXIMADO DE UN NÚMERO GRANDE</h1>")
a = prompt("Introduzca un numero:")
dv = (a / (Math.E)) ** a
mp = 2 * (Math.PI) * a
rz = Math.sqrt(mp)
r = rz * dv
var r2 = r.toFixed(2)
document.write("<h2>Un factorial es un concepto matemático que se utiliza para denotar el producto de todos los números enteros positivos desde 1 hasta un número dado. Se representa con el símbolo de admiración.<h2><br>")
document.write("<h1>El factorial aproximado de " + a + " es: " + r2 + "<br>");
