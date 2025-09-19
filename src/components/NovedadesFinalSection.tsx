const NovedadesFinalSection = () => {
  const novedades = [
    {
      id: 1,
      titulo: "CURSO DE ESPECIALIZACION EN MEDIACION FAMILIAR",
      subtitulo: "Abierta la inscripci n. Cupos Limitados",
      descripcion: "Informes e inscripci n a trav s de la web: humanita.ong@gmail.com o telef nicamente Tel: (0343) 4231057 / Cel: 0343-4667788 - Paran - Entre R os\nInvitamos a todos los interesados en el tema a sumarse a tan interesante propuesta."
    },
    {
      id: 2,
      titulo: "Taller de Casos para los Mediadores Penales",
      subtitulo: "Evaluaci n y revisi n de pr ctica",
      descripcion: "Inscripciones a trav s de la web: humanita.ong@gmail.com o telef nicamente Tel: (0343) 4231057 / Cel: 343-4667788\nNueva sede Cervantes 574, entre Catamarca Y Santiago del Estero. (Parana)."
    },
    {
      id: 3,
      titulo: "Diplomatura en Mediacion Penal",
      subtitulo: "En convenio con la Universidad de Lomas de Zamora",
      descripcion: "Inscripciones a trav s de la web: humanita.ong@gmail.com o telef nicamente Tel: (0343) 4231057 / Cel: 343-4667788\nNueva sede Cervantes 574, entre Catamarca Y Santiago del Estero. (Parana)."
    },
    {
      id: 4,
      titulo: "Mediacion Comunitaria",
      subtitulo: "Mediacion",
      descripcion: "Inscripciones a trav s de la web: humanita.ong@gmail.com o telef nicamente Tel: (0343) 4231057 / Cel: 343-4667788\nNueva sede Cervantes 574, entre Catamarca Y Santiago del Estero. (Parana)."
    },
    {
      id: 5,
      titulo: "Formaci n de Mediadores Capacitadores",
      subtitulo: "Formaci n",
      descripcion: "Inscripciones a trav s de la web: humanita.ong@gmail.com o telef nicamente Tel: (0343) 4231057 / Cel: 343-4667788\nNueva sede Cervantes 574, entre Catamarca Y Santiago del Estero. (Parana)."
    }
  ];

  return (
    <div className="bg-inherit bg-black/15 p-5 radius-lg ">
      <h4 className="text-lg font-semibold mb-4">Últimas Novedades</h4>
      <div className="space-y-4 max-h-60 overflow-y-auto pr-2 scrollbar scrollbar-w-2 scrollbar-thumb-white scrollbar-track-transparent scrollbar-thumb-rounded">
        {novedades.map((novedad, index) => (
          <div key={novedad.id}>
            <article className="text-sm">
              <h5 className="font-bold text-primary-foreground">{novedad.titulo}</h5>
              <h6 className="text-xs text-primary-foreground/80 mb-1">{novedad.subtitulo}</h6>
              <p className="text-xs text-primary-foreground/60">{novedad.descripcion.substring(0, 100)}...</p>
            </article>
            {index < novedades.length - 1 && <hr className="my-4 border-primary-foreground/20" />}
          </div>
        ))}
      </div>
    </div>
  );
};

export default NovedadesFinalSection;