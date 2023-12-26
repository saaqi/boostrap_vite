// import styles
import "./css/main.scss";
import "./css/style.scss";

// --- Import only the required components.
// import { Alert } from 'bootstrap';
// import { Button } from 'bootstrap';
// import { Carousel } from "bootstrap";
// import { Collapse } from "bootstrap";
// import { Dropdown } from "bootstrap";
// import { Modal } from "bootstrap";
import { Offcanvas } from "bootstrap";
import { Popover } from "bootstrap";
// import { ScrollSpy } from "bootstrap";
// import { Tab } from "bootstrap";
// import { Toast } from "bootstrap";
// import { Tooltip } from "bootstrap";

document.querySelectorAll('[data-bs-toggle="popover"]').forEach((popover) => {
  new Popover(popover);
});
