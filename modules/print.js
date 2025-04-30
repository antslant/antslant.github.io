const mediaQuery = window.matchMedia("print");

mediaQuery.addEventListener("change", async (e) => {
  if (
    e.matches &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1")
  ) {
    try {
      const { addContactDetails } = await import("./addContactDetails.js");

      addContactDetails();
    } catch (error) {
      console.error("Failed to load addContactDetails:", error);
    }
  }
});
