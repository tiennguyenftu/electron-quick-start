import React from 'react';

const Photo = ({photo}) => {
    return (
    <div className="col-md-3 col-sm-6">
        <div className="thumbnail">
            <img src={'./public/uploads/' + photo}/>
        </div>
    </div>
    );
};

export default Photo;