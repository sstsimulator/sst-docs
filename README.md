# sst-website
This repo provides the [Docusaurus](https://docusaurus.io/en/) source code for sst-website.  This website is **NOT THE MAIN SST WEBSITE**, but a subsidiary website containing documentation focusing on usage of SST.  

   * The main website is located at http://sst-simulator.org/
   * This subsidiary website is located at http://sst-simulator.org/sst-website

This subsidiary website is developed using [Docusaurus](https://docusaurus.io/en/), refer to that [Docusaurus Documentation](https://docusaurus.io/docs/en/installation) documentation for details on the how to develop content and the file structure of the source code.

The branches of the repo have the following purposes:

   * The **master** branch of this repo contains [Docusaurus](https://docusaurus.io/en/) source for the website.
   * The **gh-pages** branch contains the _built_ static website that is automatically created by Docusaurus operations.

---

## How to develop content

**General operations when updating the sst-website content:**
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
      * Build the website and push it to the **gh-pages** branch.
   
**SST-Team Tasks**

When a pull request to **master** branch from a feature branch is generated:
   * Following the general operations above and test/review the changes to the website
   * Review changes and merge the pull request into **master** branch if acceptable.
   * run the following command from the sst-website/website directory:
      * ```> GIT_USER=<github_user_name> CURRENT_BRANCH=master USE_SSH=true npm run publish-gh-pages```
   * Wait approx 30-60 seconds and check that content is updated at http://sst-simulator.org/sst-website
