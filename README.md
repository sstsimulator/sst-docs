# sst-website
This repo provides the [Docusaurus](https://docusaurus.io/en/) source code for sst-website.  This website is **NOT the main SST Website**, but a subsidiary website containing documentation focusing on usage of SST.  

   * The main website is located at http://sst-simulator.org/
   * This subsidiary is located at http://sst-simulator.org/sst-website

This website is developed using [Docusaurus](https://docusaurus.io/en/), refer to that products documentaion for details on the how to develop content and the file structure of the source code.

The layout of the repo follows:

   * The **master** branch of this repo contains [Docusaurus](https://docusaurus.io/en/) source for the website.
   * The **gh-pages** branch contains the _built_ static website that is automatically created by Docusaurus operations.

General operations when updating the sst-website content:
   * Ensure Node is installed on develoment machine.
   * Clone the sst-website repository.  
   * Create a feature branch from master on your local repo.
   * cd into sst-website/website 
   * Initialize Docusaurus 
      * ```> npm install```
   * Test local hosting operation
      * ```> npm start``` 
      * **NOTE:** May need to run ```> export NO_PROXY=localhost``` if behind a proxy (see [Docusaurus Proxy Info](https://docusaurus.io/docs/en/installation#launching-the-server-behind-a-proxy) )
      * control-C to exit local hosting.
   * Make changes to the source and test with local hosting      
      * ```> npm start``` 
   * Add/Commit final changes back to the feature branch of your local repo
   * Push feature branch upto the [sst-website repo](https://github.com/sstsimulator/sst-website)
   * Generate a pull request from your feature branch to the **master** branch of [sst-website repo](https://github.com/sstsimulator/sst-website)
   * Members of the SST team will:
      * Review changes and merge the changes into the **master** branch.
      * Generate 
   
**SST-Team Tasks**
When a pull request to master from a feature branch is generated:
   * Following the general operations above and test/review the changes to the website
   * Review changes and merge the pull request into **master** if acceptable.
   * run the following command from the sst-websit/website directory:
      * ```> GIT_USER=<github_user_name> CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages```