export default function Header() {
  return (
    <div
      style={{ background: "#00d1b2", zIndex: 1 }}
      className="flex content-center  justify-end sticky top-0 text-white font-bold p-4 mb-7 top-0"
    >
      <a
        style={{ marginTop: -4 }}
        href="https://www.npmjs.com/package/super-hooks"
      >
        <i className="fab fa-npm fa-2x"></i>
      </a>
    </div>
  );
}
