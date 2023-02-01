export default function Resume () {
  return (
    <>
    <section className="main-section" id="core-skills">
      <h2>Core Skills</h2>
      <div className="main-content" id="core-skills-content">
        <ul>
          <li>
            <strong>Certified full-stack software engineering skills</strong> with experience on LAMP and MERN stacks.
          </li>
          <li>
            <strong>Collaborative experience</strong> working on software development teams using the AGILE methodology.
          </li>
          <li>
            <strong>5+ years of developer experience</strong> designing online games and assessment tools for education.
          </li>
          <li>
            <strong>7+ years of classNameroom teaching experience</strong> as a STEM instructor in higher education.
          </li>
        </ul>
      </div>
    </section>
    {/* Experience */}
    <section className="main-section" id="experience">
      <h2>Experience</h2>
      <div className="main-content" id="experience-content">
        {/* BioSim */}
        <div className="experience-box">
          <div className="experience-item-header">
            <div className="experience-item-name">
              Principal Scientist
              <div className="experience-item-location">BioSim Innovations, Brooklyn Park, MN</div>
            </div>
            <div className="experience-item-years">2022-present</div>
          </div>
          <div className="experience-item-content">
            I build web-based, responsive tools for streamlined management of lab inventory and organization. I also develop experimental protocols with R&D staff and manage BioSim's quality system..
          </div>
        </div>
        {/* Augsburg */}
        <div className="experience-box">
          <div className="experience-item-header">
            <div className="experience-item-name">
              Assistant Professor
              <div className="experience-item-location">Augsburg University, Minneapolis, MN</div>
            </div>
            <div className="experience-item-years">2018-2022</div>
          </div>
          <div className="experience-item-content">
            I designed and taught a wide range of courses, from first-year survey courses to the university's upper-division biochemistry sequence. I specialized in developing interactive educational tools, including web- and app-based demos, games, and practice modules, 
            which can be viewed in my <a className="inline-link" href="index.html">portfolio</a>.
          </div>
        </div>
        {/* Concordia */}
        <div className="experience-box">
          <div className="experience-item-header">
            <div className="experience-item-name">
              Adjunct Professor
              <div className="experience-item-location">Concordia University, St. Paul, MN</div>
            </div>
            <div className="experience-item-years">2015-2018</div>
          </div>
          <div className="experience-item-content">
            I taught a variety of undergraduate STEM courses at Concordia over several semesters, including Introductory Biology, General Chemistry, Organic Chemistry, and Human Anatomy & Physiology. I also garnered significant experience in curriculum development, designing lesson plans, activities, and laboratories while working closely with full-time Concordia faculty.
          </div>
        </div>
        {/* Postdoc */}
        <div className="experience-box">
          <div className="experience-item-header">
            <div className="experience-item-name">
              Postdoctoral Fellow
              <div className="experience-item-location">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="experience-item-years">2016-2017</div>
          </div>
          <div className="experience-item-content">
            I built and refined new computational models of muscle protein complexes. To facilitate this work, I developed advanced programming skills in a variety of languages, including Python, MATLAB, Tcl/Tk, and JavaScript.
          </div>
        </div>
      </div>
    </section>
    {/* Education */}
    <section className="main-section" id="education">
      <h2>Education</h2>
      <div className="main-content" id="experience-content">
        <div className="education-box">
          <div className="education-item-header">
            <div className="education-item-name">
              Ph.D., Biochemistry, Molecular Biology, and Biophysics
              <div className="education-item-location">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="education-item-year">2016</div>
          </div>
        </div>
        <div className="education-box">
          <div className="education-item-header">
            <div className="education-item-name">
              B.A., Chemistry and Mathematics
              <div className="education-item-location">St. Olaf College, Northfield, MN</div>
            </div>
            <div className="education-item-year">2011</div>
          </div>
        </div>
      </div>
    </section>
    {/* Awards */}
    <section className="main-section" id="awards">
      <h2>Awards</h2>
      <div className="main-content" id="awards-content">
        <div className="award-box">
          <div className="award-item-header">
            <div className="award-item-name">
              UofM Coding Bootcamp Certificate
              <div className="award-item-location">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="award-item-year">Expected Feb 2023</div>
          </div>
        </div>
        <div className="award-box">
          <div className="award-item-header">
            <div className="award-item-name">
              CTL Scholarship Grant for interactive content development
              <div className="award-item-location">Augsburg University, Minneapolis, MN</div>
            </div>
            <div className="award-item-year">2022</div>
          </div>
        </div>
        <div className="award-box">
          <div className="award-item-header">
            <div className="award-item-name">
              Training Research Educators in Minnesota IRACDA Fellowship
              <div className="award-item-location">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="award-item-year">2017</div>
          </div>
        </div>
        <div className="award-box">
          <div className="award-item-header">
            <div className="award-item-name">
              Cyrus Barnum Teaching Award
              <div className="award-item-location">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="award-item-year">2015</div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}