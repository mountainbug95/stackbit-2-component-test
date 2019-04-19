---
displayPost: true
title: 'The main reasons why you need to go static'
excerpt: >-
  You’ve probably heard a lot about static sites lately, as for a lot of uses cases they offer a superior alternative to...
template: BlogPostLayout
thumbnail: /images/blogs/thumbnails/need-to-go-static-thumbnail.png
readTimeMins: 8
---

You’ve probably heard a lot about static sites lately, as for a lot of uses cases they offer a superior alternative to using a complete CMS like Wordpress. But it might surprise you that you can gain the benefits of static site development without sacrificing the rich dynamic features your users expect. In this article, we’ll take a look at what static sites can do for you these days, and why you should be seriously considering them for much more than you might have realised.

**What is static web publishing?**
----------------------------------

Put simply, a static website is one where the content is fixed, and served exactly as-is for every user without any dynamic content being generated on the server side. This means that HTML (content), CSS (styling), and perhaps JavaScript are delivered pre-built to the user’s browser, but there are no server-side technologies like PHP or ASP, no application logic with the likes of Node.js, and no database. The HTML, CSS and JavaScript is all rendered (or executed) client-side, exactly as it was provided by the server.

Static sites are well-suited to situations where the primary purpose of the website is presenting content which does not differ from user to user. This applies often to things like business websites or blogs. In the early days of static sites, they were also best-suited to websites where content was updated infrequently, since it had to be hard-coded into the HTML. However, these days there are approaches to integrate a static site with a CMS and rebuild & deploy on demand, allowing their content to be updated as dynamically as a database-driven site.

**Why are Static Site Generators picking up steam?**
----------------------------------------------------

It’s been possible to create a static website since the dawn of the web, by coding your own HTML and CSS (or using a package which allowed export of web content). However, as websites have become more ambitious, the demands of even static pages have outgrown this method. Simultaneously, better ways of managing content have emerged via the headless CMS model, which makes it possible to gain all the benefits of static sites without losing those you’d associate with a CMS like Wordpress.

Static site generators (SSGs) are tools which, as the name suggests, build static sites for you in a more convenient and maintainable manner. Typically. they’ll take a combination of content and templates, and use those to build the site. For example, the popular static site generator Hugo uses markdown templates for content, with page layouts defined in Go templates. These are then combined at build time to generate HTML and CSS which can be hosted for delivery to clients.

But why are static site generators getting so much coverage these days? There are a number of different factors at play:

#### **Speed**

Whether your site is static or dynamic, what actually gets delivered to the client browser is always HTML, CSS and JavaScript, because those are the things browsers understand. The difference is that dynamic sites have to run some process on the server to generate appropriate files to send to the browser, whereas static sites have them ready immediately. As a result, static sites are extremely fast compared to others, and your users will notice the improved load speed.

#### **Security**

We’re all worried about web security, and rightly so. Where websites generate content dynamically, there’s a lot more scope for vulnerability to hacking. Many Wordpress sites run with known security exploits, and in 2014 millions of websites (by some estimates up to 12 million) were hacked due to a vulnerability in Drupal, another popular CMS.

With a static site, when the user requests a page, the server simply sends them the files for that page. There’s not really much to hack, and things like database and scripting attacks aren’t feasible.

#### **Reliability**

Dynamic websites are backed by a number of different components (web server, application, database, etc.), and all of these have to be kept running to ensure the website’s content is available. If one of them goes down, that’s it - the website becomes non-functional until you resolve the issue or restart the server. If your site is static, on the other hand, all you need is a filesystem to host the static content on, and in practice, this sort of storage very rarely goes wrong.

#### **Cost**

Let’s think for a moment about alternatives to static sites. Wordpress is probably the most popular. To serve a Wordpress site, you need a whole host of components running server-side: a web server, PHP, MySQL, Wordpress itself, a theme, and probably some plugins. This adds up to quite a significant footprint, and this footprint costs you money. This is at a minimum probably not far off $20 a month for a Wordpress site, even if your user base is very small.

