document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a FETCH e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     // Leer las variables
     const origen = document.getElementById('origen');
     const origenSeleccionado = origen.options[origen.selectedIndex].value;

     const genero = document.getElementById('genero');
     const generoSeleccionado = genero.options[genero.selectedIndex].value;

     const cantidad = document.getElementById('numero').value;

     let url = '';
     url += 'https://randomuser.me/api/?';
     // Si hay origen le agrego la URL
     if (origenSeleccionado !== '') {
          url += `nat=${origenSeleccionado}&`;
     }
     // Si hay un genero le agrego la URL
     if (generoSeleccionado !== '') {
          url += `gender=${generoSeleccionado}&`;
     }
     // Si hay una cantidad le agrego la URL
     if (cantidad !== '') {
          url += `results=${cantidad}`;
     }

     // Código de FETCH API AQUI
     fetch(url)
          .then(function(res) {
               if (res.status === 200) {
                    return res.json();
               }
          })
          .then(function(nombres) {
                    nombres = nombres.results
                    // Generar HTML
                    let htmlNombres = '<h2>Nombres Generados</h2>';
          
                    htmlNombres += '<ul class="lista">';
                    // Imprimir cada nombre
                    nombres.forEach(function(nombre) {
                         htmlNombres += `
                                        <li>${nombre.name.first}</li>
                         `;
                    })
                    htmlNombres += '</ul>';
                    document.getElementById('resultado').innerHTML = htmlNombres;
          })
          .catch(function(error) {
               console.log(error);
          })
     }