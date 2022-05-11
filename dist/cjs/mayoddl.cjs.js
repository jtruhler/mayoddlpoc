'use strict';

const index = require('./index-1eff31b2.js');

/*
 Stencil Client Patch Browser v2.15.2 | MIT Licensed | https://stenciljs.com
 */
const patchBrowser = () => {
    const importMeta = (typeof document === 'undefined' ? new (require('u' + 'rl').URL)('file:' + __filename).href : (document.currentScript && document.currentScript.src || new URL('mayoddl.cjs.js', document.baseURI).href));
    const opts = {};
    if (importMeta !== '') {
        opts.resourcesUrl = new URL('.', importMeta).href;
    }
    return index.promiseResolve(opts);
};

patchBrowser().then(options => {
  return index.bootstrapLazy([["mc-button_9.cjs",[[1,"mc-feature",{"data":[520],"sectionheader":[513]}],[2,"mc-hero",{"buttonlabel":[513],"href":[513],"headingtext":[513],"text":[513],"photodesktop":[513],"photomobile":[513],"lazy":[513]}],[1,"mc-masthead",{"logo":[513],"imgtitle":[513],"nav":[520]}],[1,"mc-footer"],[1,"mc-callout",{"aheading":[513],"atext":[513],"ahref":[513],"abuttonlabel":[513],"bheading":[513],"btext":[513],"bhref":[513],"bbuttonlabel":[513],"cheading":[513],"ctext":[513],"chref":[513],"cbuttonlabel":[513],"dheading":[513],"dtext":[513],"dhref":[513],"dbuttonlabel":[513]}],[6,"mc-container"],[1,"mc-button",{"type":[1],"disabled":[4]}],[1,"mc-picture",{"photodesktop":[513],"photomobile":[513],"alt":[513],"lazy":[513]}],[1,"mc-link",{"label":[513],"href":[513]}]]]], options);
});
