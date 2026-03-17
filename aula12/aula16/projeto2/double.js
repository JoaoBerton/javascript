    function tabuada() {
            const number = Number(document.getElementById("tabdef").value);
            const select = document.getElementById("exib.tab");

            select.innerHTML = "";

            if (!number) {
                alert('[ERRO] Digite um número!');
                return;
            }

            for (let i = 1; i <= 10; i++) {
                const option = document.createElement("option");
                option.text = `${number} x ${i} = ${number * i}`;
                select.add(option);
            }
        }