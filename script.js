// SIDEBAR
const menuItems = document.querySelectorAll(".menu-item");
// MESSAGES
const notifcation = document.querySelector("#notifications");
const notifyModal = document.querySelector(".notifications-popup");
const messagesNotification = document.querySelector("#messages-notification");
const messages = document.querySelector(".messages");
const message = document.querySelectorAll(".message");
const messageSearch = document.querySelector("#message-search");
//THEME
const theme = document.querySelector("#theme");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll(".choose-size span");
var root = document.querySelector(":root");
const colorPalette = document.querySelectorAll(".choose-color span");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// remove active class from all menu items
const changeActiveItem = () => {
  menuItems.forEach((item) => {
    item.classList.remove("active");
  });
};
//  ================= SIDEBAR ================
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    changeActiveItem();
    item.classList.add("active");
    if (item.id != "notifications") {
      notifyModal.style.display = "none";
    } else {
      document.querySelector(".notifications-popup").style.display = "block";
      document.querySelector(
        "#notifications .notifications-count"
      ).style.display = "none";
    }
  });
});

// ================== MESSAGES =============
// searches chats
const searchMessage = () => {
  const val = messageSearch.value.toLowerCase();
  message.forEach((chat) => {
    let name = chat.querySelector("h5").textContent.toLowerCase();
    if (name.indexOf(val) != -1) {
      chat.style.display = "flex";
    } else {
      chat.style.display = "none";
    }
  });
};
// search chat
messageSearch.addEventListener("keyup", searchMessage);

// highlight messages card when messages menu item is clicked
messagesNotification.addEventListener("click", () => {
  messages.style.boxShadow = "0 0 1rem var(--color-primary)";
  messagesNotification.querySelector(".notifications-count").style.display =
    "none";
  setTimeout(() => {
    messages.style.boxShadow = "none";
  }, 2000);
});

// THEME/DISPLAY CUSTOMIZATIONS

// open-modal-function
const openThemeModal = () => {
  themeModal.style.display = "grid";
};
//  close-modal-function
const closeThemeModal = (e) => {
  if (e.target.classList.contains("customize-theme")) {
    themeModal.style.display = "none";
  }
};
// close event listener
themeModal.addEventListener("click", closeThemeModal);
// open event listener
theme.addEventListener("click", openThemeModal);

//
const removeSizeSelector = () => {
  fontSizes.forEach((size) => {
    size.classList.remove("active");
  });
};
fontSizes.forEach((size) => {
  size.addEventListener("click", () => {
    let fontSize;
    removeSizeSelector();
    size.classList.toggle("active"); // remove an existing from the list and returns false
    if (size.classList.contains("font-size-1")) {
      fontSize = "10px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "5.4rem");
    } else if (size.classList.contains("font-size-2")) {
      fontSize = "13px";
      root.style.setProperty("--sticky-top-left", "5.4rem");
      root.style.setProperty("--sticky-top-right", "-7rem");
    } else if (size.classList.contains("font-size-3")) {
      fontSize = "16px";
      root.style.setProperty("--sticky-top-left", "-2rem");
      root.style.setProperty("--sticky-top-right", "-17rem");
    } else if (size.classList.contains("font-size-4")) {
      fontSize = "19px";
      root.style.setProperty("--sticky-top-left", "-5rem");
      root.style.setProperty("--sticky-top-right", "-25rem");
    } else if (size.classList.contains("font-size-5")) {
      fontSize = "22px";
      root.style.setProperty("--sticky-top-left", "-12rem");
      root.style.setProperty("--sticky-top-right", "-35rem");
    }
    // change font size of the root html element
    document.querySelector("html").style.fontSize = fontSize;
  });
});

// remove active class from colors;
const changeActiveColorClass = () => {
  colorPalette.forEach((colorPicker) => {
    colorPicker.classList.remove("active");
  });
};

// change primary color
colorPalette.forEach((color) => {
  color.addEventListener("click", () => {
    let primaryHue;
    changeActiveColorClass();
    if (color.classList.contains("color-1")) {
      primaryHue = 252;
    } else if (color.classList.contains("color-2")) {
      primaryHue = 52;
    } else if (color.classList.contains("color-3")) {
      primaryHue = 352;
    } else if (color.classList.contains("color-4")) {
      primaryHue = 152;
    } else if (color.classList.contains("color-5")) {
      primaryHue = 202;
    }
    color.classList.add("active");
    root.style.setProperty("--primary-color-hue", primaryHue);
  });
});

// theme background values
let lightcolorlightness;
let whitecolorlightness;
let darkcolorlightness;
// change background function
const changeBG = () => {
  root.style.setProperty("--light-color-lightness", lightcolorlightness);
  root.style.setProperty("--white-color-lightness", whitecolorlightness);
  root.style.setProperty("--dark-color-lightness", darkcolorlightness);
};
Bg1.addEventListener("click", () => {
  // add active class
  Bg1.classList.add("active");
  // remove active class from the others
  Bg2.classList.remove("active");
  Bg3.classList.remove("active");
  // this would remove the customised changes from local storage
  window.location.reload();
});

