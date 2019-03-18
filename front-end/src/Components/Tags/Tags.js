import React from 'react';
import './Tags.css';

const Tags = () => {
    const tags = [
        "all",
        "java",
        "python",
        "C/C++",
        "kotlin",
        "Html5",
        "ReactJS",
        "NodeJS",
        "SQL",
        "No SQL",
        "Flutter"
    ];

    const tagsList = tags.map((tag, idx) => {
        return (
            <span className={'tag-component'} key={idx}>
                {tag.toUpperCase()}
            </span>
        )
    });
    return (
        <div className={'tags-component'}>
            {tagsList}
        </div>
    );
}

export default Tags;