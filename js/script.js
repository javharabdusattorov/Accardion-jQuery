function createAccordion(accordionEl) {
    accordionEl.find(".accardion-body").not(":nth(0)").hide();
    accordionEl.find(".accardion-header").click(function () {
      const thisBody = accordionEl.find(this).next();
      const otherBodies = accordionEl.find(".accardion-body").not(thisBody);

      thisBody.slideToggle(400);
      otherBodies.slideUp(400);
    });
}

const accardionParents = $(".accardion");
for (let i of accardionParents) {
    createAccordion($(i))
}