Bg2.addEventListener("click", () => {
  darkcolorlightness = "95%";
  whitecolorlightness = "20%";
  lightcolorlightness = "15%";

  // add active class
  Bg2.classList.add("active");
  // remove active class from the others
  Bg1.classList.remove("active");
  Bg3.classList.remove("active");
  changeBG();
});

Bg3.addEventListener("click", () => {
  darkcolorlightness = "95%";
  whitecolorlightness = "10%";
  lightcolorlightness = "0%";

  // add active class
  Bg3.classList.add("active");
  // remove active class from the others
  Bg1.classList.remove("active");
  Bg2.classList.remove("active");
  changeBG();
});
// ----------------------- customize setting ---------------------
const setting = document.querySelector("#setting");
const settingModal = document.querySelector(".customize-setting");
// open setting box
const openSettingModal = () => {
  settingModal.style.display = "grid";
  const progressBars = document.querySelectorAll('.column');

for (let progressBar of progressBars) {

    const circle = progressBar.querySelector('.circle');
    const percent = progressBar.querySelector('.percent');
    const progress = progressBar.querySelector('.progress');

    let progressed = 0;

    const startProgress = () => {

        progressed += 1;

        if (progressed <= progressBar.getAttribute('data-percent')) {
            circle.style.top = progressed + '%';
            progress.style.height = progressed + '%';
            percent.innerHTML = progressed + '%';
        }

        requestAnimationFrame(startProgress);

    }

    requestAnimationFrame(startProgress);

}

};
//  close-modal-function
const closeSettingModal = (e) => {
  if (e.target.classList.contains("customize-setting")) {
    settingModal.style.display = "none";
  }
};
// close event listener
settingModal.addEventListener("click", closeSettingModal);
// open event listener
setting.addEventListener("click", openSettingModal);

// ---------------------customize-explore model ----------------------

const explore = document.querySelector("#explore");
const exploreModal = document.querySelector(".customize-explore");
// open setting box
const openExploreModal = () => {
  exploreModal.style.display = "grid";

  // ======================ABHI'S PERSONAL PROGRESS BAR JAVASCRIPT CODE STARTS(ANALYTICS)=================
  const progressBars = document.querySelectorAll('.column');

for (let progressBar of progressBars) {

    const circle = progressBar.querySelector('.circle');
    const percent = progressBar.querySelector('.percent');
    const progress = progressBar.querySelector('.progress');

    let progressed = 0;

    const startProgress = () => {

        progressed += 1;

        if (progressed <= progressBar.getAttribute('data-percent')) {
            circle.style.top = progressed + '%';
            progress.style.height = progressed + '%';
            percent.innerHTML = progressed + '%';
        }

        requestAnimationFrame(startProgress);

    }

    requestAnimationFrame(startProgress);

}

//=================================ABHI"S PERSONAL PROGRESS BAR ENDS(ANALYTICS)======================
};
//  close-modal-function
const closeExploreModal = (e) => {
  if (e.target.classList.contains("customize-explore")) {
    exploreModal.style.display = "none";
  }
};
// close event listener
exploreModal.addEventListener("click", closeExploreModal);
// open event listener
explore.addEventListener("click", openExploreModal);

// ------------------------------ customize-chatbot ------------------

const chatbot = document.querySelector("#chatbot");
const chatbotModal = document.querySelector(".customize-chatbot");
// open setting box
const openChatbotModal = () => {
  chatbotModal.style.display = "grid";
};
//  close-modal-function
const closeChatbotModal = (e) => {
  if (e.target.classList.contains("customize-chatbot")) {
    chatbotModal.style.display = "none";
  }
};
// close event listener
chatbotModal.addEventListener("click", closeChatbotModal);
// open event listener
chatbot.addEventListener("click", openChatbotModal);







// ======================================ABHI'S PROGRESS BAR SECTION========================
// const progressBars = document.querySelectorAll('.column');

// for (let progressBar of progressBars) {

//     const circle = progressBar.querySelector('.circle');
//     const percent = progressBar.querySelector('.percent');
//     const progress = progressBar.querySelector('.progress');

//     let progressed = 0;

//     const startProgress = () => {

//         progressed += 1;

//         if (progressed <= progressBar.getAttribute('data-percent')) {
//             circle.style.top = progressed + '%';
//             progress.style.height = progressed + '%';
//             percent.innerHTML = progressed + '%';
//         }

//         requestAnimationFrame(startProgress);

//     }

//     requestAnimationFrame(startProgress);

// }