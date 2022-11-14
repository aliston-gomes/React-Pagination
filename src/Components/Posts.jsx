import React, { Fragment } from 'react'

const Posts = (props) => {
  let { currentPosts, loading } = props.attr;
  console.log(props)
  return (
    <div id="mainContainer">
      <h1>Products</h1>
      {loading === false ? (
        "loading..."
      ) : (
        <Fragment>
          {currentPosts.map((x,i) => {
            return (
              <ul id="titlexContainer" key={i+1}>
                <li id="titlex">{x.id} : {x.title}</li>
              </ul>
            );
          })}
        </Fragment>
      )}
    </div>
  );
}

export default Posts