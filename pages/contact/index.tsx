const ContactPage= () => {
  return (
    <div className="bg-secondary">
      <div className="container mx-auto flex flex-col justify-center items-center bg-secondary">
        <div className="text-center m-12">
          <h3 className="text-primary">Say hello and leave</h3>
          <h4 className="text-primary uppercase">your message</h4>
        </div>
        <div className="w-full lg:w-1/2 font-secondary text-xl ">
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
      <div className="grayscale" style={{maxWidth: '100%', overflow: 'hidden', color: 'red', width: '100%', height: 500}}><div id="gmap-canvas" style={{height: '100%', width: '100%', maxWidth: '100%'}}><iframe style={{height: '100%', width: '100%', border: 0}} src="https://www.google.com/maps/embed/v1/place?q=Opalowa+3,+Lublin,+Poland&key=AIzaSyBFw0Qbyq9zTFTd-tUY6dZWTgaQzuU17R8&zoom=18" /></div></div>


    </div>
  )
}

export default ContactPage