import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <>
      <nav class="navbar">
        <div class="logo">
          <a href="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 192.756 192.756"
            >
              <g fill-rule="evenodd" clip-rule="evenodd">
                <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
                <path
                  d="M34.699 154.719s7.145-15.717 14.289-18.098c7.145-2.383-9.525 2.857-9.525 2.857s10.478-18.574 42.389-24.768C66.61 109.949 67.087 99.947 70.42 93.279c-3.81 0-8.573 1.429-10.478 2.381s6.668-10.479 24.291-10.479c3.81-.952-8.573-3.334-11.907-3.334 9.525-2.381 22.861-2.857 26.672-1.905 1.904-6.668 5.238-10.954 6.191-12.859.953-1.905 4.287-7.145 13.812-4.287s12.859 4.763 12.859 4.763 6.082 15.718 28.102 20.004c-7.146-6.192-20.957-12.86-20.957-24.291-11.908-6.668-32.387-12.383-35.246-12.383 2.383-.953 2.857 0 3.811-2.382.953-2.381 1.906-22.861-2.381-27.624-2.857 11.431-5.715 15.717-8.573 19.527 0-4.287 1.429-18.575-4.763-22.861-6.668 15.241-9.959 17.104-16.67 23.814-5.239 5.239-9.049 12.383-9.525 13.812-7.144 1.429-26.672 7.145-39.531 18.099 1.905 0 5.715-2.857 6.668-.476-2.381 1.905-8.573 7.621-12.86 11.431-4.287 3.81-10.955 18.575-11.431 21.432 3.334-.951 4.763-.477 8.097-2.381-1.539 6.193-6.597 30.484 18.098 51.439z"
                  fill="#574a79"
                />
                <path
                  d="M113.762 74.704s10.479-.476 13.336 0 4.287.953 5.717 2.858c1.428 1.905 6.191 4.763 6.191 4.763s-8.098 1.429-11.908-.477c-3.809-1.905-3.334-3.334-5.238-4.763s-4.288-1.904-8.098-2.381zM77.088 132.334s12.86-14.764 36.199-14.764c23.338 0 33.338.475 38.102.951s16.395.252 23.338-10.479c5.238-8.096-4.764-12.859-4.764-12.859s2.568-.476 4.764-1.429c4.287 3.811 9.525 3.811 9.525 5.239 0 1.43-2.857 8.098-4.287 9.525-1.428 1.43-6.666 12.859-15.24 14.766-8.572 1.904-24.768 2.381-28.576 2.381-3.811 0-25.244-.477-34.77 13.812-7.345 11.018 7.621 31.434 23.338 34.293-14.289 7.143-80.968-12.859-32.863-45.248-6.192-.475-11.908 2.384-14.766 3.812z"
                  fill="#574a79"
                />
                <path
                  d="M76.136 59.939s4.763-15.241 6.668-17.622c1.905-2.381 6.191-8.573 8.573-14.765.953 5.715-.953 22.385-3.334 25.243-2.857.476-7.621 2.858-11.907 7.144z"
                  fill="#fff"
                />
              </g>
            </svg>
          </a>
        </div>
        <div class="main-navbar">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/news">News</a>
            </li>
            <li>
              <a href="/about-us">AboutUs</a>
            </li>
            <li>
              <a href="/rents">Rents&#9660;</a>
              <ul class="dropdown">
                <li>
                  <a href="/rents#rezidential">Residential &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/rents#garsonierarezidential">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/rents#apartmentrezidential">Apartment</a>
                    </li>
                    <li>
                      <a href="/rents#houserezidential">House</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/rents#comercial">Commercial &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/rents#garsonieracomerial">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/rents#apartmentcomerial">Apartment</a>
                    </li>
                    <li>
                      <a href="/rents#housecomerial">House</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/sells">Sells&#9660;</a>
              <ul class="dropdown">
                <li>
                  <a href="/sells#rezidential">Residential &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/sells#garsonierarezidential">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/sells#apartmentrezidential">Apartment</a>
                    </li>
                    <li>
                      <a href="/sells#houserezidential">House</a>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="/sells#comercial">Commercial &#9658;</a>
                  <ul class="dropdown right-menu">
                    <li>
                      <a href="/sells#garsonieracomerial">Garsoniera</a>
                    </li>
                    <li>
                      <a href="/sells#apartmentcomerial">Apartment</a>
                    </li>
                    <li>
                      <a href="/sells#housecomerial">House</a>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
