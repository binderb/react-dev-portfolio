import Project from '../components/Project';

import shells from '../images/preview_shells.png';
import metabolica from '../images/preview_metabolica.png';
import simpleblog from '../images/preview_simpleblog.png';
import weather from '../images/preview_weather.png';
import tasqmaster from '../images/preview_tasqmaster.png';
import quiz from '../images/preview_quiz.png';

export default function Portfolio () {
  const projects = [
    {
      name: 'Tasqmaster',
      subtitle: 'Express / MySQL',
      url: 'https://tasqmaster.herokuapp.com/',
      github: 'https://github.com/binderb/tasqmaster',
      image: tasqmaster
    },
    {
      name: 'Simple Blog',
      subtitle: 'Express / MySQL',
      url: 'https://simple-blog.herokuapp.com/',
      github: 'https://github.com/binderb/simple-blog',
      image: simpleblog
    },
    {
      name: 'Shells',
      subtitle: 'JQuery / MySQL',
      url: 'http://binderlab.org/app_shells',
      github: 'https://github.com/binderb/shells',
      image: shells
    },
    {
      name: 'Metabolica',
      subtitle: 'JQuery / MySQL',
      url: 'http://binderlab.org/app_metabolica',
      github: 'https://github.com/binderb/metabolica',
      image: metabolica
    },
    {
      name: 'Code Quiz',
      subtitle: 'Vanilla JS',
      url: 'https://binderb.github.io/code-quiz',
      github: 'https://github.com/binderb/code-quiz',
      image: quiz
    },
    {
      name: 'Weather Dashboard',
      subtitle: 'JQuery / Bootstrap',
      url: 'https://binderb.github.io/weather-dashboard',
      github: 'https://github.com/binderb/weather-dashboard',
      image: weather
    }

  ]
  
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
      {projects.map((project) => (
        <Project key={project.name}
          project={project}
        />
      ))}
    </div>
  )
}