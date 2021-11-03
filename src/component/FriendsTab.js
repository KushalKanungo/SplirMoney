import React from 'react'


function FriendsTab() {
    return (
        <>
            <div className="container d-flex justify-content-center">
                <div className="add-frnd-box white-card my-4">
                    <div className="row ">
                        <input type="text" name="name" id="name" className="col-8 offset-2 col-sm-6 offset-sm-3 frnd-field" />
                       
                        <input type="text" name="number" id="number" className="col-8 offset-2 col-sm-6 offset-sm-3 frnd-field" />

                        <button type="button" className="btn btn-primary col-6 offset-3 col-sm-4 offset-sm-4 col-lg-2 offset-lg-5 mt-4 ">Add Friend</button>

                       
                    </div>
                </div>
            </div>
        </>
    )
}

export default FriendsTab
