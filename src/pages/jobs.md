---
title: Jobs
footer:
  type: footer
  component: Footer
header:
  type: header
  component: Header
  backgroundImage: images/detail-bg.jpg
  inversed: false
  displayAction: true
sections:
  - name: title
    type: titleBlock
    component: TitleBlock
    title: Join The Team
    subtitle: Make building and maintaining modern websites easy.
    template: titleBlock
  - name: block
    type: twoColumnBlock
    component: TwoColumnBlock
    column1:
      title: About Stackbit
      text: >-
        Websites are the building blocks of the internet and many millions of
        new ones are created every year. The way we create and engineer websites
        is changing thanks to the constant evolution of tools, best practices
        and needs. We're seeing websites being statically generated, served from
        CDNs, edited using Headless CMSs and wired up with a myriad of developer
        workflows. New ideas like the JAMstack, Serverless computing and GitOps
        enable us to create more performant and secure websites.
    column2:
      title: Building The New Internet
      text: >-
        One side effect of new, raw technologies is that they can increase the
        level of expertise required to get the job done. We recognize this gap
        between the available technologies and the needs of professionals as the
        product gap. At Stackbit our mission is to solve this gap - We're
        creating technology, products and services to help professionals "Get
        Websites Done".
    template: twoColumnBlock
  - name: banner
    type: banner
    component: Banner
    title: >-
      Stackbit was founded in late 2018 by a team of serial entrepreneurs and is
      backed by top tier VCs. We maintain a small HQ in San-Francisco and our
      team is fully distributed around the world.
    items:
      - title: Founded in 2018
        subtitle: by a team of serial entrepreneurs
        image: images/jobs/founded-icon.svg
      - title: Funded by top-tier VCs & Angels
        image: images/jobs/funded-icon.svg
      - title: A lean and tight team
        image: images/jobs/employees-icon.svg
      - title: HQ in San Francisco
        subtitle: with a remote team around the world
        image: images/jobs/location-icon.svg
    template: banner
  - name: jobs
    type: jobs
    component: Jobs
    title: Open Positions
    template: jobs
menus:
  main:
    title: Home
    weight: 1
template: SingleColumnLayout
---