With a static site, meanwhile, all you’re paying for is storing and serving the static content, which with cloud providers like Amazon or Google is typically charged at a very low cost based on usage (and may even fall within a free usage tier). Static hosting is almost always going to be much cheaper.

#### **Versioning**

Now we’re into developer and author experience. One of the nicest things about working with static sites is that you can check all your source into a version control tool like git, and use that to track any changes. If you want to roll back, you can do so instantly. You don’t have to worry about rolling back database changes, ensuring all component versions are in sync, and so on, which are the sort of concerns that dynamic site authors have to deal with.

#### **Simplicity**

The Wordpress ecosystem can be daunting at the best of times. If you’ve ever searched for Wordpress plugins, you’ll know how extensive the choice is, and it’s typically to install a variety of plugins even for fairly simple tasks. Static sites needn’t endure such complexity - it’s perfectly possible to build a site by downloading a single tool, choosing a theme, and writing your content.

Yet this simplicity needn’t mean that you’re constrained for choice. There are many static site generators our there, each allowing you to code and author in a different language or style. And you have an extensive range of options available to integrate the static site generator of your choice with a CMS of your choice, allowing a genuinely customisable experience without lots and lots of plugins or 3rd party components.

**What is JAMStack?**
---------------------

You might already have heard the term “JAMStack”, which is linked closely with the concept of static sites. The problem with the description “static” is that it implies limitations in functionality of sites built in this manner. However, it’s possible to utilise static sites with other capabilities - CMS, API, and so on - to create a much richer experience on par with the functionality of most dynamic sites. Built correctly, static sites can, for example, handle payment processing. JAMStack was coined as a phrase to better describe the full ecosystem surrounding static site development.

[JAMStack](https://jamstack.org "JAMStack") is actually an acronym, and its definition describes the characteristics of sites built using this paradigm:

*   **J** refers to **JavaScript**, and if a site is JAMStack then any dynamic functionality is handled via JavaScript (either vanilla or a framework), entirely on the client side.
*   **A** is short for **APIs**, and indicates that any server-side processes are abstracted into re-usable REST APIs (whether purpose-built or 3rd party).
*   **M** stands for **markup**, and means that markup is pre-built from templates, usually with a static site generator.

The implication of this is that sites are not JAMStack if they use a full-stack CMS like Wordpress or Drupal, nor if they rely on a back-end like Node.js or Ruby to serve the site.

JAMStack enables sites to achieve the benefits of static site build we’ve already covered, but providing more dynamic functionality provided through APIs, with loose coupling to allow an improved development experience.

**What is serverless architecture?**
------------------------------------

Serverless is a cloud-computing model in which a cloud provider allows functions to be executed in their environment agnostic of any underlying infrastructure. The cloud provider dynamically allocates resources, and billing is based purely on the amount of compute power executed by the function. This is useful because it automates scaling with demand, generally costs less because there’s no charge for idle, and stops the developer having to worry about server maintenance. The best known example is probably [AWS Lambda](https://aws.amazon.com/lambda/ "AWS Lambda").

So how does this tie in with static sites and JAMStack?

Let’s start with static site hosting. If you’ve used a SSG to build a static site, gone are the days where you need to procure a server to host your site. Cloud providers now provide very straightforward, scalable storage solutions which you can simply upload your HTML, CSS and JavaScript to, and point your site at. One such service is [Amazon S3](https://aws.amazon.com/s3/ "Amazon S3"). If you store your static site in an S3 bucket, you can configure DNS to make it accessible at the domain of your choice. No server involved.

That’s great, but we also want to be able to provide dynamic functionality via JAMStack’s loosely-coupled REST APIs. Enter serverless, which gives us the opportunity to develop and expose the APIs we need without needing to worry about server hosting and the inconveniences which come with it. This completes the picture, and what it gives us all the benefits of a static site model, while also enabling us to build the type of functionality which you might have thought required the likes of Wordpress plugins, Node.js, or Ruby.