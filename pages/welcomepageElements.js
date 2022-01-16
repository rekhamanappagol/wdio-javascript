
class welcomepageElements{

get pageHeader(){ return $('#ModelIntro-1 h2'); }
get subHeading(){return $('div[id="ModelIntro-1"] p')}
get menuButton(){return $('#sitenav-sidenav-toggle')}
get menuList(){return $$('.SiteNav_LinksMenu button em')}
get menuCloseButton(){return $("span[data-testid='close']")}
get ourCarsButton(){return $('button[id="nav:topNavCarMenu"]')}
get carslist(){return $$('a[data-autoid="nav:carContainer"] em')}


}
module.exports = new welcomepageElements(); 