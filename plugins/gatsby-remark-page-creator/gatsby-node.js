const path = require("path");
const { createFilePath } = require("gatsby-source-filesystem");
const _ = require('lodash');


function findFileNode({ node, getNode }) {
    let fileNode = node;
    let ids = [fileNode.id];

    while (fileNode && fileNode.internal.type !== `File` && fileNode.parent) {
        fileNode = getNode(fileNode.parent);

        if (!fileNode) {
            break;
        }

        if (_.includes(ids, fileNode.id)) {
            console.log(`found cyclic reference between nodes`);
            break;
        }

        ids.push(fileNode.id);
    }

    if (!fileNode || fileNode.internal.type !== `File`) {
        console.log('did not find ancestor File node');
        return null;
    }

    return fileNode
}

exports.onCreateNode = ({ node, getNode, actions }, options) => {

    const { createNodeField } = actions;

    if (node.internal.type === "MarkdownRemark") {
        let fileNode = findFileNode({node, getNode});
        if (!fileNode) {
            throw new Error('could not find parent File node for MarkdownRemark node: ' + node);
        }

        let url;
        if (node.frontmatter.url) {
            url = node.frontmatter.url;
        } else if (_.get(options, 'uglyUrls', false)) {
            url = path.join(fileNode.relativeDirectory, fileNode.name + '.html');
        } else {
            url = createFilePath({ node, getNode });
        }

        createNodeField({node, name: "url", value: url});
        createNodeField({node, name: "absolutePath", value: fileNode.absolutePath});
        createNodeField({node, name: "relativePath", value: fileNode.relativePath});
        createNodeField({node, name: "absoluteDir", value: fileNode.dir});
        createNodeField({node, name: "relativeDir", value: fileNode.relativeDirectory});
        createNodeField({node, name: "base", value: fileNode.base});
        createNodeField({node, name: "ext", value: fileNode.ext});
        createNodeField({node, name: "name", value: fileNode.name});
    }
};

exports.createPages = ({ graphql, getNode, actions }) => {
    const { createPage } = actions;

    return graphql(`
    {
      allMarkdownRemark {
        edges {
          node {
            id
            fields {
              url
              relativePath
              relativeDir
            }
            frontmatter {
              template
            }
            html
          }
        }
      }
    }
  `).then(result => {
        if (result.errors) {
            return Promise.reject(result.errors);
        }

        const siteNode = getNode('Site');
        const siteDataNode = getNode('SiteData');

        const pages = result.data.allMarkdownRemark.edges.map(({ node }) => {
            const gatsbyNode = getNode(node.id);
            return {
                url: node.fields.url,
                relativePath: node.fields.relativePath,
                relativeDir: node.fields.relativeDir,
                frontmatter: gatsbyNode.frontmatter,
                html: gatsbyNode.html
            };
        });

        result.data.allMarkdownRemark.edges.forEach(({ node }) => {
            const url = node.fields.url;
            const relativePath = node.fields.relativePath;
            const relativeDir = node.fields.relativeDir;
            const component = path.resolve(`./src/templates/page.js`);
            createPage({
                path: url,
                component: component,
                context: {
                    url: url,
                    relativePath: relativePath,
                    relativeDir: relativeDir,
                    frontmatter: getNode(node.id).frontmatter,
                    html: node.html,
                    pages: pages,
                    site: {
                        siteMetadata: siteNode.siteMetadata,
                        pathPrefix: siteNode.pathPrefix,
                        data: _.get(siteDataNode, 'data', null)
                    }
                }
            });
        });
    });
};
