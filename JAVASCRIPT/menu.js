function toggleMenu() {
    const menu = document.querySelector('.menu');
    menu.classList.toggle('active'); 
}

function omplirDeImatges(gallery, classe, numElements){
    fetch('./RESOURCES/JSON/cotxes.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < numElements; i++) {
                const imgElement = document.createElement('img');
                imgElement.src = `./RESOURCES/IMATGES/10/${data.cotxe[i].imatge}`; 
                imgElement.alt = data.cotxe[i].nom;
                imgElement.classList.add(classe); 
                gallery.appendChild(imgElement);
              }
        })
        .catch(error => {
            
            console.error('Error carregant el JSON:', error);
            for (let i = 1; i < numElements; i++) {
                const imgElement = document.createElement('img');
                imgElement.src = `./RESOURCES/IMAGES/10/cotxe${i}.jpg`; 
                imgElement.alt = `cotxe${i}`
                //imgElement.classList.add(classe); 
                gallery.appendChild(imgElement);
              }

        })
}

function omplirDeImatgesCataleg(gallery, classe, numElements) {
    fetch('./RESOURCES/JSON/cotxes.json')
        .then(response => response.json())
        .then(data => {
            for (let i = 0; i < numElements; i++) {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('img-container'); // Contenidor de la imatge i l'overlay
                
                const imgElement = document.createElement('img');
                imgElement.src = `../RESOURCES/IMATGES/10/${data.cotxe[i].imatge}`; 
                imgElement.alt = data.cotxe[i].nom;
                imgElement.classList.add(classe); 

                const overlay = document.createElement('div');
                overlay.classList.add('overlay');

                const carName = document.createElement('h3');
                carName.innerText = data.cotxe[i].nom;

                const carDescription = document.createElement('p');
                carDescription.innerText = data.cotxe[i].descripcio; // Assegura't que el JSON té aquesta descripció

                const viewMoreButton = document.createElement('button');
                viewMoreButton.innerText = 'Veure més';
                
                overlay.appendChild(carName);
                overlay.appendChild(carDescription);
                overlay.appendChild(viewMoreButton);

                imgContainer.appendChild(imgElement);
                imgContainer.appendChild(overlay);

                gallery.appendChild(imgContainer);
            }
        })
        .catch(error => {
            console.error('Error carregant el JSON:', error);
            for (let i = 1; i < numElements; i++) {
                const imgContainer = document.createElement('div');
                imgContainer.classList.add('img-container');

                const imgElement = document.createElement('img');
                imgElement.src = `../RESOURCES/IMAGES/10/cotxe${i}.jpg`; 
                imgElement.alt = `cotxe${i}`;
                
                const overlay = document.createElement('div');
                overlay.classList.add('overlay');

                const carName = document.createElement('h3');
                carName.innerText = `Cotxe ${i}`;

                const carDescription = document.createElement('p');
                carDescription.innerText = "Descripció no disponible"; 

                const viewMoreButton = document.createElement('button');
                viewMoreButton.innerText = 'Veure més';
                
                overlay.appendChild(carName);
                overlay.appendChild(carDescription);
                overlay.appendChild(viewMoreButton);

                imgContainer.appendChild(imgElement);
                imgContainer.appendChild(overlay);

                gallery.appendChild(imgContainer);
            }
        });
}