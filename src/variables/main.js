window.onload = () => {
  window.onscroll = () => {
    rightSidebarSticky();
  };
};

const rightSidebarSticky = () => {
  // const rightSidebar = document.querySelector(".right-sidebar-main-container");

  const scrollHight = window.scrollY;
  if (scrollHight >= 400) {
    // rightSidebar.classList.add("scrolling");
  }
  //   else {
  //     rightSidebar.classList.remove("scrolling");
  //   }
};
