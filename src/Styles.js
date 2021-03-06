import styled, { css } from "styled-components";

const btn = (light, dark) => css`
  /* white-space: nowrap; */
  /* display: inline-block; */
  width: 100%;
  height: 50px;
  border-radius: 5px;
  /* background: #ffad54; */
  background: #0b9bab;
  padding: 5px 5px;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 15px;
  letter-spacing: 0.5px;
  font-weight: 500;

  box-shadow: 3px 10px 20px 0px rgba(35, 100, 210, 0.3);
  margin-top: 20px;
  color: white;
  &:visited {
    color: white;
  }
  background-image: linear-gradient(${light}, ${dark});
  border: 0px solid ${dark};
  &:hover {
    background-image: linear-gradient(${light}, ${dark});
    &[disabled] {
      background-image: linear-gradient(${light}, ${dark});
    }
  }
  &:visited {
    color: black;
  }
  &[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const btnDefault = css`
  ${btn("#ffffff", "#d5d5d5")} color: #555;
`;

const btnPrimary = btn("#2364d2");
const btnDanger = btn("#e27c79");

export default styled.div`
  font-family: sans-serif;

  h1 {
    text-align: center;
    color: #089bab;
    font-weight: 400;
    font-family: "Source Sans Pro", sans-serif;
  }

  h2 {
    text-align: center;
    color: #222;
  }

  h3 {
    text-align: center;
    color: #888c96;
    font-weight: 500;
    font-size: 14px;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-family: "Source Sans Pro", sans-serif;
  }

  & > div {
    text-align: center;
  }

  a {
    display: block;
    text-align: center;
    color: #089bab;
    margin-bottom: 10px;
  }

  p {
    max-width: 500px;
    margin: 10px auto;
    & > a {
      display: inline;
    }
  }

  .loading {
    font-size: 2em;
    font-weight: bold;
    text-align: center;
    margin: 50px;
  }

  form,
  div.form {
    background: #fff;
    text-align: left;
    max-width: 560px;
    margin: 50px auto;
    padding: 35px;
    box-shadow: 3px 13px 30px 0px rgba(21, 34, 67, 0.2);
    border-radius: 10px;
    /* position: relative; */
    /* border: 1px solid #ccc;*/

    & > div {
      display: flex;
      flex-flow: row nowrap;
      line-height: 2em;
      position: relative;
      padding: 8px 40px;
      border: 1px solid transparent;
      &.active {
        background-color: paleturquoise;
        border-color: turquoise;
      }
      & > label {
        color: #333;
        width: 110px;
        min-width: 60px;
        font-size: 1em;
        line-height: 32px;
      }
      & > input,
      & > .downshift > input,
      & > select,
      & > textarea {
        flex: 1;
        padding: 14px 9px;
        font-size: 0.8em;
        margin-left: 15px;
        border: 1px solid #ced6e0;
        border-radius: 5px;
        opactiy: 1;
        &[disabled] {
          background: #eee;
        }
      }
      & > input[type="checkbox"] {
        margin-top: 7px;
      }
      & > div {
        margin-left: 16px;
        & > label {
          margin-left: 0;
          display: block;
          & > input {
            margin-right: 3px;
          }
        }
        &.downshift {
          margin-left: 0;
          padding-left: 15px;
          flex: 1;
          & > input {
            width: 100%;
            padding: 6px 5px;
            font-size: 1em;
            margin-left: 0;
            border: 1px solid #ccc;
            border-radius: 3px;
          }
        }
      }
      & > span {
        line-height: 32px;
        margin-left: 10px;
        color: #800;
        font-weight: bold;
      }
      & > button.remove {
        ${btnDanger};
      }
    }
    & > .buttons {
      display: flex;
      flex-flow: row nowrap;
      justify-content: center;
      /* margin-bottom: 20px; */
    }

    .error {
      display: flex;
      font-weight: bold;
      color: #800;
      flex-flow: row nowrap;
      justify-content: center;
    }
    pre {
      position: relative;
      border: 1px solid #ccc;
      background: rgba(0, 0, 0, 0.1);
      box-shadow: inset 1px 1px 3px rgba(0, 0, 0, 0.2);
      padding: 20px;
    }
    .submitting {
      display: block;
      position: absolute;
      top: -5px;
      left: -5px;
      right: -5px;
      padding: 0;
      text-align: center;
      background: rgba(0, 0, 0, 0.4);
      color: white;
      z-index: 10;
      font-weight: bold;
      font-size: 0.8em;
    }
    .saving {
      font-size: 0.8em;
      font-weight: bold;
      color: darkblue;
      margin: 8px 0 0 7px;
    }
  }
  button {
    background: darkblue;
    margin: 0 10px;
    &[type="submit"] {
      ${btnPrimary};
    }
    &[type="button"] {
      ${btnDefault};
    }
  }
  .downshift-options {
    border: 1px solid #ddd;
    box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
    & > div {
      padding: 3px 5px;
    }
  }
`;
