---
id: get-involved
title: Get Involved
---

Help us document SST by contributing to this site.

## Requirements
- A text editor or IDE. Some options:
  - [Visual Studio Code](https://code.visualstudio.com/) is a free IDE that runs on Windows, Linux, and Mac.
- [Docusaurus](https://docusaurus.io/docs/en/installation) so you can test changes locally. Docusaurus dependencies (see installation page for which version(s) are supported.):
  - Node 
  - Yarn (recommended) 

## Steps to Download the Git Repo and Submit Changes

**General operations when updating the sst-docs content:**
   - Ensure Node is installed on development machine.
   - Fork and then clone the sst-docs repository.  
   - Create a feature branch from your fork's master branch on your local repo.
   - cd into sst-docs/website 
   - Initialize Docusaurus 
      - ```> npm install```
   - Test local hosting operation
      - ```> npm start``` 
      - **NOTE:** May need to run ```> export NO_PROXY=localhost``` if behind a proxy (see [Docusaurus Proxy Info](https://docusaurus.io/docs/en/installation#launching-the-server-behind-a-proxy) )
      - control-C to exit local hosting.
   - Make changes to the source and test with local hosting      
      - ```> npm start``` 
   - Add/Commit final changes back to the feature branch of your local repo
   - Push feature branch up to your fork
   - Generate a pull request from your feature branch to the **master** branch of [sst-docs repo](https://github.com/sstsimulator/sst-docs)
