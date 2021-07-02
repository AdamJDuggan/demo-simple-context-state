import TextBlock from "./TextBlock";

export default function Description() {
  return (
    <TextBlock title="Description">
      <div className="mb-4">
        Enables quick setup and easy management of state in react applications.
      </div>
      <div className="mb-4">
        Provides an in-build Errors store and Pending store (stores being blocks
        of state) which interact with the stores you create.
      </div>
      <div className="mb-4">
        Uses Reacts Context API and does not rely on any third parties
        dependencies.
      </div>
    </TextBlock>
  );
}
