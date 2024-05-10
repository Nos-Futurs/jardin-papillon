import axios from 'axios';

// TODO: Check documentation : https://docs.astro.build/en/guides/cms/strapi/
// Especially the wrapper: https://docs.astro.build/en/guides/cms/strapi/#creating-the-api-wrapper

// TODO: CACHE
// tried : axios-cache-interceptor
// tried : axios-cache-adapter
// could try : solid-cache (but works with context component so it might not work with astro framework)

const getBadge = async (wcU: string): Promise<{ c: number; p: number; url: string } | undefined> => {
  let formatedWCU = wcU;
  if (wcU.endsWith('/')) {
    formatedWCU = formatedWCU.slice(0, -1);
  }
  // INFO: we need to make two call consecutively because sometimes the url must end by '/' and sometimes not --> Error from website carbon, i don't know why
  return axios(`https://api.websitecarbon.com/b?url=${encodeURIComponent(formatedWCU)}`)
    .then((result) => {
      if (result.data && result.status === 200) {
        return result.data as { c: number; p: number; url: string };
      }
      return undefined;
    })
    .catch(() => {
      return axios(`https://api.websitecarbon.com/b?url=${encodeURIComponent(`${formatedWCU}/`)}`)
        .then((secondResult) => {
          if (secondResult.data && secondResult.status === 200) {
            return secondResult.data as { c: number; p: number; url: string };
          }
          return undefined;
        })
        .catch(() => {
          return undefined;
        });
    }) as Promise<{ c: number; p: number; url: string } | undefined>;
};

export default getBadge;
