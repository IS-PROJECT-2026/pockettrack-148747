# Project Submission Report

## 1. Student Details

**Full Name:** Herway Edwins  
**GitHub Username:** HerwayEdwins  
herway.ochieng@strathmore.edu

---

## 2. Deployed Project Link

**Live GitHub Pages URL:**  
https://is-project-2026.github.io/pockettrack-148747/

---

## 3. Reflection — Grounded in Your Git History

### A. Best Commit

**Commit:** `d9a09db` — `feat: implement expense creation`

**Link:** https://github.com/IS-PROJECT-2026/pockettrack-148747/commit/d9a09dbb7fc69a4c179e5cee57c0fd517325d646

I chose this as my best commit because it added one of pocketTrack’s main features: creating expenses from user input. It was the point where the app started becoming a functional expense tracker instead of just an interface.

I’m also proud of it because later features like expense history, filtering, deletion, localStorage, and spending totals were all built around this functionality.

### B. A Mistake or Struggle


**Commit:** `19aec68` — `fix: resolve dashboard tagline conflict`

**Link to the evidence:**  https://github.com/IS-PROJECT-2026/pockettrack-148747/commit/19aec68c216d545e5558e599930011b3186c9314

One of my main struggles was resolving a merge conflict where two branches changed the same dashboard tagline in index.html.

Git couldn’t decide which version to keep, so I resolved it manually by combining both ideas into: “Take control of your spending and build better habits.”

This helped me understand how merge conflicts happen and how to resolve them properly.


### C. PR You're Proud Of

**Pull Request:** #29 — `fix/11-form-validation`

**Link:** https://github.com/IS-PROJECT-2026/pockettrack-148747/commit/b4e550b6635c9a0cb26a1e37acdfcd31fe4fcd3f

One of the main struggles I encountered was resolving a merge conflict caused by two branches modifying the same dashboard tagline in `index.html`.

When I merged the latest changes from `main`, Git could not automatically determine which version of the tagline should be kept. I inspected the conflicting changes and resolved the conflict manually by combining the intention of both versions into the final tagline: "Take control of your spending and build better habits."

This taught me how Git handles competing changes, how to identify and resolve conflict markers, and why keeping branches up to date with `main` is important when multiple changes affect the same part of a file.

### D. One Workflow Improvement

**Pull Request:** #29 — `fix/11-form-validation`

**Link:** https://github.com/IS-PROJECT-2026/pockettrack-148747/commit/b4e550b6635c9a0cb26a1e37acdfcd31fe4fcd3f

One workflow practice that improved my development process was using an issue-driven feature branch and pull request workflow instead of making changes directly on `main`.

For the form validation work, I tracked the task as Issue #11, created the dedicated `fix/11-form-validation` branch, implemented and committed the changes there, and then opened Pull Request #29 to review and merge the work into `main`.



---

## 4. Screenshots of Key GitHub Features



### A. Milestones and Issues

<img width="1438" height="687" alt="image" src="https://github.com/user-attachments/assets/3895685b-6955-47ec-8c58-8a530351a77a" />

<img width="1312" height="791" alt="Screenshot 2026-08-16 at 21 24 38" src="https://github.com/user-attachments/assets/95bd5665-419d-4188-867c-048365c111b4" />

**Caption:** PocketTrack was divided into three milestones containing granular issues that tracked the project from foundation through deployment and submission.

### B. Project Board

[PASTE SCREENSHOT DIRECTLY HERE USING GITHUB WEB EDITOR]
<img width="1430" height="751" alt="image" src="https://github.com/user-attachments/assets/871228a2-1ce3-49a1-939b-8bcbb0d316a8" />

**Caption:** The project board tracks work dynamically across Todo, In Progress, and Done as development progresses.

### C. Branching Architecture

[PASTE SCREENSHOT DIRECTLY HERE USING GITHUB WEB EDITOR]
<img width="1370" height="772" alt="image" src="https://github.com/user-attachments/assets/1b00ca9e-0c4a-4db4-80ce-a70c47828a23" />


**Caption:** Development was isolated on issue-linked branches using prefixes such as feat/, fix/, style/, docs/, refactor/, and chore/.

### D. Pull Requests & Traceability

[PASTE SCREENSHOT DIRECTLY HERE USING GITHUB WEB EDITOR]
<img width="1396" height="712" alt="image" src="https://github.com/user-attachments/assets/fa43d7b4-9baf-4bb2-8754-8ac90caa6f8a" />

**Caption:** Pull requests reference their related GitHub issues and are reviewed before being merged into the protected main branch.

---

## 5. Merge Conflict Evidence

### Conflict 1 — Full Chronology

**What cause did you use?**  
Same-line content conflict.

#### Step 1: Generating the Clash

[PASTE MERGE ATTEMPT SCREENSHOT DIRECTLY HERE]


<img width="761" height="50" alt="Screenshot 2026-08-16 at 22 13 56" src="https://github.com/user-attachments/assets/16be756c-44e2-4ca2-8554-172152f1677a" />


**Caption:** Two branches independently modified the same PocketTrack dashboard tagline. After one branch was merged into main, merging the updated main branch into the second branch produced a content conflict.

#### Step 2: Inside the Code Editor

[PASTE RAW CONFLICT MARKERS SCREENSHOT DIRECTLY HERE]
<img width="862" height="127" alt="Screenshot 2026-08-16 at 21 19 42" src="https://github.com/user-attachments/assets/53904deb-3d40-46f5-b6f3-2f9222e4b465" />

**Caption:** Git displayed competing versions of the dashboard tagline between `<<<<<<< HEAD`, `=======`, and `>>>>>>> origin/main`. The final wording combined the intent of both versions.

#### Step 3: Resolution & Clean Merge

[PASTE CLEAN MERGED PR SCREENSHOT DIRECTLY HERE]

**Caption:** The conflict markers were removed, the final tagline was tested, committed, pushed, and successfully merged into main through a pull request.

---

### Conflict 2 — Different Cause

**What cause did you use?**  
Competing edits to the same CSS content region.

**Why does this cause trigger a conflict?**  
One branch removed the legacy placeholder styling while another independently modified that same styling. Git could not automatically determine whether the modified block should remain or be removed.

[PASTE CONFLICT 2 SCREENSHOT DIRECTLY HERE]
<img width="928" height="749" alt="Screenshot 2026-08-16 at 21 18 00" src="https://github.com/user-attachments/assets/06aa5032-9393-42eb-be5a-b80409556f7b" />

**Caption:** The conflict occurred in `css/styles.css` between the modified placeholder styles and the version where the block had been removed.

---

### Conflict 3 — Different Cause

**What cause did you use?**  
File-level modify/delete conflict.

**Why does this cause trigger a conflict?**  
One branch deleted `assets/images/.gitkeep` while another branch modified the same file. Git could not automatically decide whether the file should remain with the new content or stay deleted.

[PASTE CONFLICT 3 SCREENSHOT DIRECTLY HERE]
<img width="913" height="634" alt="Screenshot 2026-08-16 at 21 57 57" src="https://github.com/user-attachments/assets/ad3d4eaa-245e-43b3-a3ce-0c4ae69e2ab5" />

**Caption:** Git reported a modify/delete conflict for `assets/images/.gitkeep`, and the conflict was resolved by keeping the file deleted.

---

## 6. Feedback & Evaluation

Aicha was Great! 5/5!
