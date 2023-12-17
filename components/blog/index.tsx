import { documentToReactComponents as renderRichText } from '@contentful/rich-text-react-renderer'

import { ContentType } from '@/global-types'
import useContentfulQuery from '@/hooks/useContentfulQuery'

const Blog = ({contentfulCredential}) => {

  // TODO: response.items[0].fields?.content?.content path to rich text array in Blog
  // {renderRichText(content)}

 const result = useContentfulQuery({contentfulCredential, contentType: ContentType.Blog})

 console.log('RESULT', result);
 

  return (
  <section className="container mx-auto">
    <h3 className="text-center">Stay update</h3>
    <h4 className="uppercase text-center mt-5">with our blog</h4>
    <div className="mt-12 flex flex-row flex-wrap">
      <div className="w-full lg:w-1/3 p-5">
        <div className="flex flex-row gap-4">
          <div>
            <div className="w-20 h-36 text-primary font-primary text-center post-date bg-secondary flex flex-col items-center justify-center">
              <p className="text-4xl underline">15</p>
              <p className="text-xl">MAR</p>
            </div>
          </div>
          <div className="post-right">
            <div className="max-h-80 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="align-middle h-auto"/>
            </div>
            <h5 className="my-4 uppercase">The Rise of Jamstack Architecture in Front-End Development</h5>
            <p className="my-4 font-secondary font-light">NOVEMBER 21, 2013</p>
            <p className="font-secondary font-light">Explore the evolution of web development with Jamstack and discover why it&apos;s gaining popularity among developers.</p>
            <a className="uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary" href="https://docs.google.com/document/d/1HLEmikSVbuDQt5rJklYaWjQ4HQBrsN2Q_YjZAr5ZJ-s/edit?usp=sharing">
              <p>Read more</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-5">
        <div className="flex flex-row gap-4">
          <div className="">
            <div className="w-20 h-36 text-primary font-primary text-center post-date bg-secondary flex flex-col items-center justify-center">
              <p className="text-4xl underline">15</p>
              <p className="text-xl">MAR</p>
            </div>
          </div>
          <div className="post-right">
            <div className="max-h-80 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="align-middle h-auto"/>
            </div>
            <h5 className="my-4 uppercase">Exploring the Magic of WebAssembly in Front-End Programming</h5>
            <p className="my-4 font-secondary font-light">NOVEMBER 21, 2013</p>
            <p className="font-secondary font-light">Uncover the wizardry of WebAssembly and its impact on front-end development, from speed optimizations to cross-language compatibility.</p>
            <a className="uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary" href="https://docs.google.com/document/d/1HLEmikSVbuDQt5rJklYaWjQ4HQBrsN2Q_YjZAr5ZJ-s/edit?usp=sharing">
              <p>Read more</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-5">
        <div className="flex flex-row gap-4">
          <div className="">
            <div className="w-20 h-36 text-primary font-primary text-center post-date bg-secondary flex flex-col items-center justify-center">
              <p className="text-4xl underline">15</p>
              <p className="text-xl">MAR</p>
            </div>
          </div>
          <div className="post-right">
            <div className="max-h-80 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="align-middle h-auto"/>
            </div>
            <h5 className="my-4 uppercase">Design Systems: Crafting Consistency in Front-End UI/UX</h5>
            <p className="my-4 font-secondary font-light">NOVEMBER 21, 2013</p>
            <p className="font-secondary font-light">Navigate the world of design systems and learn how they empower front-end developers to create consistent, user-friendly interfaces.</p>
            <a className="uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary" href="https://docs.google.com/document/d/1HLEmikSVbuDQt5rJklYaWjQ4HQBrsN2Q_YjZAr5ZJ-s/edit?usp=sharing">
              <p>Read more</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-5">
        <div className="flex flex-row gap-4">
          <div className="">
            <div className="w-20 h-36 text-primary font-primary text-center post-date bg-secondary flex flex-col items-center justify-center">
              <p className="text-4xl underline">15</p>
              <p className="text-xl">MAR</p>
            </div>
          </div>
          <div className="post-right">
            <div className="max-h-80 overflow-hidden">
              <img src="https://images.unsplash.com/photo-1514417034809-c7b296354f07?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="align-middle h-auto"/>
            </div>
            <h5 className="my-4 uppercase">Progressive Web Apps (PWAs): Bridging the Gap Between Web and Mobile</h5>
            <p className="my-4 font-secondary font-light">NOVEMBER 21, 2013</p>
            <p className="font-secondary font-light">Step into the world of Progressive Web Apps and understand how they offer a seamless, app-like experience across various devices.</p>
            <a className="uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary" href="https://docs.google.com/document/d/1HLEmikSVbuDQt5rJklYaWjQ4HQBrsN2Q_YjZAr5ZJ-s/edit?usp=sharing">
              <p>Read more</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-5">
        <div className="flex flex-row gap-4">
          <div className="">
            <div className="w-20 h-36 text-primary font-primary text-center post-date bg-secondary flex flex-col items-center justify-center">
              <p className="text-4xl underline">15</p>
              <p className="text-xl">MAR</p>
            </div>
          </div>
          <div className="post-right">
            <div className="max-h-80 overflow-hidden">
              <img src="img/blog/1.jpg" className="align-middle h-auto"/>
            </div>
            <h5 className="my-4 uppercase">Dark Mode Design: Enhancing User Experience in Front-End Development</h5>
            <p className="my-4 font-secondary font-light">NOVEMBER 21, 2013</p>
            <p className="font-secondary font-light">Embrace the darkness! Explore the growing trend of dark mode design and how it can enhance user experience in front-end interfaces.</p>
            <a className="uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary" href="https://docs.google.com/document/d/1HLEmikSVbuDQt5rJklYaWjQ4HQBrsN2Q_YjZAr5ZJ-s/edit?usp=sharing">
              <p>Read more</p>
            </a>
          </div>
        </div>
      </div>
      <div className="w-full lg:w-1/3 p-5">
        <div className="flex flex-row gap-4">
          <div className="">
            <div className="w-20 h-36 text-primary font-primary text-center post-date bg-secondary flex flex-col items-center justify-center">
              <p className="text-4xl underline">15</p>
              <p className="text-xl">MAR</p>
            </div>
          </div>
          <div className="post-right">
            <div className="max-h-80 overflow-hidden">
              <img src="img/blog/1.jpg" className="align-middle h-auto"/>
            </div>
            <h5 className="my-4 uppercase">The Future of Front-End Development: Exploring Micro Frontends</h5>
            <p className="my-4 font-secondary font-light">NOVEMBER 21, 2013</p>
            <p className="font-secondary font-light">Peer into the crystal ball of front-end development and uncover the potential of micro frontends in building scalable and modular web applications.</p>
            <a className="uppercase flex justify-center items-center border w-40 h-12 text-center my-4 border-gray hover:bg-secondary hover:text-primary" href="https://docs.google.com/document/d/1HLEmikSVbuDQt5rJklYaWjQ4HQBrsN2Q_YjZAr5ZJ-s/edit?usp=sharing">
              <p>Read more</p>
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Blog