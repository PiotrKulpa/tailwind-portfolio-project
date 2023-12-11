const ContactPage= () => {
  return (
    <div className="container flex flex-col justify-center items-center bg-secondary">
      <div className="text-center m-12">
        <h3 className="text-primary">Say hello and leave</h3>
        <h4 className="text-primary uppercase">your message</h4>
      </div>
      <div className="w-1/2">
        <form className="flex flex-wrap  text-primary" action="#" id="contactform">
          <div className="w-1/2 pr-2">	
            <input type="text" name="name" className="form-control w-full bg-secondary border-primary border-b px-10 py-5" placeholder="NAME" />
          </div>
          <div className="w-1/2 pl-2">
            <input type="text" name="email" className="form-control w-full bg-secondary border-primary border-b px-10 py-5" placeholder="EMAIL" />
          </div>
          <div className="w-full my-6">
            <textarea name="message" rows={5} className="form-control w-full bg-secondary border-primary border-b px-10 py-5" placeholder="MESSAGE" defaultValue={""} />
          </div>
          <div className="w-full flex justify-center items-center m-20">
            <button className="w-40 h-16 hover:bg-primary hover:text-secondary bg-secondary rounded-lg border-primary border" type="submit" value="Send">SEND</button>
          </div>
       </form>
        <div className="success-message" style={{display: 'none'}} />
        <div className="error-message" style={{display: 'none'}} /> 
      </div>
  </div>

  )
}

export default ContactPage


    //   background: none;
    // background-color: none;
    // box-shadow: none;
    // border: 0px;
    // border-bottom: 1px solid rgba(256,256,256,0.25);
    // border-radius: 0px;
    // color: rgba(256,256,256,0.75);
    // padding: 20px 30px;