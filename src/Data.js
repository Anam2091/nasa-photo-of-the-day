


import React from "react";

const Data = props => {

return (
    <div>
    <h1>{props.propy.title}</h1>
    <h1>{props.propy.explanation}</h1>
    <img 
    src={props.propy.url} 
    />

<div>{props.propy.copyright}</div>
<div>{props.propy.date}</div>
</div>
)


}
export default Data;