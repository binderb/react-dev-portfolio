import Project from '../components/Project';

import valence from '../images/preview_Valence.webp';
import shells from '../images/preview_Shells.webp';
import metabolica from '../images/preview_Metabolica.webp';
import pathways from '../images/preview_Axis.webp';
import orbitals from '../images/preview_OrbitalWidget.webp';

export default function Portfolio () {
  const projects = [
    {
      name: 'Valence',
      subtitle: 'Unity / C# / WebGL',
      url: 'http://binderlab.org/resources/valence_1_9_8/',
      image: valence
    },
    {
      name: 'Pathways',
      subtitle: 'Unity / C# / WebGL',
      url: 'http://binderlab.org/resources/axis_1_2_0/',
      image: pathways
    },
    {
      name: 'Shells',
      subtitle: 'JQuery / CSS',
      url: 'http://binderlab.org/app_shells',
      image: shells
    },
    {
      name: 'Metabolica',
      subtitle: 'Unity / C# / WebGL',
      url: 'http://binderlab.org/resources/Metabolica_2_0_0/',
      image: metabolica
    },
    {
      name: 'Orbitals',
      subtitle: 'Unity / C# / WebGL',
      url: 'http://binderlab.org/resources/OrbitalWidget_1_0_6/',
      image: orbitals
    }

  ]
  
  return (
    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
      {projects.map((project) => (
        <Project key={project.name}
          project={project}
        />
      ))}
    </div>
  )
}