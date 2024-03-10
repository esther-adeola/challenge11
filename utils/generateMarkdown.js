// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

![License](https://img.shields.io/badge/license-${data.license}-blue.svg)
  


## Description 
${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Contribution](#contributing)
- [Tests](#tests)
- [Github](#github)
- [Email](#email)


## Installation 
* ${data.installation}

## Usage 
* ${data.usage}

## License 
* ${data.license}

## Contributing
* ${data.contributing}

## Tests 
* ${data.tests}

## Github 
* ${data.github}

## Email 
* ${data.email}

`;
}

module.exports = generateMarkdown;