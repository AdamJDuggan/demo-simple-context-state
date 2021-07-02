import React from "react";

const Link = (props) => (
  <a
    href={props.url}
    target="_blank"
    rel="noreferrer"
    className="cursor-pointer mr-6"
  >
    <i className={`${props.icon} fa-2x`}></i>
  </a>
);

export default function Footer() {
  return (
    <div className="mt-32 text-center p-4 bg-gray-200 font-bold">
      <div className="mb-2"> Built by Adam Duggan</div>
      <div>
        <Link icon="fab fa-npm" url="https://www.npmjs.com/~adam-duggan" />
        <Link icon="fab fa-github" url="https://github.com/AdamJDuggan" />
        <Link
          icon="fab fa-linkedin"
          url="https://www.linkedin.com/in/adam-duggan-web-developer/"
        />
      </div>
    </div>
  );
}
