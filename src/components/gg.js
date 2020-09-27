import React from 'react';
import data from "../data/new.json"
import Release from "../data/new.json"




const allReleases = data.map(release => {
    return (
        <div className="column-2">
            <Release
                url={require('./path/to/images' + release.imageURL)}
            />
        </div>
    )
})

export default Releases