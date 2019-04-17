---
title: Jekyll vs. Hugo - A Full Comparison
excerpt: >-
  When deciding how to approach a new website, you may be taken back by all the
  options you have. Even if you’ve...
template: BlogPostLayout
thumbnail: /images/blogs/thumbnails/jekyll-v-hugo-thumbnail.png
image: ''
readTimeMins: 8
---

When deciding how to approach a new website, you may be taken back by all the options you have. Even if you’ve settled on creating a static site, the number of tools available is astounding. In this article we’ll break down a couple of the popular options for generating static sites.

[The Jekyll site generator](https://jekyllrb.com/) is one of the most established in the market for a couple of reasons. Firstly, it was developed by one of the founders of GitHub. On this basis alone, the thousands of developers who used GitHub for their source control were exposed to it. GitHub also used Jekyll to offer [GitHub pages](https://pages.github.com/), a service to create free sites and blogs simply by interacting with a Git repository. This kicked off a resurgence in the popularity of static sites, especially in light of some of the security problems CMSes like WordPress or Drupal encountered.

Soon after, a whole ecosystem of similar tools started popping up. Some were existing tools, like those for generating software documentation, that could easily handle generic or blogging duties as well. But developers also started creating other brand new contenders, and [Hugo](https://gohugo.io/) is one of the top entries on that list. It’s targeted at users who are concerned with performance, as it boasts very quick builds even for large sites.

Which brings us to the question at hand: what is the difference between these two applications? When comparing static site generators (SSGs), there are a couple of key attributes you can use to make your decision:

1.  **Technology Stack:** The additional software needed by the SSG.
2.  **Live reload:** The ability to reload updated content without restarting the server.
3.  **Content Format(s):** The markup formats you can use to author content for your site.
4.  **Themes & Templating:** Availability of installable themes, and the templating language used to create page layouts.
5.  **Plug-in Support:** Availability of plugins providing additional functionality.
6.  **Administration:** Availability of a compatible GUI admin interface.

We’ll examine both Jekyll and Hugo across all the above categories in the sections below.

Setting Up & Technology Stack
-----------------------------

<table>
    <tbody>
        <tr class="odd">
            <td><strong>Jekyll</strong></td>
            <td><strong>Hugo</strong></td>
        </tr>
        <tr class="even">
            <td>Jekyll uses the Ruby stack.</td>
            <td>Hugo requires the runtime for the Go programming language.</td>
        </tr>
        <tr class="odd">
            <td>- Large ecosystem</td>
            <td>- Compiled language (speed)</td>
        </tr>
        <tr class="even">
            <td>- Multiple Ruby module installers</td>
            <td>- Comparatively new language, smaller ecosystem</td>
        </tr>
        <tr class="odd">
            <td>- Developer-friendly</td>
            <td></td>
        </tr>
    </tbody>
</table>

Before installing your SSG, you’ll need to make sure you have all the required software. Jekyll runs on the [Ruby stack](https://www.ruby-lang.org/), a popular choice for both desktop and web-based server applications. While developers enjoy Ruby for its strengths as a programming language, it can be a little difficult to manage from the user’s perspective. For example, on Linux you can install the core Ruby library using your distribution’s package manager, but additional modules can also come from Ruby’s own **gem** installer. If you don’t keep track of what came from where, you may run into issues if you upgrade from one source and not the other. All that said, if you’re a developer who works in Ruby already, the large ecosystem of Ruby software can lend some useful features to your chosen SSG.

![](https://d33wubrfki0l68.cloudfront.net/057395ad58854b3ebafa718e7c49035e4c2765a4/b4afc/img/uploads/compare-jekyll-hugo-ruby-go.png)

Hugo, on the other hand, is built in the [Go programming language](https://golang.org/). It’s a compiled language, which means it’s very fast (compared to interpreted languages like Ruby). It’s also a relatively new language, which means the amount of additional software modules may be somewhat less compared to Ruby.

Live Reload
-----------

<table>
    <tbody>
        <tr class="odd">
            <td><strong>Jekyll</strong></td>
            <td><strong>Hugo</strong></td>
        </tr>
        <tr class="even">
            <td>Jekyll recently added live reload in v3.7.0 in January 2018.</td>
            <td>Hugo has had live reload available by default for some time.</td>
        </tr>
    </tbody>
</table>

Hugo’s web server reloads new and updated content for your site by default. In contrast, the Jekyll server offers live reload as a command-line option when you start it up:

    jekyll serve --livereload


Overall, this may seem like a minor inconvenience for occasional updates. But if you’re making lots of small edits, the time needed to restart your server after each one will start to add up. Keep in mind the type of site you’re looking to build when considering this point.

Content Formats
---------------

<table>
    <tbody>
        <tr class="odd">
            <td><strong>Jekyll</strong></td>
            <td><strong>Hugo</strong></td>
        </tr>
        <tr class="even">
            <td>Markdown and HTML by default.</td>
            <td>Markdown by default.</td>
        </tr>
        <tr class="odd">
            <td>- Kramdown and Redcarpet flavors.</td>
            <td>- Blackfriday and Mmark flavors.</td>
        </tr>
        <tr class="even">
            <td>- Others including AsciiDoc, reStructured Text, Org-Mode, and others via plugin</td>
            <td>- Asciidoc and reStructred Text via "helper"</td>
        </tr>
        <td>- Pandoc support enables other inputs</td>
        <td></td>
    </tbody>
</table>

Making sure your SSG supports your favorite input format(s) is a crucial step, since you’ll be spending the bulk of your time writing content. Both Jekyll and Hugo were built around using [Markdown](https://daringfireball.net/projects/markdown/syntax) as the source format for the text for pages, posts, etc. (Your site’s graphics can be in any web-standard format, such as JPEG, PNG, and so on.)

![](https://d33wubrfki0l68.cloudfront.net/96eda94d48631905e9a62f074200ded97f78294b/337ba/img/uploads/compare-jekyll-hugo-markdown.png)

Either app is also capable of handling content in other formats via built-in functions, plugins, or external programs. Note here that Hugo’s support for [Pandoc](https://pandoc.org/) gives you a wide array of input options, including word processing formats like .DOCX or .ODT.

Themes & Templating
-------------------

<table>
    <tbody>
        <tr class="odd">
            <td><strong>Jekyll</strong></td>
            <td><strong>Hugo</strong></td>
        </tr>
        <tr class="even">
            <td>Jekyll uses the Liquid templating engine</td>
            <td>Hugo uses the Go programming language's internal templates.</td>
        </tr>
    </tbody>
</table>

Both Jekyll and Hugo have alternate themes available – the [Jekyll Themes](http://jekyllthemes.org/) site lists them in various categories, while the [Themes section of the official Hugo site](https://themes.gohugo.io/) has them tagged as well. However, many of these are relatively simple themes (consider the example at the top-right below), and themes are not compatible across different SSGs. So if you like a Jekyll theme but the functionality of Hugo, you’re out of luck.

![](https://d33wubrfki0l68.cloudfront.net/ec138f2f7087329e7368e72fb66dafc241915f9e/f5a29/img/uploads/compare-jekyll-hugo-theme.png)

The template language describes how the HTML files are constructed from source content. For example, when you write a post for Jekyll in Markdown, you don’t include the things that will be included in the header of the resulting site, such as the menu. Rather, these are gathered from other files, and the template defines how they’re all glued together. This is easy to see in the below image, which illustrates a simple template for Hugo.

![](https://d33wubrfki0l68.cloudfront.net/1df79c7b902625c90c4de72a1fd0605bd4931556/43927/img/uploads/compare-jekyll-hugo-template.png)

Most casual users won’t ever use these. They’ll either use the templates built into the theme they’ve selected, or download a plugin that provides new templates. They may actually just download a template file and drop it in the appropriate folder. But if you already use one of these languages, you’ll find it that much easier to create your own SSG templates.

Plug-in Support
---------------

<table>
    <tbody>
        <tr class="odd">
            <td><strong>Jekyll</strong></td>
            <td><strong>Hugo</strong></td>
        </tr>
        <tr class="even">
            <td>Jekyll has a large collection of plugins.</td>
            <td>Hugo does not have a plugin mechanism.</td>
        </tr>
    </tbody>
</table>

Static sites lend themselves well to simple publications consisting of text and graphics. But at some point, you’re likely to want to add some sort of functionality to your site, such as a form to sign up for your newsletter. This is where plugins can help you. Unlike the CMS standard WordPress, however, there’s not a nicely formatted collection of plugins for static site generators. Instead, you’ll need to hunt down the plugin you want, download it, and install it. Installation will likely be unzipping the plugin into an appropriate folder, and tweaking your config files to turn it on.

Jekyll has arguably the larger collection of available plugins, as it’s been around longer, and provides developers a nice API to work with. Ruby developers are also a bit more common (for now). The [“Awesome Jekyll Plugins”](https://github.com/planetjekyll/awesome-jekyll-plugins) page on GitHub provides a nicely curated list of plugins, broken down by category.

On the other hand, Hugo doesn’t support a full-featured plugin mechanism. There are some utilities that can be used to enhance the base Hugo install, such as the [Hugo Gallery Generator](https://github.com/icecreammatt/hugo-gallery) tool. But if you’re someone who used to go crazy trying out lots of WordPress plugins, Hugo might not be your best choice.

Administration
--------------

<table>
    <tbody>
        <tr class="odd">
            <td><strong>Jekyll</strong></td>
            <td><strong>Hugo</strong></td>
        </tr>
        <tr class="even">
            <td>A wide variety of admin panels are compatible with Jekyll.</td>
            <td>Hugo also has dozens of admin options, both open and closed source.</td>
        </tr>
    </tbody>
</table>

While the text- and console-based nature of SSGs are among their greatest advantages, there are lots of reasons you might want to add a UI. You may have an editorial team working on your site with you. You may need to make a change to the site while you’re away from your computer. Fortunately, SSGs and their admin panels aren’t married, giving you a level of flexibility in authoring and workflow you can’t find with a traditional CMS.

![](https://d33wubrfki0l68.cloudfront.net/435a674323dc4470ed9518facf1f93e8abe88897/42812/img/uploads/compare-jekyll-hugo-admin.png)

Support for an administrative UI is just a function of finding one that supports your selected SSG. Jekyll or Hugo know nothing about the “headless CMS” that may (or may not) sit next to it, allowing you to do WYSIWYG editing. It’s the admin panel that needs support for the SSG, so it knows how to read the content, how to build the updated site, etc. The site [HeadlessCMS.org](https://headlesscms.org/) is pretty much **the** place to search out these admin UIs, and provides you with a nice rundown of what you need to run it, and what SSGs it supports.

Conclusion
----------

To wrap up, there are a few key attributes to consider when selecting an SSG, summarized in the following table:

<table>
    <tbody>
        <tr class="odd">
            <td></td>
            <td><strong>Jekyll</strong></td>
            <td><strong>Hugo</strong></td>
        </tr>
        <tr class="even">
            <td>Technology Stack</td>
            <td>Jekyll uses the Ruby stack.</td>
            <td>Hugo requires the runtime for the Go programming language.</td>
        </tr>
        <tr class="odd">
            <td></td>
            <td>- Large ecosystem</td>
            <td>- Compiled language (speed)</td>
        </tr>
        <tr class="even">
            <td></td>
            <td>- Multiple Ruby module installers</td>
            <td>- Comparatively new language, smaller ecosystem</td>
        </tr>
        <tr class="odd">
            <td></td>
            <td>- Developer-friendly</td>
            <td></td>
        </tr>
        <tr class="even">
            <td>Live Reload</td>
            <td>Jekyll recently added live reload in v3.7.0 in January 2018.</td>
            <td>Hugo has had live reload available for some time.</td>
        </tr>
        <tr class="odd">
            <td>Input Formats</td>
            <td>Markdown and HTML by default.</td>
            <td>Markdown by default.</td>
        </tr>
        <tr class="even">
            <td></td>
            <td>- Kramdown and Redcarpet flavors.</td>
            <td>- Blackfriday and Mmark flavors.</td>
        </tr>
        <tr class="odd">
            <td></td>
            <td>- Others including AsciiDoc, reStructured Text, Org-Mode, and others via plugin</td>
            <td>- Asciidoc and reStructred Text via "helper"</td>
        </tr>
        <tr class="even">
            <td></td>
            <td>- Pandoc support enables other inputs</td>
            <td></td>
        </tr>
        <tr class="odd">
            <td>Templating/Theming</td>
            <td>- Jekyll uses the Liquid templating engine</td>
            <td>- Hugo uses the Go programming language's internal templates.</td>
        </tr>
        <tr class="even">
            <td></td>
            <td>- A large collection of themes are available.</td>
            <td>- While not quite as many as Jekyll, Hugo has plenty of themes available.</td>
        </tr>
        <tr class="odd">
            <td>Administration</td>
            <td>A wide variety of admin panels are compatible with Jekyll.</td>
            <td>Hugo also has dozens of admin options, both open and closed source.</td>
        </tr>
    </tbody>
</table>

Armed with this knowledge, you’re now in a great position to go install one (or both!) of these and give them a whirl. You never know, their simplicity and elegance may surprise you.
