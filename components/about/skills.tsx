import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

import Identifications from '@/components/icons/identifications';
import Computer from '@/components/icons/computer';
import CommandLine from '@/components/icons/commandLine';
import Book from '@/components/icons/book';
import Briefcase from '@/components/icons/briefcase';
import useContentfulQuery from '@/hooks/useContentfulQuery';
import { ContentType, ContentfulCredentialProps, OrderType } from '@/global-types';

const Skills = ({ contentfulCredential }: ContentfulCredentialProps) => {
  const { items: trainingItems = [] } = useContentfulQuery({
    contentfulCredential,
    contentType: ContentType.Trainings,
    limit: 100,
    skip: 0,
    order: [OrderType.CreatedAt],
  });

  const { items: employmentItems = [] } = useContentfulQuery({
    contentfulCredential,
    contentType: ContentType.Employment,
    limit: 100,
    skip: 0,
    order: [OrderType.CreatedAt],
  });

  return (
    <section className="skills w-full bg-skills bg-no-repeat bg-cover py-40 text-2xl">
      <div className="container mx-auto">
        <div>
          <div>
            <h3 className="text-center">Here you can know my</h3>
            <h4 className="uppercase text-center mt-5">skills and experience</h4>
            <div className="flex flex-row flex-wrap lg:flex-nowrap justify-start items-start gap-12 mt-20">
              <div className="w-full lg:w-1/3">
                <h5 className="flex items-center uppercase">
                  <Identifications />
                  <span className="p-6">About me</span>
                </h5>
                <div className="skill-content">
                  <p className="mb-5">
                    Having many years of experience in frontend development expertise under my belt,
                    I take pride in honing my skills to perfection.
                  </p>
                  <p className="mb-5">
                    {' '}
                    In 2017, I achieved a significant milestone by completing the Frontend Google
                    Scholarship, a testament to my dedication to continuous learning and staying
                    ahead in the ever-evolving tech landscape.
                  </p>
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <h5 className="flex flex-row items-center uppercase">
                  <Computer />
                  <span className="p-6">Trainings</span>
                </h5>
                <div className="skill-content">
                  {trainingItems.length &&
                    trainingItems.map(
                      ({ fields: { trainingName = '', date = '' }, sys: { id } }) => {
                        return (
                          <div key={id}>
                            <p className="flex justify-between ">
                              <span>{trainingName}</span>
                              <span>{date}</span>
                            </p>
                            <div className="my-5">
                              <div className="bg-gray h-1 w-full" />
                            </div>
                          </div>
                        );
                      },
                    )}
                </div>
              </div>
              <div className="w-full lg:w-1/3">
                <h5 className="flex items-center uppercase">
                  <CommandLine />
                  <span className="p-6">Development skills</span>
                </h5>
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
        <div className="mt-12 lg:mt-20">
          <div className="flex flex-row flex-wrap lg:flex-nowrap gap-12">
            <div className="w-full lg:w-1/2">
              <h5 className="flex items-center uppercase">
                <Book />
                <span className="p-6">Education</span>
              </h5>
              <hr style={{ color: '#ddd' }} className="" />
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                <div className="panel panel-default experience">
                  <div className="border-b border-gray">
                    <a className="flex gap-12 my-12">
                      <p className="w-1/6">(2017 - 2018)</p>
                      <div className="border-l border-gray pl-5 w-5/6">
                        <p>
                          <strong>Google Scholarship: Front-End Web Dev - Udacity</strong>
                          <br />
                          Google
                        </p>
                        <p>Scholarship program offered by Google in partnership with Udacity.</p>
                      </div>
                    </a>
                  </div>
                  <div></div>
                </div>
                <div className="panel panel-default experience">
                  <div className="border-b border-gray">
                    <a className="flex gap-12 my-12">
                      <p className="w-1/6">(2001 - 2005)</p>
                      <div className="border-l border-gray pl-5  w-5/6">
                        <p>
                          <strong>Computer and Information Science</strong>
                          <br />
                          High School
                        </p>
                        <p>Solid IT foundations in High School</p>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <h5 className="flex items-center uppercase">
                <Briefcase />
                <span className="p-6">Employment</span>
              </h5>
              <hr style={{ color: '#ddd' }} className="" />
              <div
                className="panel-group"
                id="accordion2"
                role="tablist"
                aria-multiselectable="true"
              >
                {employmentItems.length &&
                  employmentItems.map(
                    ({
                      fields: { companyName = '', description = '', timePeriod = '', title = '' },
                      sys: { id = '' },
                    }) => {
                      return (
                        <div key={id} className="panel panel-default experience">
                          <div className="border-b border-gray">
                            <a className="flex gap-12 my-12">
                              <p className="w-1/6">({timePeriod})</p>
                              <div className="border-l border-gray pl-5 w-5/6">
                                <p className="job">
                                  <strong>{title}</strong>
                                  <br />
                                  Company: {companyName}
                                </p>
                                <p>{description}</p>
                              </div>
                            </a>
                          </div>
                        </div>
                      );
                    },
                  )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
