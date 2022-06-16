import React from "react";
import TextBlock from "./TextBlock";

export default function API() {
  return (
    <TextBlock title="API">
      <div className="mb-6">
        Simple-context-state exposes a provider and three hooks:
      </div>
      <table class="table-auto text-sm md:text-lg bg-white">
        <tbody>
          <tr>
            <td className="border border-gray-200 p-1 md:p-6 m-2">
              {"<SimpleProvider />"}
            </td>
            <td className="border border-gray-200 p-1 md:p-6">
              Provides state and actions to components.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-1 md:p-6">
              useSimpleState()
            </td>
            <td className="border border-gray-200 p-1 md:p-6">
              Access actions and state from your stores.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-1 md:p-6">
              useSimpleErrors()
            </td>
            <td className="border border-gray-200 p-1 md:p-6">
              Access the inbuilt errors store.
            </td>
          </tr>
          <tr>
            <td className="border border-gray-200 p-1 md:p-6">
              useSimplePending()
            </td>
            <td className="border border-gray-200 p-1 md:p-6">
              Access the inbuilt pending store.
            </td>
          </tr>
        </tbody>
      </table>
    </TextBlock>
  );
}
