import React from "react";
import AlertSection from "./AlertSection";
import AlertBase from "./AlertBase";
import AlertNotify from "./AlertNotify";
import PreviewRevertButton from "../buttons/PreviewRevertButton";
import Button from "../buttons/Button";
import {
  ErrorIcon,
  WarningIcon,
  InfoIcon,
  SuccessIcon,
  NetworkIcon,
  SecurityIcon,
  UpdateIcon,
} from "../icons/MyIconSVG";

const AlertGroup = () => {
  const previewHandleClick = () => {
    console.log("onPreviewClick");
  };
  const revertHandleClick = () => {
    console.log("onRevertClick");
  };
  const previewStyle =
    "bg-gray border-1 border-gray-200 text-white hover:bg-gray-600";
  const revertStyle =
    "text-gray-500 px-4 py-2 rounded-lg transition-all hover:text-white";

  const notifyIcon = () => {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="size-5 text-red-900"
      >
        <path
          fill-rule="evenodd"
          d="M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
          clip-rule="evenodd"
        />
      </svg>
    );
  };
  const bgInfo = {
    backgroundColor: "#1890FF",
  };
  return (
    <>
      <h3 className="text-xl font-semibold ml-10">✅ Base Alerts</h3>
      <div className="flex justify-center items-center">
        <AlertSection>
          <AlertBase
            dismissAction={() => console.log("Alert dismissed")}
            title="Changes saved"
            notificationString="Your product changes have been saved."
            customStyles={"bg-white"}
          />
        </AlertSection>

        <AlertSection bg="bg-black">
          <AlertBase
            dismissAction={() => console.log("Alert dismissed")}
            title="Changes saved"
            notificationString="Your product changes have been saved."
            dismissStyles="text-gray-600 hover:text-gray-300"
            notificationStyles="text-white"
            customStyles={
              "bg-gray-800 text-white border-1 border-white-300 rounded-lg"
            }
          />
        </AlertSection>
      </div>

      <h3 className="text-xl font-semibold ml-10">✅ Base with actions</h3>
      <div className="flex justify-center items-center">
        <AlertSection>
          <AlertBase
            dismissAction={() => console.log("Alert dismissed")}
            title="Changes saved"
            notificationString="Your product changes have been saved."
            customStyles={"bg-white"}
            // PreviewRevertButton
            Children={
              <PreviewRevertButton
                onPreviewClick={previewHandleClick}
                onRevertClick={revertHandleClick}
              />
            }
          />
        </AlertSection>
        {/* ================================= */}
        <AlertSection bg="bg-black">
          <AlertBase
            dismissAction={() => console.log("Alert dismissed")}
            title="Changes saved"
            notificationString="Your product changes have been saved."
            dismissStyles="text-gray-600 hover:text-gray-300"
            notificationStyles="text-white"
            customStyles={
              "bg-gray-800 text-white border-1 border-white-300 rounded-lg"
            }
            Children={
              <div className="flex m-auto mb-2 pl-10 space-x-2">
                <Button customClass={previewStyle} text="Preview" />
                <Button customClass={revertStyle} text="Revert" />
              </div>
            }
          />
        </AlertSection>
      </div>

      <h3 className="text-xl font-semibold ml-10">✅ Standout && Info</h3>
      <div className="flex justify-center items-center">
        <AlertSection>
          <AlertNotify
            icons={notifyIcon()}
            classnameCard="bg-red-100 border-l-6 border-red-800"
            classnameText="text-red-800 mt-2"
            title="Something went wrong"
            text="Something went wrong. The environment variables have not been updated correctly. Please close and reopen your shell or run 'refreshenv' in PowerShell to apply the changes."
          />
        </AlertSection>

        <AlertSection>
          <AlertNotify
            classnameCard=" border-l-6 border-blue-600"
            classnameTitle="text-blue-800"
            classnameText="text-blue-500 mt-2"
            icons={<InfoIcon />}
            title="Info Alert"
            text="Thông báo thông tin quan trọng nhưng không phải lỗi."
          />
        </AlertSection>
      </div>
    </>
  );
};

export default AlertGroup;
