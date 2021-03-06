import React from 'react';
import VersionInstance from './versionInstanceComponent';
import speechEventHandler from '../speech/speechEventHandler';

const versionBucketComponent = (props) => {

    const generateVersions = (versions) => {

        if (versions.length === 0)
            return null;

        let counter = 0;
        return versions.map((version) => {
            return <VersionInstance version={version} key={counter++}/>
        })
    };

    return (
        <div className="version-bucket">
            <div className="version-info-application">{props.version[0].projectName}</div>
            {generateVersions(props.version)}
        </div>

    )
};

export default versionBucketComponent;