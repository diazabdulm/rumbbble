import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Inter', sans-serif;
    color: #0d0c22;
  }

  .btn {
    padding: 10px 16px;
    border-radius: 8px;
    border: none;
    font-weight: 500;
  }

  .btn-primary {
    background-color: #ea4c89;
  }

  .btn-primary:hover, .btn-primary:focus, .btn-primary.focus {
    background-color: #f082ac;
    box-shadow: none;
  }

  .btn-primary:not(:disabled):not(.disabled).active:focus, .btn-primary:not(:disabled):not(.disabled):active:focus, .show>.btn-primary.dropdown-toggle:focus {
    box-shadow: none;
  }

  .btn-primary:not(:disabled):not(.disabled).active, .btn-primary:not(:disabled):not(.disabled):active, .show>.btn-primary.dropdown-toggle {
    background-color: #bb3d6e;
    outline: none;
    box-shadow: none;
  }

  ::selection {
    color: #fff;
    color: rgba(255,255,255,0.85);
    background: #ea4c89;
  }

  .card-img-overlay {
    padding: 0.2rem 1.15rem;
  }

  .dropdown-menu {
    border-radius: 8px;
    border: none;
    box-shadow: 0px 10px 50px rgba(0,0,0,0.1);
    padding: 30px 0;
    width: 245px;
  }

  .dropdown-item {
    padding: 7px 32px;
    color: #6e6d7a;
  }

  .navbar {
    height: 80px;
  }

  hr {
    border-top: 2px solid #f3f3f4;
  }

  .font-weight-bold {
    font-weight: 600!important;
  }
`;
