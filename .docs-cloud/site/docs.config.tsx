import { defineDocs } from "@farming-labs/docs";
import { colorful } from "@farming-labs/theme/colorful";

export default defineDocs({
  entry: "docs",
  theme: colorful(),
  ordering: [
    {
      "slug": "quickstart"
    },
    {
      "slug": "installation"
    },
    {
      "slug": "features",
      "children": [
        {
          "slug": "ai-responses"
        }
      ]
    },
    {
      "slug": "configuration",
      "children": [
        {
          "slug": "database-adapters"
        },
        {
          "slug": "database"
        },
        {
          "slug": "environment"
        }
      ]
    },
    {
      "slug": "guides",
      "children": [
        {
          "slug": "cli-usage"
        }
      ]
    },
    {
      "slug": "architecture",
      "children": [
        {
          "slug": "overview"
        }
      ]
    },
    {
      "slug": "backend",
      "children": [
        {
          "slug": "systems"
        }
      ]
    },
    {
      "slug": "build",
      "children": [
        {
          "slug": "package-structure"
        }
      ]
    },
    {
      "slug": "frontend",
      "children": [
        {
          "slug": "application"
        }
      ]
    }
  ],
  metadata: {
    titleTemplate: "%s – Docs",
    description: "Managed by @farming-labs/docs Cloud",
  },
});
