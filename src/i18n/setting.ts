export const fallbackLng = "ja";
export const languages = [fallbackLng, "en"];
export const defaultNS = "translation";

export function getOptions(lng = fallbackLng, ns: string | string[] = defaultNS) {
  return {
    // debug: true,
    supportedLngs: languages,
    fallbackLng,
    lng,
    fallbackNS: defaultNS,
    defaultNS,
    ns,
    react: {
      transSupportBasicHtmlNodes: true,
      transKeepBasicHtmlNodesFor: ["wbr", "br", "strong", "i"],
    },
  };
}
