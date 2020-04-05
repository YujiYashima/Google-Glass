var quebrado = false;

        function mudaLampada(estado) {


            if (estado == 1) {

                arquivo = "_imagens/lampada-acesa.jpg";
                
            }

            if (estado == 2) {

                arquivo = "_imagens/lampada-apagada.jpg";
                
            }

            if (estado == 3) {

                arquivo = "_imagens/lampada-quebrada.jpg"
                
            }

            if (!quebrado) {
                
                document.getElementById("luz").src = arquivo;

                if (estado == 3) {
                    
                    quebrado = true;

                }
            }

            
        }

        function consertar() {

            quebrado = false;

            mudaLampada();

        }