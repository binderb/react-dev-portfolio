export default function Resume () {
  return (
    <>
    <section className="text-[16px]" id="core-skills">
      <h2 className='font-bold text-[24px] mb-2'>Core Skills</h2>
      <div className="main-content" id="core-skills-content">
        <ul className="list-square ml-5 mb-5">
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
            <strong>7+ years of classroom teaching experience</strong> as a STEM instructor in higher education.
          </li>
        </ul>
      </div>
    </section>
    {/* Experience */}
    <section className="text-[16px]" id="experience">
      <h2 className='font-bold text-[24px] mb-2'>Experience</h2>
      <div className="main-content" id="experience-content">
        {/* BioSim */}
        <div className="flex flex-col mb-5">
          <div className="flex justify-between mb-3">
            <div className="font-bold text-[18px]">
              Principal Scientist
              <div className="font-light text-[14px]">BioSim Innovations, Brooklyn Park, MN</div>
            </div>
            <div className="font-bold text-[18px]">2022-present</div>
          </div>
          <div className="experience-item-content">
            I build web-based, responsive tools for streamlined management of lab inventory and organization. I also develop experimental protocols with R&D staff and manage BioSim's quality system.
          </div>
        </div>
        {/* Augsburg */}
        <div className="flex flex-col mb-5">
          <div className="flex justify-between mb-3">
            <div className="font-bold text-[18px]">
              Assistant Professor
              <div className="font-light text-[14px]">Augsburg University, Minneapolis, MN</div>
            </div>
            <div className="font-bold text-[18px]">2018-2022</div>
          </div>
          <div className="experience-item-content">
            I designed and taught a wide range of courses, from first-year survey courses to the university's upper-division biochemistry sequence. I specialized in developing interactive educational tools, including web- and app-based demos, games, and practice modules, 
            which can be viewed in my portfolio.
          </div>
        </div>
        {/* Concordia */}
        <div className="flex flex-col mb-5">
          <div className="flex justify-between mb-3">
            <div className="font-bold text-[18px]">
              Adjunct Professor
              <div className="font-light text-[14px]">Concordia University, St. Paul, MN</div>
            </div>
            <div className="font-bold text-[18px]">2015-2018</div>
          </div>
          <div className="experience-item-content">
            I taught a variety of undergraduate STEM courses at Concordia over several semesters, including Introductory Biology, General Chemistry, Organic Chemistry, and Human Anatomy & Physiology. I also garnered significant experience in curriculum development, designing lesson plans, activities, and laboratories while working closely with full-time Concordia faculty.
          </div>
        </div>
        {/* Postdoc */}
        <div className="flex flex-col mb-5">
          <div className="flex justify-between mb-3">
            <div className="font-bold text-[18px]">
              Postdoctoral Fellow
              <div className="font-light text-[14px]">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="font-bold text-[18px]">2016-2017</div>
          </div>
          <div className="experience-item-content">
            I built and refined new computational models of muscle protein complexes. To facilitate this work, I developed advanced programming skills in a variety of languages, including Python, MATLAB, Tcl/Tk, and JavaScript.
          </div>
        </div>
      </div>
    </section>
    {/* Education */}
    <section className="main-section" id="education">
      <h2 className='font-bold text-[24px] mb-2'>Education</h2>
      <div className="main-content" id="education-content">
        <div className="flex flex-col mb-5">
          <div className="flex justify-between">
            <div className="font-bold text-[18px]">
              Bootcamp Certificate, <span className="font-light">Full Stack Web Development</span>
              <div className="font-light text-[14px]">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="font-bold text-[18px]">2023</div>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <div className="flex justify-between">
            <div className="font-bold text-[18px]">
              Ph.D., <span className="font-light">Biochemistry, Molecular Biology, and Biophysics</span>
              <div className="font-light text-[14px]">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="font-bold text-[18px]">2016</div>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <div className="flex justify-between">
            <div className="font-bold text-[18px]">
              B.A., <span className="font-light">Chemistry and Mathematics</span>
              <div className="font-light text-[14px]">St. Olaf College, Northfield, MN</div>
            </div>
            <div className="font-bold text-[18px]">2011</div>
          </div>
        </div>
      </div>
    </section>
    {/* Awards */}
    <section className="main-section" id="awards">
      <h2 className="font-bold text-[24px] mb-2">Awards</h2>
      <div className="main-content" id="awards-content">
        <div className="flex flex-col mb-5">
          <div className="flex justify-between">
            <div className="font-bold text-[18px]">
              CTL Scholarship Grant for interactive content development
              <div className="font-light text-[14px]">Augsburg University, Minneapolis, MN</div>
            </div>
            <div className="font-bold text-[18px]">2022</div>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <div className="flex justify-between">
            <div className="font-bold text-[18px]">
              Training Research Educators in Minnesota IRACDA Fellowship
              <div className="font-light text-[14px]">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="font-bold text-[18px]">2017</div>
          </div>
        </div>
        <div className="flex flex-col mb-5">
          <div className="flex justify-between">
            <div className="font-bold text-[18px]">
              Cyrus Barnum Teaching Award
              <div className="font-light text-[14px]">University of Minnesota, Minneapolis, MN</div>
            </div>
            <div className="font-bold text-[18px]">2015</div>
          </div>
        </div>
      </div>
    </section>
    </>
  )
}