$(document).ready(() => {
  // Define the sidebar buttons
  const aboutMeButton = $("#aboutMeButton");
  const personInfoButton = $("#personInfoButton");
  const educationButton = $("#educationButton");
  const competenceSummaryButton = $("#competenceSummaryButton");
  const moreActivitiesButton = $("#moreActivitiesButton");
  const workExperienceButton = $("#workExperienceButton");
  const projectsButton = $("#projectsButton");

  aboutMeButton.click(() => menuButtonOnClick("aboutMeButton", "aboutMeDiv"));
  personInfoButton.click(() =>
    menuButtonOnClick("personInfoButton", "personalInformationDiv")
  );
  educationButton.click(() =>
    menuButtonOnClick("educationButton", "educationDiv")
  );
  competenceSummaryButton.click(() =>
    menuButtonOnClick("competenceSummaryButton", "competenceSummaryDiv")
  );
  moreActivitiesButton.click(() =>
    menuButtonOnClick("moreActivitiesButton", "moreActivitiesDiv")
  );
  workExperienceButton.click(() =>
    menuButtonOnClick("workExperienceButton", "workExperienceDiv")
  );
  projectsButton.click(() =>
    menuButtonOnClick("projectsButton", "projectsDiv")
  );

  const allSidebarButtons = [
    aboutMeButton,
    personInfoButton,
    educationButton,
    competenceSummaryButton,
    moreActivitiesButton,
    workExperienceButton,
    projectsButton,
  ];

  // Define the divs
  const aboutMeDiv = $("#aboutMeDiv");
  const personalInformationDiv = $("#personalInformationDiv");
  const educationDiv = $("#educationDiv");
  const competenceSummaryDiv = $("#competenceSummaryDiv");
  const moreActivitiesDiv = $("#moreActivitiesDiv");
  const workExperienceDiv = $("#workExperienceDiv");
  const projectsDiv = $("#projectsDiv");

  const allDivs = [
    aboutMeDiv,
    personalInformationDiv,
    educationDiv,
    competenceSummaryDiv,
    moreActivitiesDiv,
    workExperienceDiv,
  ];

  function showDivId(id) {
    allDivs.forEach((div) => {
      //  If is the selected div remove the Hidden class
      if (div.attr("id") === id) {
        div.removeClass("Hidden");
      } else {
        // else add the class if not exist in classes.
        if (div.attr("class") === "Hidden") {
          return;
        }
        div.addClass("Hidden");
      }
    });
  }

  function selectButton(id) {
    allSidebarButtons.forEach((button) => {
      //  If is the selected button set the SelectedMenuItem class
      if (button.attr("id") === id) {
        button.removeClass("MenuItem");
        button.addClass("SelectedMenuItem");
      } else {
        button.removeClass("SelectedMenuItem");
        button.addClass("MenuItem");
      }
    });
  }

  function menuButtonOnClick(buttonId, divId) {
    selectButton(buttonId);
    showDivId(divId);
  }
});
