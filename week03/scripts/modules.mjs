import byuiCourse from './course.mjs';
import { setSectionSelection } from './sections.mjs';
import { setTitle, renderSections } from './output.mjs';

// Initial page setup
setTitle(byuiCourse);
setSectionSelection(byuiCourse.sections);
renderSections(byuiCourse.sections);

// Enroll student event listener
document.querySelector("#enrollStudent").addEventListener("click", () => {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  if (!sectionNum) return; // Prevent action if no section selected
  byuiCourse.changeEnrollment(sectionNum, true);
  renderSections(byuiCourse.sections);
});

// Drop student event listener
document.querySelector("#dropStudent").addEventListener("click", () => {
  const sectionNum = Number(document.querySelector("#sectionNumber").value);
  if (!sectionNum) return; // Prevent action if no section selected
  byuiCourse.changeEnrollment(sectionNum, false);
  renderSections(byuiCourse.sections);
});