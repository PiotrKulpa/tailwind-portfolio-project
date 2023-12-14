
import CodeBrackets from '@/components/icons/codeBrackets'
import Phone from '@/components/icons/phone'
import Rocket from '@/components/icons/rocket'
import CommandLine from '@/components/icons/commandLine'
import Globe from '@/components/icons/globe'
import Chat from '@/components/icons/chat'

const Services = () => {
  return (
    <section className="services py-20 text-2xl">
      <div className="container m-auto">
        <div className="row">
          <h3 className="text-center">Check out all</h3>
          <h4 className="uppercase text-center mt-5">my services</h4>

          <div className="flex flex-wrap mt-12">
            <div className="w-full lg:w-1/2">
              <div className="media">
                <div className="media-left">
                  <a className="css3Animate" href="#" >
                    <span aria-hidden="true" data-icon="i" />
                  </a>
                </div>
                <div className="media-body">
                  <h5 className="media-heading py-6 flex gap-4"><CodeBrackets /><span>Development</span></h5>
                  <p>Providing bespoke web design services tailored to the client&apos;s brand and requirements, creating visually appealing and unique websites.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="media">
                <div className="media-left">
                  <a className="css3Animate" href="#" >
                    <span aria-hidden="true" data-icon="" />
                  </a>
                </div>
                <div className="media-body">
                  <h5 className="media-heading py-6 flex gap-4"><Phone /><span>Responsive</span></h5>
                  <p>Extending skills to include the creation of responsive apps, ensuring that they display properly across various devices.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="media">
                <div className="media-left">
                  <a className="css3Animate" href="#" >
                    <span aria-hidden="true" data-icon="" />
                  </a>
                </div>
                <div className="media-body">
                  <h5 className="media-heading py-6 flex gap-4"><CommandLine /><span>Frontend Framework Expertise</span></h5>
                  <p>Demonstrating proficiency in popular frontend frameworks such as React, Angular, or Vue.js, and offering development services using these technologies.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="media">
                <div className="media-left">
                  <a className="css3Animate" href="#" >
                    <span aria-hidden="true" data-icon="" />
                  </a>
                </div>
                <div className="media-body">
                  <h5 className="media-heading py-6 flex gap-4"><Rocket /><span>Performance Optimization</span></h5>
                  <p>Providing services to optimize website performance by addressing issues such as image optimization, lazy loading, and other techniques to improve loading times.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="media">
                <div className="media-left">
                  <a className="css3Animate" href="#" >
                    <span aria-hidden="true" data-icon="" />
                  </a>
                </div>
                <div className="media-body">
                  <h5 className="media-heading py-6 flex gap-4"><Globe /><span>Cross-Browser Compatibility Testing</span></h5>
                  <p>Ensuring that websites work seamlessly across different browsers, conducting thorough testing to identify and address compatibility issues.</p>
                </div>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <div className="media">
                <div className="media-left">
                  <a className="css3Animate" href="#" >
                    <span aria-hidden="true" data-icon="w" />
                  </a>
                </div>
                <div className="media-body">
                  <h5 className="media-heading py-6 flex gap-4"><Chat /><span>Code Review and Refactoring</span></h5>
                  <p>Offering code review services to assess the quality of existing codebases and providing recommendations for improvement, as well as refactoring code for better maintainability.</p>
                </div>
              </div>
            </div>
          </div>  
        </div>
      </div>
    </section>

  )
}

export default Services