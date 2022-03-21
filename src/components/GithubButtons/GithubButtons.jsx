import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/pewriebontal/pewriebontal.github.io/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork pewriebontal/pewriebontal.github.io on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/pewriebontal/pewriebontal.github.io"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star pewriebontal/pewriebontal.github.io on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
