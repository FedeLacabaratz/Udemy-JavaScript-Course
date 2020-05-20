document.querySelector('#generar-nombre').addEventListener('submit', cargarNombres);

// Llamado a FETCH e imprimir resultados
function cargarNombres(e) {
     e.preventDefault();

     // Leer las variables
     const origen = document.getElementById('origen');
     const origenSeleccioado = origen.options[origen.selectedIndex].value;

     const genero = document.getElementById('genero');
     const generoSeleccioado = genero.options[genero.selectedIndex].value;

     const cantidad = document.getElementById('numero').value;

     let url = '';
     url += 'https://randomuser.me/api/?';
     // Si hay origen le agrego la URL
     if (origenSeleccioado !== '') {
          url += `nat=${origenSeleccioado}&`;
     }
     // Si hay un genero le agrego la URL
     if (generoSeleccioado !== '') {
          url += `gender=${generoSeleccioado}&`;
     }
     // Si hay una cantidad le agrego la URL
     if (cantidad !== '') {
          url += `results=${cantidad}`;
     }

     // Código de FETCH API AQUI
     fetch(url)
          .then(res => {
               if (res.status === 200) {
                    return res.json();
               }
          })
          .then(nombres => {
                    nombres = nombres.results
                    // Generar HTML
                    let htmlNombres = '<h2>Nombres Generados</h2>';
          
                    htmlNombres += '<ul class="lista">';
                    // Imprimir cada nombre
                    nombres.forEach(nombre => {
                         htmlNombres += `
                                        <li>${nombre.name.first}</li>
                         `;
                    })
                    htmlNombres += '</ul>';
                    document.getElementById('resultado').innerHTML = htmlNombres;
          })
          .catch(error => console.log(error))
     }