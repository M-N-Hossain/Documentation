import fs from "fs";

// function renderDocumentPage(page, config = {}) {
//   const navber = fs
//     .readFileSync("./public/component/navbar/navbar.html")
//     .toString()
//     .replace("$NAME", config.name || "")
//     .replace("$OFFICIAL_TITLE", config.officialTitle || "")
//     .replace("$PAGE_TITLE", config.pageTitle || "Documentation")
//     .replace("$CSS_LINK", config.cssLink || "")
//     .replace("$SUB_PAGE_CSS_LINK", config.subPageCssLink || " ");
//   const footer = fs.readFileSync("./public/component/footer/footer.html");

//   return navber + page + footer;
// }

function renderPage(page, config = {}) {
  const navber = fs
    .readFileSync("./public/component/navbar/navbar.html")
    .toString()
    .replace("$NAME", config.name || "")
    .replace("$OFFICIAL_TITLE", config.officialTitle || "")
    .replace("$PAGE_TITLE", config.pageTitle || "Documentation")
    .replace("$CSS_LINK", config.cssLink || "")
    .replace("$SUB_PAGE_CSS_LINK", config.subPageCssLink || "")
    .replace("$NAV_LOGO_TITLE", config.navLogoTitle || "")
    .replace("&LINK1", config.link1 || "")
    .replace("&LINK2", config.link2 || "")
    .replace("&LINK3", config.link3 || "")
    .replace("&LINK4", config.link4 || "");
  const footer = fs.readFileSync("./public/component/footer/footer.html")
  .toString()
  .replace("$FOOTER_ADMIN_TITLE", config.footerAdminTitle || "")
  .replace("$PERSON_ICON", config.footerPersonIcon || "");
  return navber + page + footer;
}

function renderLoginSignUpPage(page, config = {}) {
  const footer = fs.readFileSync("./public/component/footer/footer.html");
  return page + footer;
}

function renderPageInNodePage(page, config = {}) {
  const navber = fs
    .readFileSync("./public/component/navbar/navbar.html")
    .toString()
    .replace("$NAME", config.name || "")
    .replace("$OFFICIAL_TITLE", config.officialTitle || "")
    .replace("$PAGE_TITLE", config.pageTitle || "Documentation")
    .replace("$CSS_LINK", config.cssLink || "")
    .replace("$SUB_PAGE_CSS_LINK", config.subPageCssLink || "")
    .replace("$NAV_LOGO_TITLE", config.navLogoTitle || "")
    .replace("&LINK1", config.link1 || "")
    .replace("&LINK2", config.link2 || "")
    .replace("&LINK3", config.link3 || "")
    .replace("&LINK4", config.link4 || "");
  const nodepage = fs
    .readFileSync("./public/pages/nodes/nodes.html")
    .toString()
    .replace("$DOCUMENTATION_TITLE", config.documentationTitle || "Nodes");
  const footer = fs.readFileSync("./public/component/footer/footer.html")
  .toString()
  .replace("$FOOTER_ADMIN_TITLE", config.footerAdminTitle || "")
  .replace("$PERSON_ICON", config.footerPersonIcon || "");

  return navber + nodepage + page + footer;
}

function readPage(pagePath) {
  return fs.readFileSync(pagePath).toString();
}

export default {
  renderPage,
  readPage,
  renderLoginSignUpPage,
  renderPageInNodePage,
};
