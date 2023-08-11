const shuffle = () => {
  const assets = [
    { image: '/assets/us.png' },
    { image: '/assets/fr.png' },
    { image: '/assets/arg.png' },
    { image: '/assets/br.png' },
    { image: '/assets/can.png' },
    { image: '/assets/cdv.png' },
    { image: '/assets/ch.png' },
    { image: '/assets/cl.png' },
    { image: '/assets/den.png' },
    { image: '/assets/eg.png' },
    { image: '/assets/mc.png' },
    { image: '/assets/hr.png' },
    { image: '/assets/in.png' },
    { image: '/assets/ir.png' },
    { image: '/assets/it.png' },
    { image: '/assets/mx.png' },
    { image: '/assets/pe.png' },
    { image: '/assets/pg.png' },
    { image: '/assets/pl.png' },
    { image: '/assets/pr.png' },
    { image: '/assets/rm.png' },
    { image: '/assets/ru.png' },
    { image: '/assets/sp.png' },
    { image: '/assets/uk.png' },
    { image: '/assets/ukr.png' },

  ];
  return [...assets, ...assets]
    .sort(() => Math.random() - 0.5)
    .map((card) => ({ ...card, id: Math.random() }));
};

export default shuffle;