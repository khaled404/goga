import React from 'react';

function Reply() {
    return (
        <div className="reply">
            <div className="heading">
                <h3 className="title">Leave A Reply</h3>
                <p className="title-desc">Your email address will not be published. Required fields are marked *</p>
            </div>

            <form action="#">
                <label htmlFor="reply-message" className="sr-only">Comment</label>
                <textarea name="reply-message" id="reply-message" cols="30" rows="4" className="form-control" required placeholder="Comment *"></textarea>

                <div className="row">
                    <div className="col-md-6">
                        <label htmlFor="reply-name" className="sr-only">Name</label>
                        <input type="text" className="form-control" id="reply-name" name="reply-name" required placeholder="Name *" />
                    </div>

                    <div className="col-md-6">
                        <label htmlFor="reply-email" className="sr-only">Email</label>
                        <input type="email" className="form-control" id="reply-email" name="reply-email" required placeholder="Email *" />
                    </div>
                </div>

                <button type="submit" className="btn btn-outline-primary-2">
                    <span>POST COMMENT</span>
                    <i className="icon-long-arrow-right"></i>
                </button>
            </form>
        </div>
    );
}

export default React.memo( Reply );