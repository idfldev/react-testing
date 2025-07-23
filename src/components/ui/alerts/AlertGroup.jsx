import React from 'react'
import AlertSection from './AlertSection'
import AlertBase from './AlertBase'
import AlertButton from '../buttons/PreviewRevertButton'

const AlertGroup = () => {
   return (
      <>
         <h3 className="text-xl font-semibold ml-10">✅ Base Alerts</h3>
         <div className='flex justify-center items-center'>
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
                  customStyles={"bg-gray-800 text-white border-1 border-white-300 rounded-lg"}
               />
            </AlertSection>
         </div>
         <h3 className="text-xl font-semibold ml-10">✅ Base with actions</h3>
         <div className='flex justify-center items-center'>
            <AlertSection>
               <AlertBase
                  dismissAction={() => console.log("Alert dismissed")}
                  title="Changes saved"
                  notificationString="Your product changes have been saved."
                  customStyles={"bg-white"}
                  // Children={<PreviewRevertButton />}
               />
            </AlertSection>

            <AlertSection bg="bg-black">
               <AlertBase
                  dismissAction={() => console.log("Alert dismissed")}
                  title="Changes saved"
                  notificationString="Your product changes have been saved."
                  dismissStyles="text-gray-600 hover:text-gray-300"
                  notificationStyles="text-white"
                  customStyles={"bg-gray-800 text-white border-1 border-white-300 rounded-lg"}
               />
            </AlertSection>
         </div>
      </>
   )
}


export default AlertGroup
