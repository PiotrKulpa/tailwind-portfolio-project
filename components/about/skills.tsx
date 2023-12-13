import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Identifications from '@/components/icons/identifications'
import Computer from '@/components/icons/computer'
import CommandLine from '@/components/icons/commandLine'
import Book from '@/components/icons/book'
import Briefcase from '@/components/icons/briefcase'

const Skills = () => {
  return (
    <section className="skills w-full bg-skills bg-no-repeat bg-cover py-20 text-2xl">
      <div className="container m-auto">
        <div>
          <div>
            <h3 className="text-center">Here you can know my</h3>
            <h4 className="uppercase text-center mt-5">skills and experience</h4>
            <div className="flex justify-start items-start gap-12 mt-12">
              <div className="w-1/3">
                <h5 className="flex items-center uppercase"><Identifications /><span className="p-6">About me</span></h5>
                <div className="skill-content">
                  <p className="mb-5">Having many years of experience in frontend development expertise under my belt, I take pride in honing my skills to perfection.</p>
                  <p className="mb-5"> In 2017, I achieved a significant milestone by completing the Frontend Google Scholarship, a testament to my dedication to continuous learning and staying ahead in the ever-evolving tech landscape.</p>
                </div>
              </div>
              <div className="w-1/3">
                <h5 className="flex items-center uppercase"><Computer /><span className="p-6">Trainings</span></h5>
                <div className="skill-content">
                  <div>
                    <p className="flex justify-between "><span>Node.js with Mongoose</span><span>2023</span></p>
                    <div className="my-5">
                      <div className="bg-gray h-1 w-full" />
                    </div>
                  </div>
                  <div className="bar">
                  <p className="flex justify-between "><span>Python</span><span>2022</span></p>
                    <div className="my-5">
                    <div className="bg-gray h-1 w-full" />
                    </div>
                  </div>
                  <div className="bar">
                  <p className="flex justify-between "><span>Next.js</span><span>2020</span></p>
                    <div className="my-5">
                    <div className="bg-gray h-1 w-full" />
                    </div>
                  </div>
                  <div className="bar">
                    <p className="flex justify-between "><span>Google Scholarschip: Front-End</span><span>2017</span></p>
                    <div className="my-5">
                    <div className="bg-gray h-1 w-full" />
                    </div>
                  </div>
                </div>
              </div>
              <div className="w-1/3">
                <h5 className="flex items-center uppercase"><CommandLine /><span className="p-6">Development skills</span></h5>
                <div className="flex flex-wrap">
                  <div className="m-5 w-40">
                    <CircularProgressbar
                      styles={buildStyles({
                        textSize: '16px',
                        pathColor: 'black',
                        textColor: 'black',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                      strokeWidth={2}
                      value={90}
                      text="Javascript"
                    />
                  </div>
                  <div className="m-5 w-40">
                    <CircularProgressbar
                      styles={buildStyles({
                        textSize: '16px',
                        pathColor: 'black',
                        textColor: 'black',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                      strokeWidth={2}
                      value={80}
                      text="React"
                    />
                  </div>
                  <div className="m-5 w-40">
                    <CircularProgressbar
                      styles={buildStyles({
                        textSize: '16px',
                        pathColor: 'black',
                        textColor: 'black',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                      strokeWidth={2}
                      value={70}
                      text="Next.js"
                    />
                  </div>
                  <div className="m-5 w-40">
                    <CircularProgressbar
                      styles={buildStyles({
                        textSize: '16px',
                        pathColor: 'black',
                        textColor: 'black',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                      strokeWidth={2}
                      value={50}
                      text="Node.js"
                    />
                  </div>
                  <div className="m-5 w-40">
                    <CircularProgressbar
                      styles={buildStyles({
                        textSize: '16px',
                        pathColor: 'black',
                        textColor: 'black',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                      strokeWidth={2}
                      value={77}
                      text="HTML"
                    />
                  </div>
                  <div className="m-5 w-40">
                    <CircularProgressbar
                      styles={buildStyles({
                        textSize: '16px',
                        pathColor: 'black',
                        textColor: 'black',
                        trailColor: '#d6d6d6',
                        backgroundColor: '#3e98c7',
                      })}
                      strokeWidth={2}
                      value={55}
                      text="CSS"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex gap-12">
            <div className="w-1/2">
              <h5 className="flex items-center uppercase"><Book /><span className="p-6">Education</span></h5>
              <hr style={{ color: "#ddd"}} className="" />
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default experience">
                    <div className="border-b border-gray">
                      <a className="flex gap-12 my-12">
                        <p className="w-2/5">(2005 - 2008)</p>
                        <div className="border-l border-gray pl-5">
                          <p ><strong>Graphic design</strong><br />Company name</p>
                          <p>Nunc facilisis eu tortor eu pellentesque. Nam ut urna vulputate, fermentum lacus ut, fringilla tellus lacus.</p>
                        </div>
                      </a>
                    </div>
                  <div>
                </div>
                </div>
                <div className="panel panel-default experience">
                  <div className="border-b border-gray">
                    <a className="flex gap-12 my-12">
                      <p className="w-2/5">(2003 - 2005)</p>
                      <div className="border-l border-gray pl-5">
                        <p><strong>Web development</strong><br />Company name</p>
                        <p>Nunc facilisis eu tortor eu pellentesque. Nam ut urna vulputate, fermentum lacus ut, fringilla tellus lacus.</p>

                      </div>
                    </a>
                  </div>
                </div>
                <div className="panel panel-default experience">
                  <div className="panel-heading" role="tab" id="heading3">
                    <a className="flex gap-12 my-12">
                      <p  className="w-2/5">(2002 - 2003)</p>
                      <div className="border-l border-gray pl-5">
                        <p><strong>Web design</strong><br />Company name</p>
                        <p>Nunc facilisis eu tortor eu pellentesque. Nam ut urna vulputate, fermentum lacus ut, fringilla tellus lacus.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h5 className="flex items-center uppercase"><Briefcase /><span className="p-6">Employment</span></h5>
              <hr style={{ color: "#ddd"}} className="" />
              <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default experience">
                  <div className="border-b border-gray">
                    <a className="flex gap-12 my-12">
                      <p  className="w-2/5">(2010 - Present)</p>
                      <div className="border-l border-gray pl-5">
                        <p className="job"><strong>Senior web developer</strong><br />Company name</p>
                        <p>Nunc facilisis eu tortor eu pellentesque. Nam ut urna vulputate, fermentum lacus ut, fringilla tellus lacus.</p>
                      </div>
                    </a>
                  </div>
                </div>
                <div className="panel panel-default experience">
                  <div className="panel-heading" role="tab" id="heading5">
                    <a className="flex gap-12 my-12">
                      <p  className="w-2/5">(2008 - 2010)</p>
                      <div className="border-l border-gray pl-5">
                        <p className="job"><strong>Junior web developer</strong><br />Company name</p>
                        <p>Nunc facilisis eu tortor eu pellentesque. Nam ut urna vulputate, fermentum lacus ut, fringilla tellus lacus.</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills