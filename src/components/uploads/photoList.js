import React from 'react';
import Photo from './photo';

const PhotoList = ({photos}) => {

    return (
        <div className="row">
            {photos.map((photo, i) => {
                return <Photo key={i} photo={photo}/>
            })}
        </div>
    );
};

export default PhotoList;