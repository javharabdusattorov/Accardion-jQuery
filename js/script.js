class accardion {
    constructor(item) {
        $(item).find('.accardion-body').not(':nth(0)').hide();
        $(item).find('.accardion-header').click(function() {
            $(item).find(this).next().slideToggle(400);
            $(item).find('.accardion-body').not($(this).next()).slideUp(400);
        })  
    }
} 
const accardionParent = $('.accardion');
for(let i of accardionParent) {
    i = new accardion(i);
}