import Prismic from "prismic-javascript";

const REPOSITORY = process.env.PRISMIC_REPOSITORY_NAME;
const REF_API_URL = `https://${REPOSITORY}.cdn.prismic.io/api/v2`;
const GRAPHQL_API_URL = `https://${REPOSITORY}.cdn.prismic.io/graphql`;
// export const API_URL = 'https://your-repo-name.cdn.prismic.io/api/v2'
export const API_TOKEN = process.env.PRISMIC_API_TOKEN;
export const API_LOCALE = process.env.PRISMIC_REPOSITORY_LOCALE;

export const PrismicClient = Prismic.client(REF_API_URL, {
  accessToken: API_TOKEN,
});

async function fetchAPI(query, { previewData, variables } = {}) {
  const prismicAPI = await PrismicClient.getApi();
  const res = await fetch(
    `${GRAPHQL_API_URL}?query=${encodeURI(query)}&variables=${JSON.stringify(
      variables
    )}`,
    {
      headers: {
        "Prismic-Ref": previewData?.ref || prismicAPI.masterRef.ref,
        "Content-Type": "application/json",
        "Accept-Language": API_LOCALE,
        Authorization: `Token ${API_TOKEN}`,
      },
    }
  );

  if (res.status !== 200) {
    console.log(await res.text());
    throw new Error("Failed to fetch API");
  }

  const json = await res.json();
  if (json.errors) {
    console.error(json.errors);
    throw new Error("Failed to fetch API: JSON Errors");
  }
  return json.data;
}

export async function getAllSkills() {
  const data = await fetchAPI(`
  {
    allSkills{
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          id,
          name,
          categories {
            tag
          },
          img
        }
      }
    }
  }
  `);

  const data_2 = await fetchAPI(`
  {
    allSkills (after: "YXJyYXljb25uZWN0aW9uOjE5" ) {
      totalCount
      pageInfo {
        hasPreviousPage
        hasNextPage
        startCursor
        endCursor
      }
      edges {
        node {
          id,
          name,
          categories {
            tag
          },
          img
        }
      }
    }
  }
  `);
  const retrievedSkills = data?.allSkills?.edges.concat(
    data_2?.allSkills?.edges
  );
  return retrievedSkills;
}

export async function getAllBlogs() {
  const data_3 = await fetchAPI(`
  {
    allNewblogs {
      edges {
        node {
          title
          image
          description
          author
          release_date
        }
      }
    }
  }  
  `);

  const retrievedBlogs = data_3?.allNewblogs?.edges;
  return retrievedBlogs;
}

export async function getAllProjects() {
  const data_4 = await fetchAPI(`
  {
    allProjects {
      edges {
        node {
          title
          description
          homeimg
          release_date
          skills {
            skill {
              _linkType
              ... on Skill {
                name
                img
              }
            }
          }
        }
      }
    }
  }
  `);

  const retrievedProjects = data_4?.allProjects?.edges;
  return retrievedProjects;
}
