import LibraryController from "./controllers/LibraryController.js";
import { toggleTheme, loadTheme } from "./utils/theme.js";

document.getElementById("toggle-theme").addEventListener("click", toggleTheme);

// Load theme saat halaman pertama kali dimuat
loadTheme();

const libraryController = new LibraryController();
libraryController.init();
