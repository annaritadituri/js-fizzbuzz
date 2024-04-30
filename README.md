<!--

TRACCIA
Scrivi un programma che stampi in console i numeri da 1 a 100, ma che per i multipli di 3 stampi “Fizz” al posto del numero e per i multipli di 5 stampi “Buzz”. Per i numeri che sono sia multipli di 3 che di 5 stampi “FizzBuzz”.

-->

<!--
CREARE UN CICLO CHE VADA DA 1 A 100
-->
-Utilizzare il ciclo for per stampare i numeri in successione
--Definire una variabile i = 1
---Far ripetere il ciclo fino a i <= 100
    Aggiungere un controllo con if all'interno del ciclo
        SE i % 3 === 0 && i % 5 === 0
            -Stampare "FizzBuzz"
        ELSE SE i % 3 === 0
            -Stampare "Fizz"
        ELSE SE i % 5 === 0
            -Stampare "Buzz"
        ELSE
            -Stampare il valore della variabile i