// Espera a intro sumir
setTimeout(initMap, 2000);

function initMap() {
  document.getElementById('intro').style.display = 'none';

  // Cria mapa centrado em Montenegro
  var map = L.map('map').setView([-29.715, -51.479], 13);

  // Tile layer (OpenStreetMap)
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; OpenStreetMap'
  }).addTo(map);

  // Ícones personalizados
  var iconRoupa = L.icon({iconUrl: 'roupa.png', iconSize: [32, 32]});
  var iconSangue = L.icon({iconUrl: 'sangue.png', iconSize: [32, 32]});
  var iconCabelo = L.icon({iconUrl: 'cabelo.png', iconSize: [32, 32]});

  // PONTOS DE DOAÇÃO (vindo do JSON)
  var pontos = [
    {
      tipo: 'roupa',
      nome: 'ONG Roupa Solidária',
      endereco: 'R. Treze de Maio, 655 - Centenário, Montenegro - RS, 95780-000',
      horario: 'Seg-Sex: 9h-17h',
      coordenadas: [-29.670723548154424, -51.46417260446779]
    },
    {
      tipo: 'sangue',
      nome: 'Hemocentro Montenegro',
      endereco: 'Estr. Maurício Cardoso, 1970 - Panorama, Montenegro - RS, 95780-000',
      horario: 'Seg-Sex: 8h-16h',
      coordenadas: [-29.66984054560421, -51.464593880464435]
    },
    {
      tipo: 'cabelo',
      nome: 'Salão Solidário',
      endereco: 'Estrada Mauricio Cardoso, BR-287, 3185 - Rui Barbosa, Montenegro - RS, 92510-520',
      horario: 'Sáb-Dom: 10h-15h',
      coordenadas: [-29.670904798720407, -51.46464491570932]
     }
     ];

  // Adiciona pins ao mapa
  pontos.forEach(ponto => {
    var icon;
    if (ponto.tipo === 'roupa') icon = iconRoupa;
    if (ponto.tipo === 'sangue') icon = iconSangue;
    if (ponto.tipo === 'cabelo') icon = iconCabelo;

    L.marker(ponto.coordenadas, {icon: icon})
      .addTo(map)
      .bindPopup(`<b>${ponto.nome}</b><br>${ponto.endereco}<br>${ponto.horario}`);
  });
}
