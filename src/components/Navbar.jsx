import React from "react";

const Navbar = () => (
  <header>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      xmlns:xlink="http://www.w3.org/1999/xlink"
      width="306"
      height="52"
      viewBox="0 0 306 52"
    >
      <defs>
        <pattern
          id="pattern"
          preserveAspectRatio="none"
          width="100%"
          height="100%"
          viewBox="0 0 353 60"
        >
          <image
            width="353"
            height="60"
            xlink:href="data:image/png;base64,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"
          />
        </pattern>
      </defs>
      <rect
        id="Imagen_1"
        data-name="Imagen 1"
        width="306"
        height="52"
        fill="url(#pattern)"
      />
    </svg>

    <h1>Hola mundo</h1>
  </header>
);

export default Navbar;
