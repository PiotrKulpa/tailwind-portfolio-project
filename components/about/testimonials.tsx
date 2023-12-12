const Testimonials = () => {
  return (
    <section className="testimonials">
      <div className="testimonials-over-image" />
      <div className="container">
        <div className="row">
          <div className="col-md-12 testimonials-messages">
            <div style={{display: 'none'}}>
              <p className="comment">"Werbi in velit ligula eget vulputate ligulaviv sollicitudin rcusante orbi in velit"</p>
              <p className="comment-author">John Doe | Company Name</p>
            </div>
            <div style={{display: 'block'}}>
              <p className="comment">"Phasellus quis euismod velit. Suspendisse potenti etiam massa consectetur"</p>
              <p className="comment-author">Michael Smith | Company Name</p>
            </div>
            <div style={{display: 'none'}}>
              <p className="comment">"Vivamus luctus mauris quis massa in felis quis pharetra lobortis"</p>
              <p className="comment-author">Jennifer Stop | Company Name</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Testimonials