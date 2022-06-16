import TextBlock from "./TextBlock";

export default function Description() {
  return (
    <TextBlock title="Description">
      <div className="mb-4">
        Enables quick setup and easy management of state in React applications.
      </div>
      <div className="mb-4">
        Provides an inbuilt Errors store and Pending store (stores being blocks
        of state) which interact with the stores you create.
      </div>
      <div className="mb-4">
        Uses React's internal Context API and does not rely on any third party
        dependencies.
      </div>
    </TextBlock>
  );
}
