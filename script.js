      +var vision = document.querySelector(".vision");

      var vision_btn = document.querySelector(".vision_btn");

      var mission = document.querySelector(".mission");

      var mission_btn = document.querySelector(".mission_btn");

      var profile = document.querySelector(".profile");

      var profile_btn = document.querySelector(".profile_btn");

      var directors = document.querySelector(".directors");

      var directors_btn = document.querySelector(".directors_btn");

      vision_btn.addEventListener("click", () => {
        vision.classList.add("vision");
        mission.classList.remove("mission_display");
        mission.classList.add("mission");
        profile.classList.add("profile");
        profile.classList.remove("profile_display");
        directors.classList.add("directors");
        directors.classList.remove("directors_display");
      });

      mission_btn.addEventListener("click", () => {
        mission.classList.add("mission_display");
        vision.classList.add("vision_remove");
        vision.classList.remove("vision");
        profile.classList.add("profile");
        profile.classList.remove("profile_display");
        directors.classList.add("directors");
        directors.classList.remove("directors_display");
      });

      profile_btn.addEventListener("click", () => {
        profile.classList.add("profile_display");
        mission.classList.remove("mission_display");
        mission.classList.add("mission");
        vision.classList.add("vision_remove");
        vision.classList.remove("vision");
        directors.classList.add("directors");
        directors.classList.remove("directors_display");
      });

      directors_btn.addEventListener("click", () => {
        directors.classList.add("directors_display");
        mission.classList.remove("mission_display");
        mission.classList.add("mission");
        vision.classList.add("vision_remove");
        vision.classList.remove("vision");
        profile.classList.add("profile");
        profile.classList.remove("profile_display");
      });