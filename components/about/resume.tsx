import React from 'react'

const Resume = () => {
  return (
    <section className="section-resume">
      <div className="container m-auto">
        <div className="flex  bg-resume bg-no-repeat py-20">
          <div className='hidden lg:block w-1/2'></div>
          <div className="w-screen bg-opacity-[.80] lg:w-1/2  bg-primary  lg:ml-20">
            <h2 className="uppercase">Hello.<br />I'm Peter</h2>
            <h3>
            My name is Peter Kulpa, I'm a front-end developer based in Poland, Lublin, PL. I have developed many types of front-ends from well know applications to Ecommerce platforms. I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.</h3>
            <a className="flex justify-center items-center border w-40 h-12 text-center my-10 border-gray" href="https://docs.google.com/document/d/1HLEmikSVbuDQt5rJklYaWjQ4HQBrsN2Q_YjZAr5ZJ-s/edit?usp=sharing"><p>See resume</p></a>
            <hr style={{ color: "#ddd"}} className="my-12" />
            <ul className="text-2xl">
              <li className="flex my-5">
                <label className="w-1/5 bg-gray p-2 mr-5 uppercase font-bold">Name</label> 
                <span>Peter Kulpa</span>
              </li>
              <li className="flex my-5">
                <label className="w-1/5 bg-gray p-2 mr-5 uppercase font-bold">Birthday</label>
                <span>March 10, 1982</span>
              </li>
              <li className="flex my-5">
                <label className="w-1/5 bg-gray p-2 mr-5 uppercase font-bold">Address</label>
                <span>20-578 Lublin (Poland)</span>
              </li>
              <li className="flex my-5">
                <label className="w-1/5 bg-gray p-2 mr-5 uppercase font-bold">Email</label>
                <span>info.kulpa@gmail.com</span>
              </li>
              <li className="flex my-5">
                <label className="w-1/5 bg-gray p-2 mr-5 uppercase font-bold">Phone</label> 
                <span>(+48) 507 531 805</span>
              </li>
              <li className="flex my-5">
                <label className="w-1/5 bg-gray p-2 mr-5 uppercase font-bold">Website</label>
                <span>www.piotrkulpa.github.io</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Resume