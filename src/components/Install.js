import { useState } from "react";
// 3rd Partt
import { CopyToClipboard } from "react-copy-to-clipboard";
import TextBlock from "./TextBlock";

export default function Heading() {
  const [copied, setCopied] = useState(false);
  const copyText = "npm install simple-context-state";

  const onCopy = () => {
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };
  return (
    <TextBlock title="Install">
      <div className="text-xl mb-6">
        <div className="mb-4">Avalible via NPM</div>
        <CopyToClipboard text={copyText} onCopy={onCopy}>
          <div className="cursor-pointer">
            <div
              style={{ color: copied ? "#3273dc" : " #00d1b2" }}
              className="is-size-5"
            >
              {copyText}
            </div>

            <div style={{ color: "#23d160", minHeight: 28 }}>
              {copied && (
                <>
                  Copied to clipboard <i className="fas fa-check" />
                </>
              )}
            </div>
          </div>
        </CopyToClipboard>
      </div>
    </TextBlock>
  );
}
