import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Identifications from '@/components/icons/identifications'
import Computer from '@/components/icons/computer'
import CommandLine from '@/components/icons/commandLine'

const Skills = () => {
  return (
    <section className="skills w-full bg-skills bg-no-repeat bg-cover py-20 text-2xl">
      <div className="container m-auto">
        <div>
          <div>
            <h3 className="text-center">Here you can know my</h3>
            <h4 className="uppercase text-center mt-5">skills and experience</h4>
            <div className="flex justify-start items-start mt-12">
              <div className="w-1/3 p-10">
                <h5 className="flex items-center uppercase"><Identifications /><span className="py-6">About me</span></h5>
                <div className="skill-content">
                  <p className="mb-5">Aenean gravida ligula vel mauris volutpat condimentum. Ut eu tortor suscipit, accumsan risus nec, finibus orci. Proin pretium augue at cursus ornare.</p>
                  <p className="mb-5">Curabitur condimentum nibh at suscipit interdum. Aenean ac cursus nunc. Phasellus rutrum consequat bibendum.</p>
                  <p>Ut in libero sit amet lectus feugiat iaculis. Cras condimentum lobortis nulla, id varius enims.</p>
                </div>
              </div>
              <div className="w-1/3 p-10">
                <h5 className="flex items-center uppercase"><Computer /><span className="py-6">Trainings</span></h5>
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
              <div className="w-1/3 p-10">
                <h5 className="flex items-center uppercase"><CommandLine /><span className="py-6">Development skills</span></h5>
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
        <div className="">
          <div className="flex">
            <div className="w-1/2">
              <h5 className="uppercase"><span aria-hidden="true"/>Education</h5>
              <div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default experience">
                  <div className="panel-heading" role="tab" id="heading1">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" aria-expanded="true" aria-controls="collapse1">
                      <p className="date">(2005 - 2008)</p>
                      <p className="job"><strong>Graphic design</strong><br />Company name</p>
                      <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                    </a>
                  </div>
                  <div id="collapse1" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading1">
                    <div className="panel-body">
                      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum consectetur purus faucibus felis placerat, non scelerisque lectus imperdiet.</p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default experience">
                  <div className="panel-heading" role="tab" id="heading2">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" aria-expanded="true" aria-controls="collapse2">
                      <p className="date">(2003 - 2005)</p>
                      <p className="job"><strong>Web development</strong><br />Company name</p>
                      <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                    </a>
                  </div>
                  <div id="collapse2" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading2">
                    <div className="panel-body">
                      <p>Nunc facilisis eu tortor eu pellentesque. Nam ut urna vulputate, fermentum lacus ut, fringilla tellus lacus.</p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default experience">
                  <div className="panel-heading" role="tab" id="heading3">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" aria-expanded="true" aria-controls="collapse3">
                      <p className="date">(2002 - 2003)</p>
                      <p className="job"><strong>Web design</strong><br />Company name</p>
                      <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                    </a>
                  </div>
                  <div id="collapse3" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading3">
                    <div className="panel-body">
                      <p>Nam ex mauris, mattis quis lectus in, tincidunt vulputate sapien.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <h5 className="uppercase"><span aria-hidden="true"/>Employment</h5>
              <div className="panel-group" id="accordion2" role="tablist" aria-multiselectable="true">
                <div className="panel panel-default experience">
                  <div className="panel-heading" role="tab" id="heading4">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" aria-expanded="true" aria-controls="collapse4">
                      <p className="date">(2010 - Present)</p>
                      <p className="job"><strong>Senior web developer</strong><br />Company name</p>
                      <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                    </a>
                  </div>
                  <div id="collapse4" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading4">
                    <div className="panel-body">
                      <p>Vestibulum eget ligula gravida, posuere metus semper, fringilla mi. Duis cursus, lacus vitae sagittis facilisis, magna lacus bibendum ex, non placerat sem tellus vitae ex.</p>
                    </div>
                  </div>
                </div>
                <div className="panel panel-default experience">
                  <div className="panel-heading" role="tab" id="heading5">
                    <a data-toggle="collapse" data-parent="#accordion" href="#collapse5" aria-expanded="true" aria-controls="collapse5">
                      <p className="date">(2008 - 2010)</p>
                      <p className="job"><strong>Junior web developer</strong><br />Company name</p>
                      <p className="arrow-down css3Animate"><span aria-hidden="true" data-icon={3} /></p>
                    </a>
                  </div>
                  <div id="collapse5" className="panel-collapse collapse" role="tabpanel" aria-labelledby="heading5">
                    <div className="panel-body">
                      <p>Donec quam tellus, tincidunt ac auctor a, volutpat sed ex. Duis eget augue a odio ullamcorper mollis et lorem ipsum dolor sit amet.</p>
                    </div>
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