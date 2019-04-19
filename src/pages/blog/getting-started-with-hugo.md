---
displayPost: true
title: 'Getting Started with Hugo: How to Make Your First Website'
excerpt: >-
  There are a whole host of reasons you might want to go static with your site content, and for a static site generator...
template: BlogPostLayout
thumbnail: /images/blogs/thumbnails/getting-started-with-hugo-thumbnail.png
readTimeMins: 8
---

There are a whole host of reasons you might want to go static with your site content, and for a static site generator, Hugo can be a great choice. In this article, we’ll take a look creating your first Hugo project and hosting it on GitHub Pages, how you can begin to create your own themes, and what your best options are for a headless CMS to sit behind your Hugo site.

### **What is Hugo?**

Hugo is one of the most popular static site generators (SSGs) out there, second only perhaps to Jekyll. One of its primary objectives is speed, and with typical sub-second build times, you’ll rapidly come to appreciate this as you start using it.

Because sites built with Hugo are static, you’ll gain the same benefits as with other SSGs when compared to a full-stack CMS like Wordpress: improved performance, simpler and cheaper scalability, and greatly improved security.

Hugo is written in Go, and unlike many other SSGs, has no dependencies - it’s simply distributed as a stand-alone binary. For any SSG, the fundamental inputs to create a site are content and templates (along with static assets like images), and Hugo uses Go templates along with Markdown content by default.

### **Your first Hugo site**

