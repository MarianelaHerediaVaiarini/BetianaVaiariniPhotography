import { CardServiceInreface } from '../interfaces/card-service.interface';

export const availableServices = (): CardServiceInreface[] => {
  return [
    {
      title: 'Baby',
      subTitle:
        'Descubre la magia de su crecimiento en cada sonrisa. Sesiones al aire libre para bebés de 7 meses a 2 años, llenas de ternura y alegría.',
      urlRedirect: '/baby',
      image: 'kids/image1.jpg',
    },
    {
      title: 'Kids',
      subTitle:
        'Capturamos la magia de sus mejores aventuras. Sesiones infantiles al aire libre, ideales para atesorar cada cumpleaños y etapa especial.',
      urlRedirect: '/kids',
      image: 'kids/image2.jpg',
    },
    {
      title: 'Family',
      subTitle:
        'La magia de congelar el tiempo, para permitirnos viajar en el tiempo cada vez que queramos. Sesiones familiares al aire libre para crear recuerdos eternos.',
      urlRedirect: '/family',
      image: 'family/family.png',
    },
    {
      title: 'Maternity',
      subTitle:
        'Capturamos la belleza de la espera en escenarios naturales. Sesiones de embarazo al aire libre, para atesorar este vínculo único.',
      urlRedirect: '/maternity',
      image: 'maternity/DSC_8654.1jpg.jpg',
    },
  ];
};
