//Images
import karin from "../images/karin.jpg";
import sagat from "../images/sagat.jpg";
import chun from "../images/chun.jpg";
import blanka from "../images/blanka.jpg";

const character = {
  display: "flex",
  alignItems: "center",
  border: "1px solid rgb(228, 225, 225)",
  fontSize: 14,
  background: "white",
};

const characterText = {
  fontStyle: "italic",
  wordWrap: "break-word",
  display: "flex",
  alignItems: "center",
  padding: "20px 30px",
  fontSize: 22,
  fontWeight: 600,
};
const imgage = {
  height: 175,
  width: 175,
};

const flipImage = {
  transform: "scaleX(-1)",
};

export default function Characters() {
  return (
    <div
      style={{ maxWidth: 900 }}
      className="grid md:grid-cols-2 gap-4 mb-28 mx-auto"
    >
      <div style={character}>
        <div style={characterText}>
          "No redux, no reducers and minimal boilerplate"
        </div>
        <img alt="Karin" style={imgage} src={karin} />
      </div>
      <div style={character}>
        <div style={characterText}>
          "Quickly create your own stores as basic objects"
        </div>
        <img alt="Sagat" style={imgage} src={sagat} />
      </div>
      <div style={character}>
        <img alt="Chun Li" style={{ ...imgage, ...flipImage }} src={chun} />
        <div style={characterText}>
          "All asynchronous actions will get wrapped with a pending and errors
          state"
        </div>
      </div>
      <div style={character}>
        <img alt="Blanka" style={{ ...imgage, ...flipImage }} src={blanka} />
        <div style={characterText}>
          "Access actions and state with one simple hook"
        </div>
      </div>
    </div>
  );
}