You can download the Hugo distributable for whatever platform you’re using at [https://gohugo.io](https://gohugo.io "https://gohugo.io"). Alternatively, on MacOS, [Homebrew](https://brew.sh "Homebrew") is a good choice and you can install with a single command:

    brew install hugo


You’ll also want to install [git](https://git-scm.com "git") if you haven’t already, since this is the easiest way to obtain Hugo themes as well as being a good way to manage your changes. Once installed, you can create a new site using the CLI:

<Highlight language='ruby'>

    hugo new site my-first-site
    cd my-first-site

</Highlight>

Let’s add a theme to give us the basic scaffold of a site to work with. Themes are installed into the /themes/ folder and the easiest way to do this is with git. Let’s try a popular biographical profile theme:

    cd themes
    git clone https://github.com/escalate/hugo-split-theme.git


You can specify the theme for Hugo to use in your config.toml file by specifying a theme parameter matching the folder name:

    theme = "hugo-split-theme"


Generally Hugo themes will ship with an exampleSite folder which contains the configuration you need to start using the theme. Unless you’re familiar with how the theme works, you’ll usually want to copy the entire directory to the project root (or at a minimum duplicate its config.toml):

    cp -a ./themes/hugo-split-theme/exampleSite/* ./


Hugo comes with its own server, which you can run using:

    hugo server -D


The local server runs at [http://localhost:1313](http://localhost:1313). Test it out and you should see the theme’s example site up and running, ready for you to start editing.

There are a few places you’ll want to look to modify your site now that the theme is running. The /content/ folder contains markdown files with the text for your site. Notice how pages use references to link to one another. If you want to create a new page, you can use:

    hugo new new-post.md


This creates a new markdown file, which will also include “frontmatter” (additional metadata about the content) at the top. Themes which are focused on blogging will usually have a /content/posts/ folder which is pre-configured for blog entries.

The /layouts/ folder is where you’d place Go templates for your site. We’re currently inheriting all our layouts from the theme, so there’s no root /layouts/ folder. You could create one and start to override the theme’s layouts if you wished.

The /static/ folder is where static content like images and CSS go. Once again, we’re inheriting some files from the template here, but you’d probably want to put in your own headshot.

Finally, config.toml contains some theme-specific configuration along with Hugo’s general parameters. With the theme we’ve chosen, this controls the links below the main page copy, for example.

Why not try updating the page to create your own profile?

### **Hugo and GitHub Pages**

[GitHub Pages](https://help.github.com/articles/user-organization-and-project-pages/#user--organization-pages "GitHub Pages") offers free static hosting at the github.com domain for users, organisations and projects with a GitHub account. We’ll assume you already have a GitHub account.

If we want to use our Hugo site as a GitHub user page, we need to host the static content generated by Hugo in a .github.io repository. Skip creating a readme file when you set it up. You’ll probably also want to create a separate repository for your Hugo source files - if you don’t know how to do this, it’s probably worth familiarising with the basics of git before proceeding.

Once you have your GitHub username repository created, and you’re happy that your site works locally, terminate the local server. You want to update the baseURL parameter in config.toml to point to your repository URL:

    baseURL = "https://<username>.github.io/"


Run Hugo with no parameters to build a /public/ directory with your static site ready for distribution:

    hugo


If you’re using git for your project source, add the /public/ folder to your gitignore file:

    echo 'public/' >> .gitignore


You’ll then want to push this to your GitHub username repository:

    cd public
    git remote add origin https://github.com/<username>/<username>.github.io.git
    git add .
    git commit -m “Initial commit.”
    git push -u origin master


Once you have pushed your public files to git, you will find your static site available at https://.github.io/.

### **How to build a Hugo theme**

It’s all very well downloading and using existing Hugo themes, but what if you want to build your own? The Hugo CLI includes a command to initialise your own theme:

    hugo new theme my-theme


If you look at the directory structure of your newly-created theme, you’ll see it is comprised of a number of folders. The /static/ folder includes and static assets such as images and CSS which form part of the theme. The /archetypes/ folder contains predefined frontmatter (the metadata at the top of your markdown templates) which is used when you invoke “hugo new”.

The /layouts/ folder, which we’ve already looked at, includes Go templates used to render your content. This is where you’ll probably do the majority of work for your theme. Try modifying index.html:

    <!DOCTYPE html>
    <html>
      <body>
        <p>This is my first Hugo theme!</p>
      </body>
    </html>


You can now modify your project.toml file (not theme.toml, which contains metadata for the theme itself) to use the theme:

    theme = “my-theme"


Now rebuild the site, and you should see your theme’s template rendered.

We haven’t really used the Go templating features, however. To do this, we need to first create an archetype for some content. Create a posts.md in the /archetypes/ folder as follows:

    ---
    title: "{{ replace .Name "-" " " | title }}"
    date: {{ .Date }}
    description: ""
    draft: true
    ---


Now you can create a new posts and it will utilise this archetype. Hugo matches the folder you’re placing the markdown file in to the name of your archetype file (and if no match is found, it uses the default.md archetype).

    hugo new posts/hello.md
    hugo new home.md


Note that if a default.md file exists in the project’s archetypes directory (not to be confused with the template’s archetypes directory) then it will override ALL template archetypes. So you may wish to delete it.

Go ahead and update the markdown files you just generated with some content. Now, you can update your index.html template to utilise content from any posts in your project:

    <!DOCTYPE html>
    <html>
      <body>
        <h1>{{ .Title }}</h1>
        {{ range .Pages }}
          <h2>{{ .Title }}</h2>
          <h3>{{ .Description }}</h3>
          <p>{{ .Content }}</p>
        {{ end }}
      </body>
    </html>


This is telling Hugo to use the site’s title, then iterate through all content files and display their title, description and content when it builds the site. Rebuild your site, and you should see this in action - Hugo is rendering your content using your own (very basic) theme.

There’s much more you can do with Hugo’s templating engine, and the Hugo website has [extensive guidance](https://gohugo.io/templates/ "Hugo Templates") on how to get the most from it.

### **Which CMS to use with Hugo?**

Okay, so you’ve designed and built your static site templates, and you want to populate it with content. You could write markdown files directly, but that’s not always a suitable approach (maybe you’re handing the website to someone else to update content?). In many cases, you probably want a CMS to handle this part. What you need is a “headless” CMS which handles the content management but doesn’t expect to take care of the presentation.

Hugo doesn’t natively support generating pages using content from an API, nor does it support plugins to introduce this sort of feature. Therefore, they key to integrating and CMS with Hugo is to be able to output content from the CMS into a format and folder structure that Hugo can understand. This makes git-based CMSes particularly attractive, and also means you need some sort of automated build & deployment pipeline.

In theory, you could do this with almost and CMS, by creating scripts to do so. However, some have already done the hard part for you, and have relatively easy ways of outputting Hugo-ready content. Popular options with specific Hugo support include NetlifyCMS, Forestry and DatoCMS. [DatoCMS](https://www.datocms.com "DatoCMS") adopts the approach of using a pre-built tool to query its API and generate Hugo-readable content. [Forestry](https://forestry.io "Forestry") and [Netlify](https://www.netlify.com "Netlify"), meanwhile, are git-based and will commit in an appropriate structure, plus can also handle build and deployment of the site to a hosting provider. [Netlify’s CMS](https://www.netlifycms.org "NetlifyCMS") is an open source project which you can use for free if you want to handle setup yourself and aren’t looking for the other services Netlify offers.