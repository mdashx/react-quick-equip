import React from 'react';

const ShowRepos = (props) => {
  console.log('&&', props);
  
  if (props.repos === undefined) {
    return <span>No repos</span>;
  }

  if (props.repos.length === 0) {
    return (
      <strong>No repos found.</strong>
    )
  }
  
  const repos = props.repos.map(repo => (
    <div key={`show-repo-${repo.name}`}>
      <strong>{repo.name}</strong>
      <br />
      <em>{repo.description}</em>
      <br />
      <a href={repo.html_url}>{repo.html_url}</a>
      <br />
      <br />
    </div>
  ));
  return <div>{repos}</div>;  
}

export default ShowRepos;
