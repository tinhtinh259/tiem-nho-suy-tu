(function () {
    // desktop 
   
    
    // var isLargeScreen = window.innerWidth > 1139;
    // function showSubmenu() {
    //     var navbar = document.querySelector('.navbar'); // Thay `.navbar` bằng selector của navbar của bạn
    //     var navigationTitles = navbar.querySelectorAll('.navigation-title');
    //     var dropdownTitles = navbar.querySelectorAll('.navigation-title.dropdown');
    //     var megaDropdownMenus = navbar.querySelectorAll('.mega-dropdown-menu');
    //     const dropdown = document.querySelectorAll(".dropdown");

    //     if (isLargeScreen) {
    //         navigationTitles.forEach(function(title) {
    //             // Add hover class on mouseenter
    //             title.addEventListener('mouseenter', function() {
    //                 title.classList.add('hover');
    
    //                 // If the title does not have the 'dropdown', 'dropdown-header', 'dropdown-subheader', or 'dropdown-subsubheader' class, hide all mega-dropdown-menus and remove 'show' from dropdownTitles
    //                 if (!title.classList.contains('dropdown') &&
    //                     !title.classList.contains('dropdown-header') &&
    //                     !title.classList.contains('dropdown-subheader') &&
    //                     !title.classList.contains('dropdown-subsubheader')) {
                        
    //                     megaDropdownMenus.forEach(function(menu) {
    //                         menu.classList.remove('show');
    //                     });
    
    //                     dropdownTitles.forEach(function(dropdownTitle) {
    //                         dropdownTitle.classList.remove('show');
    //                         if (dropdownTitle.nextElementSibling) {
    //                             dropdownTitle.nextElementSibling.classList.remove('show');
    //                         }
    //                     });
    
    //                     // Remove the 'isOpenMenu' class from the HTML tag
    //                     document.documentElement.classList.remove('isOpenMenu');
    //                 }
    //             });
    
    //             // Remove hover class on mouseleave
    //             title.addEventListener('mouseleave', function() {
    //                 title.classList.remove('hover');
    //             });
    //         });
    
    //         dropdownTitles.forEach(function(title) {
    //             var dropdownMenu = title.nextElementSibling;
    
    //             // Add 'mouseenter' event for dropdownTitles
    //             title.addEventListener('mouseenter', function() {
    //                 // Remove 'show' class from all titles and dropdownMenus
    //                 dropdownTitles.forEach(function(title) {
    //                     title.classList.remove('show');
    //                     if (title.nextElementSibling) {
    //                         title.nextElementSibling.classList.remove('show');
    //                     }
    //                 });
    
    //                 // Add 'show' class to the current title and dropdownMenu
    //                 this.classList.add('show');
    //                 dropdownMenu.classList.add('show');
    //                 document.documentElement.classList.add('isOpenMenu');
    //             });
    
    //             // Add 'mouseleave' event for dropdownTitles
    //             title.addEventListener('mouseleave', function(event) {
    //                 var toElement = event.toElement || event.relatedTarget;
    //                 if (!toElement || (!title.contains(toElement) && !dropdownMenu.contains(toElement))) {
    //                     dropdownMenu.classList.remove('show');
    
    //                     // Check if any submenu is still open, if not, remove 'isOpenMenu' class
    //                     var anyMenuOpen = Array.from(dropdownTitles).some(function(title) {
    //                         return title.classList.contains('show');
    //                     });
    //                     if (!anyMenuOpen) {
    //                         document.documentElement.classList.remove('isOpenMenu');
    //                     }
    //                 }
    //             });
    //         });
    
    //         // Add 'mouseleave' event for navbar to hide dropdown menus when mouse leaves navbar
    //         navbar.addEventListener('mouseleave', function() {
    //             dropdownTitles.forEach(function(title) {
    //                 var dropdownMenu = title.nextElementSibling;
    //                 dropdownMenu.classList.remove('show');
    //                 title.classList.remove('show');
    //             });
    //             document.documentElement.classList.remove('isOpenMenu');
    //         });
    
    //         // Add 'mouseenter' and 'mouseleave' events for mega-dropdown-menu to keep dropdown menu visible when hovering over it
    //         megaDropdownMenus.forEach(function(menu) {
    //             menu.addEventListener('mouseenter', function() {
    //                 // Do nothing when mouse enters mega-dropdown-menu
    //             });
    
    //             menu.addEventListener('mouseleave', function(event) {
    //                 var toElement = event.toElement || event.relatedTarget;
    //                 if (!toElement || !navbar.contains(toElement)) {
    //                     menu.classList.remove('show');
    //                     var anyMenuOpen = Array.from(dropdownTitles).some(function(title) {
    //                         return title.classList.contains('show');
    //                     });
    //                     if (!anyMenuOpen) {
    //                         document.documentElement.classList.remove('isOpenMenu');
    //                     }
    //                 }
    //             });
    //         });
    //     } else {
    //         dropdownTitles.forEach(function(title) {
    //             title.addEventListener('click', function(event) {
    //                 event.preventDefault();
    //                 var dropdownMenu = this.nextElementSibling;
    //                 var isOpen = dropdownMenu.classList.contains('show');
    //                 dropdownTitles.forEach(function(title) {
    //                     title.classList.remove('show');
    //                     if (title.nextElementSibling) {
    //                         title.nextElementSibling.classList.remove('show');
    //                     }
    //                 });
    
    //                 // If the clicked menu was not open, open it
    //                 if (!isOpen) {
    //                     this.classList.add('show');
    //                     dropdownMenu.classList.add('show');
    //                     document.documentElement.classList.add('isOpenMenu');
    //                 } else {
    //                     // Remove isOpenMenu class from the HTML tag if no menu is open
    //                     var anyMenuOpen = Array.from(dropdownTitles).some(function(title) {
    //                         return title.nextElementSibling.classList.contains('show');
    //                     });
    //                     if (!anyMenuOpen) {
    //                         document.documentElement.classList.remove('isOpenMenu');
    //                     }
    //                 }
    //             });
    //         });
    //     }


    //     window.addEventListener("resize", function() {
    //         // Kiểm tra lại kích thước của cửa sổ
    //         isLargeScreen = window.innerWidth > 1139;
    
    //         // Xử lý submenu dựa trên kích thước cửa sổ mới
    //         if (isLargeScreen) {
    //             // Xử lý cho màn hình lớn
    //             dropdownTitles.forEach(function(title) {
    //                 // Xóa các class và ẩn dropdown menus khi kích thước lớn hơn 1139
    //                 title.classList.remove('show');
    //                 if (title.nextElementSibling) {
    //                     title.nextElementSibling.classList.remove('show');
    //                 }
    //             });
    //             megaDropdownMenus.forEach(function(menu) {
    //                 menu.classList.remove('show');
    //             });
    //             document.documentElement.classList.remove('isOpenMenu');
    //         } else {
    //             // Xử lý cho màn hình nhỏ hơn hoặc bằng 1139
    //             // Các xử lý bạn đã có trong else của showSubmenu()
    //         }
    //     });

    // }

   
    // // mobile
    // function hamburgerMenu(){
    //     var hamburgerMenu = document.querySelector('.hamburger-menu');
    //     var header = document.getElementById('header');
    //     var navigation = document.querySelector('.navigation');
    //    if(hamburgerMenu){
    //         hamburgerMenu.addEventListener('click', function() {
    //         header.classList.toggle('active-hamburger');
    //         navigation.classList.toggle('show');
    //         document.documentElement.classList.toggle('openHamburger');
    //     });
    //    }
       
    // }
   
    // window.showSubmenu = showSubmenu;
    // window.hamburgerMenu = hamburgerMenu;



    // // Toggle to show and hide navbar menu
    // const navbarMenu = document.getElementById("menu");
    // const burgerMenu = document.getElementById("burger");
    // const htmlTag = document.querySelector("html");


    // burgerMenu.addEventListener("click", () => {
    //     navbarMenu.classList.toggle("is-active");
    //     burgerMenu.classList.toggle("is-active");
    //     htmlTag.classList.toggle("openHamburger", burgerMenu.classList.contains("is-active"));
    // });
    

    // // // Toggle to show and hide dropdown menu
    // const dropdown = document.querySelectorAll(".dropdown");
    
    // dropdown.forEach((item) => {
    // const dropdownToggle = item.querySelector(".dropdown-toggle");

    // dropdownToggle.addEventListener("click", () => {
    //     const dropdownShow = document.querySelector(".dropdown-show");
    //     toggleDropdownItem(item);

    //     // Remove 'dropdown-show' class from other dropdown
    //     if (dropdownShow && dropdownShow != item) {
    //     toggleDropdownItem(dropdownShow);
    //     }
    // });
    // });

    // // Function to display the dropdown menu
    // const toggleDropdownItem = (item) => {
    // const dropdownContent = item.querySelector(".dropdown-content");

    // // Remove other dropdown that have 'dropdown-show' class
    // if (item.classList.contains(".dropdown")) {
    //     // dropdownContent.removeAttribute("style");
    //     item.classList.remove("dropdown-show");
    // } else {
    //     // Added max-height on active 'dropdown-show' class
    //     dropdownContent.style.height = dropdownContent.scrollHeight + "px";
    //     item.classList.add("dropdown-show");
    // }
    // };

    // // Fixed dropdown menu on window resizing
    // window.addEventListener("resize", () => {
    // if (window.innerWidth > 1139) {
    //     document.querySelectorAll(".dropdown-content").forEach((item) => {
    //     item.removeAttribute("style");
    //     });
    //     dropdown.forEach((item) => {
    //     item.classList.remove("dropdown-show");
    //     });
    // }
    // });

    // // Fixed navbar menu on window resizing
    // window.addEventListener("resize", () => {
    // if (window.innerWidth > 1139) {
    //     if (navbarMenu.classList.contains("is-active")) {
    //     navbarMenu.classList.remove("is-active");
    //     burgerMenu.classList.remove("is-active");
    //     htmlTag.classList.remove("openHamburger");
    //     }
    // }
    // });

    // // Toggle to show and hide navbar menu
    // const navbarMenu = document.getElementById("menu");
    // const burgerMenu = document.getElementById("burger");
    // const htmlTag = document.querySelector("html");

    // burgerMenu.addEventListener("click", () => {
    //     navbarMenu.classList.toggle("is-active");
    //     burgerMenu.classList.toggle("is-active");
    //     htmlTag.classList.toggle("openHamburger", burgerMenu.classList.contains("is-active"));
    // });

    // // Toggle to show and hide dropdown menu
    // const dropdown = document.querySelectorAll(".dropdown");

    // dropdown.forEach((item) => {
    //     const dropdownToggle = item.querySelector(".dropdown-toggle");

    //     dropdownToggle.addEventListener("click", () => {
    //         const dropdownShow = document.querySelector(".dropdown-show");
    //         // Close any other open dropdowns
    //         if (dropdownShow && dropdownShow !== item) {
    //             toggleDropdownItem(dropdownShow);
    //         }
    //         toggleDropdownItem(item);
    //     });
    // });

    // // Function to display the dropdown menu
    // const toggleDropdownItem = (item) => {
    //     const dropdownContent = item.querySelector(".dropdown-content");

    //     if (item.classList.contains("dropdown-show")) {
    //         dropdownContent.style.height = null;
    //         item.classList.remove("dropdown-show");
    //     } else {
    //         dropdownContent.style.height = dropdownContent.scrollHeight + "px";
    //         item.classList.add("dropdown-show");
    //     }
    // };

    // // Fixed dropdown menu on window resizing
    // window.addEventListener("resize", () => {
    //     if (window.innerWidth > 1139) {
    //         document.querySelectorAll(".dropdown-content").forEach((item) => {
    //             item.removeAttribute("style");
    //         });
    //         dropdown.forEach((item) => {
    //             item.classList.remove("dropdown-show");
    //         });
    //     }
    // });

    // // Fixed navbar menu on window resizing
    // window.addEventListener("resize", () => {
    //     if (window.innerWidth > 1139) {
    //         if (navbarMenu.classList.contains("is-active")) {
    //             navbarMenu.classList.remove("is-active");
    //             burgerMenu.classList.remove("is-active");
    //             htmlTag.classList.remove("openHamburger");
    //         }
    //     }
    // });


    // Toggle to show and hide navbar menu
    function toggleMenu() {
        const navbarMenu = document.getElementById("menu");
        const burgerMenu = document.getElementById("burger");
        const htmlTag = document.querySelector("html");
        
        if (burgerMenu && navbarMenu && htmlTag) {
            burgerMenu.addEventListener("click", () => {
                const isActive = burgerMenu.classList.toggle("is-active");
                navbarMenu.classList.toggle("is-active", isActive);
                htmlTag.classList.toggle("openHamburger", isActive);
            });
        }
        
        // Toggle to show and hide dropdown menu
        const dropdowns = document.querySelectorAll(".dropdown");
        
        if (dropdowns) {
            dropdowns.forEach((item) => {
                const dropdownToggle = item.querySelector(".dropdown-toggle");
        
                if (dropdownToggle) {
                    dropdownToggle.addEventListener("click", () => {
                        const dropdownShow = document.querySelector(".dropdown-show");
                        // Close any other open dropdowns
                        if (dropdownShow && dropdownShow !== item) {
                            toggleDropdownItem(dropdownShow);
                        }
                        toggleDropdownItem(item);
                    });
                }
            });
        }
        
        // Function to display the dropdown menu
        const toggleDropdownItem = (item) => {
            const dropdownContent = item.querySelector(".dropdown-content");
        
            if (dropdownContent) {
                if (item.classList.contains("dropdown-show")) {
                    dropdownContent.style.height = null;
                    item.classList.remove("dropdown-show");
                } else {
                    dropdownContent.style.height = dropdownContent.scrollHeight + "px";
                    item.classList.add("dropdown-show");
                }
            }
        };
        
        // Fixed dropdown and navbar menu on window resizing
        window.addEventListener("resize", () => {
            if (window.innerWidth > 1139) {
                document.querySelectorAll(".dropdown-content").forEach((item) => {
                    item.removeAttribute("style");
                });
                dropdowns.forEach((item) => {
                    item.classList.remove("dropdown-show");
                });
        
                if (navbarMenu && burgerMenu && htmlTag) {
                    if (navbarMenu.classList.contains("is-active")) {
                        navbarMenu.classList.remove("is-active");
                        burgerMenu.classList.remove("is-active");
                        htmlTag.classList.remove("openHamburger");
                    }
                }
            }
        });

        // Desktop dropdown hover stability helper
        function initDropdownHoverStability() {
            if (window.innerWidth <= 1139) return;
            const dropdowns = document.querySelectorAll("header .dropdown");
            let activeTimer = null;

            dropdowns.forEach((dropdown) => {
                dropdown.addEventListener("mouseenter", () => {
                    if (activeTimer) {
                        clearTimeout(activeTimer);
                        activeTimer = null;
                    }
                    dropdowns.forEach(d => {
                        if (d !== dropdown) d.classList.remove("is-hovered");
                    });
                    dropdown.classList.add("is-hovered");
                });

                dropdown.addEventListener("mouseleave", (e) => {
                    const toEl = e.relatedTarget;
                    if (toEl && dropdown.contains(toEl)) return;
                    activeTimer = setTimeout(() => {
                        dropdown.classList.remove("is-hovered");
                    }, 240);
                });
            });

            const header = document.getElementById("header");
            if (header) {
                header.addEventListener("mouseleave", () => {
                    if (activeTimer) clearTimeout(activeTimer);
                    activeTimer = setTimeout(() => {
                        dropdowns.forEach(d => d.classList.remove("is-hovered"));
                    }, 180);
                });
            }
        }
        initDropdownHoverStability();

        // Top Gradient Line animation on nav item hover
        const headerEl = document.querySelector('header.header') || document.querySelector('header') || document.getElementById('header');
        if (headerEl && !headerEl._lineAnimBound) {
            headerEl._lineAnimBound = true;
            const navItems = headerEl.querySelectorAll('.level1');
            let toggleFill = false;
            navItems.forEach(item => {
                item.addEventListener('mouseenter', function () {
                    toggleFill = !toggleFill;
                    if (toggleFill) {
                        headerEl.classList.remove('line-fill-b');
                        headerEl.classList.add('line-fill-a');
                    } else {
                        headerEl.classList.remove('line-fill-a');
                        headerEl.classList.add('line-fill-b');
                    }
                });
            });
        }
    }

    window.toggleMenu = toggleMenu;
})();
document.addEventListener("DOMContentLoaded", function () {
    toggleMenu();
});
document.addEventListener("headerLoaded", function () {
    if (typeof window.toggleMenu === 'function') {
        window.toggleMenu();
    }
});