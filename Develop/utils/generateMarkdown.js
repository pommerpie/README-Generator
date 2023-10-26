// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license.trim() === ''){
    return ''
  } else if(license === 'MIT'){
    return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`

  } else if(license === 'Apache'){
    return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`

  } else if(license === 'Mozilla Public license'){
    return `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`

  } else if(license === 'GNU general public license v3.0'){
    return `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`

  } else if(license === 'BDS 3-clause license'){
    return `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`

  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if(license.trim() === ''){
    return ''
  } else if(license === 'MIT'){
    return `https://opensource.org/licenses/MIT`

  } else if(license === 'Apache'){
    return `https://opensource.org/licenses/Apache-2.0`

  } else if(license === 'Mozilla Public license'){
    return `https://opensource.org/licenses/MPL-2.0`

  } else if(license === 'GNU general public license v3.0'){
    return `https://www.gnu.org/licenses/gpl-3.0`

  } else if(license === 'BDS 3-clause license'){
    return `https://opensource.org/licenses/BSD-3-Clause`

  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license.trim() === ''){
    return ''
  } else{
    return `## License\n
    ${license}, ${renderLicenseLink(license)}\n`
  }  
}

// TODO: Create a function to generate markdown for README
function genMarkdown(data) {
  let start = `# ${data.title}\n
  ${renderLicenseBadge(data.license)}`
  let toc = `## Table of contents\n\n`
  let theBody = ``
   if(data.desc.trim() !== ''){
   toc += `[Description](#desc)\n\n`
    theBody += `## Description\n
   ${data.desc}\n`
   }
   if(data.install.trim() !== ''){
   toc += `[Installation](#install)\n\n`
   theBody += `## Installation\n
   ${data.install}\n`
    }
    if(data.usage.trim() !== ''){
    toc += `[Usage](#usage)\n\n`
    theBody += `## Usage\n
    ${data.usage}\n`
    }
    if(data.license.trim() !== ''){
    toc += `[License](#license)\n\n`
    theBody += `${renderLicenseSection(data.license)}`
    }
    if(data.cont.trim() !== ''){
    toc += `[Contribution](#cont)\n\n`
    theBody += `## Contribution\n
    ${data.cont}\n`
    }
    if(data.test.trim() !== ''){
    toc += `[Testing](#test)\n\n`
    theBody += `## Testing\n
    ${data.test}\n`
    }
    if(data.user.trim() !== ''){
    toc += `[Questions](#quest)\n\n`
    theBody += `## Questions\n
    If you have questions about this project, please reach me here:\n
    https://github.com/${data.user}\n\n`
    }
    if(data.email.trim() !== ''){
    theBody += `${data.email}\n`
    }

  const readME = `${start}\n${toc}\n${theBody}`
  return readME
}

module.exports = genMarkdown;